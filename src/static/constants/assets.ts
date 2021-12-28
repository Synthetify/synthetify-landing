import { PublicKey } from '@solana/web3.js'

export type ListedAsset = 'BTC' | 'ETH' | 'SOL' | 'FTT' | 'SRM' | 'USD' | 'LUNA' | 'DOT'

export const assetsAccounts = {
  BTC: new PublicKey('GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU'),
  ETH: new PublicKey('JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB'),
  // LTC: new PublicKey('8RMnV1eD55iqUFJLMguPkYBkq8DCtx81XcmAja93LvRR'),
  DOT: new PublicKey('EcV1X1gY2yb4KXxjVQtTHTbioum2gvmPnFk4zYAt7zne'),
  SOL: new PublicKey('H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG'),
  FTT: new PublicKey('8JPJJkmDScpcNmBRKGZuPuG2GYAveQgP3t5gFuMymwvF'),
  // BNB: new PublicKey('4CkQJBxhU8EZ2UjhigbtdaPbpTe6mqf811fipYBFbSYN'),
  LUNA: new PublicKey('5bmWuR1dgP4avtGYMNKLuxumZTVKGgoN2BCMXWDNL9nY'),
  SRM: new PublicKey('3NBReDRTLKMQEKiLD5tGcx4kXbTf88b7f2xLS9UuGjym')
}
