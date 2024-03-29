import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Group from './Assets/pages/Group'
import Help from './Assets/pages/Help'
import Shop from './Assets/pages/Shop'
import Steam from './Assets/pages/Steam'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header_top'
import Login from './Components/Main/login'
import Main from './Components/Main/Main'
import Register from './Components/Main/register'

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/' element={<Register/>} />
                <Route path='/home' element={<Main/>} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/group' element={<Group />} />
                <Route path='/steam' element={<Steam />} />
                <Route path="/help" element={<Help />} />
            </Routes>
            <Footer />
        </div>
    )
}
