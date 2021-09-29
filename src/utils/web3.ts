import { Connection } from '@solana/web3.js'

let connection: Connection | null = null

export const getConnection = (): Connection => {
  if (connection) {
    return connection
  }

  connection = new Connection('https://solana-api.projectserum.com')

  return connection
}
