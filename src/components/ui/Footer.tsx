import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faStore,
  faEnvelope,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faInstagram,
  faYelp,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <section id='contact'>
      <div>
        <div className='bg-black grid grid-cols-3 place-items-center'>
          <div>
            <img
              //   className='image-center'
              src='/LJ_Logo_Black.jpg'
              width={400}
              alt='coming soon'
            />
          </div>
          <div>
            <div className='mb-4 mt-12 lg:mx-auto lg:max-w-screen-sm'>
              <h1 className='text-center ml-2 mt-2 text-xl text-white'>
                {' '}
                Contact Us{' '}
              </h1>
              <table cellPadding={6} className='m-auto text-white'>
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className='fa-lg text-legacyGold'
                      />
                    </td>
                    <td className='text-sm'>(916) 510-2130</td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faStore}
                        className='fa-lg text-legacyGold'
                      />
                    </td>
                    <td className='text-sm'>
                      618 E Bidwell St. <br /> Folsom, CA 95630
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className='fa-lg text-legacyGold'
                      />
                    </td>
                    <td className='text-sm'>legacy@legacyjewelers.com</td>
                  </tr>
                </tbody>
              </table>
              <div className='text-center p-2'>
                <a
                  className='p-3'
                  href='https://instagram.com/legacyjewelersca?igshid=YmMyMTA2M2Y='
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='fa-xl text-legacyGold'
                  />
                </a>
                <a
                  className='p-3'
                  href='https://m.facebook.com/YourLegacyJewelers/'
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className='fa-xl text-legacyGold'
                  />
                </a>
                <a className='p-3' href='https://yelp.to/A8bKkCzh5sb'>
                  <FontAwesomeIcon
                    icon={faYelp}
                    className='fa-xl text-legacyGold'
                  />{' '}
                </a>
              </div>
            </div>
          </div>
          <div className='mb-24 mt-6 lg:mx-auto lg:max-w-screen-sm'>
            <h1 className='text-center ml-2 mt-2 text-xl text-white'>
              Store Hours
            </h1>
            <table cellPadding={6} className='m-auto text-white'>
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faClock}
                      className='fa-lg text-legacyGold'
                    />
                  </td>
                  <td className='text-sm'>
                    Tue- Fri: 11:00am – 7:00pm <br />
                    Sat: 11:00am - 5:00pm <br />
                    Sunday - Monday: By Appointment only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer className='bg-black text-white text-center text-xs pb-2'>
          <FontAwesomeIcon
            icon={faCopyright}
            className='fa-xs text-legacyGold'
          />{' '}
          2022 Legacy Jewelers
        </footer>
      </div>
    </section>
  );
}
