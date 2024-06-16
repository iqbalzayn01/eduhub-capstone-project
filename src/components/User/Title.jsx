import { IoMdCalendar } from 'react-icons/io';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Title({ title, start, end, ButtonClick, hasJoined }) {
  return (
    <>
      <Link
        to="/eventslist"
        className="underline underline-offset-4 inline-flex items-center"
      >
        <IoMdCalendar className="h-6 w-6" />
        <span>All Events</span>
      </Link>
      <div className="flex lg:flex-row sm:max-sm flex-col pb-8 py-3 justify-between">
        <div>
          <h1 className="font-bold text-[2.5rem] text-2xl">{title}</h1>
          <p className="lg:pt-8 sm:max-sm pt-4">
            <span className="font-bold text-[1.25rem]">
              Open Registration :
            </span>{' '}
            {start} - {end}
          </p>
        </div>
        <div className="lg:pt-12 sm:max-sm pt-5 ">
          <button
            onClick={ButtonClick}
            className={`py-[0.8rem] px-4 text-[1rem] font-semibold sm:max-sm w-[10rem] flex items-center justify-center rounded-lg ${
              hasJoined ? 'bg-red-600 text-white' : 'text-[#CDFE05] bg-black'
            } transition-colors duration-300`}
          >
            {hasJoined ? (
              <>
                <FaTimes className="mr-2" />
                Cancel Join
              </>
            ) : (
              <>
                <FaCheck className="mr-2" />
                Join Now
              </>
            )}
          </button>
        </div>
      </div>
      <div className="absolute hidden lg:block lg:text-[12rem] font-black text-black/5 top-[7rem] left-1/2 tracking-wide text-nowrap select-none transform -translate-x-1/2 z-[-1]">
        Events
      </div>
    </>
  );
}

// // import ButtonDetailEvent from './ButtonDetailEvent';
// import { IoMdCalendar } from 'react-icons/io';
// import { Link } from 'react-router-dom';

// export default function Title({ title, start, end, ButtonClick }) {
//   return (
//     <>
//       <Link
//         to="/eventslist"
//         className="underline underline-offset-4 inline-flex items-center"
//       >
//         <IoMdCalendar className="h-6 w-6" />
//         <span>All Events</span>
//       </Link>
//       <div className="flex lg:flex-row sm:max-sm flex-col pb-8 py-3 justify-between">
//         <div>
//           <h1 className="font-bold text-[2.5rem] text-2xl">{title}</h1>
//           <p className="lg:pt-8 sm:max-sm pt-4">
//             <span className="font-bold text-[1.25rem]">
//               Open Registration :
//             </span>{' '}
//             {start} - {end}
//           </p>
//         </div>
//         <div className="lg:pt-12 sm:max-sm pt-5 ">
//           <button
//             onClick={ButtonClick}
//             className="py-[0.8rem] px-4 text-[1rem] text-[#CDFE05] bg-[#000000] rounded-lg font-semibold sm:max-sm w-[8rem]"
//           >
//             Join Now
//           </button>
//         </div>
//       </div>
//       <div className="absolute hidden lg:block lg:text-[12rem] font-black text-black/5 top-[7rem] left-1/2 tracking-wide text-nowrap select-none transform -translate-x-1/2 z-[-1]">
//         Events
//       </div>
//     </>
//   );
// }
