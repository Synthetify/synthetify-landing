import { PublicKey } from '@solana/web3.js'

export type ListedAsset = 'BTC' | 'ETH' | 'LTC' | 'SOL' | 'FTT' | 'BNB' | 'SRM' | 'USD'

// TODO: These are devnet keys. Switch to mainnet ones when available.
export const assetsAccounts = {
  BTC: new PublicKey('GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU'),
  ETH: new PublicKey('JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB'),
  LTC: new PublicKey('8RMnV1eD55iqUFJLMguPkYBkq8DCtx81XcmAja93LvRR'),
  SOL: new PublicKey('H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG'),
  FTT: new PublicKey('8JPJJkmDScpcNmBRKGZuPuG2GYAveQgP3t5gFuMymwvF'),
  BNB: new PublicKey('4CkQJBxhU8EZ2UjhigbtdaPbpTe6mqf811fipYBFbSYN'),
  SRM: new PublicKey('3NBReDRTLKMQEKiLD5tGcx4kXbTf88b7f2xLS9UuGjym')
}
