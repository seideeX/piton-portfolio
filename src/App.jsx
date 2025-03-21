import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import AdviserSection from './components/AdviserSection'
function App() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto pt-20 p-6">
        <HeroSection/>
        <FeatureSection/>
        <AdviserSection/>
      </div>
    </>
  )
}

export default App
