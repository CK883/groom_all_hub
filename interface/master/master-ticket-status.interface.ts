interface IBodyMasterSubStatus {
  nameTh: string,
  statusId: string,
  ticketSaleMotor: boolean,
  ticketSaleNonMotor: boolean,
  ticketServiceMotor: boolean,
  ticketServiceNonMotor: boolean,
  isActive: boolean
}

interface IBodyResponseSubStatus extends IBodyMasterSubStatus{
  _id: string,
  nameTh: string,
  statusId: string,
  createdAt: string,
  deleted: boolean,
  isActive: boolean,
  ticketSaleMotor: boolean,
  ticketSaleNonMotor: boolean,
  ticketServiceMotor: boolean,
  ticketServiceNonMotor: boolean,
  updatedAt: string
}

interface IBodyResponseTicketStatus {
  _id: string,
  statusId: string,
  createdAt: string,
  deleted: boolean,
  isActive: boolean,
  isHaveSubStatus: boolean,
  nameEn: string,
  nameTh: string,
  sort: number,
  updatedAt: string,
  subStatus: IBodyResponseSubStatus[]
}


export type {
  IBodyMasterSubStatus,
  IBodyResponseTicketStatus,
  IBodyResponseSubStatus
};
