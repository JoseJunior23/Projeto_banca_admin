import express from 'express';
import 'reflect-metadata';
import './database/connection';
import { sessionRouter } from './routes/SessionRouter';
const app = express();

app.use(express.json());
app.use(sessionRouter);

app.listen(3000, () => console.log('✅ Server started at http://localhost:3000'))