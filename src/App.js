import './App.css';
import Navbar from './components/common/Navbar';
import About from './components/pages/about'
import Home from './components/pages/home'
import Header from './components/common/header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/common/Footer';


function App() {
  return (
    <div className="App">
    <Router>
    <div className='NavBAR'>
    <Header />
    <Navbar />
    </div>
    <div className="wrapper">
    
    <main>
    <Routes>
     <Route path = "/" element={<Home/>} />
     <Route path ='/about' element={<About/>} />
     </Routes>
      </main>
  </div>
  <Footer />
  </Router>
  </div>
);
}

export default App;
