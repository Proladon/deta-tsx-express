import { DetaProjectKey } from '@/utils/variables'
import { Deta } from 'deta'

const deta = Deta(DetaProjectKey) 

export const UserDB = deta.Base('user')
export const AdminDB = deta.Base('admin') 
