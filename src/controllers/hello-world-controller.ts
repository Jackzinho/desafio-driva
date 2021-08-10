import { IController, IControllerResult } from './interfaces/IController'

export class HelloWorldController implements IController {
  async handle(data: any): Promise<IControllerResult> {
    return { statusCode: 200, body: 'World' }
  }
}
