/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import MiniSecHeading from "../miniSectionHeading";
import SectionSubHeading from "../sectionSubHeading";
import Feat1 from "../../assets/img/feat1.png";
import Feature1 from "../../assets/img/feature1.webp";
import Feature2 from "../../assets/img/feature2.png";
import Feature3 from "../../assets/img/feature3.png";
import Feature4 from "../../assets/img/feature4.png";
import User1 from '../../assets/img/feat1.png'
import User2 from '../../assets/img/usert2.png'
import User3 from '../../assets/img/usert3.png'
import User4 from '../../assets/img/usert4.png'
import User5 from '../../assets/img/usert1.png'

const FeatureCard = (props) => {
  const {
    img,
    headingColor,
    miniHeading,
    subHeading,
    desc,
    popup,
    popupIcon,
    popupContent,
    popupPersonDetail,
  } = props.feature;

  let remainder = props.index % 2;

  const featureImgData = [Feature1, Feature2, Feature3, Feature4];
  
  return (
    <div className="feature-card-main-container flex flex-col text-left justify-start mt-20">
      <div
        className={`feature-card-wrapper flex flex-col smx:flex-row ${
          remainder === 0 ? " " : "flex-row-reverse"
        } justify-between items-start `}
      >
        <div
          className={`feature-card-content  flex flex-col  justify-start w-full smx:w-1/2`}
        >
          <MiniSecHeading
            heading={miniHeading}
            color={headingColor}
            position={"left"}
          />
          <div className="feature-card-heading font-bold text-[28px] smx:text-[40px] text-milton-black leading-[1.2em] mt-4 ">
            {subHeading}
          </div>
          <div className="feature-card-description font-inter text-xl text-milton-gray w-full smx:w-[80%] my-12 leading-[1.6em] ">
            {desc}
          </div>
          {popup && (
            <Popup
            img={img}
              userReview={popupContent}
              userDetail={popupPersonDetail}
              remainder={remainder}
            />
          )}
        </div>
        <div className={`feature-img-container flex items-start  w-full smx:w-1/2 h-100 `}>
          <img
            src={featureImgData[img]}
            width={"100%"}
            alt="feature"
            className="flex items-start"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

export const Popup = ({
  img,
  userImg,
  userReview,
  userDetail,
  remainder,
  color,
}) => {
  const userImgData = [User1, User2, User3, User4, User5];
  let bgColored = "bg-[" + color + "]";
  return (
    <div
      className={`popup-main-container flex ${
        remainder === 0 ? " " : "flex-row-reverse"
      } items-end `}
    >
      <div className="user-avatar w-20 flex  items-end translate-y-10">
        <img src={userImgData[img]} alt={"user"} />
      </div>
      <div
        className={`user-review w-[60%] h-min flex flex-col gap-y-2 ${
          color ? "bg-[#FEE9CB]" : "bg-milton-black"
        } rounded-t-xl  ${
          remainder === 0 ? "rounded-br-xl" : "rounded-bl-xl"
        }  p-4`}
      >
        <div
          className={`user-review-content text-left ${
            color ? "text-milton-black" : "text-white"
          } font-semibold text-md`}
        >
          {userReview}
        </div>
        <div className="user-detail text-milton-gray text-md font-semibold">
          {userDetail}
        </div>
      </div>
    </div>
  );
};
