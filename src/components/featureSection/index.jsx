
import FeatureCard from '../featureCard';
import { featureCardData } from '../../data/featureData';

const FeatureSection = () => {
  return (
    <>
      {featureCardData.map((feature, index) => {
        return (
          <FeatureCard
            feature={feature}
            key={`feature-${index}`}
            index={index}
          />
        );
      })}
    </>
  );
}

export default FeatureSection