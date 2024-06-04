import Title from '../../components/Title';
import Content from '../../components/Content';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function DetailEvent() {
  return (
    <div className="lg:mx-[4rem] sm:max-sm mx-[1rem] py-[1rem]">
      <Navbar />
      <Title
        start={'Friday, February 28, 2024'}
        end={'Friday, March 11, 2024'}
      />

      <Content
        date={'Saturday, 12 March 2024'}
        time={'9:00 AM - 2:00 PM'}
        place={'Company xyz, New York'}
        start={
          'Join us for a day of inspiration and exploration at the Unlocking Creativity Symposium. Immerse yourself in discussions, workshops, and networking opportunities that will ignite your creative spark.'
        }
        overview={
          'The Unlocking Creativity Symposium is a dynamic gathering of thought leaders, industry experts, and creative minds. Engage in a series of stimulating discussions, interactive workshops, and networking opportunities that will not only inspire but also equip you with practical tools to unlock your creative potential.'
        }
        netOp={
          'Connect with fellow participants, speakers, and industry professionals during dedicated networking sessions. Share ideas, collaborate on projects, and expand your professional circle.'
        }
        keyFeatures={
          'Inspiring Keynote: Dr. Olivia Anderson will kick off the day with insights on unlocking creative potential in todays dynamic world.'
        }
      ></Content>
      <Footer />
    </div>
  );
}
