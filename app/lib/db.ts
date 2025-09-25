import { PrismaClient } from '@prisma/client'

let prismaGlobal: PrismaClient | undefined

export function getPrismaClient(): PrismaClient {
  if (!prismaGlobal) {
    prismaGlobal = new PrismaClient({
      log: ['error'],
    })
  }
  return prismaGlobal
}
