import React, { useRef, useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { ShoppingCart } from "lucide-react";
import { AuthContext } from "../../../provider/AuthProvider"; // firebase AuthProvider

const cn = (...args) => args.filter(Boolean).join(" ");

// ================= NAVBAR WRAPPER =================
export const Navbar = ({ children }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <motion.div ref={ref} className="fixed inset-x-0 top-0 z-50 w-full">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { scrolled })
          : child
      )}
    </motion.div>
  );
};

// ================= DESKTOP NAVBAR =================
export const NavBody = ({ children, scrolled }) => (
  <motion.div
    animate={{
      height: scrolled ? 64 : 88,
      backgroundColor: scrolled ? "rgba(10,10,10,0.85)" : "rgba(0,0,0,0.45)",
      backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
      boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.25)" : "0 4px 12px rgba(0,0,0,0.1)",
      borderBottom: scrolled
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid transparent"
    }}
    transition={{ duration: 0.35, ease: "easeInOut" }}
    className="relative hidden lg:flex items-center w-full px-8 text-white"
  >
    <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
      {children}
    </div>
  </motion.div>
);

// ================= NAV ITEMS =================
export const NavItems = ({ items = [] }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="hidden lg:flex items-center justify-center space-x-3 text-[13px] font-medium tracking-widest">
      {items.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.link}
          onMouseEnter={() => setHovered(idx)}
          className={({ isActive }) =>
            cn(
              "relative px-5 py-2 rounded-full transition-all duration-300",
              isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"
            )
          }
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 rounded-full bg-white/10"
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

// ================= MOBILE NAV =================
export const MobileNav = ({ children, scrolled }) => (
  <motion.div
    animate={{
      backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "rgba(0,0,0,0.65)"
    }}
    className="lg:hidden w-full text-white shadow-xl"
  >
    {children}
  </motion.div>
);

export const MobileNavHeader = ({ children }) => (
  <div className="flex w-full items-center justify-between px-4 py-3">{children}</div>
);

export const MobileNavMenu = ({ children, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-x-4 top-16 z-50 flex flex-col gap-3 rounded-xl bg-white text-black p-5 shadow-2xl"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }) =>
  isOpen ? <IconX onClick={onClick} className="cursor-pointer" /> 
         : <IconMenu2 onClick={onClick} className="cursor-pointer" />;

export const NavbarLogo = () => (
  <Link to="/" className="flex items-center space-x-2 text-xs font-medium text-white">
    <img
      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
      alt="logo"
      width={30}
    />
    <div className="leading-3">
      <div className="font-bold text-sm tracking-wider">BISTRO BOSS</div>
      <div className="text-[10px] text-gray-300">RESTAURANT</div>
    </div>
  </Link>
);

// ================= MAIN NAVBAR =================
export default function BlackProfessionalNavbar() {
  const { user, logoutUser } = useContext(AuthContext); // correct Firebase logout
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (err) {
      console.log("Logout failed:", err);
    }
  };

  const menu = [
    { name: "HOME", link: "/" },
    { name: "MENU", link: "/menu" },
    { name: "SECRET", link: "/secret" },
    { name: "ORDER FOOD", link: "/order" },
    { name: "CONTACT", link: "/contact" }
  ];

  return (
    <Navbar>
      {/* ================= DESKTOP ================= */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={menu} />

        <div className="relative z-50 flex items-center gap-5">

          {/* Cart */}
          <div className="relative hidden md:flex cursor-pointer hover:scale-105 transition">
            <ShoppingCart size={18} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-[9px] text-white rounded-full px-1.5">
              3
            </span>
          </div>

          {/* AUTH DESKTOP */}
          {user ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-full bg-red-500 text-white text-xs tracking-widest hover:bg-red-600 transition"
            >
              LOGOUT
            </button>
          ) : (
            <NavLink
              to="/login"
              className="px-5 py-2 rounded-full border border-white/20 text-xs tracking-widest hover:bg-white hover:text-black transition"
            >
              LOGIN
            </NavLink>
          )}
        </div>
      </NavBody>

      {/* ================= MOBILE ================= */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={mobileOpen}>
          {menu.map((m, i) => (
            <NavLink
              key={i}
              to={m.link}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-md text-xs font-semibold hover:bg-gray-100"
            >
              {m.name}
            </NavLink>
          ))}

          {/* AUTH MOBILE */}
          {user ? (
            <button
              onClick={() => { handleLogout(); setMobileOpen(false); }}
              className="mt-4 w-full py-2 rounded-lg bg-red-500 text-white text-xs font-semibold"
            >
              LOGOUT
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-4 w-full text-center py-2 rounded-lg border text-xs font-semibold"
            >
              LOGIN
            </NavLink>
          )}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
