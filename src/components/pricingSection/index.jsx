import { useState } from "react";
import { BsStars } from "react-icons/bs";
import PriceCard from "../priceCard";

const PricingSection = () => {
  const [subscription, setSubscription] = useState("monthly");
  const active =
    "bg-white w-[150px] h-[35px] rounded-xl text-milton-black drop-shadow-lg flex justify-center items-center mx-auto font-bold text-md py-2 px-4  ease-in-out duration-800 cursor-pointer";
  const inActive =
    "bg-transparent w-[150px] h-[35px] rounded-xl text-milton-gray-lite shadow-none flex justify-center items-center mx-auto font-bold text-md py-2 px-4  ease-in-out  duration-800 cursor-pointer";
  return (
    <div className="pricing-main-container flex  flex-col relative items-center gap-x-4">
      <div className="subscription-shift-menu bg-milton-gray-ultra-lite w-min p-4 rounded-xl h-[44px] flex items-center mb-8 mx-auto">
        <div
          className={`monthly-btn ${
            subscription === "monthly" ? active : inActive
          }`}
          onClick={() => setSubscription("monthly")}
        >
          Monthly
        </div>
        <div
          className={`monthly-btn ${
            subscription === "monthly" ? inActive : active
          }`}
          onClick={() => setSubscription("annually")}
        >
          Annually
        </div>
      </div>
      <div className="subcription-text flex absolute right-[27%] text-milton-black font-semibold">
        <BsStars size={24} color={"#FDE136"} />
        save 30%
      </div>
      <div className="price-card-contianer grid grid-flow-row grid-cols-3 gap-10">
        <PriceCard
          amt={0}
          subscription={subscription}
          planBenefit={"Free for ever"}
          type={"free"}
          isDeal={false}
        />
        <PriceCard
          amt={19}
          subscription={subscription}
          planBenefit={"Billed monthly"}
          type={"starter"}
          isDeal={true}
        />
        <PriceCard
          amt={49}
          subscription={subscription}
          planBenefit={"Billed monthly"}
          type={"pro"}
          isDeal={false}
        />
      </div>
    </div>
  );
};

export default PricingSection;
