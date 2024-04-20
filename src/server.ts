import express from 'express'
import { categoriesRoutes } from './routes/category-routes'
import { specification } from './routes/specification-routes'

const app = express()
app.use(express.json())

// Routes
app.use('/categories', categoriesRoutes)
app.use('/specification', specification)

app.listen(3333, () => console.log('Server running'))
