// import classes from './Title.module.css';

function Title() {
  return (
    <div className='grid-rows-1 bg-legacyGold'>
      <img
        className='m-auto title-image'
        src='/LJ_Coming_Soon_White.jpg'
        width={400}
        alt='coming soon'
      />
    </div>
  );
}

export default Title;

/* <div className='row'>
      <div className='col-lg-6 rounded mx-auto d-block'>
        <img
          //   className={classes['title-image']}
          src='/LJ_Coming_Soon_White.jpg'
          alt='LJ logo'
        />
      </div>
    </div> */
