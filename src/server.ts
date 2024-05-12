import express from 'express'
import swaggerUi from 'swagger-ui-express'
import SwaggerJson from './swagger.json'

import { categoriesRoutes } from './routes/category-routes'
import { specification } from './routes/specification-routes'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SwaggerJson))

  // Routes
  app.use('/categories', categoriesRoutes)
  app.use('/specification', specification)

  return app.listen(3333, () => {
    console.log('SERVER IS RUNNING: ', 3333)
  })
})
