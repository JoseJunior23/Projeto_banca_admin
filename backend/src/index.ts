import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import './database/connection';
import { employeeRouter } from './routes/EmployeeRouter';
import { factoryRouter } from './routes/FactoryRouter';
import { modelRouter } from './routes/ModelRouter';
import { planoInformationRouter } from './routes/PlanoInformationRouter';
import { planoRouter } from './routes/PlanoRouter';
import { sessionRouter } from './routes/SessionRouter';
import { teamInfoRouter } from './routes/TeamInfoRouter';
import { teamRouter } from './routes/TeamRouter';


const app = express();

app.use(express.json());
app.use(cors())
app.use(sessionRouter);
app.use(employeeRouter);
app.use(teamRouter);
app.use(teamInfoRouter);
app.use(planoRouter);
app.use(planoInformationRouter);
app.use(factoryRouter);
app.use(modelRouter);

app.listen(3000, () => console.log('✅ Server started at http://localhost:3000'));

