import { Connection } from '@solana/web3.js'

const connection = new Connection('https://api.mainnet-beta.solana.com')

export const getConnection = () => connection
