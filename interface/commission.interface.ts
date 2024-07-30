interface IMetaResponse {
  count: number
  page: number
  limit: number
  pageCount: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}

interface ICommissionRequest {
  page?: number
  limit?: number
  keyword?: string
  isActive?: boolean
  showDataAll?: boolean
  orderBy?: string
  orderType?: number
}

interface ICommissionAddNew {
  team: string
  role: string
  commissionId: string
  manageCommissionId: string
  type: string
}

interface ICommissionUpdate {
  commission: {
    commissionId: string
    isActive: boolean
  }
  type: string
}

interface ICommissionTier {
  max: number
  min: number
  no: number
  percen: number
  _id: string
}

interface ICommissionBranch {
  commissionId: {
    createdAt: string
    deleted: boolean
    description: string
    isActive: boolean
    jobType: []
    name: string
    tier: ICommissionTier[]
    type: string
    updatedAt: string
    _id: string
  }
  isActive: boolean
  _id: string
}

interface ICommissionResponse {
  commission: ICommissionBranch[]
  createdAt: string
  updatedAt: string
  createdBy: {
    name: {
      en: string
      th: string
    }
    _id: string
  }
  roleId: {
    name: string
    teamId: string
    _id: string
  }
  teamId: {
    name: string
    _id: string
  }
}

interface ICommissionClientResponse extends ICommissionResponse {
  commissionMotor: []
  commissionNonMotor: []
}

interface ICommissionMetaResponse {
  data: ICommissionClientResponse[]
  meta: IMetaResponse
}

export type {
  ICommissionRequest,
  ICommissionMetaResponse,
  ICommissionResponse,
  ICommissionAddNew,
  ICommissionClientResponse,
  ICommissionUpdate,
  ICommissionBranch
}
