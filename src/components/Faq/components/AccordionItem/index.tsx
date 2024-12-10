'use client';
import { useState } from 'react';
import Image from 'next/image';

import DownImage from '@/assets/svg/caretDown.svg';
import MinusIcon from '@/assets/svg/minus.svg';
import PlusIcon from '@/assets/svg/plus.svg';


interface FaqAccordionProps {
  title: string;
  content: string;
  arrowButton?: boolean;
}

const FaqAccordion = ({ title, content, arrowButton }: FaqAccordionProps) => {
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
        {isOpen ? (
          arrowButton ? (
            <Image
              src={DownImage}
              alt="Ícone para fechar"
              className="transform rotate-180"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={MinusIcon}
              width={26}
              height={26}
              alt="Ícone de menos para fechar"
              className="text-foreground"
            />
          )
        ) : arrowButton ? (
          <Image
            src={DownImage}
            alt="Ícone para abrir"
            className="transform "
            width={24}
            height={24}
          />
        ) : (
          <Image 
          src={PlusIcon} 
          width={26} 
          height={26} 
          alt="Ícone de mais para abrir" />
        )}
      </div>
      {isOpen && (
        <div className="absolute w-full h-px left-0 top-16 bg-divider" />
      )}
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        {isOpen && <div className="mt-8 text-foreground">{content}</div>}
      </div>
    </div>
  );
};

export default FaqAccordion;
