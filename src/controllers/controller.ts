import { Request, Response } from 'express';

export const sayHello = (req: Request, res: Response) => {
  res.json({ message: 'Hola desde el backend' });
};