import { connect } from 'mongoose'
import { MongodbURL } from '@/utils/variables'

export const connectDB = async () => {
  if (!MongodbURL) {
    console.log('mongodbURL not provid')
    return
  }
  const db = await connect(MongodbURL)
  db.connection.on('error', () => {
    console.log('database connecte fail')
  })
  db.connection.on('open', () => {
    console.log('database connected')
  })
  return db
}
