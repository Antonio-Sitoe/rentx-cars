import { Router } from 'express'

import { CreateSpecificationService } from '@/modules/cars/services/CreateSpecificationService'
import { SpecificationRepository } from '@/modules/cars/repositories/SpecificationRepository'

const specification = Router()
const speciReposi = new SpecificationRepository()

specification.post('/', (request, response) => {
  const { name, description } = request.body
  const createService = new CreateSpecificationService(speciReposi)
  createService.execute({ name, description })
  return response.status(201).send()
})

export { specification }
