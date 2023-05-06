export default function HeaderCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card Left */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="fond-bold text-2xl px-2 pt-4">
            Sun is Out, BOGO is Out
          </p>
          <p className="px-2">Through 26/8/23</p>
          <button className="bg-white text-black border-white mx-2 absolute bottom-4 rounded-full">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZlZ2FuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>

      {/* Card Middle */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="fond-bold text-2xl px-2 pt-4">
            New Restaurants
          </p>
          <p className="px-2">Added Daily</p>
          <button className="bg-white text-black border-white mx-2 absolute bottom-4 rounded-full">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZlZ2FuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
      </div>

      {/* Card Right */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="fond-bold text-2xl px-2 pt-4">
            We Deliver Desserts Too
          </p>
          <p className="px-2">Tasty Treats</p>
          <button className="bg-white text-black border-white mx-2 absolute bottom-4 rounded-full">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
    </div>
  );
}