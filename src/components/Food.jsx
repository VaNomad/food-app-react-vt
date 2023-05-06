import { data } from "../data/data";
import { useState } from "react";

export default function Food() {
  // console.log(data);
  const [foods, setFoods] = useState(data);

  // Filter by Food Type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-6">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-white mt-4">Filter Type</p>
          <div className="flex justify-between flex-wrap mt-2">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-100 hover:scale-105"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-100 hover:scale-105"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-100 hover:scale-105"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-100 hover:scale-105"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-100 hover:scale-105"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div className="mt-[2rem]">
          <p className="text-white font-bold">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full mt-2">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-white hover:bg-white hover:text-black hover:scale-105 duration-300"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-white hover:bg-white hover:text-black hover:scale-105 duration-300"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-white hover:bg-white hover:text-black hover:scale-105 duration-300"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-white hover:bg-white hover:text-black hover:scale-105 duration-300"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="shadow-lg shadow-gray-600 hover:105 duration-300 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between p-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-black tracking-widest p-2 rounded-lg">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
