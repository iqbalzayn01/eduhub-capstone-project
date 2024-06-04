export default function ButtonDetailEvent(props) {
  return (
    <button className="py-[0.8rem] px-4 text-[1.25rem] text-[#CDFE05] bg-[#000000] rounded-lg font-semibold sm:max-sm w-[8rem]">
      {props.children}
    </button>
  );
}
