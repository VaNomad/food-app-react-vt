

export default function Hero() {
  return (
    <div className="max-w-[1640] mx-auto p-4">
      <div className="max-h-[600px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[600px] bg-black/40 flex flex-col justify-center">
          <h1 className="text-white px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-[#79fd54]">Best</span>
          </h1>
          <h1 className="text-white px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Vegan Foods <span className="text-[#ecee4f] t">Delivered</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[600px] object-cover lg:object-[200px]"
          src="https://images.unsplash.com/photo-1623428188495-89c064ee061a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
      </div>
    </div>
  );
}