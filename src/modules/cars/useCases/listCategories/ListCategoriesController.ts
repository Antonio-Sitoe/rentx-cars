import { Response, Request } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

export class ListCategoriesController {
  constructor(private list: ListCategoriesUseCase) {}
  handle(req: Request, res: Response) {
    const all = this.list.execute()
    return res.json(all)
  }
}
