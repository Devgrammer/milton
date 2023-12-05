import MiniSecHeading from "../miniSectionHeading";
import { MdOutlineDone } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const PriceCard = ({type, amt, desc, planBenefit, subscription, isDeal}) => {
  const feature = [
    "A cool feature",
    "A basic feature",
    "A top feature with limitations",
    "An incredible feature so useful",
    "A premium feature",
    "You need this feature",
  ];

  const featureCalculator=(type)=>{
    if(type ==='free'){
      return 4;
    }else if(type==='starter'){
      return 5;
    }else if(type === 'pro'){
      return 6;
    }
  }
  return (
    <div className="price-card-main-container relative rounded-2xl  w-full smx:w-auto  shrink-0 min-h-[625px] text-md shadow-xl p-8 gap-y-4 mx-auto">
      <div className="price-card-upper flex flex-col gap-y-7">
        <MiniSecHeading heading={"Free"} color={"voilet-lite"} position={'left'} />
        <div className="card-desc text-milton-gray whitespace-normal smx:whitespace-nowrap">
          So you can see how our incredible our tool is.
        </div>
        <div className="price-card-amt-contianer ">
          <div className="amt-wrapper ">
            <span className="amt text-[56px] font-bold">${subscription==='monthly'?amt:amt*12}</span>
            <span className="subscription-basis text-milton-gray text-md font-semibold">
              {subscription==='monthly'?'/mon':'/yr'}
            </span>
          </div>
          <div className="amt-benefits text-md font-[500] text-milton-gray-dark ">
            {planBenefit}
          </div>
          <div className="pricing-get-started text-center">
            <button className="price-get-started bg-milton-black w-full mt-6 smx:min-w-[320px] text-white h-12 py-4 px-7 rounded-xl flex justify-center items-center font-bold">
              Get started
            </button>
            <span className="price-get-started-text text-sm text-black ">
              No credit card needed
            </span>
          </div>
        </div>
        <div className="price-card-bottom">
          <div className="list-heading font-semibold text-md">
            What's included:
          </div>
          <div className="list-wrapper flex flex-col gap-y-4">
            {feature.splice(0,featureCalculator(type)).map((ft, index) => {
              return (
                <div
                  key={`feat-${index}`}
                  className="list-heading font-semibold text-md text-milton-gray flex items-end gap-x-2"
                >
                  <span>
                    <MdOutlineDone color="#C39CF6" size={28} />
                  </span>
                  {ft}
                </div>
              );
            })}
          </div>
        </div>
      </div>
     {isDeal && <div className="best-deal absolute top-0 right-4 bg-milton-black rounded-full w-fit flex text-sm font-bold text-white py-2 px-3 gap-x-2">Best Deal <FaFire color={'orange'} size={18}/></div>}
    </div>
  );
};

export default PriceCard;
