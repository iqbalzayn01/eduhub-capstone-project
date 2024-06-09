export default function Button(props) {
  return (
    <button
      className='py-[0.35rem] px-6 bg-[#CDFE05] rounded-lg font-semibold text-black'
      {...props}>
      {props.children}
    </button>
  );
}
