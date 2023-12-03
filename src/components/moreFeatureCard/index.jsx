import MiniSecHeading from "../miniSectionHeading";
import MFeat1 from "../../assets/img/ft1.svg";
import MFeat2 from "../../assets/img/ft2.svg";
import MFeat3 from "../../assets/img/ft3.svg";
import MFeat4 from "../../assets/img/ft4.png";
import MFeat5 from "../../assets/img/ft5.png";
import MFeat6 from "../../assets/img/ft6.png";

const MoreFeatureCard = ({ img, miniHeading, headingColor, desc }) => {
  const moreFeatImgData = [MFeat1, MFeat2, MFeat3, MFeat4, MFeat5, MFeat6];
  return (
    <div className="more-feature-card-main-container w-[387px] flex flex-col gap-y-6">
      <div className="card-img-container  h-[265px] bg-milton-blue rounded-2xl flex items-center ">
        <img
          src={moreFeatImgData[img]}
          width={"45%"}
          alt="more-feature"
          className="more-feature  mx-auto"
        />
      </div>
      <MiniSecHeading
        heading={miniHeading}
        color={headingColor}
        position={"left"}
      />
      <div className="more-feature-card-desc font-inter text-md font-[500] text-milton-gray">
        {desc}
      </div>
    </div>
  );
};

export default MoreFeatureCard;
