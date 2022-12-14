export default function Brands() {
  return (
    <section id='brands'>
      <div className='pb-24 md:px-12'>
        <div className='pt-16'>
          <h1
            className='before:inline-block before:md:w-52 before:sm:w-40 before:w-24 before:h-1 before:bg-legacyGold before:mb-2 before:mr-8
                after:inline-block after:md:w-52 after:sm:w-40 after:w-24 after:h-1 after:bg-legacyGold after:mb-2 after:ml-8
                rounded-lg text-center text-4xl  px-2 font-extrabold drop-shadow-xl shadow-black'
          >
            Our Brands
          </h1>
        </div>
        <div className='grid lg:grid-cols-6 sm:grid-cols-2 lg:mx-56 md:mx-2 gap-4 text-center pt-8'>
          <div className='mx-auto'>
            <img src='Imperial.png' />
          </div>
          <div className='mx-auto'>
            <img src='Skashi.png' />
          </div>
          <div className='mx-auto'>
            <img src='Valina.png' />
          </div>
          <div className='mx-auto'>
            <img src='CrownRing.png' />
          </div>
          <div className='mx-auto'>
            <img src='DoraRings.png' />
          </div>
          <div className='mx-auto'>
            <img src='Malakan_diamonds.png' />
          </div>
        </div>
      </div>
    </section>
  );
}
