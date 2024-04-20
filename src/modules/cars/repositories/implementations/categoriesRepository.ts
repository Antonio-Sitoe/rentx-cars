import { Category } from '../../model/Category'
import { ICategoryRepository, ICreateCategoryDTO } from '../ICategoryRepository'

export class CategoriesRepositories implements ICategoryRepository {
  private categories: Category[] = []
  private constructor() {
    this.categories = []
  }

  private static INSTANCE: CategoriesRepositories

  public static getInstance() {
    if (!CategoriesRepositories.INSTANCE) {
      CategoriesRepositories.INSTANCE = new CategoriesRepositories()
    }
    return CategoriesRepositories.INSTANCE
  }
  findByname(name: string): Category {
    throw new Error('Method not implemented.')
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category()
    Object.assign(category, { name, description, createdAt: new Date() })
    this.categories.push(category)
  }

  findByName(name: string): Category {
    const category = this.categories.find(cat => cat.name === name)
    return category
  }

  list(): Category[] {
    return this.categories
  }
}
