import './App.css';
import Navbar from './components/common/Navbar';
import About from './components/pages/about'
import Home from './components/pages/home'
import Header from './components/common/header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <div className="wrapper">
    <Nav />
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
