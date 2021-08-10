import { CustomError } from './CustomError'

export class MissingParamError extends CustomError {
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`, 400)
    this.name = 'MissingParamError'
  }
}
