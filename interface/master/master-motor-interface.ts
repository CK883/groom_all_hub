interface IRequestGetMasterMotor {
  data: [
    {
      createdAt: string
      deleted: boolean
      inspect: boolean
      isActive: boolean
      name: string
      sort: number
      type: string
      updatedAt: string
      __v: number
      _id: string
    }
  ]
  meta: {
    code: number
    status: boolean
    message: string
    reqId: string
    count: number
    page: number
    limit: number
    pageCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
  }
}

interface IResponeGetMasterMotor {
  createdAt?: string
  deleted?: boolean
  inspect: boolean
  isActive: boolean
  name: string
  sort?: number
  type?: string
  updatedAt?: string
  __v?: number
  _id: string
}

interface IMasterMotorFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  orderType?: string
  type: string,
}

interface IMasterMotorCreateAndUpdate {
  name: string
  isActive: boolean
  type: string
}
export type {
  IMasterMotorFilter,
  IRequestGetMasterMotor,
  IResponeGetMasterMotor,
  IMasterMotorCreateAndUpdate
}
