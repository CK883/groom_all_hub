interface IMetaResponse {
  count: number;
  page: number;
  limit: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
interface IUserNameInterface {
  name: {
    th: string
    en: string
  }
  _id: string
}

interface IScriptInnerList {
  description: string
  head: string
  no: number
  _id: string
}

interface IScriptRequest {
  page: number;
  limit: number;
  keyword: string
  isActive: boolean;
  showDataAll: boolean;
  orderBy: string,
  orderType: string,
  tagId: [],
  filterTab: string
}

interface IScriptListResponse {
  createdAt: string
  createdBy: IUserNameInterface
  favorite: IUserNameInterface[]
  isActive: boolean
  isVision: string
  list: IScriptInnerList[]
  name: string
  tag: string[]
  updatedAt: string
  updatedBy: IUserNameInterface
  _id: string
}

interface IScriptMetaResponse {
  data: IScriptListResponse[];
  meta: IMetaResponse;
}

interface IScriptBody {
  name: string
  list: [
    {
      no: number
      head: string
      description: string
    }
  ]
  isVision: string
  tagId: []
}


export type { IScriptRequest , IScriptListResponse, IScriptMetaResponse, IScriptBody};