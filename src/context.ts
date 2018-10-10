import { Request } from 'express'
import { Prisma } from './generated/prisma'

export interface IContext extends Request {
  db: Prisma
}
