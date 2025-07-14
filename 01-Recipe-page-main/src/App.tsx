import omelettePic from "./assets/images/image-omelette.jpeg"

const App:React.FC = () => {

  return (
    <div style={{backgroundColor:"hsl(330, 100%, 98%)"}}>
      <div className="py-20 flex justify-center">
        <div className="container h-full w-[80vw] bg-white p-14 rounded-4xl">
          <div>
            <img src={omelettePic} alt="omelettePic" className="rounded-4xl"/>
          </div>
          <h1 className="text-5xl font-bold my-10">Simple Omelette Recipe</h1>
          <p className="text-[16px] mb-10">
            An easy and quick dish, perfect for any meal. 
            This classic omelette combines beaten eggs cooked to perfection, 
            optionally filled with your choice of
            cheese, vegetables, or meats.
          </p>
          <div className="card p-8 mb-10 bg-rose-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-rose-800">Preparation time</h3>
            <ul className="list-disc ml-10 mt-4 flex flex-col gap-3">
              <li className="text-[16px]"><span className="font-bold ml-4">Total:</span> Approximately 10 minutes</li>
              <li className="text-[16px]"><span className="font-bold ml-4">Preparation:</span> 5 minutes</li>
              <li className="text-[16px]"><span className="font-bold ml-4">Cooking:</span> 5 minutes</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-3xl font-bold text-amber-800 mb-10">Ingredients</h3>
            <ul className="list-disc ml-10 mt-4 flex flex-col gap-3">
              <li><span className="ml-4">2-3 large eggs</span></li>
              <li><span className="ml-4">Salt, to taste</span></li>
              <li><span className="ml-4">Pepper, to taste</span></li>
              <li><span className="ml-4">1 tablespoon of butter or oil</span></li>
              <li><span className="ml-4">Optional fillings cheese, diced vegetables, cooked meats, herbs</span></li>
            </ul>
          </div>
          <hr className="my-10 border-[1px] border-gray-300" />
          <div className="">
            <h3 className="text-3xl font-bold text-amber-800 mb-10">Instructions</h3>
            <ul className="list-decimal marker:text-amber-800 marker:font-bold ml-10 mt-4 flex flex-col gap-3">
              <li><span className="ml-4 block"><span className="font-bold text-amber-800">Beat the eggs: </span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
              <li><span className="ml-4 block"><span className="font-bold text-amber-800">Heat the pan: </span>Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
              <li><span className="ml-4 block"><span className="font-bold text-amber-800">Cook the omelette: </span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
              <li><span className="ml-4 block"><span className="font-bold text-amber-800">Add fillings (optional): </span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
              <li><span className="ml-4 block"><span className="font-bold text-amber-800">Fold and serve: </span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
              <li><span className="ml-4 block"><span className="font-bold text-amber-800">Enjoy: </span> Serve hot, with additional salt and pepper if needed.</span></li>
            </ul>
          </div>
          <hr className="my-10 border-[1px] border-gray-300" />
          <div className="">
            <h3 className="text-3xl font-bold text-amber-800 mb-10">Nutrition</h3>
            <p className="text-[16px] mb-10">The table below shows nutritional values per serving without the additional fillings.</p>
            <div className="mini-table flex flex-col gap-4">
              <div className="flex gap-4 border-b-[1px] border-gray-300 pb-6">
                <p className="flex-1/2">Calories</p>
                <p className="font-bold flex-1/2 text-amber-800">277kcal</p>
              </div>
              <div className="flex gap-4 border-b-[1px] border-gray-300 pb-6">
                <p className="flex-1/2">Carbs</p>
                <p className="font-bold flex-1/2 text-amber-800">0g</p>
              </div>
              <div className="flex gap-4 border-b-[1px] border-gray-300 pb-6">
                <p className="flex-1/2">Protein</p>
                <p className="font-bold flex-1/2 text-amber-800">20g</p>
              </div>
              <div className="flex gap-4">
                <p className="flex-1/2">Fat</p>
                <p className="font-bold flex-1/2 text-amber-800">22g</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
