
import './App.css'
import Header from './components/Header/Header'
// import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Footer from './pages/Footer/Footer'
import AboutMe from './pages/AboutMe/AboutMe'
function App() {


  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/about" element={<AboutMe />} />
                {/*<Route path="/portfolio" element={<Portfolio />} />*/}
                {/*<Route path="/blog" element={<Blog />} />*/}
                {/*<Route path="/contact" element={<Contact />} />*/}
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
