import React from 'react'
import { Grid } from '@material-ui/core'
import { ResponsiveLine } from '@nivo/line'
import { colors } from '@static/theme'
// @ts-expect-error
import { linearGradientDef } from '@nivo/core'

import useStyles from './style'
interface IDataItem {
  x: number
  y: number
}
interface IProps {
  data: Array<{ x: number, y: number }>
}
export const AssetPlot: React.FC<IProps> = ({ data }) => {
  const classes = useStyles()
  const getPlotMin = () => {
    const values = data.map(point => point.y)
    const minValue = Math.min(...values)
    const maxValue = Math.max(...values)

    if (minValue === maxValue) {
      return minValue - 1
    }

    return minValue - (maxValue - minValue)
  }

  const getPlotMax = () => {
    const values = data.map(point => point.y)
    const minValue = Math.min(...values)
    const maxValue = Math.max(...values)

    if (minValue === maxValue) {
      return minValue + 1
    }
    return maxValue * 1.01
  }
  const getGradientEnd = () => {
    const values = data.map(point => point.y)
    const minValue = Math.min(...values)
    const maxValue = Math.max(...values)

    if (minValue === maxValue) {
      return 100
    }

    return (100 - (minValue / maxValue) * 100) * 2
  }

  const isDecreasing = () => {
    const firstDataValue: IDataItem = [...data].pop() as IDataItem
    const lastDataValue: IDataItem = [...data].shift() as IDataItem
    return firstDataValue.y >= lastDataValue.y
  }

  return (
    <Grid className={classes.linePlot}>
      <ResponsiveLine
        data={[{ id: 'plot', data: data }]}
        margin={{ top: 1, right: 0, bottom: 0, left: 0 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: getPlotMin(),
          max: getPlotMax()
        }}
        yFormat=' >-.2f'
        curve='linear'
        lineWidth={1}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        colors={isDecreasing() ? colors.green.main : colors.red.error}
        crosshairType='bottom'
        enableArea={true}
        useMesh={true}
        isInteractive={false}
        legends={[]}
        fill={[{ match: '*', id: 'gradient' }]}
        defs={[
          linearGradientDef('gradient', [
            { offset: 0, color: 'inherit' },
            { offset: getGradientEnd(), color: 'inherit', opacity: 0.3 }
          ])
        ]}
      />
    </Grid>
  )
}

export default AssetPlot
