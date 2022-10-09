import HomeNav from '../NavBars/HomeNav';
import Title from '../Title';
import Footer from '../Footer';
import Contact from '../Pages/Contact';
import Services from './Services';

function Home() {
  return (
    <div>
      <HomeNav />
      <div className='auto-rows-max'>
        {/* Title Section */}
        <div className='container-fluid grid-rows-1 bg-legacyGold'>
          <Title />
        </div>
        {/* Services Section */}
        <div>
          <Services />
        </div>
        {/* Contact Us Section */}
        <div className='lg:my-12'>
          <Contact />
        </div>
        <div className='grid grid-rows-1 bg-black'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
