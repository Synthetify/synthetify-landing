import { Grid, Typography } from '@material-ui/core'
import React, { ReactNode } from 'react'
import AnimatedNumber from '@components/AnimatedNumber'
import { colors } from '@static/theme'
import useStyles from './style'
import classNames from 'classnames'

export interface IAsset {
  symbol: string
  name: string
  icon: ReactNode
  price: number
  change: number
  borderHue: number
  borderSaturation: number
  borderLuminosity: number
  className: string
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
  className
}) => {
  const classes = useStyles()

  const haloStyle = {
    borderColor: `hsla(${borderHue}, ${borderSaturation}%, ${borderLuminosity}%, 0.3)`,
    boxShadow: `0 0 16px 0px hsla(${borderHue}, ${borderSaturation}%, ${borderLuminosity}%, 0.3)`,
    '&:hover': {
      borderColor: `hsla(${borderHue}, ${borderSaturation}%, ${Math.min(borderLuminosity + 15, 100)}%, 0.3)`,
      boxShadow: `0 0 16px 0px hsla(${borderHue}, ${borderSaturation}%, ${Math.min(borderLuminosity + 15, 100)}%, 0.3)`
    }
  }

  return (
    <Grid
      container
      className={classNames(classes.root, className)}
      justifyContent='space-between'
      style={haloStyle}
    >
      <Grid container item alignItems='flex-start'>
        {icon}
        <Grid style={{ marginLeft: 6 }}>
          <Typography className={classes.token}>{symbol}</Typography>
          <Typography className={classes.tokenName}>{name}</Typography>
        </Grid>
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
            ? 'K'
            : (price >= 1000000 ? 'M' : '')
          }
        </Typography>
        <Grid className={classes.change}>
          <Typography className={classes.chg}>CHG</Typography>
          <Typography
            className={classes.percent}
            style={{
              color: change > 0
                ? colors.green.actionButton
                : (
                  change < 0
                    ? colors.red.error
                    : colors.navy.veryLightGrey
                )
            }}
          >
            {change > 0 ? '+' : ''}
            <AnimatedNumber
              value={change}
              duration={300}
              formatValue={(value: number) => value.toFixed(2)}
            />%
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Asset
