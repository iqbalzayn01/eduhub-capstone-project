import Hero from './Hero';
import OverviewAndNetOpDetail from './OverviewAndNetOpDetail';
import KeyFeaturesDetail from './KeyFeaturesDetail';

export default function Content(props) {
  return (
    <>
      <Hero {...props}></Hero>
      {/* <div className="flex md:flex-row sm:max-sm flex-col gap-4 my-4 mb-[5rem]"> */}
      <div className="grid lg:grid-cols-12 gap-4 my-4 mb-[5rem] text-[1.25rem]">
        <OverviewAndNetOpDetail {...props}></OverviewAndNetOpDetail>
        <KeyFeaturesDetail {...props}></KeyFeaturesDetail>
      </div>
    </>
  );
}
