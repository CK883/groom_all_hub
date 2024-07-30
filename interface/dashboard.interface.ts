interface IDashboardData {
  data: {
    ticket: MetricData
    waiting: MetricData
    vehicleInspection: MetricData
    problem: MetricData
    decision: MetricData
    sales: MetricData
    insuranceIssued: MetricData
    closeDealRatio: CloseDealRatioData
    callOffer: CallOfferData
    talkTime: DurationData
    aux: DurationData
  }
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

interface MetricData {
  total: string
  totalInsurancePremium: string
}

interface CloseDealRatioData {
  total: number
  close: number
}

interface CallOfferData {
  total: string
  avgPerDay: string
  acceptedCall: number
  rejectedCall: number
}

interface DurationData {
  total: string
  maxDuration: string
  minDuration: string
}

interface IResponeDashboardData {
  ticket: MetricData
  waiting: MetricData
  vehicleInspection: MetricData
  problem: MetricData
  decision: MetricData
  sales: MetricData
  insuranceIssued: MetricData
  closeDealRatio: CloseDealRatioData
  callOffer: CallOfferData
  talkTime: DurationData
  aux: DurationData
}

export type { IDashboardData, IResponeDashboardData }
