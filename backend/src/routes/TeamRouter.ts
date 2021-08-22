import { Router } from "express";
import TeamController from "../controllers/TeamController";

const teamRouter = Router();
teamRouter.post('/team', TeamController.store);
teamRouter.get('/team', TeamController.index);
teamRouter.get('/team/:id', TeamController.show);
teamRouter.put('/team/:id', TeamController.update);
teamRouter.delete('/team', TeamController.delete);

export { teamRouter };
