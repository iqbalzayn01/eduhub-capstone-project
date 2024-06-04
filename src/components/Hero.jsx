import HeroInfoBox from './HeroInfobox';
import { IoMdCalendar } from 'react-icons/io';
import { FaClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export default function Hero({ date, time, place }) {
  return (
    <div className="relative bg-[url('/images/hero.jpg')] bg-center bg-cover h-[36rem] rounded-2xl overflow-hidden text-white">
      <div className="absolute bottom-10 left-10">
        <div className="flex gap-4">
          <HeroInfoBox
            icon={<IoMdCalendar className="h-6 w-6" />}
            text={date}
          />
          <HeroInfoBox icon={<FaClock className="h-5 w-5" />} text={time} />
          <HeroInfoBox
            icon={<FaLocationDot className="h-5 w-5" />}
            text={place}
          />
        </div>
      </div>
    </div>
  );
}
