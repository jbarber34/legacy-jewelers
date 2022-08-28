// import classes from './Title.module.css';

function Title() {
  return (
    <div className='grid grid-cols-3 gap-8 bg-legacyGold'>
      <div></div>
      <img
        className='title-image'
        src='/LJ_Coming_Soon_White.jpg'
        alt='coming soon'
      />
    </div>
  );
}

export default Title;
