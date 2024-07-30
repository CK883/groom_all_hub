interface IAgentPendingList {
  _id: string;
  name: string;
  asset: string;
  agent: IAgentPending[];
}
interface IAgentPending {
  _id: string;
  name: {
    th: string;
    en: string;
  };
  role: string;
}
interface ILeadStatusCounts {
  total: number;
  new: number;
  renew: number;
  ready: number;
  pending: number;
  assigned: number;
  duplicate: number;
  blacklist: number;
  nocall: number;
}
interface ILeadRequest {
  page: number
  limit: number
  keyword?: string
  isActive?: boolean
  showDataAll: boolean
  orderBy?: string
  orderType?: number
  type?: string
  filterTab: string;

}
interface ILeadInsurancePremuimBody {
  dealerRepair: {
    coveragePercentage: number | null;
    netCoverageAmount: number | null;
    netPremium: number | null;
    grossPremium: number | null;
  };
  nonDealerRepair: {
    coveragePercentage: number | null;
    netCoverageAmount: number | null;
    netPremium: number | null;
    grossPremium: number | null;
  };
  note: string;
  anonymous: boolean;
}
interface IMetaResponse {
  code?: number;
  status?: boolean;
  message?: string;
  reqId?: string;
  count: number;
  page: number;
  limit: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  orderBy?: string;
  orderType: number;
}

interface IUseLeadBody {
  campaignId: string;
  assetId: string;
  contactId: string;
  insuranceType: string;
  originalData?: object;
  dataFrom: string;
  oldCompanyId: string;
  oldInsureEndDate: string;
  status: string;
  isUsable: boolean;
  leadId: string;
}
interface IAgentList {
  _id: string;
  email: string;
  name: string;
  role: {
    _id: string;
    name: string;
    sort: number;
  };
  isActive: boolean;
  updatedAt: string;
  isSelect?: boolean;
  sequence?: number;
}

interface ILeadObject {
  no: string;
  importDate: string;
  leadName: string;
  carDetail: string;
  endCoverage: string;
  isSelect: boolean;
  _id: string;
  campaignId: string;
  productId: {
    _id: string;
    name: string;
    type: string;
  };
  assetId: {
    _id: string;
    assetType: string;
    contactId: string;
    year: string;
    brand: string;
    assetModel: string;
    subModel: string;
    isEV: boolean;
    cc: number | null;
  };
  contactId: {
    customer: {
      _id: string;
      idCard: string;
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      phoneRef: any[];
    }
  };
  ticketId?: any,
  insuranceType: string;
  dataFrom: string;
  oldCompanyId: {
    _id: string;
    name: string;
  };
  oldInsureEndDate: string;
  status: string;
  isActive: boolean;
  isUsable: boolean;
  isDuplicate: boolean;
  isNewCreate: boolean;
  pendingAssignTo: any[];
  createdAt: string;
  assignTo: {
    _id: string;
    name: {
      th: string;
      en: string;
    };
    roleId: string;
    email: string[];
    teamId: string[];
  };
  "contact-status-histories": {
    _id: string;
    contactId: string;
    status: string;
    blackListType: string;
    blackListStartDate: string;
    blackListEndDate: string;
    blackListDay: number;
    description: string;
  };
  Insurance: number | string | null;
  insurePremium?: {
    dealerRepair: {
      coveragePercentage: number | null;
      netCoverageAmount: number | null;
      netPremium: number | null;
      grossPremium: number | null;
    };
    nonDealerRepair?: {
      coveragePercentage: number | null;
      netCoverageAmount: number | null;
      netPremium: number | null;
      grossPremium: number | null;
    };
    note: string;
    anonymous: boolean;
  };
}
interface ILeadDuplicateObject {
  no: string;
  importDate: string;
  leadName: string;
  isOpen?: boolean;
  typeContact?: string;
  productName?: string;
  contactId: {
    customer: {
      idCard: string;
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      phoneRef: string;
    }
  }
  list: IListLeadDuplicate[]
}
interface IListLeadDuplicate {
  importDate: string;
  createdAt: string;
  isSelect: boolean;
  endCoverage: string;
  _id: string;
  campaignId: string;
  isNearest?: boolean;
  assetId: {
    _id: string;
    assetType: string;
    contactId: string;
    year: string;
    brand: string;
    assetModel: string;
    subModel: string;
    isEV: boolean;
    cc: number | null;
  };
  contactId: {
    customer: {
      _id: string;
      idCard: string;
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      phoneRef: any[];
    };
    _id: string;
    typeContact: string;
    status: string;
  };
  insuranceType: string;
  dataFrom: string;
  oldCompanyId: {
    _id: string;
    name: string;
  };
  productId: {
    _id: string;
    name: string;
  };
  oldInsureEndDate: string;
  status: string;
}

export type {
  ILeadRequest,
  ILeadInsurancePremuimBody,
  ILeadStatusCounts,
  IMetaResponse,
  IUseLeadBody,
  IAgentPendingList,
  IAgentPending,
  IAgentList,
  ILeadObject,
  ILeadDuplicateObject
}

enum ButtonLeadInTable {
  insurance = 'insurance',
  checkInsurance = 'checkInsurance',
  deleteLead = 'deleteLead',
  assignTo = 'assignTo',
  reAssign = 'reAssign',
  toTicket = 'toTicket',
  useLead = 'useLead',
  mergeLead = 'mergeLead',
  unBan = 'unBan',
  toContact = 'toContact',
  viewTicket = 'viewTicket',
  moveLead = 'moveLead'
}
enum LeadTab {
  new = 'new',
  renew = 'renew',
  ready = 'ready',
  pending = 'pending',
  assigned = 'assigned',
  duplicate = 'duplicate',
  ban = 'blacklist'
}

enum LeadEnum {
  edit = 'edit',
  duplicate = 'duplicate',
  motor = 'Motor',
  nonMotor = 'Non-Motor'
}

export {
  ButtonLeadInTable,
  LeadTab,
  LeadEnum
};