import React from 'react'
import HeaderImage from '../components/contact/headerImage'
import WriteToUs from '../components/contact/writeToUs'
import Adress from '../components/contact/Adress'
import DealerDetails from '../components/contact/delarDetails'

function Contact() {
  return (
    <div>
        <HeaderImage/>
        <WriteToUs/>
        <Adress/>
        <DealerDetails/>
    </div>
  )
}

export default Contact