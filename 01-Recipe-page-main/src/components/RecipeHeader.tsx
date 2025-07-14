import React from 'react';

interface RecipeHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="w-full">
      <img src={imageSrc} alt={title} className="rounded-2xl w-full h-auto"/>
      <h1 className="text-3xl sm:text-5xl font-bold my-6 sm:my-10 text-center">{title}</h1>
      <p className="text-sm sm:text-[16px] mb-6 sm:mb-10 text-center">{description}</p>
    </div>
  );
};

export default RecipeHeader;
