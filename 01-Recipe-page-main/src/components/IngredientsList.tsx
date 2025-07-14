import React from 'react';

interface Ingredient {
  name: string;
}

interface IngredientsListProps {
  title: string;
  ingredients: Ingredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ title, ingredients }) => {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-6 sm:mb-10 text-center">{title}</h3>
      <ul className="list-disc ml-6 sm:ml-10 mt-3 sm:mt-4 flex flex-col gap-2 sm:gap-3">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <span className="ml-2 sm:ml-4 text-sm sm:text-[16px] block">{ingredient.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
