import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CardEvent = ({ event }) => {
  return (
    <div className="flex flex-col gap-5 lg:w-[35rem] h-full bg-slate-950 rounded-lg">
      <article
        className={`p-4 lg:p-10 flex-1 bg-[url(${event.bannerUrl})] bg-center bg-cover rounded-2xl overflow-hidden text-white`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-xl lg:text-3xl font-semibold text-[#CDFE05]">
              {event.title}
            </h1>
            <h2 className="mt-4 text-xl font-medium">
              {new Date(event.time_start.seconds * 1000).toLocaleDateString()}
            </h2>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 items-end text-2xl font-semibold">
              Event <FiArrowUpRight className="text-3xl" />
            </div>
            <Link to={`/event/${event.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Open
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardEvent;
