import React from 'react'
import FAQ from '@components/FAQ/FAQ'
import { FAQMetatags } from '@components/Metatags/FAQMetatags'
export const Faq: React.FC = () => {
  return (
    <>
      <FAQMetatags />
      <FAQ />
    </>
  )
}

export default Faq
