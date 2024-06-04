export default function HeroInfoBox({ icon, text }) {
  return (
    <div className="flex gap-3 items-center justify-center py-[0.5rem] lg:px-5 sm:max-sm px-1  text-[#000000] bg-[#CDFE05] rounded-lg font-bold lg:text-[1.25rem] md:text-[1rem] sm:max-sm text-[0.6rem]">
      {icon}
      {text}
    </div>
  );
}
