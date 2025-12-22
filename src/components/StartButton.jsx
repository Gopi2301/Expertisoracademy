// import { assets } from "../assets/assets"

// const StartButton = ({ data }) => {
//   if (!data) return null; // prevent crash if no prop

//   // pick link if exists, otherwise links
//   const { name, link} = data;
//   const href = link || "#";
//   const para=name || "start"

//   return (
//     <div>
//       <a href={href}>
//         {/* sm:w-[233px] sm:min-w-[233px] */}
//         <div className="flex justify-center gap-1 rounded-[4px] px-[22px] py-[12px] sm:py-[14px] bg-yellow items-center w-full  ">
//           <p className="text-black font-inter font-semibold text-[18px] leading-[100%] text-nowrap">
//             {para}
//           </p>
//           <img src={assets.r_long_arrow} alt="Right arrow" />
//         </div>
//       </a>
//     </div>
//   );
// };

// export default StartButton;











import { assets } from "../assets/assets";
import { useFormContext } from "../context/FormContext";

const StartButton = ({ data }) => {
  if (!data) return null;

    const { setShowApplyModal } = useFormContext()


  const { name, link } = data;
  const label = name || "Start";

  // CASE 1: Modal / Popup
  if (data.popup) {
    return (
      <div onClick={() => setShowApplyModal(true)}>
        <div className="flex cursor-pointer justify-center gap-1 rounded-[4px] px-[22px] py-[12px] sm:py-[14px] bg-yellow items-center w-full">
          <p className="text-black font-inter font-semibold text-[18px] leading-[100%] text-nowrap">
            {label}
          </p>
          <img src={assets.r_long_arrow} alt="Right arrow" />
        </div>
      </div>
    );
  }

  // CASE 2: Normal link
  return (
    <a href={link || "#"} target="_blank" rel="noopener noreferrer">
      <div className="flex justify-center gap-1 rounded-[4px] px-[22px] py-[12px] sm:py-[14px] bg-yellow items-center w-full">
        <p className="text-black font-inter font-semibold text-[18px] leading-[100%] text-nowrap">
          {label}
        </p>
        <img src={assets.r_long_arrow} alt="Right arrow" />
      </div>
    </a>
  );
};

export default StartButton;
