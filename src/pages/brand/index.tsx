import LogoTile from '@components/LogoTile/LogoTile'
import PageHeader from '@components/PageHeader/PageHeader'
import { CardMedia, Grid } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React from 'react'
import greenLogo from '@static/svg/brand/synthetify_logo_green.svg'
import greenLogoVertical from '@static/svg/brand/synthetify_vertical_logo_green.svg'
import greenLogoHorizontal from '@static/svg/brand/synthetify_horizontal_logo_green.svg'
import whiteLogo from '@static/svg/brand/synthetify_logo_white.svg'
import whiteLogoVertical from '@static/svg/brand/synthetify_vertical_logo_white.svg'
import whiteLogoHorizontal from '@static/svg/brand/synthetify_horizontal_logo_white.svg'
import useStyles from './style'

export const Brand: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <>
      <PageHeader
        title={translate('brand.title')}
        description={translate('brand.description')}
      />
      <Grid className={classes.gridWrapper}>
        <LogoTile
          label={translate('brand.greenLogo')}
          logo={<CardMedia src={greenLogo.src} className={classes.simpleLogo} component='img' />}
          filePath='/brand/synthetify_logo_green.svg'
        />
        <LogoTile
          label={translate('brand.whiteLogo')}
          logo={<CardMedia src={whiteLogo.src} className={classes.simpleLogo} component='img' />}
          filePath='/brand/synthetify_logo_white.svg'
        />

        <LogoTile
          label={translate('brand.greenLogoVertical')}
          logo={<CardMedia src={greenLogoVertical.src} className={classes.verticalLogo} component='img' />}
          filePath='/brand/synthetify_vertical_logo_green.svg'
        />
        <LogoTile
          label={translate('brand.whiteLogoVertical')}
          logo={<CardMedia src={whiteLogoVertical.src} className={classes.verticalLogo} component='img' />}
          filePath='/brand/synthetify_vertical_logo_white.svg'
        />

        <LogoTile
          label={translate('brand.greenLogoHorizontal')}
          logo={<CardMedia src={greenLogoHorizontal.src} className={classes.horizontalLogo} component='img' />}
          filePath='/brand/synthetify_horizontal_logo_green.svg'
        />
        <LogoTile
          label={translate('brand.whiteLogoHorizontal')}
          logo={<CardMedia src={whiteLogoHorizontal.src} className={classes.horizontalLogo} component='img' />}
          filePath='/brand/synthetify_horizontal_logo_white.svg'
        />
      </Grid>
    </>
  )
}

export default Brand
