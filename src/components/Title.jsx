import ButtonDetailEvent from '../components/ButtonDetailEvent';
import { IoMdCalendar } from 'react-icons/io';

export default function Title({ start, end }) {
  return (
    <>
      <a className="flex flex-row gap-2 underline underline-offset-4" href="#">
        <IoMdCalendar className="h-6 w-6" />
        <span>All Events</span>
      </a>
      <div className="flex lg:flex-row sm:max-sm flex-col py-8 justify-between">
        <div>
          <h1 className="font-bold text-[2.5rem] text-2xl">
            Unlocking Creativity Symposium
          </h1>
          <p className="lg:pt-8 sm:max-sm pt-4">
            <span className="font-bold text-[1.25rem]">
              Open Registration :
            </span>{' '}
            {start} - {end}
          </p>
        </div>
        <div className="lg:pt-12 sm:max-sm pt-5 ">
          <ButtonDetailEvent>Join Now</ButtonDetailEvent>
        </div>
      </div>
      <div className="absolute hidden lg:block lg:text-[12rem] font-black text-black/5 top-[7rem] left-1/2 tracking-wide text-nowrap select-none transform -translate-x-1/2 z-[-1]">
        Events
      </div>
    </>
  );
}
