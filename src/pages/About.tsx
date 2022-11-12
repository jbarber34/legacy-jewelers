// import Footer from '../Footer';
// import AboutNav from '../NavBars/AboutNav';

export default function About() {
  return (
    <div>
      {/* <AboutNav /> */}
      <div className='lg:px-36 pt-16 pb-8'>
        <h1
          className='container-fluid text-center text-2xl mt-8
        before:inline-block before:lg:w-52 before:md:w-40 before:sm:w-24 before:w-24 before:h-1 before:bg-legacyGold before:mb-2 before:mr-8
        after:inline-block after:lg:w-52 after:md:w-40 after:sm:w-24 after:w-24 after:h-1 after:bg-legacyGold after:mb-2 after:ml-8'
        >
          About Legacy Jewelers
        </h1>
        <div className='px-36 bg-white'>
          <h3 className='text-2xl pt-8 mr-72'>Mission Statement</h3>
          <p className='py-2 bg-white'>
            At Legacy Jewelers, we are committed to providing high-quality fine
            jewelry at an affordable price. We are here to serve our community
            with excellent customer service above the industry standard, it is
            the Legacy way!
          </p>
        </div>

        <p className='py-8 px-36 bg-white'>
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
          curabitur.
        </p>
      </div>
      <section id='legacyTeam'>
        <div className='lg:px-36 pb-8'>
          <h1
            className='container-fluid text-center text-2xl mt-8
        before:inline-block before:lg:w-52 before:md:w-40 before:sm:w-24 before:w-24 before:h-1 before:bg-legacyGold before:mb-2 before:mr-8
        after:inline-block after:lg:w-52 after:md:w-40 after:sm:w-24 after:w-24 after:h-1 after:bg-legacyGold after:mb-2 after:ml-8'
          >
            Meet the Legacy Team
          </h1>

          <div className='px-36 pb-8 bg-white'>
            <h3 className='text-2xl py-2 mr-96'>Kevin</h3>
            <p className='indent-8'>
              Hi, my name is Kevin Saelee, born and raised in Sacramento, CA. A
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
          <div className='pb-8 px-36 bg-white'>
            <h3 className='text-2xl py-2'>Nick</h3>
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
      {/* <div className='grid grid-rows-1 bg-black'>
          <Footer />
        </div> */}
    </div>
  );
}
