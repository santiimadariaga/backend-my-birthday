import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function deleteCostume(id) {
  try {
    await db.costume.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
}
