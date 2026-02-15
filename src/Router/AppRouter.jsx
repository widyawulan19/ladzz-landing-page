import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Collection from '../components/Collection'

const AppRouter=()=> {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/collection' element={<Collection/>}/>
    </Routes>
  )
}

export default AppRouter 
