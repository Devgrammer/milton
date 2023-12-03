import { FiMinus, FiPlus } from "react-icons/fi";

const FaqQuestion = ({ id, ans, que, isActive, handleToggle }) => {
  return (
    <div
      className={`faq-questions-main-container w-full flex flex-col justify-start bg-milton-blue p-7 ${
        isActive ? "h-fit gap-y-4" : "h-min"
      } rounded-xl items-center transfrom origin-bottom ease-in-out delay-200`}
    >
      <div className="question-wrapper w-full flex justify-between items-center">
        <div className="faq-question-text text-xl font-[700]">
          Can I cancel my subscription?
        </div>
        <div className="faq-question-toggle w-fit">
          <span
            className="w-[26px] h-[26px] flex justify-center items-center rounded-full bg-milton-gray-btn hover:cursor-pointer"
            onClick={() => handleToggle(id)}
          >
            {isActive ? (
              <FiMinus color={"#90909E"} size={24} />
            ) : (
              <FiPlus color={"#90909E"} size={24} />
            )}
          </span>
        </div>
      </div>
      {isActive && (
        <div className="question-answer text-md text-milton-gray font-semibold">
          {ans}
        </div>
      )}
    </div>
  );
};

export default FaqQuestion;
