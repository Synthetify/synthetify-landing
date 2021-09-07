import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import Footer from '@components/Footer/Footer'
import { colors } from '@static/theme'

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('plain', () => (
    <div style={{ backgroundColor: colors.navy.component }}>
      <Footer />
    </div>
  ))
