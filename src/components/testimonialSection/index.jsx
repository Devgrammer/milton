
import { TestimonialData } from '../../data/tesimonial';
import TestimonialCard from '../testimonialCard';

const TestimonialSection = () => {
  return (
    <>
      <div className="testimonial-list-wrapper w-auto flex gap-x-4 animate-marquee z-30   hover:cursor-pointer  ">
        {TestimonialData.map((test, index) => {
          const { id, userName, userQuote, userRole, review } = test;
          return (
            <TestimonialCard
              key={`more-feature-${index}`}
              userName={userName}
              userRole={userRole}
              userQuote={userQuote}
              review={review}
            />
          );
        })}
      </div>
      <div className="testimonial-list-wrapper flex w-auto gap-x-4 animate-marquee2 z-30   hover:cursor-pointer  ">
        {TestimonialData.map((test, index) => {
          const { id, userName, userQuote, userRole, review } = test;
          return (
            <TestimonialCard
              key={`more-feature-${index}`}
              userName={userName}
              userRole={userRole}
              userQuote={userQuote}
              review={review}
            />
          );
        })}
      </div>
      <div className="testimonial-list-wrapper flex  w-auto gap-x-4 animate-marquee z-30   hover:cursor-pointer  ">
        {TestimonialData.map((test, index) => {
          const { id, userName, userQuote, userRole, review } = test;
          return (
            <TestimonialCard
              key={`more-feature-${index}`}
              userName={userName}
              userRole={userRole}
              userQuote={userQuote}
              review={review}
            />
          );
        })}
      </div>
    </>
  );
}

export default TestimonialSection