import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "./ProductsSlider";

function FilterProducts() {
  const [value, setValue] = useState(0);
  const container = true;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container">
        <div className="uppar flex w-full items-center justify-between p-4">
          <div className="left">
            <h2 className="text-3xl font-bold">Popular Products</h2>
            <p className="text-lg font-medium text-gray-500">
              Do not miss the current offers until the end of March.
            </p>
          </div>
          <div className="right w-2/4">
            <Box
              sx={{
                maxWidth: { xs: 320, sm: 480, lg: 680 },
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#ff5252", // pink-500
                  },
                  "& .MuiTab-root": {
                    color: "#6b7280", // gray-500
                    "&.Mui-selected": {
                      color: "#ff5252", // pink-500
                    },
                    "&:hover": {
                      color: "#ff5252", // pink-400
                    },
                  },
                }}
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
                <Tab label="Accessories" />
                <Tab label="Home Decor" />
              </Tabs>
            </Box>
          </div>
        </div>
        <ProductsSlider container={container}></ProductsSlider>
      </div>
    </>
  );
}

export default FilterProducts;
