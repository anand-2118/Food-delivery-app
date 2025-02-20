import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Explore-menu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'
import AppDownload from '../../components/AppDownload/AppDownload'
function Home() {
  const [category,setCategory] = useState('all')

  return (
    <div>
       <Header/>
       <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay category={category} setCategory={setCategory}/>
       <AppDownload/>
       <Footer/>
    </div>
  )
}

export default Home