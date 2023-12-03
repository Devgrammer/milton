import { FaStar } from 'react-icons/fa';
import User1  from '../../assets/img/user1.png'

const TestimonialCard = ({userName, userRole,userQuote, review}) => {
  return (
    <div className="testimonial-card-main-container min-w-[504px] h-auto rounded-2xl box-border bg-white border flex flex-col gap-y-3 p-4">
      <div className="user-avatar-rating flex justify-between items-center">
        <div className="user-avatar flex items-center gap-x-2">
          <div className="user-avatar-img">
            <img src={User1} alt="user" />
          </div>
          <div className="user-avatar-quote text-milton-black font-bold font-md">
            "{userQuote}"
          </div>
        </div>
        <div className="user-rating flex gap-x-1">
          <FaStar color={"#E7C582"} />
          <FaStar color={"#E7C582"} />
          <FaStar color={"#E7C582"} />
          <FaStar color={"#E7C582"} />
          <FaStar color={"#E7C582"} />
        </div>
      </div>
      <div className="user-review-testimonial font-inter min-w-[90%] text-milton-gray ">
        {review}
      </div>
      <div className="user-detail flex justify-between items-center">
        <div className="user-name text-milton-black font-bold text-sm">{userName}</div>
        <div className="user-role text-milton-gray text-sm">{userRole}</div>
      </div>
    </div>
  );
}

export default TestimonialCard