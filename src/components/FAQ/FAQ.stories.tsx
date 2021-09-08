import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import FAQ from '.'

import { colors } from '@static/theme'

storiesOf('Questions', module)
  .addDecorator(withKnobs)
  .add('AllQuestions', () => (
    <div style={{ backgroundColor: colors.navy.component, padding: 18 }}>
      <FAQ />
    </div>
  ))
