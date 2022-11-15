export default function Collections() {
  return (
    <section id='collections'>
      <div className='pb-24 md:px-12'>
        <div className='pt-16'>
          <h1
            className='before:inline-block before:md:w-52 before:sm:w-40 before:w-24 before:h-1 before:bg-legacyGold before:mb-2 before:mr-8
              after:inline-block after:md:w-52 after:sm:w-40 after:w-24 after:h-1 after:bg-legacyGold after:mb-2 after:ml-8
              rounded-lg text-center text-4xl  px-2 font-extrabold drop-shadow-xl shadow-black'
          >
            Collections
          </h1>
        </div>
        <div className='grid lg:grid-cols-6 sm:grid-cols-2 lg:mx-56 md:mx-2 gap-4 text-center pt-8'>
          <div>
            <img src='EngagementRings.png' />
            <h2 className='px-4 rounded-lg'>Engagement Rings</h2>
          </div>
          <div>
            <img src='Earrings.png' />
            <h2 className='px-4 rounded-lg'>Earrings</h2>
          </div>
          <div>
            <img src='Pendants.png' />
            <h2 className='px-4 rounded-lg'>Pendants</h2>
          </div>
          <div>
            <img src='bracelets.png' />
            <h2 className='px-4 rounded-lg'> Bracelets </h2>
          </div>
          <div>
            <img src='bridal_set.png' />
            <h2 className='px-4 rounded-lg'>Bridal Sets</h2>
          </div>
          <div>
            <img src='wedding_band.png' />
            <h2 className='px-4 rounded-lg'>Wedding Bands</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
