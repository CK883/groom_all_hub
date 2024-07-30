interface IRequestGetMasterNonMotor {
  data: [
    {
      createdAt: string
      deleted: boolean
      description: string
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

interface IResponeGetMasterNonMotor {
  createdAt?: string
  deleted?: boolean
  description?: string
  isActive?: boolean
  name: string
  sort?: number
  type?: string
  updatedAt?: string
  __v?: number
  _id: string
}

interface IMasterNonMotorFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  orderType?: string
  type: string
}

interface IMasterNonMotorCreateAndUpdate {
  name: string
  isActive: boolean
  description: string
  sort: number
  type: string
}
export type {
  IMasterNonMotorFilter,
  IRequestGetMasterNonMotor,
  IResponeGetMasterNonMotor,
  IMasterNonMotorCreateAndUpdate
}
