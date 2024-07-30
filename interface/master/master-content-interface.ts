interface IRequestGetMasterContent {
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
      icon: string
      name: string
      isActive: boolean
      deleted: boolean
      createdAt?: string
      updatedAt?: string
      __v: number
    }
  ]
}
interface IResponeGetMasterContent {
  _id: string
  icon: string
  name: string
  isActive?: boolean
  deleted?: boolean
  createdAt?: string
  updatedAt?: string
}

type IResponeGetMasterContentList = IResponeGetMasterContent[]

interface IMasterContentFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  ordertype?: string
}

interface IMasterContentCreateAndUpdate {
  name: string
  icon: string
  isActive?: boolean
}

interface IMasterIcon {
  data: {
    data: [string]
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
}

export type {
  IResponeGetMasterContentList,
  IMasterIcon,
  IRequestGetMasterContent,
  IMasterContentFilter,
  IMasterContentCreateAndUpdate,
  IResponeGetMasterContent
}
