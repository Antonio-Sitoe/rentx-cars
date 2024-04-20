import { CategoriesRepositories } from '../../repositories/categoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryuseCase } from './CreateCategoryuseCase'

export const categoryRepository = new CategoriesRepositories()
export const createCategoryUseCase = new CreateCategoryuseCase(
  categoryRepository
)
export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)
