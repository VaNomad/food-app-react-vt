import {data} from "../data/data"

export default function Food() {
  console.log(data);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-100">All</button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-100">Burgers</button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-100">Pizza</button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-100">Salads</button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-100">Deserts</button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p>Filter Price</p>
          <div>
            <button>$</button>
            <button>$$</button>
            <button>$$$</button>
            <button>$$$$</button>
          </div>
        </div>
      </div>
    </div>
  );
}