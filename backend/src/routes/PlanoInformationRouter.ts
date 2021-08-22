import { Router } from "express";
import PlanoInformationController from "../controllers/PlanoInformationController";

const planoInformationRouter = Router();
planoInformationRouter.post('/plano-information', PlanoInformationController.store);
planoInformationRouter.get('/plano-information', PlanoInformationController.index);
planoInformationRouter.get('/plano-information/:id', PlanoInformationController.show);
planoInformationRouter.put('/plano-information/:id', PlanoInformationController.update);
planoInformationRouter.delete('/plano-information', PlanoInformationController.delete);

export { planoInformationRouter };
