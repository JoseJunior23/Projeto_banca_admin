import express from 'express';
import 'reflect-metadata';
import './database/connection';
import { employeeRouter } from './routes/EmployeeRouter';
import { sessionRouter } from './routes/SessionRouter';
import { teamInfoRouter } from './routes/TeamInfoRouter';
import { teamRouter } from './routes/TeamRouter';

const app = express();

app.use(express.json());
app.use(sessionRouter);
app.use(employeeRouter);
app.use(teamRouter);
app.use(teamInfoRouter);

app.listen(3000, () => console.log('✅ Server started at http://localhost:3000'));