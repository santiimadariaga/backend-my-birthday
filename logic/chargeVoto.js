import { PrismaClient } from '@prisma/client';
// import { encrypt } from '../helpers/handleBcrypt.js';

const db = new PrismaClient();

export async function chargeVoto(votoInput) {
  try {
    const newVoto = db.votos.create({
      data: {
        miVoto: votoInput,
      },
    });
    return newVoto;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
