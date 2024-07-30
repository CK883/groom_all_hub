interface IRequestGetMasterBranch {
  data: [
    {
      _id: string
      name: string
      isActive: boolean
      deleted: boolean
      createdAt: string
      updatedAt: string
      __v?: number
      address: string
      code: string
      saleCode: string
      zone: string
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

interface IResponeGetMaterBranch {
  _id: string
  codeName: string
  subCode: string
  subCodeName: string
  isActive: boolean
  deleted: boolean
  createdAt?: string
  updatedAt?: string
  __v?: number
  address?: string
  code: string
  zone: string
}

interface IMasterBranchFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  ordertype?: string
}

interface IMasterBranchCreateAndUpdate {
  code: string
  codeName: string
  zone: string
  subCode: string
  subCodeName: string
  isActive: boolean
}

export type {
  IRequestGetMasterBranch,
  IMasterBranchFilter,
  IMasterBranchCreateAndUpdate,
  IResponeGetMaterBranch
}
