import Navbar from '../components/Navbar';
import { AiFillInstagram } from 'react-icons/ai';
import {  FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';
import Footer from '../../components/Footer';

export default function HomePage() {
  return (
    <>
      <header></header>
      <main>
        <div className='max-w-screen-2xl mx-auto py-4 px-4 lg:px-12 bg-white'>
          <Navbar />
          <section>
            <div className='flex flex-col lg:flex-row gap-5  mt-4 lg:mt-8'>
              <div>
                <div className='border-2 rounded-2xl p-4 lg:p-10 text-white overflow-hidden'>
                  <div className='flex h-[10rem] rounded-2xl justify-center overflow-hidden'>
                  <div className='bg-[#D9D9D9] rounded-full w-[10rem] overflow-hidden relative'>
                    <img 
                      className='object-contain h-48 w-96 h-full '
                      src='/images/profile.png'
                      alt='foto profil'
                      />
                  </div>
                  </div>
                  <div>
                    <h1 className='mt-6 text-xl lg:text-3xl font-bold text-[#000000] text-center'>
                      Jake Roger
                    </h1>
                    <h1 className='mt-12 text-sm lg:text-sm font-semibold text-[#A3A5AA]'>
                      Role
                    </h1>
                    <p className='mt-4 text-base lg:text-md font-semibold text-[#000000]'>
                      Software Enginer
                    </p>
                    <h1 className='mt-8 text-sm lg:text-sm  font-semibold text-[#A3A5AA]'>
                      About
                    </h1>
                    <p className='mt-4 text-base lg:text-md font-semibold text-[#000000]'>
                      I am a results-driven software engineer, skilled in Python. I specialize in developing effecient and user-centric solutions that drive success.
                    </p>
                  </div>
                    
                  <div className="mt-6 space-y-4 font-black">
                    <h4 className="font-semibold text-[#A3A5AA]">Links</h4>
                    <div className="flex space-x-[2.5rem] text-black">
                      <a
                        href="#"
                        className="h-8 w-8 h-8 w-8 flex items-center justify-center text-3xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="#"
                        className="h-8 w-8 h-8 w-8 flex items-center justify-center text-3xl"
                      >
                        <FaXTwitter />
                      </a>
                      <a
                        href="#"
                        className="h-8 w-8 h-8 w-8 flex items-center justify-center text-3xl"
                      >
                        <FaLinkedin />                        
                      </a>
                      <a
                        href="#"
                        className="h-8 w-8 h-8 w-8 flex items-center justify-center text-4xl"
                      >
                        <AiFillInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bagian ini blm jadi */}
              <div>
                <div className='flex flex-col gap-5 lg:w-[38rem] h-full'>
                  <div className='py-4 border-b-2 border-black/20 flex md:items-center font-semibold'>
                    <ul className='mr-8'>
                      <li>Events</li>
                    </ul>
                    <ul className='mr-8'>
                      <li>Blog</li>
                    </ul>
                    <ul>
                      <li>Announcement</li>
                    </ul>
                  </div>
                
                  <article
                    className={`bg-black h-[10rem] md:h-[15rem] rounded-2xl overflow-hidden`}
                  >
                    <div className='flex h-full'>
                      <div className='bg-[#D9D9D9] rounded-2xl w-[16rem] lg:w-[23rem] relative'>
                        <img
                          src='/images/evt-1.png'
                          alt='Person 1'
                          className='object-cover object-center h-full absolute inset-0'
                        />
                      </div>
                      <div className='p-2 lg:p-4 text-white'>
                        <span className='py-[0.25rem] lg:py-[0.35rem] px-2 bg-[#CDFE05] text-black rounded-lg font-bold text-xs lg:text-md'>Already registered</span>
                        <h1 className='mt-2 ls:mt-4 text-sm lg:text-2xl font-semibold text-[#CDFE05]'>Unlocking Creativity Symposium</h1>
                        <p className='ls:mt-1 md:text-base lg:text-xs text-[0.5rem]'>Saturday, 12 March 2024</p>
                        <p className='mt-2 md:mt-4 text-[0.7rem] md:text-base'>Join us for a day of inspiration and exploration at the Unlocking Creativity Symposium.</p>
                      </div>
                    </div>
                  </article>
                  
                  <article
                    className={`bg-black h-[10rem] md:h-[15rem] rounded-2xl overflow-hidden`}
                  >
                    <div className='flex h-full'>
                      <div className='bg-[#D9D9D9] rounded-2xl w-[16rem] lg:w-[23rem] relative'>
                        <img
                          src='/images/evt-2.png'
                          alt='Person 1'
                          className='object-cover object-center h-full absolute inset-0'
                        />
                      </div>
                      <div className='p-2 lg:p-4 text-white'>
                        <span className='py-[0.25rem] lg:py-[0.35rem] px-2 bg-[#D9D9D9] text-black rounded-lg font-bold text-xs lg:text-md'>Completed</span>
                        <h1 className='mt-2 lg:mt-4 text-sm lg:text-2xl font-semibold text-[#CDFE05]'>Unlock Learning, Embrance Connection</h1>
                        <p className='lg:mt-1 md:text-base lg:text-xs text-[0.5rem]'>Saturday, 12 March 2024</p>
                        <p className='mt-2 md:mt-4 text-[0.7rem] md:text-base '>Join us for a day of inspiration and exploration at the Unlocking Learning Embrance.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
