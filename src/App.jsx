import React from "react"
import { Routes, Route } from "react-router-dom"
// CSS
import "./App.scss"
// 컴포넌트
import Navbar from "./components/Navbar"
import ButtonToTop from "./components/Button-ToTop"
// 라우터 페이지
import Home from "./pages/Home"
import Users from "./pages/Users"
import Movies from "./pages/Movies"
import User from "./pages/User"
import MovieDetail from "./pages/home/Movie-Detail"
// HOOK
import Scroll100vh from "./hook/Scroll-100vh"









function App() {
    return (
        <div className='App'>
            <Scroll100vh>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/MovieDetail/:id' element={<MovieDetail />} />
    
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/users/:id' element={<User />} />
                </Routes>

                <ButtonToTop />
            </Scroll100vh>
        </div>
    )
}

export default App
