import { ImportCategoryController } from './ImportCategoryController'
import { ImportCategoryUseCase } from './importCategoryUseCase'
import { CategoriesRepositories } from '../../repositories/implementations/categoriesRepository'

const categoryRepository = CategoriesRepositories.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository)
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
)

export { importCategoryController, importCategoryUseCase }
