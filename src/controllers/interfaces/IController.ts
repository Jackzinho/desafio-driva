export interface IControllerResult {
  statusCode: number
  body?: any
}

export interface IController {
  handle: (data: any) => Promise<IControllerResult>
}
