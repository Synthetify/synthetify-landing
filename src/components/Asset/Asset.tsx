import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import React, { ReactNode, useState } from 'react'
import AnimatedNumber from '@components/AnimatedNumber'
import theme, { colors } from '@static/theme'
import useStyles from './style'
import classNames from 'classnames'
import AssetPlot from '@components/AssetPlot/AssetPlot'

export interface IAsset {
  symbol: string
  name: string
  icon: ReactNode
  price: number
  change: number
  borderHue: number
  borderSaturation: number
  borderLuminosity: number
  className?: string
  data: Array<{ x: number, y: number }>
}

export const Asset: React.FC<IAsset> = ({
  symbol,
  name,
  icon,
  price,
  change,
  borderHue,
  borderSaturation,
  borderLuminosity,
  className,
  data
}) => {
  const classes = useStyles()
  const isLg = useMediaQuery(theme.breakpoints.up('lg'))

  const haloStyle = {
    borderColor: `hsla(${borderHue}, ${borderSaturation}%, ${borderLuminosity}%, 0.3)`,
    boxShadow: `0 0 16px 0px hsla(${borderHue}, ${borderSaturation}%, ${borderLuminosity}%, 0.3)`
  }
  const hoverHaloStyle = {
    borderColor: `hsla(${borderHue}, ${borderSaturation}%, ${Math.min(
      borderLuminosity + 15,
      100
    )}%, 0.3)`,
    boxShadow: `0 0 16px 0px hsla(${borderHue}, ${borderSaturation}%, ${Math.min(
      borderLuminosity + 15,
      100
    )}%, 0.3)`
  }

  const [halo, setHalo] = useState(haloStyle)

  const onMouseEnter = () => {
    // next.js has some issues with using useStyles with props, so I had to do this that way
    if (isLg) {
      setHalo(hoverHaloStyle)
    }
  }

  const onMouseLeave = () => {
    if (isLg) {
      setHalo(haloStyle)
    }
  }

  return (
    <Grid
      container
      className={classNames(classes.root, className)}
      justifyContent='space-between'
      style={halo}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <Grid container item alignItems='flex-start'>
        {icon}
        <Grid >
          <Typography className={classes.token}>{symbol}</Typography>
          <Typography className={classes.tokenName}>{name}</Typography>
        </Grid>
        <AssetPlot data={ data } />
      </Grid>
      <Grid container item alignItems='center' justifyContent='space-between' wrap='nowrap'>
        <Typography className={classes.value}>
          $
          <AnimatedNumber
            value={price}
            duration={300}
            formatValue={(value: number) => {
              if (value < 10) {
                return value.toFixed(4)
              }

              if (value < 1000) {
                return value.toFixed(2)
              }

              if (value < 10000) {
                return value.toFixed(1)
              }

              if (value < 100000) {
                return (value / 1000).toFixed(2)
              }

              if (value < 1000000) {
                return (value / 1000).toFixed(1)
              }

              return (value / 1000000).toFixed(2)
            }}
          />
          {price >= 10000
            ? (price >= 1000000 ? 'M' : 'K')
            : ''
          }
        </Typography>
        <Grid className={classes.change}>
          <Typography className={classes.chg}>CHG</Typography>
          <Typography
            className={classes.percent}
            style={{
              color:
                change > 0
                  ? colors.green.actionButton
                  : change < 0 ? colors.red.error : colors.navy.veryLightGrey
            }}>
            {change > 0 ? '+' : ''}
            <AnimatedNumber
              value={change}
              duration={300}
              formatValue={(value: number) => value.toFixed(2)}
            />
            %
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Asset
