// import Contact from '~/components/ui/Contact';
import Collections from '~/components/ui/Collections';
import Services from '~/components/ui/Services';
import Testimonials from '~/components/ui/Testimonials';
import Title from '~/components/ui/Title';

function Home() {
  return (
    <div>
      <Title />
      <Collections />
      <Services />
      <Testimonials />
      {/* <Contact /> */}
    </div>
  );
}
export default Home;
