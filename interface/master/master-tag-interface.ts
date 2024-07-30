interface IRequestGetMasterScriptTag {
  data: [
    {
      _id: string
      name: string
      isActive: boolean
      deleted: boolean
      createdAt: string
      updatedAt: string
      __v: number
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

interface IResponeGetMasterScriptTag {
  _id: string
  name: string
  isActive?: boolean
  deleted?: boolean
  createdAt?: string
  updatedAt?: string
}

interface IMasterScriptTagFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  ordertype?: string
}

interface IMasterTagCreateAndUpdate {
  name: string
}
export type {
  IMasterScriptTagFilter,
  IRequestGetMasterScriptTag,
  IResponeGetMasterScriptTag,
  IMasterTagCreateAndUpdate
}
