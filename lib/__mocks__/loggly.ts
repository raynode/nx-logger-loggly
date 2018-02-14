
let createClient = () => () => null
export const setMockCreateClient = mock => createClient = mock

const loggly = {
  createClient: () => createClient(),
  setMockCreateClient,
}


module.exports = loggly
