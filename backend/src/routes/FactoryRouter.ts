import { Router } from "express";
import FactoryController from "../controllers/FactoryController";

const factoryRouter = Router();

factoryRouter.post('/factory', FactoryController.store);
factoryRouter.get('/factory', FactoryController.index);
factoryRouter.get('/factory/:id', FactoryController.show);
factoryRouter.put('/factory/:id', FactoryController.update);
factoryRouter.delete('/factory', FactoryController.delete);

export { factoryRouter };
