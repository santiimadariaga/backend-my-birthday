import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function getVotos() {
  try {
    const allVotos = db.votos.findMany();
    return allVotos;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
