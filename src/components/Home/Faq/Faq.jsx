"use client";

import { useState } from "react";
import Accordion from "./Accordion";
import faqData from "../../../assets/data/faq.json";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-3 md:px-20 my-20 space-y-7">
      <span className="border border-primary-navy py-2 px-4 rounded-full">
        Faq
      </span>
      <h1 className="text-4xl font-semibold text-primary-navy">
        Frequently Asked Question
      </h1>

      <div className="">
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            title={item.question}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          >
            {item.answer}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
