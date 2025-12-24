// import { assets } from "../assets/assets"


// const StartButton = ({data}) => {
//   const a=data


//   return (
//     <div>
//       <a
//         href={data.link}
//       >
//         <div className="flex justify-center gap-1 rounded-[4px] px-[18px] py-[12px] sm:py-[14px] bg-yellow items-center w-full sm:w-[233px] sm:min-w-[233px] ">
//           <p className="text-black font-inter font-semibold text-[18px] leading-[100%]">
//             {data.name}
//           </p>
//           <img src={assets.r_long_arrow} alt="Right arrow" />
//         </div>
//       </a>
//     </div>
//   )
// }

// export default StartButton



import { assets } from "../assets/assets"

const StartButton = ({ data, onClick }) => {
  if (!data) return null; // prevent crash if no prop

  // pick link if exists, otherwise links
  const { name, link } = data;
  const para = name || "start"

  // If onClick handler is provided, use button instead of link
  if (onClick) {
    return (
      <div>
        <button
          onClick={onClick}
          className="flex justify-center gap-1 rounded-[4px] px-[22px] py-[12px] sm:py-[14px] bg-yellow items-center w-full cursor-pointer hover:bg-yellow/90 transition-colors"
        >
          <p className="text-black font-inter font-semibold text-[18px] leading-[100%] text-nowrap">
            {para}
          </p>
          <img src={assets.r_long_arrow} alt="Right arrow" />
        </button>
      </div>
    );
  }

  // Otherwise, use link (backward compatibility)
  const href = link || "#";
  return (
    <div>
      <a href={href}>
        {/* sm:w-[233px] sm:min-w-[233px] */}
        <div className="flex justify-center gap-1 rounded-[4px] px-[22px] py-[12px] sm:py-[14px] bg-yellow items-center w-full  ">
          <p className="text-black font-inter font-semibold text-[18px] leading-[100%] text-nowrap">
            {para}
          </p>
          <img src={assets.r_long_arrow} alt="Right arrow" />
        </div>
      </a>
    </div>
  );
};

export default StartButton;

