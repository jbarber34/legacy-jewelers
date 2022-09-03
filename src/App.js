import './App.css';
import './styles.css';
// import Contact from './components/Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/Pages/AboutUs';
import Home from './components/Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        {/* <Route path='/#contact' element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
