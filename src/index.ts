import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from '@/router'
import { routeLog, sendResponse } from '@shelter-zone/sz-express-utils'
import { connectDB } from '@/db'
;(async () => {
  await connectDB()
})()

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(routeLog)
app.use(sendResponse)
app.use(routes)

export default app
