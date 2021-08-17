import { Connection } from '@solana/web3.js'

const connection = new Connection('https://api.devnet.solana.com') // TODO: change to mainnet url when mainnet pyth will be available

export const getConnection = () => connection
