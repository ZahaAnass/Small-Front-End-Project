import omelettePic from "./assets/images/image-omelette.jpeg";
import RecipeHeader from "./components/RecipeHeader";
import TimeCard from "./components/TimeCard";
import IngredientsList from "./components/IngredientsList";
import InstructionsList from "./components/InstructionsList";
import NutritionTable from "./components/NutritionTable";

const App: React.FC = () => {
  const ingredients = [
    { name: "2-3 large eggs" },
    { name: "Salt, to taste" },
    { name: "Pepper, to taste" },
    { name: "1 tablespoon of butter or oil" },
    { name: "Optional fillings cheese, diced vegetables, cooked meats, herbs" },
  ];

  const instructions = [
    {
      title: "Beat the eggs",
      description: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
    },
    {
      title: "Heat the pan",
      description: "Place a non-stick frying pan over medium heat and add butter or oil."
    },
    {
      title: "Cook the omelette",
      description: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
    },
    {
      title: "Add fillings (optional)",
      description: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
    },
    {
      title: "Fold and serve",
      description: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
    },
    {
      title: "Enjoy",
      description: "Serve hot, with additional salt and pepper if needed."
    },
  ];

  const nutrition = [
    { label: "Calories", value: "277kcal" },
    { label: "Carbs", value: "0g" },
    { label: "Protein", value: "20g" },
    { label: "Fat", value: "22g" },
  ];

  return (
    <div style={{ backgroundColor: "hsl(330, 100%, 98%)" }}>
      <div className="py-8 sm:py-20 flex justify-center min-h-screen">
        <div className="container h-full w-[90vw] sm:w-[80vw] bg-white p-6 sm:p-14 rounded-2xl">
          <RecipeHeader
            title="Simple Omelette Recipe"
            description="An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."
            imageSrc={omelettePic}
          />
          
          <TimeCard
            total="Approximately 10 minutes"
            preparation="5 minutes"
            cooking="5 minutes"
          />

          <IngredientsList
            title="Ingredients"
            ingredients={ingredients}
          />

          <hr className="my-6 sm:my-10 border-[1px] border-gray-300" />

          <InstructionsList
            title="Instructions"
            steps={instructions}
          />

          <hr className="my-6 sm:my-10 border-[1px] border-gray-300" />

          <NutritionTable
            title="Nutrition"
            description="The table below shows nutritional values per serving without the additional fillings."
            nutrition={nutrition}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
