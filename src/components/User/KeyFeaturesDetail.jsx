export default function KeyFeaturesDetail({ keyFeatures }) {
  return (
    <div className="lg:col-span-5 flex-1 bg-black rounded-2xl">
      <div className="p-10">
        <h4 className="font-semibold text-[#CDFE05]">Key Features :</h4>
        <p className="text-white pt-4">{keyFeatures}</p>
      </div>
    </div>
  );
}
