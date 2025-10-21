
import './App.css'
import Header from './components/Header/Header'
// import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
function App() {


  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/about" element={<About />} />*/}
                {/*<Route path="/services" element={<Services />} />*/}
                {/*<Route path="/portfolio" element={<Portfolio />} />*/}
                {/*<Route path="/blog" element={<Blog />} />*/}
                {/*<Route path="/contact" element={<Contact />} />*/}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
