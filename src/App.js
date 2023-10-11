import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SubFooter from './components/SubFooter'
import About from './components/About'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Cards from './components/Cards'
import Slider from './components/Slider'
import InfiniteSlider from './components/InfiniteSlider'

export default function App() {
  return (
    <div >
      <Navbar/>
      {/* <Slider/> */}
      <Home/>
      <About/>
      <Gallery/>
      <Cards/>
      <InfiniteSlider/>
      {/* <SubFooter/> */}
      <Footer/>
    </div>
  )
}
