import { ISWFilmsRepo } from '@/controllers/interfaces/ISWFilmsRepo'
import { SWFilm } from '@/models/SWFilm'
import fetch from 'node-fetch'

export class SWAPIRepo implements ISWFilmsRepo {
  async findFilms(): Promise<SWFilm[]> {
    const result = await fetch('https://swapi.dev/api/films?format=json', { method: 'GET' })

    return SWAPIRepo.map((await result.json()).results)
  }

  static map(data: any[]): SWFilm[] {
    if (!(data instanceof Array)) throw new Error('Data not array!')

    return data.map((val: any): SWFilm => {
      const episodeNumber = Number(val.episode_id)
      const title = val.title as string

      if (typeof title !== 'string' || isNaN(episodeNumber)) {
        throw new Error('SWAPI schema not as expected!')
      }

      return { title: 'Star Wars: ' + title, episodeNumber }
    })
  }
}
