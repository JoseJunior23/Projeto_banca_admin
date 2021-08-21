import { Router } from "express";
import SessionController from "../controllers/SessionController";

const sessionRouter = Router();
sessionRouter.post('/session', SessionController.store);
sessionRouter.get('/session', SessionController.index);
sessionRouter.get('/session/:id', SessionController.show);
sessionRouter.put('/session/:id', SessionController.update);
sessionRouter.delete('/session', SessionController.delete);

export { sessionRouter };
