import { CategoriesRepositories } from '../../repositories/categoriesRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryuseCase {
  constructor(private categorieRepository: CategoriesRepositories) {
    this.categorieRepository = categorieRepository
  }

  execute({ name, description }: IRequest) {
    const categoryAlreadyExist = this.categorieRepository.findByName(name)

    if (categoryAlreadyExist) {
      throw new Error('Category Already Exist')
    }

    this.categorieRepository.create({ name, description })
  }
}
