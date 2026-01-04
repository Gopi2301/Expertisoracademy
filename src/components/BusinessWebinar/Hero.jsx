import FeatureBadge from './FeatureBadge';
import WebinarDetailCard from './WebinarDetailCard';

const Hero = ({ data }) => {

    const { heading, highlights, para, features, webinar_details } = data || {};

    const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const formatHeading = (text, highlights) => {
        if (!text) return null;
        if (!highlights || highlights.length === 0) return text;

        // Escape highlights to handle special characters like '?' and '+'
        const escapedHighlights = highlights.map(escapeRegExp);
        const regex = new RegExp(`(${escapedHighlights.join('|')})`, 'gi');
        

        return text.split(regex).map((part, index) =>
            // Check against original highlights (case-insensitive)
            highlights.some(h => h.toLowerCase().trim() === part.toLowerCase().trim()) ? (
                <span key={index} className="brand-text">{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <div className="relative w-full h-full pt-[100px] bg-[radial-gradient(circle_at_top,#4A3F00_0%,#050400_35%)] overflow-hidden">
            <div>
                <h1 className="text-center font-semibold text-[45px] leading-none tracking-[0.02em] text-white px-40 capitalize">
               {formatHeading(heading, highlights)}
            </h1>
            <p className="font-inter hero-text mt-5 font-medium font-normal text-[18px] leading-7 text-center px-60">
                {para}
            </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 relative z-10">
               {features?.map((feature, index) => (
                   <FeatureBadge key={index} icon={feature.i} text={feature.para} />
               ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 relative z-10">
                {webinar_details?.map((detail, index) => (
                    <WebinarDetailCard key={index} {...detail} />
                ))}
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="relative bottom-0 left-0 w-full mt-10">
                <div className="">
                <img src="/webinar-author.png" className="absolute top-[50%] bottom-[50%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] h-[328px] w-[600px] object-fit" alt="" />
                <img src="/webinar-bottom-bg.png" className="h-[428px] w-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero