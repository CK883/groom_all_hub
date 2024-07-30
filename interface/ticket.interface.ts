interface INameResponse {
  nameTh: string
  nameEn: string
}

interface IFullNameResponse {
  firstName: string
  lastName: string
}

interface IAddressResponse {
  amphoe: string
  district: string
  moo: string
  number: string
  province: string
  road: string
  soi: string
  zipcode: string
}

interface ITicketIndexResponse {
  appointment: {
    isAvtive: boolean
  }
  contact: {
    address: IAddressResponse
    customer: IFullNameResponse
    _id: string
  }
  createdAt: string
  createdBy: {
    name: INameResponse
    _id: string
  }
  department: string
  motorInsuranceType: string
  productCategory: string
  saleCode: string
  saleCodeName: string
  serviceWorkType: string
  status: {
    id: string
    nameEn: string
    nameTh: string
  }
  ticketId: string
  updatedAt: string
  updatedBy: {
    _id: string
  }
}

interface ITicketSearch {
  limit: number
  page: number
  keyword: string
  isActive: boolean
  showDataAll: boolean
  orderBy: string
  ordertype: string
}
interface ITicketPagination {
  total: number
  count: number
  page: number
  limit: number
  pageCount: number
  hasPreviousPage?: boolean
  hasNextPage?: boolean
  isActive: boolean
  showDataAll: boolean
  orderBy: string
  orderType: string
  ticketId: string
  saleCode: string
  department: string
  productCategory: string
  serviceWorkType: string
  insuranceType: string
  status: string
  agentId: string
}

interface ITicketListRessponse {}

interface ITicketInterface {
  appointment: {
    isActive: boolean
  }
  _id: string
  ticketId: string
  saleCode: string
  leadId: string
  leadName: string
  type: string
  typeOfWork: string
  phone: string
  description: string
  status: string
  createdBy: string
  deleted: boolean
  createdAt: string
  updatedAt: string
  openDate: string
  protectionDate: string
  __v: number
}

interface IDriver {
  name: string
  birthDate: string
  occupation: string
  licenseNumber: string
  licenseIssuedBy: string
  licenseExpiryDate: string
}
interface ITicketCreateSaleMotor {
  leadId: string | undefined
  contactId: string
  workType: string
  isRenewFromOldInsurancePolicy: boolean
  previousInsurancePolicyNumber: string
  previousInsurancePolicyCancellationDate: string
  motorInsuranceType: string
  saleCode: string
  saleCodeName: string
  contactMethod: string
  voluntaryInsurancePolicy: VoluntaryInsurancePolicy
  compulsoryInsurancePolicy: CompulsoryInsurancePolicy
  isDriverSpecified: boolean
  drivers: IDriver[]
  reward: number | null
  note: string
  voluntaryInsurancePolicyNumberViriyah: string
  voluntaryInsurancePolicyDetailViriyah: any
  voluntaryInsurancePolicyUpdateDate: string | undefined
  compulsoryInsurancePolicyNumberViriyah: string
  compulsoryInsurancePolicyDetailViriyah: any
  compulsoryInsurancePolicyUpdateDate: string | undefined
  // insuredCustomerType: string
}

interface ITicketCreateSaleNonMotor {
  leadId: string | undefined
  contactId: string
  workType: string
  isRenewFromOldInsurancePolicy: boolean
  previousInsurancePolicyNumber: string
  previousInsurancePolicyCancellationDate: string
  contactMethod: string
  saleCode: string
  saleCodeName: string
  nonMotorInsurancePolicy: {
    insuredAssetId: string | undefined
    policyNumber: string | undefined
    applicationNumber: string | undefined
    customerName: string | undefined
    insurerProduct: string | undefined
    insurerProductName: string | undefined
    assetCategory: string | undefined
    policyPlan: string | undefined
    assetDetail: string | undefined
    netPremium: number
    grossPremium: number
    originalInsuranceNumber: string | undefined
    originalIssuedDate: string | undefined
    originalExpiryDate: string | undefined
  }
  reward: number
  note: string
  voluntaryInsurancePolicyNumberViriyah: string
  voluntaryInsurancePolicyDetailViriyah: any
  voluntaryInsurancePolicyUpdateDate: string | undefined
  compulsoryInsurancePolicyNumberViriyah: string
  compulsoryInsurancePolicyDetailViriyah: any
  compulsoryInsurancePolicyUpdateDate: string | undefined
  oldTicket: string
}
interface ITicketCreateService {
  workType: string
  serviceSubWorkType: string
  contactMethod: string
  voluntaryInsurancePolicyNumberViriyah: string
  voluntaryInsurancePolicyDetailViriyah: any
  voluntaryInsurancePolicyUpdateDate: string
  compulsoryInsurancePolicyNumberViriyah: string
  compulsoryInsurancePolicyDetailViriyah: any
  compulsoryInsurancePolicyUpdateDate: string
  insuredCustomerType: string
  policyNumber: string
  applicationNumber: string
  customerName: string
  note: string
}

interface ITicketListResponse {
  meta: {
    code: number
    status: boolean
    message: string
    reqId: string
  }
  data: {
    data: ITicketIndexResponse[]
    meta: ITicketPagination
  }
}

interface ITicketListRequest {
  limit: number
  page: number
}

interface ITicketCreateRequest {
  leadId: string
  description: string
  callUniqueId: string
}

interface VoluntaryInsurancePolicy {
  policyNumber: string
  applicationNumber: string
  customerName: string
  insurerProduct: string
  insuredAssetId: string | undefined
  detailCar: DetailCar
  insurePremium: InsurePremium
  originalInsurePremium: OriginalInsurePremium
  originalInsuranceNumber: string
  originalIssuedDate: string
  originalExpiryDate: string
  issuedDate: string
  expiryDate: string
}

interface DetailCar {
  code: string
  year: string
  brand: string
  modelCar: string
  subModel: string
  licenseNumber: string
  chassisNumber: string
  cc: string
  isEV: boolean
}

interface InsurePremium {
  dealerRepair: DealerRepair
  nonDealerRepair: NonDealerRepair
}

interface DealerRepair {
  coveragePercentage: number | null
  netCoverageAmount: number | null
  netPremium: number | null
  grossPremium: number | null
  groupDiscountPercent: number | null
  groupDiscountAmount: number | null
  historyDiscountPercent: number | null
  historyDiscountAmount: number | null
  isInsuredSelected: boolean
}

interface NonDealerRepair {
  coveragePercentage: number | null
  netCoverageAmount: number | null
  netPremium: number | null
  grossPremium: number | null
  groupDiscountPercent: number | null
  groupDiscountAmount: number | null
  historyDiscountPercent: number | null
  historyDiscountAmount: number | null
  isInsuredSelected: boolean
}

interface OriginalInsurePremium {
  dealerRepair: DealerRepair
  nonDealerRepair: NonDealerRepair
}

interface CompulsoryInsurancePolicy {
  insuredAssetId: string | undefined
  detailCar: DetailCar
  policyNumber: string
  applicationNumber: string
  customerName: string
  netPremium: number | null
  grossPremium: number | null
  originalInsuranceNumber: string
  originalIssuedDate: string
  originalExpiryDate: string
  issuedDate: string
  expiryDate: string
}

export type {
  ITicketSearch,
  ITicketPagination,
  ITicketInterface,
  ITicketListRequest,
  ITicketListResponse,
  ITicketCreateRequest,
  ITicketCreateSaleMotor,
  ITicketCreateSaleNonMotor,
  ITicketCreateService,
  ITicketIndexResponse
}
