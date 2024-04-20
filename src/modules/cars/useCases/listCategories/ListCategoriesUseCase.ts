import { ICategoryRepository } from '../../repositories/ICategoryRepository'

export class ListCategoriesUseCase {
  constructor(private categorieRepository: ICategoryRepository) {}
  execute() {
    return this.categorieRepository.list()
  }
}
