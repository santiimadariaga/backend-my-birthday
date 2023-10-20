import { getCostumes } from '../logic/getCostumes.js';
import { createCostume } from '../logic/createCostume.js';
import { deleteCostume } from '../logic/deleteCostume.js';
import { chargeVoto } from '../logic/chargeVoto.js';
import { getVotos } from '../logic/getVotos.js';
import { deleteVotos } from '../logic/deleteVotos.js';

export const createCostumeController = async (req, res) => {
  try {
    const costumeInput = req.body;
    const newCostume = await createCostume(costumeInput);
    console.log('New costume: ', newCostume);
    res.json(newCostume);
    return newCostume;
  } catch (error) {
    console.log('Error in controller: ', error);
    res.status(500).json({ message: error.message });
  }
};

export const getAllCostumesController = async (req, res) => {
  try {
    const result = await getCostumes();
    console.log('Costumes: ', result);
    res.json(result);
  } catch (error) {
    console.log('Error in controller: ', error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteCostumeController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCostume(+id);
    console.log(`User deleted: `, id);
    res.json({ message: `Costume ${id} deleted successfully.` });
  } catch (error) {
    console.log('Error in controller: ', error);
    res.status(500).json({ message: error.message });
  }
};

export const sendVotoController = async (req, res) => {
  try {
    const votoInput = req.body.miVoto;
    // console.log(votoInput);
    const newVoto = await chargeVoto(votoInput);
    console.log('New voto: ', newVoto);
    res.json(newVoto);
    return newVoto;
  } catch (error) {
    console.log('Error in controller: ', error);
    res.status(500).json({ message: error.message });
  }
};

export const getVotosController = async (req, res) => {
  try {
    const result = await getVotos();
    console.log('Votos: ', result);
    res.json(result);
  } catch (error) {
    console.log('Error in controller: ', error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteVotosController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteVotos(+id);
    console.log(`Voto deleted: `, id);
    res.json({ message: `Voto ${id} deleted successfully.` });
  } catch (error) {
    console.log('Error in controller: ', error);
    res.status(500).json({ message: error.message });
  }
};
