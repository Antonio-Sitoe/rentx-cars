import { CategoriesRepositories } from '../../repositories/implementations/categoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryuseCase } from './CreateCategoryuseCase'

export const categoryRepository = CategoriesRepositories.getInstance()
export const createCategoryUseCase = new CreateCategoryuseCase(
  categoryRepository
)
export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)
