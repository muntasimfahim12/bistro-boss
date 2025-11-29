import React, { useRef, useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { ShoppingCart } from "lucide-react";

// Dummy Auth Context
const AuthContext = React.createContext({
  user: { displayName: "Demo User", photoURL: "" },
  logOut: () => console.log("Logging out...")
});

const cn = (...args) => args.filter(Boolean).join(" ");

// ================= NAVBAR WRAPPER =================
export const Navbar = ({ children }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 60);
  });

  return (
    <motion.div
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 w-full"
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { visible }) : child
      )}
    </motion.div>
  );
};

// ================= DESKTOP NAVBAR =================
export const NavBody = ({ children, visible }) => (
  <motion.div
    animate={{
      backgroundColor: visible ? "rgba(43, 42, 42, 0.95)" : "rgba(0,0,0,0.3)",
      backdropFilter: visible ? "blur(8px)" : "none",
      boxShadow: visible ? "0 4px 20px rgba(0,0,0,0.12)" : "none"
    }}
    transition={{ duration: 0.3 }}
    className="relative hidden lg:block w-full px-6 py-4 text-white"
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
    <div className="absolute inset-0 hidden lg:flex items-center justify-center space-x-2 text-xs font-medium">
      {items.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.link}
          onMouseEnter={() => setHovered(idx)}
          className={({ isActive }) =>
            cn(
              "relative px-4 py-2 rounded-full transition-all",
              isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"
            )
          }
        >
          {hovered === idx && (
            <motion.div layoutId="hovered" className="absolute inset-0 rounded-full bg-white/10" />
          )}
          <span className="relative z-10">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

// ================= MOBILE NAVBAR =================
export const MobileNav = ({ children, visible }) => (
  <motion.div
    animate={{
      backgroundColor: visible ? "rgba(16, 13, 13, 0.95)" : "rgba(0,0,0,0.6)"
    }}
    className="lg:hidden w-full text-white shadow-md"
  >
    {children}
  </motion.div>
);

export const MobileNavHeader = ({ children }) => (
  <div className="flex w-full items-center justify-between px-4 py-3">
    {children}
  </div>
);

export const MobileNavMenu = ({ children, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute inset-x-4 top-16 z-50 flex flex-col gap-3 rounded-lg bg-white text-black p-4 shadow-xl"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }) =>
  isOpen ? <IconX onClick={onClick} /> : <IconMenu2 onClick={onClick} />;

// ================= LOGO =================
export const NavbarLogo = () => (
  <Link to="/" className="flex items-center space-x-2 text-xs font-medium text-white">
    <img
      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
      alt="logo"
      width={28}
      height={28}
    />
    <Link to="/" className="leading-3 block">
      <div className="font-bold text-sm">BISTRO BOSS</div>
      <div className="text-[10px]">RESTAURANT</div>
    </Link>
  </Link>
);

// ================= MAIN NAVBAR =================
export default function BlackProfessionalNavbar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };

  const menu = [
    { name: "HOME", link: "/" },
    { name: "CONTACT", link: "/contact" },
    { name: "DASHBOARD", link: "/dashboard" },
    { name: "MENU", link: "/menu" },
    { name: "SHOP", link: "/shop" }
  ];

  return (
    <Navbar>
      {/* ================= DESKTOP ================= */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={menu} />

        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex cursor-pointer">
            <ShoppingCart size={18} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-[9px] text-white rounded-full px-1.5">
              3
            </span>
          </div>
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
              className="px-2 py-2 rounded-md text-xs hover:bg-gray-100"
            >
              {m.name}
            </NavLink>
          ))}

          {user && (
            <button
              onClick={handleLogout}
              className="mt-3 text-red-500 text-xs"
            >
              Logout
            </button>
          )}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
