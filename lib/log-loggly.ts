
import { formatMessage, nxLogger } from '@raynode/nx-logger'
import { createClient, Instance, Options, useInstanceOrCreateClient } from './loggly-client'

export { Options, Instance }

export const createTransport = (options: Options | Instance): nxLogger.TransportFn => {
  const client = useInstanceOrCreateClient(options)
  return (configuration, messages) =>
    client.log(formatMessage(messages), configuration.namespace)
}
