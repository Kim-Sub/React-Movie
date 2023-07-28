import React from "react"
import "./App.scss"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Movies from "./pages/Movies"
import User from "./pages/User"
import About from "./pages/About"
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                {/*  <Route path="/movies1" element={<Home />} />   */}
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/users' element={<Users />} />
                <Route path='/users/:id' element={<User />} />
                <Route path='/about/:id' element={<About />} />
            </Routes>
        </div>
    )
}

export default App
