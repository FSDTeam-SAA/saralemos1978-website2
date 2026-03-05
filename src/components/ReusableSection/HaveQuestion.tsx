"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import ContactModal from "./ContactModal";

interface HaveQuestionProps {
  title: string;
  span?: string;
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
    <div className="flex flex-col gap-4 items-center bg-white bg-[url('/images/BG.png')] bg-no-repeat bg-right bg-contain py-12 px-6 rounded-lg overflow-hidden w-full">
      <h2 className="font-bold text-3xl md:text-4xl leading-[150%] text-gray-800 text-center">
        {title} {span && <span className="text-gray-800">{span}</span>}
      </h2>

      <p className="text-gray-600 text-base font-normal leading-[150%] max-w-2xl text-center">
        {description}
      </p>

      <div>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white text-base font-semibold leading-[150%] px-8 py-3 rounded-lg"
        >
          {buttonText}
        </Button>
      </div>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default HaveQuestion;
