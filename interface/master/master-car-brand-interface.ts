interface IRequestGetMasterCarBrand {
  data: Array<{
    _id: string
    name: string
    isActive: boolean
    deleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
    totalModel: number
    totalSubModel: number
    model: Array<{
      _id: string
      name: string
      brandId: string
      isActive: boolean
      deleted: boolean
      createdAt: string
      updatedAt: string
      __v: number
      totalSubModel: number
      subModel: Array<{
        _id: string
        name: string
        brandId: string
        modelId: string
        isActive: boolean
        deleted: boolean
        createdAt: string
        updatedAt: string
        __v: number
      }>
    }>
  }>
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

interface IResponeGetMasterCarBrand {
  _id: string
  name: string
  isActive?: boolean
  deleted?: boolean
  createdAt?: string
  updatedAt?: string
  __v?: number
  totalModel?: number
  totalSubModel?: number
  model?: Array<{
    _id: string
    name: string
    brandId: string
    isActive: boolean
    deleted: boolean
    createdAt: string
    updatedAt: string
    __v: number
    totalSubModel: number
    subModel: Array<{
      _id: string
      name: string
      brandId: string
      modelId: string
      isActive: boolean
      deleted: boolean
      createdAt: string
      updatedAt: string
      __v: number
    }>
  }>
}

interface IMasterCarBrandFilter {
  limit?: number
  page?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  orderType?: string
}

interface IMasterCarBrandCreateAndUpdate {
  name: string
  isActive: boolean
}
export type {
  IMasterCarBrandFilter,
  IRequestGetMasterCarBrand,
  IResponeGetMasterCarBrand,
  IMasterCarBrandCreateAndUpdate
}
