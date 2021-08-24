import { Router } from "express";
import ModelController from "../controllers/ModelController";

const modelRouter = Router();

modelRouter.post('/model', ModelController.store);
modelRouter.get('/model', ModelController.index);
modelRouter.get('/model/:id', ModelController.show);
modelRouter.put('/model/:id', ModelController.update);
modelRouter.delete('/model', ModelController.delete);

export { modelRouter };
