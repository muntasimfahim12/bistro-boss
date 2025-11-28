import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-10">

      {/* TOP SECTION (two columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="bg-[#162233] text-white py-10 flex flex-col items-center text-center px-6">
          <h2 className="text-lg font-semibold mb-2">CONTACT US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#0F172A] text-white py-10 flex flex-col items-center text-center px-6">
          <h2 className="text-lg font-semibold mb-2">Follow US</h2>
          <p className="mb-4">Join us on social media</p>

          <div className="flex gap-6">
            {/* Facebook */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
            </svg>

            {/* Instagram */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
            </svg>

            {/* Twitter */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
            </svg>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-black text-gray-300 text-center py-4 text-sm">
        Copyright © CulinaryCloud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
