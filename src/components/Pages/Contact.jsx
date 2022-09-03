// import Map from './Map';

function Contact() {
  return (
    <section id='contact'>
      {/* <div className='lg:my-24 lg:grid lg:grid-cols-2 lg:gap-4 place-content-evenly h-48'> */}
      <div>
        <div>
          {/* {' '}
          <Map />{' '} */}
        </div>
        <div className='lg:mt-12 lg:mx-auto border-16 border-black lg:max-w-screen-sm'>
          <h1 className='text-center ml-2 mt-2 text-2xl'> Contact Us </h1>
          <table cellPadding={6} className='m-auto'>
            <tr>
              <td>
                <i className='fa fa-phone'></i>
              </td>
              <td>(916) 510-2130</td>
            </tr>
            <tr>
              <td>
                <i className='fas fa-store'></i>
              </td>
              <td>
                618 E Bidwell St. <br /> Folsom, CA 95630
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Contact;

//   /* <div className='row'>
//       <div className='col-lg-6 mt-12'>
//         <div>Google Map Placeholder</div>
//       </div>
//       <div className='md:ml-36 mt-12 col-lg-3 col-md-4 col-sm-4 border border-4 border-dark rounded-3'>
//         <h1 className='text-2xl mt-2 text-center'> Contact Us </h1>
//         <table cellPadding={6}>
//           <tr>
//             <td>
//               <i className='fa fa-phone'></i>
//             </td>
//             <td>(916) 510-2130</td>
//           </tr>
//           <tr>
//             <td>
//               <i className='fas fa-store'></i>
//             </td>
//             <td>
//               618 E Bidwell St. <br /> Folsom, CA 95630
//             </td>
//           </tr>
//         </table>
//       </div>
//     </div> */
