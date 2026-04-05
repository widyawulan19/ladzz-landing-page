import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Collection from '../components/Collection'
import CatalogPage from '../pages/CatalogPage'

const AppRouter=()=> {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
    </Routes>
  )
}

export default AppRouter 
