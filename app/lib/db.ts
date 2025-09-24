// Dynamic import approach to avoid build-time initialization issues
let _prismaInstance: any = null;

const createPrismaClient = async () => {
  if (_prismaInstance) return _prismaInstance;
  
  try {
    const { PrismaClient } = await import('@prisma/client');
    _prismaInstance = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['error'] : [],
    });
    return _prismaInstance;
  } catch (error) {
    console.error('Error creating Prisma client:', error);
    throw error;
  }
};

// Global store for singleton pattern
const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined;
};

export const getPrisma = async () => {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }
  
  const prismaClient = await createPrismaClient();
  
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prismaClient;
  }
  
  return prismaClient;
};

// Legacy export for compatibility - but this will be lazy loaded
export const prisma = {
  get evaluacion() { throw new Error('Use getPrisma() instead'); },
  get paciente() { throw new Error('Use getPrisma() instead'); },
};
