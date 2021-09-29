import { Connection } from '@solana/web3.js'

let connection: Connection

export const getConnection = () => {
  if (connection) {
    return connection
  }

  connection = new Connection('https://solana-api.projectserum.com')

  return connection
}
