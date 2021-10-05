import LogoTile from '@components/LogoTile/LogoTile'
import PageHeader from '@components/PageHeader/PageHeader'
import { CardMedia, Grid } from '@material-ui/core'
import { useTranslate } from '@utils/translations'
import React from 'react'
import greenLogo from '@static/svg/brand/synthetify_logo_green.svg'
import greenLogoVertical from '@static/svg/brand/synthetify_vertical_logo_green.svg'
import greenLogoHorizontal from '@static/svg/brand/synthetify_horizontal_logo_green.svg'
import greenLogoBorder from '@static/svg/brand/synthetify_logo_green_border.svg'
import whiteLogo from '@static/svg/brand/synthetify_logo_white.svg'
import whiteLogoVertical from '@static/svg/brand/synthetify_vertical_logo_white.svg'
import whiteLogoHorizontal from '@static/svg/brand/synthetify_horizontal_logo_white.svg'
import whiteLogoBorder from '@static/svg/brand/synthetify_logo_white_border.svg'
import useStyles from '@pagesStyles/brand/style'
import { BrandMetatags } from '@components/Metatags/BrandMetatags'

export const Brand: React.FC = () => {
  const classes = useStyles()
  const translate = useTranslate()

  return (
    <>
      <BrandMetatags />
      <PageHeader
        title={translate('brand.title')}
        description={translate('brand.description')}
      />
      <Grid className={classes.gridWrapper}>
        <LogoTile
          label={translate('brand.greenLogo')}
          logo={<CardMedia src={greenLogo} className={classes.simpleLogo} component='img' />}
          filePath='/brand/synthetify_logo_green.svg'
        />
        <LogoTile
          label={translate('brand.whiteLogo')}
          logo={<CardMedia src={whiteLogo} className={classes.simpleLogo} component='img' />}
          filePath='/brand/synthetify_logo_white.svg'
        />

        <LogoTile
          label={translate('brand.greenLogoVertical')}
          logo={<CardMedia src={greenLogoVertical} className={classes.verticalLogo} component='img' />}
          filePath='/brand/synthetify_vertical_logo_green.svg'
        />
        <LogoTile
          label={translate('brand.whiteLogoVertical')}
          logo={<CardMedia src={whiteLogoVertical} className={classes.verticalLogo} component='img' />}
          filePath='/brand/synthetify_vertical_logo_white.svg'
        />

        <LogoTile
          label={translate('brand.greenLogoHorizontal')}
          logo={<CardMedia src={greenLogoHorizontal} className={classes.horizontalLogo} component='img' />}
          filePath='/brand/synthetify_horizontal_logo_green.svg'
        />
        <LogoTile
          label={translate('brand.whiteLogoHorizontal')}
          logo={<CardMedia src={whiteLogoHorizontal} className={classes.horizontalLogo} component='img' />}
          filePath='/brand/synthetify_horizontal_logo_white.svg'
        />

        <LogoTile
          label={translate('brand.greenLogo')}
          logo={<CardMedia src={greenLogoBorder} className={classes.simpleLogo} component='img' />}
          filePath='/brand/synthetify_logo_green_border.svg'
        />
        <LogoTile
          label={translate('brand.whiteLogo')}
          logo={<CardMedia src={whiteLogoBorder} className={classes.simpleLogo} component='img' />}
          filePath='/brand/synthetify_logo_white_border.svg'
        />
      </Grid>
    </>
  )
}

export default Brand
