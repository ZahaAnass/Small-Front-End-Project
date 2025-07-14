import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface InstructionsListProps {
  title: string;
  steps: Step[];
}

const InstructionsList: React.FC<InstructionsListProps> = ({ title, steps }) => {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-6 sm:mb-10 text-center">{title}</h3>
      <ul className="list-decimal marker:text-amber-800 marker:font-bold ml-6 sm:ml-10 mt-3 sm:mt-4 flex flex-col gap-2 sm:gap-3">
        {steps.map((step, index) => (
          <li key={index}>
            <span className="ml-2 sm:ml-4 block text-sm sm:text-[16px]">
              <span className="font-bold text-amber-800">{step.title}: </span>
              {step.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructionsList;
