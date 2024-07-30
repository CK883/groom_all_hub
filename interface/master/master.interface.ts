interface IGetMasterContent {
  data: {
    data: [
      {
        _id: string;
        icon: string;
        name: string;
        isActive: boolean;
        deleted: boolean;
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    ];
    meta: {
      code: number;
      status: boolean;
      message: string;
      reqId: string;
      count: number;
      page: number;
      limit: number;
      pageCount: number;
      hasPreviousPage: boolean;
      hasNextPage: boolean;
    };
  };
}

interface IMasterContentFilter {
  limit: number;
  page: number;
  keyword: string;
  isActive: boolean;
  showDataAll: boolean;
  orderBy: string;
  ordertype: string;
}
interface ด {
  limit: number;
  page: number;
  keyword: string;
  isActive: boolean;
  showDataAll: boolean;
  orderBy: string;
  ordertype: string;
  typeId: string;
}

interface IMasterContentCreateAndUpdate {
  name: string;
  icon: string;
  isActive: boolean;
}

interface IMasterScriptTag {
  data: {
    data: [
      {
        _id: string;
        name: string;
        isActive: boolean;
        deleted: bigint;
        createdAt: string;
        updatedAt: string;
        __v: 0;
      }
    ];
    meta: {
      code: number;
      status: boolean;
      message: string;
      reqId: string;
      count: number;
      page: number;
      limit: number;
      pageCount: number;
      hasPreviousPage: boolean;
      hasNextPage: boolean;
    };
  };
}

interface IMasterTagCreateAndUpdate {
  name: string;
}

interface IGetMasterBranch {
  data: {
    data: [
      {
        _id: string;
        code: string;
        name: string;
        saleCode: string;
        zone: string;
        address: string;
        isActive: boolean;
        deleted: boolean;
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    ];
    meta: {
      code: number;
      status: boolean;
      message: string;
      reqId: string;
      count: number;
      page: number;
      limit: number;
      pageCount: number;
      hasPreviousPage: boolean;
      hasNextPage: boolean;
    };
  };
}
interface IMasterBranchCreateAndUpdate {
  code: string;
  name: string;
  saleCode: string;
  zone: string;
  address: string;
  inActive: boolean;
}
interface IGetMasterType {
  data: {
    data: [
      {
        _id: string;
        name: string;
        product: boolean;
        deleted: boolean;
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    ];
    meta: {
      code: number;
      status: boolean;
      message: string;
      reqId: string;
      count: number;
      page: number;
      limit: number;
      pageCount: number;
      hasPreviousPage: boolean;
      hasNextPage: boolean;
    };
  };
}

interface IGetMasterProduct {
  data: {
    data: [
      {
        _id: string;
        name: string;
        inspect: boolean;
        descrition: string;
        typeId: string;
        deleted: boolean;
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    ];
    meta: {
      code: number;
      status: boolean;
      message: string;
      reqId: string;
      count: number;
      page: number;
      limit: number;
      pageCount: number;
      hasPreviousPage: boolean;
      hasNextPage: boolean;
    };
  };
}

interface IMasterProductCreateAndUpdate {
  name: string;
  descrition: string;
  typeId: string;
  isActive: boolean;
}

interface IGetMasterCommission {
  data: {
    data: [
      {
        _id: string;
        name: string;
        descrition: string;
        tier: [
          {
            min: number;
            max: number;
            percen: number;
            _id: string;
          }
        ];
        isActive: boolean;
        deleted: boolean;
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    ];
    meta: {
      code: number;
      status: boolean;
      message: string;
      reqId: string;
      count: number;
      page: number;
      limit: number;
      pageCount: number;
      hasPreviousPage: boolean;
      hasNextPage: boolean;
    };
  };
}

interface IMasterCommissionCreateAndUpdate {
  name: string;
  descrition: string;
  tier: Array<{
    no: number;
    min: number;
    max: number;
    percen: number;
  }>;
}

interface IGetMasterCarBrand {
  data: {
    data: [
      {
        _id: string;
        name: string;
        totalModel: number;
        totalSubModel: number;
        model: [
          {
            _id: string;
            brandId: string;
            name: string;
            isActive: boolean;
            deleted: boolean;
            createdAt: string;
            updatedAt: string;
            totalSubModel: number;
            subModel: [
              {
                _id: string;
                brandId: string;
                name: string;
                modelId: string;
                isActive: boolean;
                deleted: boolean;
                createdAt: string;
                updatedAt: string;
                __v: number;
              }
            ];
            __v: number;
          }
        ];
        isActive: boolean;
        deleted: boolean;
        createdAt: string;
        updatedAt: string;
        __v: number;
      }
    ];
    meta: {
      code: number;
      status: boolean;
      message: string;
      reqId: string;
      count: number;
      page: number;
      limit: number;
      pageCount: number;
      hasPreviousPage: boolean;
      hasNextPage: boolean;
    };
  };
}

interface IMasterCarBrandCreateAndUpdate {
  name: string;
  isActive: boolean;
}

interface IMasterCarModelCreateAndUpdate {
  name: string;
  brandId : string;
}


export type {
  IGetMasterContent,
  IMasterContentFilter,
  IMasterContentCreateAndUpdate,
  IMasterScriptTag,
  IMasterTagCreateAndUpdate,
  IMasterBranchCreateAndUpdate,
  IGetMasterType,
  IGetMasterProduct,
  IGetMasterBranch,
  IMasterProductCreateAndUpdate,
  IGetMasterCommission,
  IMasterCommissionCreateAndUpdate,
  IGetMasterCarBrand,
  IMasterCarBrandCreateAndUpdate,
  IMasterCarModelCreateAndUpdate
};
