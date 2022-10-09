import express from 'express'

import UserRoutes from '@/api/user/routes'

export const router = express.Router()

router.get('/', (_req, res) => {
  res.send(`Hello World!`)
})

router.use('/user', UserRoutes)

export default router
