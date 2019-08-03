import { APIRequest } from '@/infra/network/APIRequest'
import { HTTPMethod } from '@/infra/network/APIClient'
import { U2fRegisterResponse } from '@/types/server'

export class RequestRegister implements APIRequest<U2fRegisterResponse> {
  response: U2fRegisterResponse
  path = '/register_request'
  method = HTTPMethod.GET
}
