import { IControllerResult } from '@/controllers/interfaces/IController'
import { CustomError, ServerError } from '@/errors'

export const httpError = (error?: Error): IControllerResult => {
  if (error instanceof CustomError) {
    const { code, ...restErr } = error

    return { body: restErr, statusCode: code }
  }

  console.error(error)

  return {
    statusCode: 500,
    body: new ServerError()
  }
}

export const ok = (data: any): IControllerResult => ({
  statusCode: 200,
  body: data
})
