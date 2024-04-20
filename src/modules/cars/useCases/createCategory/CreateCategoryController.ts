import { Request, Response } from 'express'
import { CreateCategoryuseCase } from './CreateCategoryuseCase'

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryuseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body
    this.createCategoryUseCase.execute({ name, description })
    return response.status(201).send()
  }
}

export { CreateCategoryController }
