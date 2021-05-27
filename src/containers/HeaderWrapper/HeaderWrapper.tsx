import React from 'react'
import Header, { IHeaderAction } from '@components/Header/Header'
import links from '@static/constants/links'
const actions: IHeaderAction[] = [
  {
    name: 'Litepaper',
    action: () => {
      window.open(links.whitepaper)
    }
  }
]

export const HeaderWrapper: React.FC = () => {
  return <Header actions={actions} />
}

export default HeaderWrapper
