import Footer from '../Footer';
import AboutNav from '../NavBars/AboutNav';

function AboutUs() {
  return (
    <div>
      <AboutNav />
      <div>
        <h1 className='container-fluid text-center mb-2 text-2xl'>
          About Legacy Jewelers
        </h1>
        <p className='mb-12 px-36'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In ante
          metus dictum at tempor. Ornare aenean euismod elementum nisi. Sed arcu
          non odio euismod lacinia at quis risus sed. Et tortor at risus viverra
          adipiscing. Nam at lectus urna duis convallis convallis tellus.
          Ultrices gravida dictum fusce ut. Auctor neque vitae tempus quam
          pellentesque nec. Auctor eu augue ut lectus arcu. Congue quisque
          egestas diam in arcu cursus euismod quis. Laoreet non curabitur
          gravida arcu ac. In nulla posuere sollicitudin aliquam ultrices. Eget
          arcu dictum varius duis at. Quam nulla porttitor massa id. Penatibus
          et magnis dis parturient montes nascetur. Ipsum consequat nisl vel
          pretium. Est placerat in egestas erat imperdiet sed euismod nisi. Sed
          velit dignissim sodales ut eu. Id volutpat lacus laoreet non
          curabitur. Amet massa vitae tortor condimentum lacinia quis vel eros
          donec. Lacus sed turpis tincidunt id. Facilisi nullam vehicula ipsum a
          arcu. Enim nec dui nunc mattis enim ut tellus. Nunc sed augue lacus
          viverra vitae. Ultricies mi quis hendrerit dolor magna. Neque egestas
          congue quisque egestas diam in arcu cursus euismod. Convallis posuere
          morbi leo urna molestie at. Lectus mauris ultrices eros in cursus.
          Aliquet nibh praesent tristique magna sit amet purus gravida. Pretium
          viverra suspendisse potenti nullam ac tortor vitae purus. Condimentum
          id venenatis a condimentum vitae. Diam quis enim lobortis scelerisque
          fermentum dui. Imperdiet dui accumsan sit amet nulla facilisi morbi.
          Gravida cum sociis natoque penatibus et magnis dis parturient montes.
          Ultricies lacus sed turpis tincidunt id aliquet risus. Auctor neque
          vitae tempus quam pellentesque nec nam aliquam sem. Laoreet
          suspendisse interdum consectetur libero id faucibus. Fringilla est
          ullamcorper eget nulla facilisi etiam. Quis hendrerit dolor magna eget
          est lorem ipsum. Ipsum faucibus vitae aliquet nec ullamcorper sit amet
          risus. Mauris nunc congue nisi vitae suscipit. Nulla pellentesque
          dignissim enim sit amet venenatis urna cursus eget. Aliquet risus
          feugiat in ante metus dictum at tempor commodo. Volutpat blandit
          aliquam etiam erat.
        </p>
      </div>
      <section id='legacyTeam'>
        <div className=''>
          <h1 className='container-fluid text-center mb-2 text-2xl'>
            Meet the Legacy Team
          </h1>

          <div className='mb-12 px-36'>
            <h3 className='text-2xl my-2'>Kevin</h3>
            <p className='indent-8'>
              Hi my name is Kevin Saelee, born and raised in Sacramento, CA. A
              father of one, to my daughter Sophia. I'm into basketball,
              football and anything my daughter is into because she's my world.
              My favorite teams are the Los Angeles Lakers, San Francisco Forty
              Niners and New York Yankees.
            </p>
            <p className='mt-2 indent-8'>
              I've been in the jewelry industry for over 15 years serving the
              greater Sacramento area from Elk Grove, Sacramento, Folsom and
              Granite Bay. My partner Nick and I decided it was time to take our
              experience, knowledge and bring an atmosphere where everyone feels
              welcome when they step into our store. It's the Legacy Jewelers
              way!
            </p>
          </div>
          <div className='mb-12 px-36'>
            <h3 className='text-2xl my-2'>Nick</h3>
            <p className='indent-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              ante metus dictum at tempor. Ornare aenean euismod elementum nisi.
              Sed arcu non odio euismod lacinia at quis risus sed. Et tortor at
              risus viverra adipiscing.
            </p>
            <p className='mt-2 indent-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              ante metus dictum at tempor. Ornare aenean euismod elementum nisi.
              Sed arcu non odio euismod lacinia at quis risus sed. Et tortor at
              risus viverra adipiscing.
            </p>
          </div>
        </div>
      </section>
      <div className='grid grid-rows-1 bg-black'>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
