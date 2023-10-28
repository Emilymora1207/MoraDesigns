import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Packages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
