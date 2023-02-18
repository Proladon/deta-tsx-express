import express from 'express'
import UserRoutes from '@/api/routes'
import { appName, appVersion } from '@/utils/variables'

export const router = express.Router()

router.get('/', (_req, res) => {
  res.send(`${appName} v.${appVersion}`)
})

router.use('/user', UserRoutes)

export default router
