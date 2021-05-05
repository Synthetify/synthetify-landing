import React from 'react'
import Header, { IHeaderAction } from '@components/Header/Header'

const actions: IHeaderAction[] = [{ name: 'Litepaper', action: () => {} }]

export const HeaderWrapper: React.FC = () => {
  return <Header actions={actions} />
}

export default HeaderWrapper
