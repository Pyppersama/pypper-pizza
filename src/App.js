import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="appContent">
        <Routes>
        <Route path='/' exact element={ <Home /> }/>
        <Route path='/menu' exact element={ <Menu /> }/>
        <Route path='/about' exact element={ <About /> }/>
        <Route path='/contact' exact element={ <Contact /> }/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
