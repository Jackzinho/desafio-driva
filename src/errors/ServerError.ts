import { CustomError } from './CustomError'

export class ServerError extends CustomError {
  constructor() {
    super('Internal server error', 500)
    this.name = 'ServerError'
  }
}
