'use client';
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

interface FaqAccordionProps {
  title: string;
  content: string;
}

const FaqAccordion = ({ title, content }: FaqAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-white px-2 py-4 min-h-16 rounded-tl rounded-tr relative group hover:text_style ${isOpen ? '' : 'max-h-16 border-b hover:border-primary'}`}
    >
      <div
        className="flex justify-between items-center cursor-pointer h-8 "
        onClick={toggleAccordion}
      >
        <span
          className={`text-lg ${isOpen ? 'text-primary font-semibold' : 'text-foreground font-medium'}  group-hover:text-primary group-hover:font-semibold`}
        >
          {title}
        </span>
        <IoIosArrowDown
          className={`transform ${isOpen ? 'rotate-180' : ''}`}
          size={24}
        />
      </div>
      {isOpen && (
        <div className="absolute w-full h-px left-0 top-16 bg-divider" />
      )}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {isOpen && <div className="mt-8 text-foreground">{content}</div>}
      </div>
    </div>
  );
};

export default FaqAccordion;