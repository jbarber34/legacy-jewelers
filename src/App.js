import './App.css';
import './styles.css';
import Nav from './components/Nav';
import Title from './components/Title';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <div className='grid'>
        {/* Title Section */}
        <div className='container-fluid'>
          <Title />
        </div>
        {/* Contact Us Section */}
        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      {/* <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div> */}
    </div>
  );
}

export default App;
