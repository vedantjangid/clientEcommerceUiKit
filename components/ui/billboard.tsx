import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return (
    // <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
    //   <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
    //     <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
    //       <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs shadow-lg bg-white blur-sm">
    //         <h2>
    //           {data && data.label}
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden">
        <div
          style={{ backgroundImage: `url(${data?.imageUrl})` }}
          className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 bg-cover"
        >
          {/* Add a div for the blurred background */}
          <div className="absolute inset-0 bg-white bg-opacity-20 "></div>

          <div className="relative z-10 backdrop-blur-md">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
              <h2>{data && data.label}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Billboard;
