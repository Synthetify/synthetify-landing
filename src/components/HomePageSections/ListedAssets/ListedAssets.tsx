import Asset, { IAsset } from '@components/Asset/Asset'
import { Grid, Typography } from '@material-ui/core'
import { ListedAsset } from '@static/constants/assets'
import React from 'react'
import useStyles from './style'
import { useTranslation } from 'react-i18next'
import '@static/translations/init18n'

export interface IListedAsset {
  x: number
  y: number
}
export interface IListedAssets {
  prices: { [key in ListedAsset]: number }
  changes: { [key in ListedAsset]: number }
  assetConsts: {
    [key in ListedAsset]: Pick<
      IAsset,
      'icon' | 'borderHue' | 'borderSaturation' | 'borderLuminosity' | 'name'
    >
  }
  data: { [key in ListedAsset]: Array<IListedAsset> }
}

export const ListedAssets: React.FC<IListedAssets> = ({ prices, changes, assetConsts, data }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Grid container className={classes.root} direction='column'>
      <Typography className={classes.title}>{t('home.supportedAssets')}</Typography>
      <Typography className={classes.description}>
        {t('home.supportedAssets.description')}
      </Typography>
      <Grid className={classes.assets}>
        {Object.entries(prices).map(([symbol, price], index) => (
          <Asset
            key={index}
            symbol={symbol}
            price={price}
            change={changes[symbol as ListedAsset]}
            {...assetConsts[symbol as ListedAsset]}
            data={data[symbol as ListedAsset]}
          />
        ))}
      </Grid>
    </Grid>
  )
}

export default ListedAssets
