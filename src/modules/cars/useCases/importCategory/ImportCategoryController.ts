import { Response, Request } from 'express'
import { ImportCategoryUseCase } from './importCategoryUseCase'

export class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
  handle(request: Request, response: Response) {
    const { file } = request
    this.importCategoryUseCase.execute(file)
    return response.send()
  }
}
