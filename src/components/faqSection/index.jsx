import { useState } from "react";
import FaqQuestion from "../faq"


const FaqSection = () => {
    const [faq, setFaq] = useState([
      {
        id: 1,
        que: "Can I cancel my subscription?",
        ans: "You can cancel your plan whenever you'd like. You'll like to be downgraded to the free plan. You won't be locked out of any projects that have paid plans",
        isActive: false,
      },
      {
        id: 2,
        que: "What happens when my trial ends?",
        ans: "When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.",
        isActive: false,
      },
      {
        id: 3,
        que: "What payment methods do you offer?",
        ans: "We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express, and Discover), PayPal, and bank transfers.",
        isActive: false,
      },
      {
        id: 4,
        que: "What is your refund policy?",
        ans: "Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a full refund within 30 days of your initial purchase. To initiate the refund process, please contact our support team through the 'Help' section in your account or email us at support@Milton.com, and we'll be happy to assist you.",
        isActive: false,
      },
      {
        id: 5,
        que: "Do you offer discounts to educational institutions ?",
        ans: "Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. Please reach out to our sales team at sales@Milton.com with your institution's details, and we will provide you with more information on our exclusive educational pricing options. ",
        isActive: false,
      },
    ]);

    const handleToggle = (id) => {
      const questionBlock = faq.find((fa) => fa.id === id);
      const newResponse = {
        id: id,
        que: questionBlock.que,
        ans: questionBlock.ans,
        isActive: !questionBlock.isActive,
      };
      const faqArray = faq.filter((fa) => fa.id !== id);
        const updatedArray = [...faqArray, newResponse].sort(
          (a, b) => a.id - b.id
        );
      setFaq(updatedArray);
    };
  return (
    <div className="faq-section-main-container flex flex-col gap-y-8 w-full smx:w-[75%] mx-auto">
        {
           faq && faq?.map((fa, index)=>{
                return <FaqQuestion key={`faq-${index}`} id={fa.id} ans={fa.ans} que={fa.que} isActive={fa.isActive} handleToggle={handleToggle}/>
            })
        }
    </div>
  )
}

export default FaqSection