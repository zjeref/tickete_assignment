import React, { useState } from "react";
import FAQDropdown from "./miscellaneous/FAQDropdown";
import FAQJSON from "../FAQ.json";

const FAQ = () => {
  const [faqLabels, setFaqLabels] = useState(FAQJSON);

  return (
    <div className="w-full max-w-[714px]">
      <div className="mb-2 mt-16">
        <h2 className="text-2xl font-semibold text-greyscaleG2">
          Frequently asked questions
        </h2>
      </div>
      {faqLabels.map((faq) => {
        return (
          <FAQDropdown
            key={faq.question}
            label={faq.question}
            content={faq.answer}
          />
        );
      })}
    </div>
  );
};

export default FAQ;
