export default function ReviewCard({ type, title, description, imgUrl }) {
  return (
    <div className='bg-black h-[12rem] md:h-[20rem] rounded-2xl overflow-hidden'>
      <div className='flex h-full'>
        <div className='bg-[#D9D9D9] rounded-2xl w-[32rem] relative'>
          <img
            src={imgUrl}
            alt='Person 1'
            className='object-cover object-center h-full absolute inset-0'
            draggable={false}
          />
          <button className='bg-[#CDFE05] py-1 px-4 md:px-6 md:py-2 rounded-xl absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 font-semibold text-black tracking-tighter'>
            Read
          </button>
        </div>
        <div className='p-4 md:p-8 text-white'>
          <p className='text-xs md:text-base text-[#CDFE05]'>{type}</p>
          <h1 className='mt-2 text-sm md:text-2xl font-semibold text-[#CDFE05]'>{title}</h1>
          <p className='mt-2 md:mt-6 text-xs md:text-base md:leading-loose'>{description}</p>
        </div>
      </div>
    </div>
  );
}
