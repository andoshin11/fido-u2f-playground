export interface RegisterRequest {
  version: string
  challenge: string
}

export interface RegisteredKey {
  version: string
  key_handle?: string
  app_id: string
}

export interface U2fRegisterResponse {
  app_id: string
  register_requests: RegisterRequest[]
  registered_keys: RegisteredKey[]
}

