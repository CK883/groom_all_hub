interface IRequestGetMasterAgentCallback {
  meta: {
    code: number
    status: boolean
    message: string
    reqId: string
    count: number
    page: number
    limit: number
    pageCount: number
    hasPreviousPage: false
    hasNextPage: false
    orderBy: 'updatedAt'
    orderType: -1
  }
  data: Array<{
    _id: string
    name: string
    phone: string
    email: string
    lineId: string
    nickname: string
    teamId: Array<{
      isActive: boolean
      deleted: boolean
      _id: string
      name: string
      sort: number
      saleCode: string
    }>
    branchId: Array<{
      _id: string
      code: string
      name: string
      saleCode: string
      zone: string
      address: string
      isActive: boolean
      deleted: boolean
      createdAt: string
      updatedAt: string
      __v: number
    }>
    isActive: boolean
    createdBy: {
      name: {
        th: string
        en: string
      }
      _id: string
      titleId: string
      roleId: string
      isActive: boolean
      email: string
      deleted: boolean
      createdAt: string
      updatedAt: string
      teamId: string[]
      saleCode: string
    }
    deleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
    updatedBy?: string
  }>
}

interface IResponeGetMaterAgentCallback {
  _id: string
  name: string
  phone: string
  email: string
  lineId: string
  nickname?: string
  teamId: Array<{
    isActive: boolean
    deleted: boolean
    _id: string
    name: string
    sort: number
    saleCode: string
  }>
  branchId: Array<{
    _id: string
    code: string
    name: string
    saleCode: string
    zone: string
    address: string
    isActive: boolean
    deleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
  }>
  isActive: boolean
  createdBy?: {
    name: {
      th: string
      en: string
    }
    _id: string
    titleId: string
    roleId: string
    isActive: boolean
    email: string
    deleted: boolean
    createdAt: string
    updatedAt: string
    teamId: string[]
    saleCode: string
  }
  deleted?: boolean
  createdAt?: string
  updatedAt?: string
  __v?: number
  updatedBy?: string
}

interface IMasterAgentCallbackFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  ordertype?: string
}

interface IMasterAgentCallbackCreateAndUpdate {
  _id: string
  name: string
  phone: string
  email: string
  lineId: string
  teamId: string[]
  nickname: string
  isActive: boolean
  branchId: string[]
}

export type {
  IRequestGetMasterAgentCallback,
  IMasterAgentCallbackFilter,
  IMasterAgentCallbackCreateAndUpdate,
  IResponeGetMaterAgentCallback
}
