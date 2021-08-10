import { InvalidParamError, MissingParamError } from '@/errors'
import { httpError, ok } from '@/helpers/http'
import { IController, IControllerResult } from './interfaces/IController'

interface Params {
  numbers?: number[]
}

export class SumController implements IController {
  async handle(data: Params): Promise<IControllerResult> {
    const { numbers } = data
    let result = 0

    if (typeof numbers === 'undefined') return httpError(new MissingParamError('"numbers"'))
    if (!(numbers instanceof Array))
      return httpError(new InvalidParamError('"numbers" not an array'))

    for (let i = 0; i < numbers.length; i++) {
      if (isNaN(numbers[i])) return httpError(new InvalidParamError(`"numbers" at index ${i}`))

      result += numbers[i]
    }

    return ok({ result })
  }
}
