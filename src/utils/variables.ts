import { config } from 'dotenv'

config()

export const MongodbURL = process.env.MONGODB_URL
export const appVersion = process.env.DETA_SPACE_APP_VERSION
export const appName = process.env.DETA_SPACE_APP_MICRO_NAME
