import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import * as config from '../config'

const app = express()
app.use(favicon(path.resolve(__dirname, '../resources/images', 'favicon.ico')))
app.use(express.static(path.resolve(__dirname, '../dist')))

app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`)
})
