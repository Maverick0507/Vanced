import React, { useContext } from "react";
import { Stack } from "@mui/material";
import { useTheme } from '../context/Theme'; // Import your theme context

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const { theme, toggleTheme } = useTheme(); // Use the useTheme hook to access the theme context

  const containerStyle = {
    background: theme === 'light' ? "white" : "#FF8869",
  };

  return (
    <Stack
      style={containerStyle} // Apply the container style here
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: theme === 'light' ? "white" : "black",
          }}
          key={category.name}
        >
          <span style={{ color: category.name === selectedCategory ? "white" : "#FF8869", marginRight: "15px" }}>
            {category.icon}
          </span>
          <span style={{
            color: theme === 'light' ? "black" : "white",
          overflow:"hidden",
            opacity: category.name === selectedCategory ? "1" : "0.8"
          }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Categories;
