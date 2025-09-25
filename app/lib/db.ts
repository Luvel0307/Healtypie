import { PrismaClient } from '@prisma/client'

// Patrón Edge Runtime compatible
class PrismaManager {
  private client: PrismaClient | null = null

  getClient(): PrismaClient {
    if (!this.client) {
      this.client = new PrismaClient()
    }
    return this.client
  }
}

const prismaManager = new PrismaManager()

export const prisma = {
  paciente: {
    findMany: (...args: any[]) => prismaManager.getClient().paciente.findMany(...args),
    findUnique: (...args: any[]) => prismaManager.getClient().paciente.findUnique(...args),
    create: (...args: any[]) => prismaManager.getClient().paciente.create(...args),
    update: (...args: any[]) => prismaManager.getClient().paciente.update(...args),
    delete: (...args: any[]) => prismaManager.getClient().paciente.delete(...args),
  },
  evaluacion: {
    findMany: (...args: any[]) => prismaManager.getClient().evaluacion.findMany(...args),
    findUnique: (...args: any[]) => prismaManager.getClient().evaluacion.findUnique(...args),
    create: (...args: any[]) => prismaManager.getClient().evaluacion.create(...args),
    update: (...args: any[]) => prismaManager.getClient().evaluacion.update(...args),
    delete: (...args: any[]) => prismaManager.getClient().evaluacion.delete(...args),
  },
  imagenAnalisis: {
    findMany: (...args: any[]) => prismaManager.getClient().imagenAnalisis.findMany(...args),
    findUnique: (...args: any[]) => prismaManager.getClient().imagenAnalisis.findUnique(...args),
    create: (...args: any[]) => prismaManager.getClient().imagenAnalisis.create(...args),
    update: (...args: any[]) => prismaManager.getClient().imagenAnalisis.update(...args),
    delete: (...args: any[]) => prismaManager.getClient().imagenAnalisis.delete(...args),
  }
}
