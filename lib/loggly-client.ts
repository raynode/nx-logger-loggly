
import * as loggly from 'loggly'

export interface Options {
  token: string
  subdomain: string
  tags?: string[]
  json?: boolean
  host?: string
  auth?: {
    username: string
    password: string,
  }
}

export interface Instance {
  log(message: any, tags?: string[], callback?: (err: any, results: any) => void): Instance
  log(message: any, callback?: (err: any, results: any) => void): Instance
}

export const isLogglyClient = (client: any): client is Instance =>
  client && client.log && (typeof client.log === 'function')

export const createClient = (options: Options) => loggly.createClient(options) as Instance

export const useInstanceOrCreateClient = (input: Instance | Options): Instance =>
  isLogglyClient(input) ? input : createClient(input)
