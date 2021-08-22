import { Router } from "express";
import PlanoController from "../controllers/PlanoController";

const planoRouter = Router();
planoRouter.post('/plano', PlanoController.store);
planoRouter.get('/plano', PlanoController.index);
planoRouter.get('/plano/:id', PlanoController.show);
planoRouter.put('/plano/:id', PlanoController.update);
planoRouter.delete('/plano', PlanoController.delete);

export { planoRouter };
