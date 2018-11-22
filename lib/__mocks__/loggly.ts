
let createClient: any = () => (): any => null
export const setMockCreateClient = (mock: any) => createClient = mock

const loggly = {
  createClient: () => createClient(),
  setMockCreateClient,
}

module.exports = loggly
