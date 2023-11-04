import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Packages';
import Contact from "./pages/Contact";
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import DesignDetail from "./pages/DesignDetail";
import designs from './webDesigns'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/designs'
            element={<Portfolio  designs={designs}/>}
          />
          <Route
            path="/about"
            element={<AboutUs/>}
            />
          <Route
            path="/contact"
            element={<Contact/>}/>
          <Route
            path="/packages"
            element={<Projects/>}
            />
            <Route 
            path="/designs/:designsId" 
            element={<DesignDetail/>} designs={designs}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
