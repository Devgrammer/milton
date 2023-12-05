import { MoreFeatureData } from "../../data/moreFeatureData";
import MoreFeatureCard from "../moreFeatureCard";


const MoreFeatureSection = () => {
  return (
    
      <div className="more-feature-wrapper grid grid-cols-1 smx:grid-cols-3 grid-flow-row gap-4 ">
        {MoreFeatureData.map((more, index) => {
          const { miniHeading, headingColor, desc } = more;
          return (
            <MoreFeatureCard
              img={index}
              key={`more-feature-${index}`}
              miniHeading={miniHeading}
              headingColor={headingColor}
              desc={desc}
            />
          );
        })}
      </div>
  
  );
}

export default MoreFeatureSection