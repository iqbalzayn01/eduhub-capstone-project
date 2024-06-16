export default function OverviewAndNetOpDetail({ start, overview, netOp }) {
  return (
    <div className="lg:col-span-7 flex-1 bg-black rounded-2xl text-white">
      <div className="p-10">
        <p>{start}</p>
        <h4 className="font-semibold text-[#CDFE05] py-4">Overview :</h4>
        <p>{overview}</p>
        <h4 className="font-semibold text-[#CDFE05] py-4">
          Networking Opportunities :
        </h4>
        <p>{netOp}</p>
      </div>
    </div>
  );
}
