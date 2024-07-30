export interface IUserResponse {
  data: {
    meta: {
      code: number;
      status: boolean;
      message: string;
      reqId: string;
    };
    data: IUserDataResponse;
  };
}

export interface IUserDataResponse {
  firstName: {
    th: string;
    en: string;
  };
  lastName: {
    th: string;
    en: string;
  };
  currentStatus: {
    status: string;
    startAt: string;
  };
  _id: string;
  phone: string;
  email: string;
  username: string;
  userType: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  name: string;
  id: string;
}

export interface IUserErrorResponse {
  meta: {
    code: number;
    status: boolean;
    message: string[];
    reqId: string;
  };
}

export interface IUserListTeamsResponse {
  data: {
    meta: {
      code: number;
      status: boolean;
      message: string;
      reqId: string;
    };
    data: { data: IUserListTeamsDataResponse };
  };
}

export interface IUserListTeamsDataResponse {
  filter(arg0: (team: IUserListTeamsData) => boolean): unknown;
  map(
    arg0: (team: IUserListTeamsData) => {
      id: string;
      name: any;
      phone: string;
      status: any;
    }
  ): any;
  data: [
    {
      firstName: {
        th: string;
        en: string;
      };
      lastName: {
        th: string;
        en: string;
      };
      currentStatus: {
        status: string;
        startAt: string;
      };
      _id: string;
      phone: string;
      email: string;
      username: string;
      userType: string;
      deleted: boolean;
      createdAt: string;
      updatedAt: string;
      teamId: string;
      id: string;
    }
  ];
}

export interface IUserListTeamsData {
  firstName: {
    th: string;
    en: string;
  };
  lastName: {
    th: string;
    en: string;
  };
  currentStatus: {
    status: string;
    startAt: string;
  };
  _id: string;
  phone: string;
  email: string;
  username: string;
  userType: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  teamId: string;
  id: string;
}
