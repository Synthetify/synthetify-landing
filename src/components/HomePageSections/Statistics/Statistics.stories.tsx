import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Statistics from './Statistics'
import { colors } from '@static/theme'

storiesOf('Statistics', module)
  .addDecorator(withKnobs)
  .add('plain', () => (
    <div style={{ backgroundColor: colors.navy.component }}>
      <Statistics />
    </div>
  ))
