interface IRequestGetMasterFreebies {
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
    orderBy: string
    orderType: number
  }
  data: Array<{
    _id: string
    name: string
    isActive: boolean
    createdBy: string
    deleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }>
}
interface IResponeGetMasterFreebies {
  _id: string
  name: string
  isActive: boolean
  createdBy?: string
  deleted?: boolean
  createdAt?: string
  updatedAt?: string
  __v?: number
}

interface IMasterFreebiesFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  ordertype?: string
}

interface IMasterFreebiesCreateAndUpdate {
  name: string
}
export type {
  IMasterFreebiesFilter,
  IRequestGetMasterFreebies,
  IResponeGetMasterFreebies,
  IMasterFreebiesCreateAndUpdate
}
