import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Question } from './Question'

import { colors } from '@static/theme'

storiesOf('Questions', module)
  .addDecorator(withKnobs)
  .add('SingleQuestion', () => (
    <div style={{ backgroundColor: colors.navy.component, padding: 18 }}>
      <Question question='What is Synthentify?' answer='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, veritatis maxime? Dolorem, modi excepturi! Possimus rerum illo voluptatem tenetur minima dolor ratione error a doloremque.' />
    </div>
  ))
