'use client'
import React, { useState } from "react";
import { Button } from "../ui/button";
import ContactModal from "./ContactModal";

interface HaveQuestionProps {
  title: string;
  span: string;
  description: string;
  buttonText: string;
}

const HaveQuestion = ({
  title,
  span,
  description,
  buttonText,
}: HaveQuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 items-center bg-[#F1F5F9] py-5 rounded-2xl">
      <h2 className="font-bold text-3xl md:text-4xl leading-[150%] text-black text-center">
        {title} <span className="text-[#65A30D]">{span}</span>
      </h2>

      <p className="text-[#838383] text-base font-normal leading-[150%] max-w-2xl text-center">
        {description}
      </p>

      <div>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-[#5A50F5] hover:bg-[#473ce4] cursor-pointer text-[#B5ED5B] text-base font-semibold leading-[150%] px-6 py-2 rounded-full"
        >
          {buttonText}
        </Button>
      </div>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default HaveQuestion;
