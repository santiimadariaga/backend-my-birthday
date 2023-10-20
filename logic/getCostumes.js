import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function getCostumes() {
  try {
    const allCostumes = db.costume.findMany();
    return allCostumes;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
