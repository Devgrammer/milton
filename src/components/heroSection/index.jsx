import User1 from "../../assets/img/user_color1.png";
import User2 from "../../assets/img/user_color2.png";
import User3 from "../../assets/img/user_color3.png";
import User4 from "../../assets/img/user_color4.png";
import User5 from "../../assets/img/user_color5.png";
import SuperCharge from "../../assets/img/supercharge.png"
import { FaCalendarDay, FaRegCalendarTimes, FaStar } from "react-icons/fa";
import MiniSecHeading from "../miniSectionHeading";

const HeroSection = () => {
  const userImgData = [User1, User2, User3, User4, User5];
   
  
  return (
    <div className="hero-section-main-contianer " id="hero">
      <MiniSecHeading heading={"An other way to manage to time."} />
      <div className="hero-wrapper w-full smx:w-[75%] flex flex-col gap-y-8 smx:px-10 pb-40 text-center box-border mx-auto">
        <div className="hero-lead-text text-[40px] smx:text-[80px] font-extrabold  shrink-0 w-fit transform-none decoration-none leading-[1.2em]  ">
          Your new favourite calendar app
        </div>
        <div className="hero-sub-text font-semibold text-md smx:text-xl text-milton-gray smx:w-[70%] mx-auto">
          Here you should explain how cool your app is. Remember, focus on the
          benefits for your users, not on the features.{" "}
        </div>
        <div className="hero-get-started flex flex-col justify-center w-fit gap-y-2 mx-auto">
          <button className="hero-get-started-btn  box-border bg-milton-black rounded-2xl text-md text-white whitespace-nowrap font-bold py-4 px-8">
            Get started, it's free
          </button>
          <div className="hero-get-started-btn-desc text-xs text-milton-gray font-semibold">
            Free 14 days trials,no credit card needed
          </div>
        </div>
        <div className="hero-cutomer-analytics box-border wfull flex  gap-x-16  mx-auto ">
          <div className="hero-customer-user-avatar-list flex relative  shrink-0  gap-x-1 w-1/2">
            {userImgData?.map((user, index) => {
              let offset = 'translate-x-[-'+index*4+'rem]'+" "+'z-['+index+']';
              console.log("offset: ", offset);
              return (
                <img
                  className={`user-avatar transform ${offset} cursor-pointer w-auto h-auto border-4 border-white box-border rounded-full`}
                  src={user}
                  key={index}
                />
              );
            })}
          </div>

          <div className="hero-customer-user-rating  flex flex-col justify-start w-1/2 space-y-1.5">
            <div className="user-rating-star flex items-center gap-1">
              <FaStar color={"rgb(254, 200, 75)"} size={17} />
              <FaStar color={"rgb(254, 200, 75)"} size={17} />
              <FaStar color={"rgb(254, 200, 75)"} size={17} />
              <FaStar color={"rgb(254, 200, 75)"} size={17} />
              <FaStar color={"rgb(254, 200, 75)"} size={17} />
              <span className="rating text-base font-semibold leading-4 text-[rgb(71, 84, 103)]">
                5.0
              </span>
            </div>
            <div className="user-rating-star-label text-sm whitespace-nowrap font-medium text-left">
              {" "}
              For 200+ happy users
            </div>
          </div>
        </div>
      </div>
      <div className="hero-img mx-auto overflow-hidden border-gray-300 border rounded-3xl"><img src={SuperCharge} alt={'Supercharge'}/></div>
    </div>
  );
};



export default HeroSection;
