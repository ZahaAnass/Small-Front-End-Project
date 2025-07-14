import React from 'react';

interface Nutrition {
  label: string;
  value: string;
}

interface NutritionTableProps {
  title: string;
  description: string;
  nutrition: Nutrition[];
}

const NutritionTable: React.FC<NutritionTableProps> = ({ title, description, nutrition }) => {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-6 sm:mb-10 text-center">{title}</h3>
      <p className="text-sm sm:text-[16px] mb-6 sm:mb-10 text-center">{description}</p>
      <div className="mini-table flex flex-col gap-3 sm:gap-4">
        {nutrition.map((item, index) => (
          <div key={index} className="flex gap-3 sm:gap-4 border-b-[1px] border-gray-300 pb-4 sm:pb-6">
            <p className="flex-1/2">{item.label}</p>
            <p className="font-bold flex-1/2 text-amber-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionTable;
