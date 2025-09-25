import { PrismaClient } from '@prisma/client'

// Patrón Edge Runtime compatible para Vercel
class PrismaManager {
  private client: PrismaClient | null = null

  getClient(): PrismaClient {
    if (!this.client) {
      this.client = new PrismaClient({
        log: ['error'],
      })
    }
    return this.client
  }
}

const prismaManager = new PrismaManager()

// Export simple directo al cliente Prisma - más compatible con TypeScript
export const prisma = prismaManager.getClient()
