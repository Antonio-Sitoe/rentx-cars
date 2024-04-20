import { Specification } from '../../model/Specification'
import {
  ICreateSpecificationDTO,
  ISpecificationRepository
} from '../ISpecificationRepository'

class SpecificationRepository implements ISpecificationRepository {
  private Specifications: Specification[]
  constructor() {
    this.Specifications = []
  }
  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification()
    Object.assign(specification, { name, description, created_at: new Date() })
    this.Specifications.push(specification)
  }
  findByName(name: string): Specification {
    return this.Specifications.find(obj => obj.name === name)
  }
}

export { SpecificationRepository }
