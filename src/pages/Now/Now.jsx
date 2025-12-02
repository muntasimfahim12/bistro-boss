import React from "react";
import Cover from "../../pages/Shared/Cover/Cover";
import OrderCover from "../../assets/shop/banner2.jpg";

// MUI
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Animation
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Custom Hook
import useMenu from "../../hooks/useMenu";
import { useParams, useNavigate } from "react-router-dom";
import FoodCard from "../../component/FoodCard/FoodCard";

const Now = () => {
  const navigate = useNavigate();
  const [menu] = useMenu();
  const { category } = useParams(); // ✅ url category

  const categories = {
    salad: menu.filter((item) => item.category === "salad"),
    pizza: menu.filter((item) => item.category === "pizza"),
    soup: menu.filter((item) => item.category === "soup"),
    dessert: menu.filter((item) => item.category === "dessert"),
    offered: menu.filter((item) => item.category === "offered"),
  };

  const categoryNames = Object.keys(categories);

  // ✅ Default tab detect from URL
  const currentIndex = categoryNames.indexOf(category);
  const [value, setValue] = React.useState(
    currentIndex === -1 ? 0 : currentIndex
  );

  // ✅ URL change হলে tab update হবে
  React.useEffect(() => {
    if (currentIndex !== -1) {
      setValue(currentIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/order/${categoryNames[newValue]}`); // ✅ tab change হলে url change
  };

  return (
    <div className="bg-white min-h-screen">
      <Cover
        img={OrderCover}
        title="OUR SHOP"
        subtitle="Would you like to try a dish?"
      />

      {/* ===== TABS ===== */}
      <div className="mt-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-lg px-6 py-4 border border-gray-200"
        >
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              TabIndicatorProps={{ sx: { height: 0 } }}
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  mx: 1,
                  color: "#1F2937",
                  borderRadius: "16px",
                  padding: "10px 26px",
                  transition: "all 0.3s ease",
                },
                "& .Mui-selected": {
                  color: "#F59E0B !important",
                  background: "rgba(245, 158, 11, 0.12)",
                  boxShadow: "0 0 20px rgba(245, 158, 11, 0.35)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Tab label="Salad" />
              <Tab label="Pizza" />
              <Tab label="Soups" />
              <Tab label="Desserts" />
              <Tab label="Drinks" />
            </Tabs>
          </Box>
        </motion.div>
      </div>

      {/* ===== TAB CONTENT ===== */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-12">
        {categories[categoryNames[value]]?.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Now;
