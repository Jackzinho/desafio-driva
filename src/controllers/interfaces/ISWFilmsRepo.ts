import { SWFilm } from '@/models/SWFilm'

export interface ISWFilmsRepo {
  findFilms: () => Promise<SWFilm[]>
}
