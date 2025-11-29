import menu from "../../assets/home/featured.jpg"
const Menu = () => {
    return (
        <section className="py-20 bg-gray-50 flex justify-center">
            <div className="relative w-full max-w-full">
                {/* Image */}
                <img
                    src={menu}
                    alt="Bistro Boss Cooking"
                    className="w-full h-[400px] md:h-[500px] object-cover  shadow-lg"
                />

                {/* White Box Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="  p-8 md:p-12 text-center max-w-3xl">
                        <p>---Check it out---</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            FROM OUR MENU
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            March 20, 2023
                            WHERE CAN I GET SOME?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                    </div>
                    <div>
                        <h1>Read More</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu