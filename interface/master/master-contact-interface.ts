interface IRequestGetMasterContact {
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
    deleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }>
}

interface IResponeGetMaterContact {
  _id: string
  name: string
  isActive: boolean
  deleted?: boolean
  createdAt?: string
  updatedAt?: string
  __v?: number
}

interface IMasterContactFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  ordertype?: string
}

interface IMasterContactCreateAndUpdate {
  name: string
  isActive: boolean
}

export type {
  IRequestGetMasterContact,
  IMasterContactFilter,
  IMasterContactCreateAndUpdate,
  IResponeGetMaterContact
}
