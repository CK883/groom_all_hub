// user
interface IManagementUserTelesalesData {
  _id: string;
  index: string;
  username: string;
  fullNameEN: string;
  fullNameTH: string;
  saleCode: string;
  role: string;
  isActive: boolean;
  createdBy: string;
  createdAt: string;
}
interface IManagementUserInboundData {
  _id: string;
  index: string;
  username: string;
  fullNameEN: string;
  fullNameTH: string;
  saleCode: string;
  role: string;
  isActive: boolean;
  createdBy: string;
  createdAt: string;
}
interface IManagementUserVStationData {
  _id: string;
  index: string;
  username: string;
  fullNameEN: string;
  fullNameTH: string;
  saleCode: string;
  role: string;
  branchCode: string;
  branchName: string;
  isActive: boolean;
  createdBy: string;
  createdAt: string;
}
// role permission
interface IManagementPermission {
  accessAll?: boolean;
  view?: boolean;
  create?: boolean;
  edit?: boolean;
  delete?: boolean;
  management?: boolean;
  addRelationship?: boolean;
  removeRelationship?: boolean;
}

interface IManagementRolePermissions {
  teamId: string;
  teamName: string;
  roleId: string;
  roleName: string;
  permission: {
    dashboard?: IManagementPermission;
    list?: IManagementPermission;
    ticket?: IManagementPermission;
    campaign?: IManagementPermission;
    contact?: IManagementPermission;
  };
}

interface IManagementRolePermissionsFeature {
  dashboard?: IManagementPermission;
  list?: IManagementPermission;
  ticket?: IManagementPermission;
  campaign?: IManagementPermission;
  contact?: IManagementPermission;
}

export type {
  IManagementUserTelesalesData,
  IManagementUserInboundData,
  IManagementUserVStationData,
};
