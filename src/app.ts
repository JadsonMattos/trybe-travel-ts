import express, { Request, Response } from 'express';
import packagesRouter from './routers/package.router';

const app = express();

app.use(express.json());
app.use(packagesRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
