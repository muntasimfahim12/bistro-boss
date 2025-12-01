import React from "react";
import Cover from "../Shared/Cover/Cover";
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
import FoodCard from "../../component/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

// Component


const Order = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [menu] = useMenu();
    const { category } = useParams();
    console.log(category)
    const categories = {
        Salad: menu.filter((item) => item.category === "salad"),
        Pizza: menu.filter((item) => item.category === "pizza"),
        Soups: menu.filter((item) => item.category === "soup"),
        Desserts: menu.filter((item) => item.category === "dessert"),
        Drinks: menu.filter((item) => item.category === "offered"),
    };

    const categoryNames = Object.keys(categories);

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
                                    background: "transparent",
                                    transition: "all 0.3s ease",
                                },
                                "& .Mui-selected": {
                                    color: "#F59E0B !important",
                                    background: "rgba(245, 158, 11, 0.12)",
                                    boxShadow: "0 0 20px rgba(245, 158, 11, 0.35)",
                                    transform: "scale(1.05)",
                                },
                                "& .MuiTab-root:hover": {
                                    color: "#111827",
                                    background: "rgba(0,0,0,0.05)",
                                },
                            }}
                        >
                            {categoryNames.map((name) => (
                                <Tab key={name} label={name} />
                            ))}
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

export default Order;
