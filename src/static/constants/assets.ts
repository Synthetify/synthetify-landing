import { PublicKey } from '@solana/web3.js'

export type ListedAsset = 'BTC' | 'ETH' | 'LTC' | 'SOL' | 'FTT' | 'BNB' | 'SRM' | 'USD'

// TODO: These are devnet keys. Switch to mainnet ones when available.
export const assetsAccounts = {
  BTC: new PublicKey('HovQMDrbAgAYPCmHVSrezcSmkMtXSSUsLDFANExrZh2J'),
  ETH: new PublicKey('EdVCmQ9FSPcVe5YySXDPCRmc8aDQLKJ9xvYBMZPie1Vw'),
  LTC: new PublicKey('BLArYBCUYhdWiY8PCUTpvFE21iaJq85dvxLk9bYMobcU'),
  SOL: new PublicKey('J83w4HKfqxwcq3BEMMkPFSppX3gqekLyLJBexebFVkix'),
  FTT: new PublicKey('6vivTRs5ZPeeXbjo7dfburfaYDWoXjBtdtuYgQRuGfu'),
  BNB: new PublicKey('GwzBgrXb4PG59zjce24SF2b9JXbLEjJJTBkmytuEZj1b'),
  SRM: new PublicKey('992moaMQKs32GKZ9dxi8keyM2bUmbrwBZpK4p2K6X5Vs')
}
