import { IController } from '@/controllers/interfaces/IController'
import { Request, RequestHandler, Response } from 'express'

export const expressRouteAdapter = (controller: IController): RequestHandler => {
  return async (req: Request, res: Response): Promise<void> => {
    const { statusCode, body } = await controller.handle(req.body)

    res.status(statusCode).json(body)
  }
}
