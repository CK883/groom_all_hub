import base from './base'
import qs from 'qs'
import common from '~/common/common'
import { ErrorHandler } from '~/utils/errorHandler'
type BaseTypes = {
  GETALL: any
  BODYFILTER: any
  GETSINGLE: any
  CREATE: any
  UPDATE: any
  RESPONSE: any
}
export default class BaseRepository<TYPES extends BaseTypes = BaseTypes> {
  _resoucePath: string = ''
  _axiosBase = base

  constructor(resoucePath: string) {
    this._resoucePath = resoucePath
  }

  // CRUD
  async getAll(bodyFilter: TYPES['BODYFILTER']): Promise<TYPES['GETALL']> {
    const filterBody = common.removeEmpty(bodyFilter)
    const query = qs.stringify(filterBody)
    return await this._axiosBase
      .get(`${this._resoucePath}?${query}`)
      .then((resp: { data: TYPES['GETALL'] }) => {
        return resp.data
      })
      .catch((err: any) => {
        ErrorHandler(err)
        throw err
      })
  }

  async get(id: string) {
    return await this._axiosBase
      .get(`${this._resoucePath}/${id}`)
      .then((resp: any) => {
        return resp.data
      })
      .catch((err: any) => {
        ErrorHandler(err)
        throw err
      })
  }

  async create(body: TYPES['CREATE']) {
    return await this._axiosBase
      .post(this._resoucePath, body)
      .then((resp: any) => {
        return resp.data
      })
      .catch((err: any) => {
        ErrorHandler(err)
        throw err
      })
  }

  async update(id: string, body: TYPES['UPDATE']) {
    return await this._axiosBase
      .put(`${this._resoucePath}/${id}`, body)
      .then((resp: any) => {
        return resp.data
      })
      .catch((err: any) => {
        ErrorHandler(err)
        throw err
      })
  }

  async delete(id: string) {
    return await this._axiosBase
      .delete(`${this._resoucePath}/${id}`)
      .then((resp: any) => {
        return resp.data
      })
      .catch((err: any) => {
        ErrorHandler(err)
        throw err
      })
  }

  async patch(id: string, body: any) {
    return await this._axiosBase
      .patch(`${this._resoucePath}/${id}`, body)
      .then((resp: any) => {
        return resp.data
      })
      .catch((err: any) => {
        ErrorHandler(err)
        throw err
      })
  }
}
