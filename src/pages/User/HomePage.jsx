import Badge from '../../components/User/Badge';
import Button from '../../components/User/Button';
import Navbar from '../../components/User/Navbar';
import Footer from '../../components/User/Footer';
import { FiArrowUpRight } from 'react-icons/fi';
import ReviewCard from '../../components/User/ReviewCard';
import {
  getAllEvents,
  addEvent,
  deleteEvent,
  updateEvent,
} from '../../utils/firestore';

export default function HomePage() {
  async function handleGetAllEvents() {
    await getAllEvents();
  }

  async function handleAddEvent() {
    await addEvent();
  }

  async function handleUpdateEvent() {
    const updatedEvent = { description: 'ini merupakan cuy deskripsi' };
    await updateEvent('vBLXOLUCBmLRgmI4IZCO', updatedEvent);
  }

  // eslint-disable-next-line no-unused-vars
  async function handleDeleteEvent() {
    await deleteEvent('PKpbxUOIXzZ0zAF8AWko');
  }

  return (
    <>
      <header></header>
      <main className="overflow-hidden">
        <div className="lg:mx-[4rem] sm:max-sm mx-[1rem] py-[1rem]">
          <Navbar />
          <section id="hero">
            <div className="title-container mt-10">
              <h1 className="text-4xl lg:text-8xl font-semibold tracking-tight">
                Your Gateway to Knowledge
              </h1>
              <p className="mt-2 lg:ps-2 font-medium tracking-tight text-sm lg:text-xl">
                Unlock Learning, Embrace Connection
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 mt-4 lg:mt-8">
              <div>
                <article className="bg-black rounded-2xl p-4 lg:p-12 text-white overflow-hidden">
                  <div className="flex gap-2 text-black flex-wrap">
                    <Badge>Creative Insights</Badge>
                    <Badge>Exploration</Badge>
                    <Badge>Education</Badge>
                  </div>
                  <div>
                    <h1 className="mt-12 text-xl lg:text-[2.5rem] leading-snug font-semibold text-[#CDFE05]">
                      Unlocking Creativity Chronicles: Inspiring Tales from the
                      Symposium
                    </h1>
                    <p className="mt-4 text-sm lg:text-xl">
                      by{' '}
                      <a href="#" className="text-[#CDFE05] underline">
                        Sarah Reynolds
                      </a>{' '}
                      - 05 March , 2024
                    </p>
                    <p className="mt-6 text-sm lg:text-xl">
                      Dive into the rich tapestry of creativity with our blog,
                      &quot;Unlocking Creativity Chronicles.&quot; Explore
                      insightful articles, behind-the-scenes stories, and
                      captivating tales from the symposium.
                    </p>
                  </div>
                  <a href="#">
                    <div className="mt-10 lg:mt-24 flex justify-between items-end text-xl lg:text-[2.5rem] font-semibold">
                      <p>Blog</p>
                      <FiArrowUpRight className="text-3xl lg:text-7xl" />
                    </div>
                  </a>
                </article>
              </div>
              <div>
                <div className="flex flex-col gap-5 lg:w-[35rem] h-full">
                  <article
                    className={` p-4 lg:p-12 flex-1 bg-[url('/images/evt-1.png')] bg-center bg-cover rounded-2xl overflow-hidden text-white`}
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <h1 className="text-xl lg:text-3xl font-semibold text-[#CDFE05]">
                          Unlocking Creativity Symposium
                        </h1>
                        <h2 className="mt-4 text-xl font-medium">
                          Saturday, 12 March 2024
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-4 items-end text-2xl font-semibold">
                          Event <FiArrowUpRight className="text-3xl" />
                        </div>
                        <Button onClick={handleAddEvent}>Open</Button>
                      </div>
                    </div>
                  </article>
                  <article
                    className={` p-4 lg:p-12 flex-1 bg-[url('/images/evt-2.png')] bg-center bg-cover rounded-2xl overflow-hidden text-white`}
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <h1 className="text-xl lg:text-3xl font-semibold text-[#CDFE05]">
                          Unlocking Learning, Embrace Connection
                        </h1>
                        <h2 className="mt-4 text-xl font-medium">
                          Sunday, 12 May 2024
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-4 items-end text-2xl font-semibold">
                          Event <FiArrowUpRight className="text-3xl" />
                        </div>
                        <Button onClick={handleGetAllEvents}>Open</Button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section id="about">
            <div className="mt-12 lg:mt-28 lg:px-8 flex justify-between flex-col lg:flex-row relative">
              <div className="absolute hidden lg:block lg:text-[12rem] font-black text-black/5 -top-36 -left-32 tracking-wide text-nowrap select-none">
                EduHub Platform
              </div>
              <div className="lg:w-[220rem] relative z-10">
                <h2 className="text-5xl font-semibold tracking-tight leading-tight">
                  Journey with
                  <br />
                  <span className="font-extrabold">EduHub</span>
                </h2>
                <div className="mt-6">
                  <Button onClick={handleUpdateEvent}>More</Button>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 relative z-10">
                <p className="font-medium leading-relaxed text-xl">
                  Welcome to EduHub, where insights meet connections. We&apos;re
                  on a mission to create a platform for thought-provoking events
                  that transcend borders. EduHub is your destination for quality
                  content, global connections, and a seamless insight-gathering
                  experience. Join our thriving community, and let&apos;s shape
                  the future of knowledge together. At EduHub, every insight
                  gathered is a step towards growth and understanding.
                </p>
              </div>
            </div>
            <div className="mt-28">
              <h2 className="text-center font-medium text-xl text-black/40">
                Events held by top & biggest global companies
              </h2>
              <div className="logo-container mt-8 flex flex-wrap justify-center gap-16">
                <img
                  className="h-8"
                  src="/images/apple.svg"
                  alt="apple logo"
                  draggable={false}
                />

                <img
                  className="h-8"
                  src="/images/adobe.svg"
                  alt="adobe logo"
                  draggable={false}
                />
                <img
                  className="h-8"
                  src="/images/slack.svg"
                  alt="slack logo"
                  draggable={false}
                />

                <img
                  className="h-8"
                  src="/images/spotify.svg"
                  alt="spotify logo"
                  draggable={false}
                />

                <img
                  className="h-8"
                  src="/images/google.svg"
                  alt="google logo"
                  draggable={false}
                />
              </div>
            </div>
          </section>

          <section id="reviews">
            <div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <ReviewCard
                type={'Story'}
                title={'A Catalyst For Change. Empowering Stories'}
                description={
                  'Transformative! EduHub fueled my startup journey, aiding communities during the pandemic. Grateful beyond words.'
                }
                imgUrl={'/images/person1.png'}
              />{' '}
              <ReviewCard
                type={'Story'}
                title={'A Catalyst For Change. Empowering Stories'}
                description={
                  'Read the story of how Shayna successfully built a startup that assists residents in obtaining aid during the pandemic.'
                }
                imgUrl={'/images/person2.png'}
              />
              <ReviewCard
                type={'Story'}
                title={'Empowering Minds. Unleashing Potential.'}
                description={
                  'EduHub, a game-changer! Found invaluable connections and insights that propelled my professional journey to new heights.'
                }
                imgUrl={'/images/person3.png'}
              />
              <ReviewCard
                type={'Story'}
                title={'A Catalyst For Change. Empowering Stories'}
                description={
                  'Transformative! EduHub fueled my startup journey, aiding communities during the pandemic. Grateful beyond words.'
                }
                imgUrl={'/images/person4.png'}
              />
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
