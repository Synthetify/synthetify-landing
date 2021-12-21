import React, { useState, useEffect, useRef } from 'react'
import { CardMedia } from '@material-ui/core'
import { ListedAsset, assetsAccounts } from '@static/constants/assets'
import Binance, { DailyStatsResult } from 'binance-api-node'
import { parsePriceData } from '@pythnetwork/client'
import LUNA from '@static/svg/assets/LUNA.svg'
import BTC from '@static/svg/assets/BTC.svg'
import ETH from '@static/svg/assets/ETH.svg'
import DOT from '@static/svg/assets/DOT.svg'
import FTT from '@static/svg/assets/FTT.svg'
import SOL from '@static/svg/assets/SOL.svg'
import SRM from '@static/svg/assets/SRM.svg'
import USD from '@static/svg/assets/USD.svg'
import ListedAssets from '@components/HomePageSections/ListedAssets/ListedAssets'
import { getConnection } from '@utils/web3'
import { useTranslate } from '@utils/translations'
import useStyles from './style'

export const ListedAssetsContainer: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()
  const firstTimestamp = Date.now()
  const [data, setData] = useState<{ [key in ListedAsset]: Array<{ x: number, y: number }> }>({
    BTC: [
      { x: firstTimestamp, y: 1 },
      { x: firstTimestamp + 1, y: 1 }
    ],
    ETH: [
      { x: firstTimestamp, y: 1 },
      { x: firstTimestamp + 1, y: 1 }
    ],
    DOT: [
      { x: firstTimestamp, y: 1 },
      { x: firstTimestamp + 1, y: 1 }
    ],
    SOL: [
      { x: firstTimestamp, y: 1 },
      { x: firstTimestamp + 1, y: 1 }
    ],
    FTT: [
      { x: firstTimestamp, y: 1 },
      { x: firstTimestamp + 1, y: 1 }
    ],
    LUNA: [
      { x: firstTimestamp, y: 1 },
      { x: firstTimestamp + 1, y: 1 }
    ],
    SRM: [
      { x: firstTimestamp, y: 1 },
      { x: firstTimestamp + 1, y: 1 }
    ],
    USD: [
      { x: firstTimestamp, y: 1 },
      { x: firstTimestamp + 1, y: 1 }
    ]
  })

  const [prices, setPrices] = useState<{ [key in ListedAsset]: number }>({
    BTC: 0,
    ETH: 0,
    DOT: 0,
    SOL: 0,
    FTT: 0,
    LUNA: 0,
    SRM: 0,
    USD: 1
  })

  const tmpPrices = useRef<{ [key in ListedAsset]: number }>({
    BTC: 0,
    ETH: 0,
    DOT: 0,
    SOL: 0,
    FTT: 0,
    LUNA: 0,
    SRM: 0,
    USD: 1
  })

  const [changes, setChanges] = useState<{ [key in ListedAsset]: number }>({
    BTC: 0,
    ETH: 0,
    DOT: 0,
    SOL: 0,
    FTT: 0,
    LUNA: 0,
    SRM: 0,
    USD: 0
  })

  const subscriptions = useRef<number[]>([])

  useEffect(() => {
    const connection = getConnection()
    const binanceClient = Binance()
    const firstTimestamp = Date.now()

    const binanceSymbols = {
      BTC: 'BTCUSDT',
      ETH: 'ETHUSDT',
      DOT: 'DOTUSDT',
      SOL: 'SOLUSDT',
      FTT: 'FTTUSDT',
      LUNA: 'LUNAUSDT',
      SRM: 'SRMUSDT'
    }

    const connectEvents = () => {
      subscriptions.current = Object.entries(assetsAccounts).map(([name, pythKey]) => {
        return connection.onAccountChange(pythKey, accountInfo => {
          tmpPrices.current = {
            ...tmpPrices.current,
            [name as ListedAsset]: parsePriceData(accountInfo.data).price
          }
        })
      })

      setInterval(() => {
        setPrices(tmpPrices.current)
      }, 1000)

      const tmpChanges: { [key in ListedAsset]: number } = {
        BTC: 0,
        ETH: 0,
        DOT: 0,
        SOL: 0,
        FTT: 0,
        LUNA: 0,
        SRM: 0,
        USD: 0
      }
      const tmpData: { [key in ListedAsset]: Array<{ x: number, y: number }> } = {
        BTC: [
          { x: firstTimestamp, y: 1 },
          { x: firstTimestamp + 1, y: 1 }
        ],
        ETH: [
          { x: firstTimestamp, y: 1 },
          { x: firstTimestamp + 1, y: 1 }
        ],
        DOT: [
          { x: firstTimestamp, y: 1 },
          { x: firstTimestamp + 1, y: 1 }
        ],
        SOL: [
          { x: firstTimestamp, y: 1 },
          { x: firstTimestamp + 1, y: 1 }
        ],
        FTT: [
          { x: firstTimestamp, y: 1 },
          { x: firstTimestamp + 1, y: 1 }
        ],
        LUNA: [
          { x: firstTimestamp, y: 1 },
          { x: firstTimestamp + 1, y: 1 }
        ],
        SRM: [
          { x: firstTimestamp, y: 1 },
          { x: firstTimestamp + 1, y: 1 }
        ],
        USD: [
          { x: firstTimestamp, y: 1 },
          { x: firstTimestamp + 1, y: 1 }
        ]
      }

      Object.entries(binanceSymbols).forEach(([name, symbol]) => {
        let newData: Array<{ x: number, y: number }>
        binanceClient
          .candles({
            symbol: symbol,
            interval: '1h',
            limit: 24
          })
          .then(async (candles) => {
            newData = candles.map(candle => ({
              x: candle.closeTime,
              y: +candle.close
            }))

            tmpData[name as ListedAsset] = newData

            return binanceClient.dailyStats({ symbol })
          }, () => {})
          .then(value => {
            tmpChanges[name as ListedAsset] = +(value as DailyStatsResult).priceChangePercent
            newData.sort((a, b) => a.x - b.x)
            newData[0].x = (value as DailyStatsResult).openTime
            newData[0].y = +(value as DailyStatsResult).openPrice
            newData[23].x = (value as DailyStatsResult).closeTime
            newData[23].y = +(value as DailyStatsResult).lastPrice
          }, () => {
            tmpChanges[name as ListedAsset] = 0
          })
      })

      setChanges(tmpChanges)
      setData(tmpData)
    }
    connectEvents()

    return () => {
      subscriptions.current.forEach((id) => {
        const connection = getConnection()
        connection.removeAccountChangeListener(id).then(() => {}, () => {})
      })
    }
  }, [])

  const assetConsts = {
    BTC: {
      borderHue: 42,
      borderSaturation: 100,
      borderLuminosity: 52,
      icon: <CardMedia image={BTC} className={classes.BTC} />,
      name: translate('home.assets.BTC')
    },
    ETH: {
      borderHue: 228,
      borderSaturation: 45,
      borderLuminosity: 77,
      icon: <CardMedia image={ETH} className={classes.ETH} />,
      name: translate('home.assets.ETH')
    },
    // LTC: {
    //   borderHue: 217,
    //   borderSaturation: 66,
    //   borderLuminosity: 57,
    //   icon: <CardMedia image={LTC} className={classes.LTC} />,
    //   name: translate('home.assets.LTC')
    // },
    DOT: {
      borderHue: 217,
      borderSaturation: 66,
      borderLuminosity: 57,
      icon: <CardMedia image={DOT} className={classes.DOT} />,
      name: translate('home.assets.DOT')
    },
    SOL: {
      borderHue: 284,
      borderSaturation: 89,
      borderLuminosity: 59,
      icon: <CardMedia image={SOL} className={classes.SOL} />,
      name: translate('home.assets.SOL')
    },
    FTT: {
      borderHue: 189,
      borderSaturation: 66,
      borderLuminosity: 62,
      icon: <CardMedia image={FTT} className={classes.FTT} />,
      name: translate('home.assets.FTT')
    },
    // BNB: {
    //   borderHue: 43,
    //   borderSaturation: 89,
    //   borderLuminosity: 57,
    //   icon: <CardMedia image={BNB} className={classes.BNB} />,
    //   name: translate('home.assets.BNB')
    // },
    LUNA: {
      borderHue: 43,
      borderSaturation: 89,
      borderLuminosity: 57,
      icon: <CardMedia image={LUNA} className={classes.LUNA} />,
      name: translate('home.assets.LUNA')
    },
    SRM: {
      borderHue: 186,
      borderSaturation: 75,
      borderLuminosity: 67,
      icon: <CardMedia image={SRM} className={classes.SRM} />,
      name: translate('home.assets.SRM')
    },
    USD: {
      borderHue: 233,
      borderSaturation: 58,
      borderLuminosity: 85,
      icon: <CardMedia image={USD} className={classes.USD} />,
      name: translate('home.assets.USD')
    }
  }

  return <ListedAssets prices={prices} changes={changes} assetConsts={assetConsts} data={data} />
}

export default ListedAssetsContainer
