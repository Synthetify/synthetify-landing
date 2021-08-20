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
      borderHue: 42,
      borderSaturation: 100,
      borderLuminosity: 52,
      icon: <CardMedia image={BTC.src} className={classes.BTC} />,
      name: translate('home.assets.BTC')
    },
    ETH: {
      borderHue: 228,
      borderSaturation: 45,
      borderLuminosity: 77,
      icon: <CardMedia image={ETH.src} className={classes.ETH} />,
      name: translate('home.assets.ETH')
    },
    LTC: {
      borderHue: 217,
      borderSaturation: 66,
      borderLuminosity: 57,
      icon: <CardMedia image={LTC.src} className={classes.LTC} />,
      name: translate('home.assets.LTC')
    },
    SOL: {
      borderHue: 284,
      borderSaturation: 89,
      borderLuminosity: 59,
      icon: <CardMedia image={SOL.src} className={classes.SOL} />,
      name: translate('home.assets.SOL')
    },
    FTT: {
      borderHue: 189,
      borderSaturation: 66,
      borderLuminosity: 62,
      icon: <CardMedia image={FTT.src} className={classes.FTT} />,
      name: translate('home.assets.FTT')
    },
    BNB: {
      borderHue: 43,
      borderSaturation: 89,
      borderLuminosity: 57,
      icon: <CardMedia image={BNB.src} className={classes.BNB} />,
      name: translate('home.assets.BNB')
    },
    SRM: {
      borderHue: 186,
      borderSaturation: 75,
      borderLuminosity: 67,
      icon: <CardMedia image={SRM.src} className={classes.SRM} />,
      name: translate('home.assets.SRM')
    },
    USD: {
      borderHue: 233,
      borderSaturation: 58,
      borderLuminosity: 85,
      icon: <CardMedia image={USD.src} className={classes.USD} />,
      name: translate('home.assets.USD')
    }
  }

  return <ListedAssets prices={prices} changes={changes} assetConsts={assetConsts} />
}

export default ListedAssetsContainer
