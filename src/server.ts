import app from '@/server-config'
import { Request, Response } from 'express'
import { expressRouteAdapter } from './adapters/express-route-adapter'
import { HelloWorldController } from './controllers/hello-world-controller'
import { SumController } from './controllers/sum-controller'
import { SWController } from './controllers/sw-controller'
import { SWAPIRepo } from './infra/repos/SWAPIRepo'

app.listen(3333, () => {
  console.log('SERVER ON PORT 3333')
})

app.get('/hello', expressRouteAdapter(new HelloWorldController()))

app.get('/starwars/films', expressRouteAdapter(new SWController(new SWAPIRepo())))

app.post('/soma', expressRouteAdapter(new SumController()))

app.use((req: Request, res: Response) => {
  res.status(404).json({ name: 'NotFoundError', message: 'Resource could not be located!' })
})
