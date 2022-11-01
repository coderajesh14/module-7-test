import React from 'react'
import NavigationBar from './Component/Navigation/NavigationBar'
import FooterOne from './Component/Footer/FooterOne/FooterOne'
import FooterTwo from './Component/Footer/FooterTwo/FooterTwo'
import Recommendation from './Component/Recommendation/Recommendation'
import Section from './Component/Section/Section'

function App() {
  return (
    <div>
      <NavigationBar />
      <Section />
      <Recommendation />
      <FooterOne />
      <FooterTwo />
    </div>
  )
}

export default App