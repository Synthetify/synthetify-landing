import React, { useState, useEffect, useRef } from 'react'
import { CardMedia } from '@material-ui/core'
import { ListedAsset, assetsAccounts } from '@static/constants/assets'
import Binance from 'binance-api-node'
import { parsePriceData } from '@pythnetwork/client'
import BNB from '@static/svg/assets/BNB.svg'
import BTC from '@static/svg/assets/BTC.svg'
import ETH from '@static/svg/assets/ETH.svg'
import LTC from '@static/svg/assets/LTC.svg'
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
  const [prices, setPrices] = useState<{[key in ListedAsset]: number}>({
    BTC: 0,
    ETH: 0,
    LTC: 0,
    SOL: 0,
    FTT: 0,
    BNB: 0,
    SRM: 0,
    USD: 1
  })

  const tmpPrices = useRef<{[key in ListedAsset]: number}>({
    BTC: 0,
    ETH: 0,
    LTC: 0,
    SOL: 0,
    FTT: 0,
    BNB: 0,
    SRM: 0,
    USD: 1
  })

  const [changes, setChanges] = useState<{[key in ListedAsset]: number}>({
    BTC: 0,
    ETH: 0,
    LTC: 0,
    SOL: 0,
    FTT: 0,
    BNB: 0,
    SRM: 0,
    USD: 0
  })

  useEffect(() => {
    const connection = getConnection()
    const binanceClient = Binance()

    const binanceSymbols = {
      BTC: 'BTCUSDT',
      ETH: 'ETHUSDT',
      LTC: 'LTCUSDT',
      SOL: 'SOLUSDT',
      FTT: 'FTTUSDT',
      BNB: 'BNBUSDT',
      SRM: 'SRMUSDT'
    }

    const connectEvents = () => {
      Object.entries(assetsAccounts).forEach(([name, pythKey]) => {
        connection.onAccountChange(pythKey, (accountInfo) => {
          tmpPrices.current = {
            ...tmpPrices.current,
            [name as ListedAsset]: parsePriceData(accountInfo.data).price
          }
        })
      })

      setInterval(() => {
        setPrices(tmpPrices.current)
      }, 1000)

      const tmpChanges: {[key in ListedAsset]: number} = {
        BTC: 0,
        ETH: 0,
        LTC: 0,
        SOL: 0,
        FTT: 0,
        BNB: 0,
        SRM: 0,
        USD: 0
      }

      Object.entries(binanceSymbols).forEach(([name, symbol]) => {
        binanceClient.dailyStats({ symbol }).then((value) => {
          if (!Array.isArray(value)) {
            tmpChanges[name as ListedAsset] = +value.priceChangePercent
          }
        }).catch(() => {
          tmpChanges[name as ListedAsset] = 0
        })
      })

      setChanges(tmpChanges)
    }

    connectEvents()
  }, [])

  const assetConsts = {
    BTC: {
      border: 'rgba(255, 180, 9, 0.3)',
      icon: <CardMedia image={BTC.src} className={classes.BTC} />,
      name: translate('home.assets.BTC')
    },
    ETH: {
      border: 'rgba(169, 180, 222, 0.3)',
      icon: <CardMedia image={ETH.src} className={classes.ETH} />,
      name: translate('home.assets.ETH')
    },
    LTC: {
      border: 'rgba(75, 131, 218, 0.3)',
      icon: <CardMedia image={LTC.src} className={classes.LTC} />,
      name: translate('home.assets.LTC')
    },
    SOL: {
      border: 'rgba(169, 82, 234, 0.3)',
      icon: <CardMedia image={SOL.src} className={classes.SOL} />,
      name: translate('home.assets.SOL')
    },
    FTT: {
      border: 'rgba(95, 202, 222, 0.3)',
      icon: <CardMedia image={FTT.src} className={classes.FTT} />,
      name: translate('home.assets.FTT')
    },
    BNB: {
      border: 'rgba(255, 180, 9, 0.3)',
      icon: <CardMedia image={BNB.src} className={classes.BNB} />,
      name: translate('home.assets.BNB')
    },
    SRM: {
      border: 'rgba(52, 193, 214, 0.3)',
      icon: <CardMedia image={SRM.src} className={classes.SRM} />,
      name: translate('home.assets.SRM')
    },
    USD: {
      border: 'rgba(134, 144, 223, 0.3)',
      icon: <CardMedia image={USD.src} className={classes.USD} />,
      name: translate('home.assets.USD')
    }
  }

  return <ListedAssets prices={prices} changes={changes} assetConsts={assetConsts} />
}

export default ListedAssetsContainer
