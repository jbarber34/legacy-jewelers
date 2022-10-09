function Services() {
  return (
    <section id='services'>
      <div className='bg-black pb-24 md:px-12'>
        <div className='pt-16 bg-black'>
          <h1 className='rounded-lg text-center text-4xl lg:mx-96 md:mx-52 min-w-fit px-2 bg-legacyGold text-white font-extrabold drop-shadow-xl shadow-black'>
            Services
          </h1>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:mx-56 md:mx-2 gap-4 text-center pt-8'>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Jewelry Repair
          </h2>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Watch Repair
          </h2>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Appraisals
          </h2>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Cleaning/Polishing
          </h2>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Gold Buy
          </h2>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Custom Jewelry
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Services;
