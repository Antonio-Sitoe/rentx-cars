import { Router } from 'express'
import { createCategoryController } from '@/modules/cars/useCases/createCategory/'
import { listCategoryController } from '@/modules/cars/useCases/listCategories'
import multer from 'multer'
import { importCategoryController } from '@/modules/cars/useCases/importCategory'

const upload = multer({
  dest: './temp'
})

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get('/', (_, response) => {
  return listCategoryController.handle(_, response)
})

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response)
})

export { categoriesRoutes }
