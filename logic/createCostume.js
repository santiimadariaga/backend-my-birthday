import { PrismaClient } from '@prisma/client';
// import { encrypt } from '../helpers/handleBcrypt.js';

const db = new PrismaClient();

export async function createCostume(costumeInput) {
  try {
    const newCostume = db.costume.create({
      data: {
        name: costumeInput.name,
      },
    });
    return newCostume;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
