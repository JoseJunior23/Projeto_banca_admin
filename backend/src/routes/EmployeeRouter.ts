import { Router } from "express";
import EmployeeController from "../controllers/EmployeeController";

const employeeRouter = Router();

employeeRouter.post('/employee', EmployeeController.store);
employeeRouter.get('/employee', EmployeeController.index);
employeeRouter.get('/employee/:id', EmployeeController.show);
employeeRouter.put('/employee-list/:id', EmployeeController.update);
employeeRouter.delete('/employee-delete/:id', EmployeeController.delete);

export { employeeRouter };
