export default function Badge(props) {
  return (
    <span className='py-[0.35rem] px-4 bg-[#CDFE05] rounded-lg font-semibold text-xs lg:text-lg'>
      {props.children}
    </span>
  );
}
