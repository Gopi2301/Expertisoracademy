import FeatureBadge from './FeatureBadge';

const Hero = ({ data }) => {

    const { heading, highlights, para, features } = data || {};
    console.log(data)
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
        <div className="w-full h-screen pt-[120px] bg-[radial-gradient(circle_at_top,#4A3F00_0%,#050400_35%)]">
            <div>
                <h1 className="text-center font-semibold text-[50px] leading-none tracking-[0.02em] text-white px-40 capitalize">
               {formatHeading(heading, highlights)}
            </h1>
            <p className="font-inter hero-text mt-10 font-medium font-normal text-[20px] leading-7 text-center px-60">
                {para}
            </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
               {features?.map((feature, index) => (
                   <FeatureBadge key={index} icon={feature.i} text={feature.para} />
               ))}
            </div>
        </div>
    )
}

export default Hero