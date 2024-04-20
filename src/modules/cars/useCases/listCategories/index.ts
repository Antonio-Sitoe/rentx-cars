import { CategoriesRepositories } from '../../repositories/categoriesRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

const categoriesRepos = new CategoriesRepositories()

const listCategorieUseCase = new ListCategoriesUseCase(categoriesRepos)

export const listCategoryController = new ListCategoriesController(
  listCategorieUseCase
)
