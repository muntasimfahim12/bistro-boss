import cooking from "../../assets/home/chef-service.jpg";

const Cooking = () => {
  return (
    <section className="py-20 bg-gray-50 flex justify-center">
      <div className="relative w-full max-w-7xl">
        {/* Image */}
        <img
          src={cooking}
          alt="Bistro Boss Cooking"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg"
        />

        {/* White Box Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 p-8 md:p-12 rounded-2xl shadow-2xl text-center max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Bistro Boss
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, 
              libero accusamus laborum deserunt ratione dolor officiis praesentium! 
              Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt 
              quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooking;
