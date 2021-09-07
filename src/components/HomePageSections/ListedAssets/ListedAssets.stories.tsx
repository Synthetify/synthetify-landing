import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import ListedAssets from './ListedAssets'
import { colors } from '@static/theme'
import { CardMedia, makeStyles, Theme } from '@material-ui/core'
import BNB from '@static/svg/assets/BNB.svg'
import BTC from '@static/svg/assets/BTC.svg'
import ETH from '@static/svg/assets/ETH.svg'
import LTC from '@static/svg/assets/LTC.svg'
import FTT from '@static/svg/assets/FTT.svg'
import SOL from '@static/svg/assets/SOL.svg'
import SRM from '@static/svg/assets/SRM.svg'
import USD from '@static/svg/assets/USD.svg'

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    width: 50,
    height: 50,

    [theme.breakpoints.down('md')]: {
      width: 41,
      height: 41
    },

    [theme.breakpoints.down('xs')]: {
      width: 39,
      height: 39
    }
  }
}))

storiesOf('ListedAssets', module)
  .addDecorator(withKnobs)
  .add('plain', () => {
    const classes = useStyles()
    return (
      <div style={{ backgroundColor: colors.navy.component }}>
        <ListedAssets
          assetConsts={{
            BTC: {
              borderHue: 42,
              borderSaturation: 100,
              borderLuminosity: 52,
              icon: <CardMedia image={BTC} className={classes.icon} />,
              name: 'BTC'
            },
            ETH: {
              borderHue: 228,
              borderSaturation: 45,
              borderLuminosity: 77,
              icon: <CardMedia image={ETH} className={classes.icon} />,
              name: 'ETH'
            },
            LTC: {
              borderHue: 217,
              borderSaturation: 66,
              borderLuminosity: 57,
              icon: <CardMedia image={LTC} className={classes.icon} />,
              name: 'LTC'
            },
            SOL: {
              borderHue: 284,
              borderSaturation: 89,
              borderLuminosity: 59,
              icon: <CardMedia image={SOL} className={classes.icon} />,
              name: 'SOL'
            },
            FTT: {
              borderHue: 189,
              borderSaturation: 66,
              borderLuminosity: 62,
              icon: <CardMedia image={FTT} className={classes.icon} />,
              name: 'FTT'
            },
            BNB: {
              borderHue: 43,
              borderSaturation: 89,
              borderLuminosity: 57,
              icon: <CardMedia image={BNB} className={classes.icon} />,
              name: 'BNB'
            },
            SRM: {
              borderHue: 186,
              borderSaturation: 75,
              borderLuminosity: 67,
              icon: <CardMedia image={SRM} className={classes.icon} />,
              name: 'SRM'
            },
            USD: {
              borderHue: 233,
              borderSaturation: 58,
              borderLuminosity: 85,
              icon: <CardMedia image={USD} className={classes.icon} />,
              name: 'USD'
            }
          }}
          changes={{
            BTC: 0,
            ETH: 0,
            LTC: 0,
            SOL: 0,
            FTT: 0,
            BNB: 0,
            SRM: 0,
            USD: 0
          }}
          prices={{
            BTC: 0,
            ETH: 0,
            LTC: 0,
            SOL: 0,
            FTT: 0,
            BNB: 0,
            SRM: 0,
            USD: 1
          }}
        />
      </div>
    )
  })
