import fs from 'fs'
import csvParse from 'csv-parse'
import { categoryRepository } from '../createCategory/index'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'

interface IImportCategory {
  name: string
  description: string
}
class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file)
    if (categories) {
      categories?.forEach(async category => {
        const { name, description } = category
        const exist = this.categoryRepository.findByName(name)
        if (!exist) {
          this.categoryRepository.create({ name, description })
        }
      })
    }
  }
  loadCategories(file: Express.Multer.File) {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = []
      const stream = fs.createReadStream(file.path)
      const parseFile = csvParse()
      stream.pipe(parseFile)
      parseFile
        .on('data', async line => {
          console.log({ line })
          const [name, description] = line
          categories.push({
            name,
            description
          })
        })
        .on('end', () => {
          fs.promises.unlink(file.path)
          resolve(categories)
        })
        .on('error', err => {
          reject(err)
        })
    })
  }
}

export { ImportCategoryUseCase }
