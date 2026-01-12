import FeatureBadge from "./FeatureBadge";
import WebinarDetailCard from "./WebinarDetailCard";
import VideoPlayButton from "./VideoPlayButton";

const Hero = ({ data }) => {
  const { heading, highlights, para, features, webinar_details } = data || {};

  // Optimization: Memoize the heading formatter if this re-renders often
  const formatHeading = (text, highlights) => {
    if (!text || !highlights?.length) return text;

    const escaped = highlights.map((h) =>
      h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const regex = new RegExp(`(${escaped.join("|")})`, "gi");

    return text.split(regex).map((part, index) =>
      highlights.some(
        (h) => h.toLowerCase().trim() === part.toLowerCase().trim()
      ) ? (
        <span key={index} className="brand-text">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center pt-12 pb-20 overflow-x-hidden bg-hero-gradient">
      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center gap-8">
        {/* Header Section */}
        <div className="md:max-h-[50vh]">
          <div className="text-center max-w-5xl">
            <h1 className="font-clash text-[50px] font-semibold text-white leading-none tracking-[0.02em] text-center capitalize">
              {formatHeading(heading, highlights)}
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {para}
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {features?.map((feature, index) => (
              <FeatureBadge key={index} icon={feature.i} text={feature.para} />
            ))}
          </div>
        </div>
        {/* Video/Image Preview Container */}
        <div className="flex flex-col items-center justify-center gap-3 md:max-h-[50vh] w-full">
          <div className="relative flex flex-col gap-3 w-full aspect-video rounded-xl overflow-hidden ">
            <img
              src={data.hero_image}
              className="max-h-full w-full h-full object-contain"
              alt="Webinar Preview"
            />
            {/* play button */}
            <VideoPlayButton />
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-row justify-start gap-3 w-full md:w-auto">
            {webinar_details?.map((detail, index) => (
              <WebinarDetailCard key={index} {...detail} />
            ))}
          </div>
          {/* Play Button Overlay could go here */}

          {/* Webinar Info Cards */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
