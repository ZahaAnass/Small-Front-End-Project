import React from 'react';

interface TimeCardProps {
  total: string;
  preparation: string;
  cooking: string;
}

const TimeCard: React.FC<TimeCardProps> = ({ total, preparation, cooking }) => {
  return (
    <div className="card p-4 sm:p-8 mb-6 sm:mb-10 bg-rose-50 rounded-xl">
      <h3 className="text-xl sm:text-2xl font-bold text-rose-800">Preparation time</h3>
      <ul className="list-disc ml-6 sm:ml-10 mt-3 sm:mt-4 flex flex-col gap-2 sm:gap-3">
        <li className="text-sm sm:text-[16px]">
          <span className="font-bold ml-2 sm:ml-4">Total:</span> {total}
        </li>
        <li className="text-sm sm:text-[16px]">
          <span className="font-bold ml-2 sm:ml-4">Preparation:</span> {preparation}
        </li>
        <li className="text-sm sm:text-[16px]">
          <span className="font-bold ml-2 sm:ml-4">Cooking:</span> {cooking}
        </li>
      </ul>
    </div>
  );
};

export default TimeCard;
