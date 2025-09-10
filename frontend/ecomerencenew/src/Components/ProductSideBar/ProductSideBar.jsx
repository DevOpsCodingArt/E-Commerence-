import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

function ProductSideBar() {
  const [openSections, setOpenSections] = useState({
    categories: true,
    stock: true,
    size: true,
    price: true,
    rating: true,
  });

  const [priceRange, setPriceRange] = useState([0, 10000]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const ratings = [5, 4, 3, 2, 1];

  const shopByCategory = [
    {
      category: [
        "FASHION",
        "ELECTRONICS",
        "BACS",
        "FOOTWEAR",
        "GROCERIES",
        "BEAUTY",
        "WELLNESS",
        "JEWELLERY",
      ],
      stock: {
        available: 17,
        inStock: 10,
        notAvailable: 17,
      },
      size: [
        { name: "Small", stock: 17 },
        { name: "Medium", stock: 10 },
        { name: "Large", stock: 17 },
        { name: "XL", stock: 17 },
        { name: "XXL", stock: 17 },
      ],
    },
  ];

  return (
    <aside className="side h-full w-full">
      <div className="box py-4">
        <h3 className="mb-8 text-xl font-bold">Shop By Categories</h3>

        {/* Categories Section */}
        <div className="mb-8">
          <h4
            className="mb-4 flex cursor-pointer items-center font-semibold"
            onClick={() => toggleSection("categories")}
          >
            Categories
            {openSections.categories ? (
              <MdKeyboardArrowDown className="ml-4 text-2xl" />
            ) : (
              <MdKeyboardArrowRight className="ml-4 text-2xl" />
            )}
          </h4>
          {openSections.categories && (
            <div className="scroll dark:[&::-webkit-scrollbar-thumb]:bg-primary h-[250px] w-full overflow-auto px-8 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-gray-400">
              <FormGroup>
                {shopByCategory[0].category.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox size="small" />}
                    label={item}
                  />
                ))}
              </FormGroup>
            </div>
          )}
        </div>

        {/* Stock Status Section */}
        <div className="mb-8">
          <h4
            className="mb-4 flex cursor-pointer items-center font-semibold"
            onClick={() => toggleSection("stock")}
          >
            Stock Status
            {openSections.stock ? (
              <MdKeyboardArrowDown className="ml-4 text-2xl" />
            ) : (
              <MdKeyboardArrowRight className="ml-4 text-2xl" />
            )}
          </h4>
          {openSections.stock && (
            <FormGroup className="px-8">
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={`Available (${shopByCategory[0].stock.available})`}
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={`In Stock (${shopByCategory[0].stock.inStock})`}
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={`Not Available (${shopByCategory[0].stock.notAvailable})`}
              />
            </FormGroup>
          )}
        </div>

        {/* Size Section */}
        <div className="mb-8">
          <h4
            className="mb-4 flex cursor-pointer items-center font-semibold"
            onClick={() => toggleSection("size")}
          >
            Size
            {openSections.size ? (
              <MdKeyboardArrowDown className="ml-4 text-2xl" />
            ) : (
              <MdKeyboardArrowRight className="ml-4 text-2xl" />
            )}
          </h4>
          {openSections.size && (
            <FormGroup className="px-8">
              {shopByCategory[0].size.map((item, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox size="small" />}
                  label={`${item.name} (${item.stock})`}
                />
              ))}
            </FormGroup>
          )}
        </div>

        {/* Price Range Section */}
        <div className="mb-8">
          <h4
            className="mb-4 flex cursor-pointer items-center font-semibold"
            onClick={() => toggleSection("price")}
          >
            Price Range
            {openSections.price ? (
              <MdKeyboardArrowDown className="ml-4 text-2xl" />
            ) : (
              <MdKeyboardArrowRight className="ml-4 text-2xl" />
            )}
          </h4>
          {openSections.price && (
            <div className="px-8">
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={1000}
              />
              <div className="mt-2 flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          )}
        </div>

        {/* Rating Section */}
        <div>
          <h4
            className="mb-4 flex cursor-pointer items-center font-semibold"
            onClick={() => toggleSection("rating")}
          >
            Rating
            {openSections.rating ? (
              <MdKeyboardArrowDown className="ml-4 text-2xl" />
            ) : (
              <MdKeyboardArrowRight className="ml-4 text-2xl" />
            )}
          </h4>
          {openSections.rating && (
            <div className="px-8">
              {ratings.map((rating) => (
                <div key={rating} className="mb-2 flex items-center">
                  <Rating value={rating} readOnly size="medium" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default ProductSideBar;
