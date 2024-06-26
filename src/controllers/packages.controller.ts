import { Request, Response } from 'express';
import packagesService from '../services/packages.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function update(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { destination, category, price } = req.body;

  const serviceResponse = await packagesService.update({ id, destination, category, price });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
}

async function exclude(req: Request, res: Response) {
  const id = Number(req.params.id);

  const serviceResponse = await packagesService.exclude(id);

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  return res.sendStatus(204);
}

export default {
  update,
  exclude,
};