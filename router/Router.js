import { Router } from 'express';
import * as controllers from '../server/controllers.js';

export const costumesRouter = Router();

// register
costumesRouter.post('/createCostume', controllers.createCostumeController);

// getCostumes
costumesRouter.get('/getCostumes', controllers.getAllCostumesController);

// deleteCostume
costumesRouter.delete(
  '/deleteCostume/:id',
  controllers.deleteCostumeController
);

// sendVoto
costumesRouter.post('/sendVoto', controllers.sendVotoController);

// getVotos
costumesRouter.get('/getVotos', controllers.getVotosController);

// deleteCostume
costumesRouter.delete('/deleteVoto/:id', controllers.deleteVotosController);
