import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from '@/router'
// import * as runningAt from 'running-at'
import { runMode } from '@/utils/variables'

const app = express()
app.use(bodyParser.json())
app.use(cors())

// Use router
app.use(routes)

console.log(`Mode: [${runMode}]`)
if (runMode === 'development') {
  try {
    const PORT = process.env.PORT || 3000
    // app.listen(PORT, () => runningAt.print(PORT))
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

export default app
