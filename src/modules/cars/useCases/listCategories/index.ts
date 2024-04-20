import { CategoriesRepositories } from '../../repositories/implementations/categoriesRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

const categoriesRepos = CategoriesRepositories.getInstance()

const listCategorieUseCase = new ListCategoriesUseCase(categoriesRepos)

export const listCategoryController = new ListCategoriesController(
  listCategorieUseCase
)
