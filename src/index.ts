import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import * as runningAt from 'running-at'
import routes from '@/router'

const app = express()
app.use(bodyParser.json())
app.use(cors())

// Use router
app.use(routes)

const envMode = process.env.MODE
if (envMode === 'development') {
  try {
    const PORT = process.env.PORT || 3000
    console.log(`mode: [${envMode}]`)
    app.listen(PORT, () => runningAt.print(PORT))
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

export default app