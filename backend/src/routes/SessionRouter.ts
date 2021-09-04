import { Router } from "express";
import SessionController from "../controllers/SessionController";

const sessionRouter = Router();
sessionRouter.post('/session', SessionController.store);
sessionRouter.get('/session', SessionController.index);
sessionRouter.get('/session/:id', SessionController.show);
sessionRouter.put('/session-edit/:id', SessionController.update);
sessionRouter.delete('/session-delete/:id', SessionController.delete);

export { sessionRouter };
