import { useState } from "react";
import FaqQuestion from "../faq"


const FaqSection = () => {
    const [faq, setFaq]=useState([
        {
            id:1,
            que:"Can I cancel my subscription?",
            ans:"You can cancel your plan whenever you'd like. You'll like to be downgraded to the free plan. You won't be locked out of any projects that have paid plans",
            isActive:false
        },
        {
            id:2,
            que:"Can I cancel my subscription?",
            ans:"You can cancel your plan whenever you'd like. You'll like to be downgraded to the free plan. You won't be locked out of any projects that have paid plans",
            isActive:false
        },
        {
            id:3,
            que:"Can I cancel my subscription?",
            ans:"You can cancel your plan whenever you'd like. You'll like to be downgraded to the free plan. You won't be locked out of any projects that have paid plans",
            isActive:false
        },
        {
            id:4,
            que:"Can I cancel my subscription?",
            ans:"You can cancel your plan whenever you'd like. You'll like to be downgraded to the free plan. You won't be locked out of any projects that have paid plans",
            isActive:false
        },
        {
            id:5,
            que:"Can I cancel my subscription?",
            ans:"You can cancel your plan whenever you'd like. You'll like to be downgraded to the free plan. You won't be locked out of any projects that have paid plans",
            isActive:false
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