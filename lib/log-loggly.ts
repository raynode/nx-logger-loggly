
import { nxLogger, formatMessage } from '@raynode/nx-logger'
import * as loggly from 'loggly'

export const createTransport = (options: loggly.LogglyOptions): nxLogger.TransportFn => {
  const client = loggly.createClient(options)
  return (configuration, messages) =>
    client.log(formatMessage(messages), configuration.namespace)
}
