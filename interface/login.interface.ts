interface ILoginResponse {
    "meta": {
        "code": number
        "status": boolean
        "message": string
        "reqId": string
    },
    "data": ILoginDataResponse
}

interface ILoginDataResponse {
    "accessToken": {
        "token": string
        "expiredAt": string
    },
    "refreshToken": {
        "token": string
        "expiredAt": string
    }
}

interface ILoginErrorResponse {
    "meta": {
        "code": number
        "status": boolean
        "message": string[]
        "reqId": string
    }
}

interface ILoginRequest {
    email : string
    password : string
    test: boolean
}

interface ILogoutResponse {
    "meta": {
        "code": number
        "status": boolean
        "message": string
        "reqId": string
    }
}

export type {
    ILoginErrorResponse,
    ILoginRequest,
    ILoginDataResponse,
    ILoginResponse,
    ILogoutResponse
}