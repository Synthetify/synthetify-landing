import { PublicKey } from '@solana/web3.js'

export type ListedAsset = 'BTC' | 'ETH' | 'SOL' | 'FTT' | 'AVAX' | 'USD' | 'LUNA' | 'DOT'

export const assetsAccounts = {
  BTC: new PublicKey('GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU'),
  ETH: new PublicKey('JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB'),
  DOT: new PublicKey('EcV1X1gY2yb4KXxjVQtTHTbioum2gvmPnFk4zYAt7zne'),
  SOL: new PublicKey('H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG'),
  FTT: new PublicKey('8JPJJkmDScpcNmBRKGZuPuG2GYAveQgP3t5gFuMymwvF'),
  LUNA: new PublicKey('5bmWuR1dgP4avtGYMNKLuxumZTVKGgoN2BCMXWDNL9nY'),
  AVAX: new PublicKey('Ax9ujW5B9oqcv59N8m6f1BpTBq2rGeGaBcpKjC5UYsXU')
}
