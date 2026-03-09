import campusBanner from "../assets/campusBanner.png";

const HeroBanner = () => (
  <div className="relative w-full h-48 md:h-64 overflow-hidden">
    <img  src={campusBanner} alt="Campus" className="w-full h-full  object-cover" />
    <div className="absolute inset-0 bg-banner-overlay/50  flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-wide">
        FACULTY PROFILE
      </h1>
      <p className="text-primary-foreground/80 text-sm mt-2 font-bold">
        Home &gt; Faculty & Staff &gt; Faculty Profile
      </p>
    </div>
  </div>
);

export default HeroBanner;
