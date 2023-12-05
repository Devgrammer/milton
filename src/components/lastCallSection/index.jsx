import { Popup } from "../featureCard";


const LastCallSection = () => {
  return (
    <div className="last-call-content-main-container mx-auto text-center flex flex-col gap-y-8">
      <div className="last-call-content text-xl font-[500] text-milton-gray w-full smx:w-1/2 mx-auto">
        Here is your last chance to explain how cool your app is. Focus on the
        benefits for your users, not on the features.
      </div>
      <div className="get-started mx-auto">
        <button className="last-call-get-started bg-milton-black w-fit text-white rounded-xl font-bold py-4 px-8">
          Get started, it's free
        </button>
      </div>
      <div className="popup-wrapper w-full smx:w-1/2 mx-auto">
        <Popup
          img={4}
          color={"#FEE9CB"}
          position={'left'}
          userReview={
            "I never missed a call again, the AI-drivenfeature is a game changer for me! "
          }
          userName={'Adam'}
        />
      </div>
    </div>
  );
}

export default LastCallSection