import { CustomError } from '@/errors'
import { httpError, ok } from '@/helpers/http'
import { IController, IControllerResult } from './interfaces/IController'
import { ISWFilmsRepo } from './interfaces/ISWFilmsRepo'

export class SWController implements IController {
  constructor(private readonly SWFilmsRepo: ISWFilmsRepo) {}

  async handle(): Promise<IControllerResult> {
    try {
      const result = await this.SWFilmsRepo.findFilms()

      if (result instanceof CustomError) return httpError(result)

      return ok(result)
    } catch (err) {
      return httpError(err)
    }
  }
}
