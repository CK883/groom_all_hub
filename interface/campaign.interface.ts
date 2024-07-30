interface IMetaResponse {
  code: number;
  status: boolean;
  message: string;
  reqId: string;
  count?: number
  page?: number
  limit?: number
  pageCount?: number
  hasPreviousPage?: boolean
  hasNextPage?: boolean
  total?: number
}
interface ICampaignRequest {
  page?: number
  limit?: number
  keyword?: string
  isActive?: boolean
  showDataAll: boolean
  orderBy?: string
  orderType?: number
  type?: string
  dateFrom?: string
  dateTo?: string
}

interface ICampaignResponse {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  extraRate: number;
  isActive: boolean;
  auto: boolean;
  createdBy: CreatedBy;
  isPermanent: boolean;
  teamId: string;
  department: string;
  productCategory: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  statusTime: string;
  updateBy: UpdateBy;
  lastSyncDate?: any;
}
interface ICampaignList {
  no: string;
  _id: string;
  name: string;
  productCategory: string;
  extraRaet: string;
  rateUp: boolean;
  startDate: string;
  endDate: string;
  statusTime: string;
  isActive: boolean;
  updatedAt: string;
}
interface UpdateBy {
  _id?: string;
  name?: Name;
}
interface CreatedBy {
  _id: string;
  name: Name;
}
interface Name {
  th: string;
  en: string;
}
interface ICampaingMetaResponse {
  data: ICampaignResponse[];
  meta: IMetaResponse;
}
interface IcampaignBody {
  name: string;
  branch?: string;
  description: string;
  startDate: string;
  endDate: string;
  extraRate: number;
  isActive: boolean;
  productCategory: string;
  auto: boolean;
  teamId?: string;
}
interface ICampaingIdResponse {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  extraRate: number;
  isActive: boolean;
  productCategory: string;
  auto: boolean;
  createdBy: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  statusTime: string;
  totalLead: number;
  newLead: number;
  reNewLead: number;
  readyLead: number;
  pendingLead: number;
  assignLead: number;
  duplicateLead: number;
  blacklistLead: number;
  lead: any[];
}
interface ICampaingId {
  productCategory: string;
  name: string;
  isActive?: boolean;
  totalLead: number;
  extraRate: string;
  rateUp: boolean;
  startDate: string;
  endDate: string;
  statusTime: string;
  description: string;
  auto: boolean | null;
  updatedAt: string;
  id: string;
}

export type {
  IMetaResponse,
  ICampaignRequest,
  ICampaignResponse,
  ICampaingMetaResponse,
  ICampaignList,
  IcampaignBody,
  ICampaingIdResponse,
  ICampaingId
};