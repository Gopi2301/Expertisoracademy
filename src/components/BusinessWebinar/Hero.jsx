import FeatureBadge from "./FeatureBadge";
import WebinarDetailCard from "./WebinarDetailCard";

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
    <section className="w-full flex flex-col items-center pt-12 pb-20 overflow-x-hidden bg-hero-gradient">
      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center gap-8">
        {/* Header Section */}
        <div className="max-h-[50vh]">
          <div className="text-center max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
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
        <div className="flex flex-col items-center justify-center gap-3 max-h-[50vh]">
          <div className="relative flex flex-col gap-3 flew-full w-full aspect-video rounded-xl overflow-hidden ">
            <img
              src={data.hero_image}
              className="max-h-full w-full h-full object-contain"
              alt="Webinar Preview"
            />
            {/* play button */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <button className="bg-white text-black px-6 py-2 rounded-full">
                 
              </button>
            </div> */}
          </div>
          <div className="flex flex-row justify-start gap-3">
            {webinar_details?.map((detail, index) => (
              <WebinarDetailCard key={index} {...detail} />
            ))}
          </div>
          {/* Play Button Overlay could go here */}

          {/* Webinar Info Cards */}
        </div>
      </div>

      {/* Background Styling - Moved to CSS for cleanliness */}
      <style jsx>{`
        .bg-hero-gradient {
          /* We combine everything into one clean transition. 
       The radial gradients in your previous code were likely 
       fighting with the linear blend.
    */
          background: 
      /* This radial adds that slight "glow" from the bottom right corner */ radial-gradient(
              ellipse 100% 60% at 95% 100%,
              #ffffea 0%,
              rgba(255, 196, 0, 0.8) 25%,
              rgba(255, 196, 0, 0) 70%
            ),
            /* The main vertical blend */
              linear-gradient(
                to bottom,
                #000000 0%,
                #000000 30%,
                #000000 45%,
                /* Dark 'earthy' gold bridge */ #ffcc00 100%
                  /* Final pop of gold */
              );
          background-color: #000;
        }
      `}</style>
    </section>
  );
};

export default Hero;
