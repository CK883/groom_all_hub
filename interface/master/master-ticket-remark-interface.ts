interface IRequestGetMasterTicketRemark {
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

interface IResponeGetMaterTicketRemark {
  _id: string
  name: string
  isActive: boolean
  deleted?: boolean
  createdAt?: string
  updatedAt?: string
  __v?: number
}

interface IMasterTicketRemarkFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  ordertype?: string
}

interface IMasterTicketRemarkCreateAndUpdate {
  name: string
  isActive: boolean
}

export type {
  IRequestGetMasterTicketRemark,
  IMasterTicketRemarkFilter,
  IMasterTicketRemarkCreateAndUpdate,
  IResponeGetMaterTicketRemark
}
