interface IRequestGetMasterCommission {
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
  data: [
    {
      _id: string
      name: string
      tier: {
        no: number
        min: number
        max: number
        percen: number
        _id: string
      }[]
      type: string
      jobType: string[]
      isActive: boolean
      deleted: boolean
      createdAt: string
      updatedAt: string
      __v: number
    }
  ]
}
interface IResponeGetMasterCommission {
  _id: string
  name: string
  tier: {
    no: number
    min: number
    max: number
    percen: number
    _id: string
  }[]
  type: string
  jobType: string[]
  isActive: boolean
  deleted?: boolean
  createdAt?: string
  updatedAt?: string
  jobTypeText?: string[]
  __v?: number
}

interface IMasterCommissionFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  ordertype?: string
}

interface IMasterCommissionCreateAndUpdate {
  name: string
  description?: string
  isActive: boolean
  tier: {
    no: number
    min: number
    max: number
    percen: number
  }[]
  type: string
  jobType: string[]
}
export type {
  IRequestGetMasterCommission,
  IMasterCommissionFilter,
  IMasterCommissionCreateAndUpdate,
  IResponeGetMasterCommission
}
