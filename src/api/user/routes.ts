import { Router } from 'express'
import { getUser } from '@/api/user/services'

const router = Router()

router.get('/', async (req, res) => {
    res.send(getUser())
})

export default router