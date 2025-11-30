import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/sectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom'; // ✅ If using react-router for navigation

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('/menu.json') // ✅ public folder
      .then(res => res.json())
      .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        setMenu(popularItems);
      })
      .catch(err => console.error('Menu Fetch Error:', err));
  }, []);

  return (
    <section className='mb-12'>
      <SectionTitle 
        subTitle="From Our Menu"
        title="Popular Items"
      />

      <div className='flex justify-center'> 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center'>
          {menu.map(item => <MenuItem key={item._id} item={item} />)}
        </div>
      </div>

      {/* ===== View Full Menu Button ===== */}
      <div className="flex justify-center mt-8">
        <Link
          to="/menu" // ✅ Update this if you have a menu page route
          className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-full hover:bg-yellow-700 transition duration-300 shadow-lg"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
