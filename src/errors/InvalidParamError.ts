import { CustomError } from './CustomError'

export class InvalidParamError extends CustomError {
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`, 400)
    this.name = 'InvalidParamError'
  }
}
