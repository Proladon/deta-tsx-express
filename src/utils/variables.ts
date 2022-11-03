import { config } from 'dotenv'

config()

export const runMode = process.env.MODE
export const DetaProjectKey = process.env.DETA_PROJECT_KEY
