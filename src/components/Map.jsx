export default function Map() {
  return (
    <div className='mapWrapper'>
      <iframe
        title='Google Map'
        // width='600'
        // height='400'
        // style='border:0'
        loading='lazy'
        allowfullscreen
        src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8au67hrkmoARCw7rf9Ddejs&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}'
      ></iframe>
    </div>
  );
}

// import { GoogleMap, useLoadScript } from '@react-google-maps/api';

// const libraries = ['places'];

// export default function Map() {
// const { isLoaded } = useLoadScript({
//   googleMapsApiKey: '',
//   libraries,
// });

// // This returns while map is being loaded
// if (!isLoaded) return <div>Loading...</div>;
// return (
//   <div>
//     <GoogleMap
//       zoom={20}
//       center={{ lat: 38.672642, lng: -121.161407 }}
//       mapContainerClassName='mapWrapper'
//     ></GoogleMap>
//   </div>
// );
// }
