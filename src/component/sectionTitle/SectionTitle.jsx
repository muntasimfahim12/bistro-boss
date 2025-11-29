const SectionTitle = ({ subTitle = "From 11:00am to 10:00pm", title = "Order Online" }) => {
  return (
    <div className="w-full text-center my-14 px-4">
      {/* Sub Title */}
      <p className="text-yellow-500 italic tracking-widest mb-2">
        --- {subTitle} ---
      </p>

      {/* Main Title */}
      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider border-y-4 border-gray-300 inline-block px-6 py-2 text-gray-800">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
