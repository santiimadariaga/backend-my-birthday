import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function deleteVotos(id) {
  try {
    await db.votos.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
}
