import { Router } from "express";
import TeamInformationController from "../controllers/TeamInformationController";

const teamInfoRouter = Router();
teamInfoRouter.post('/team-information', TeamInformationController.store);
teamInfoRouter.get('/team-information', TeamInformationController.index);
teamInfoRouter.get('/team-information/:id', TeamInformationController.show);
teamInfoRouter.put('/team-information/:id', TeamInformationController.update);
teamInfoRouter.delete('/team-information', TeamInformationController.delete);

export { teamInfoRouter };
