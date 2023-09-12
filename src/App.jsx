import { Route, Routes } from 'react-router-dom';

// CSS
import "./App.scss"
// 컴포넌트
import Navbar from "./components/Navbar"
import ButtonToTop from "./components/Button-ToTop"
// 라우터 페이지
import Home from "./pages/Home"
import MovieDetail from "./pages/home/Movie-Detail"
import Search from './pages/Search';
import Movies from "./pages/Movies"
import User from "./pages/User"
import Users from "./pages/Users"

// HOOK
import Scroll100vh from "./hook/Scroll-100vh"
import RouterToTop from "./hook/RouterToTop"






function App() {
    


    return (
        <div className='App'>
            <RouterToTop />
            <Scroll100vh>
            
                <Navbar />
                
                    <Routes >
                        <Route path='/' element={<Home />} />
                        <Route path='/MovieDetail/:id' element={<MovieDetail />} />
                        <Route path='/Search' element={<Search />} />

                        <Route path='/Movies' element={<Movies />} />
                        <Route path='/Users' element={<Users />} />
                        <Route path='/Users/:id' element={<User />} />
                    </Routes>

                <ButtonToTop />
            </Scroll100vh>
        </div>
    )
}

export default App
