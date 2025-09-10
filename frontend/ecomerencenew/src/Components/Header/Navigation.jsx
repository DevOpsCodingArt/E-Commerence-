// Navigation.jsx - Main navigation component with multi-level dropdown menus
import React, { useState } from "react";
import { Button } from "@mui/material";
import { IoRocketOutline } from "react-icons/io5";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";

function Navigation() {
  // State to control the side drawer's visibility
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="container flex items-center justify-between gap-5 py-2">
      {/* Left column: Category menu button that triggers side drawer */}
      <div className="col1 w-[18%]">
        <Button
          onClick={() => setDrawerOpen(true)}
          className="flex w-full gap-2 !font-semibold !text-black"
        >
          <RiMenu2Fill size={20} /> SHOP BY CATEGORY
          <LiaAngleDownSolid size={20} className="ml-auto" />
        </Button>
      </div>

      {/* Center column: Main navigation menu with nested dropdowns */}
      <div className="col2 flex w-[42%] flex-1 justify-center">
        <ul className="flex list-none gap-4 px-4 text-[12px] font-[600] uppercase">
          {/* Navigation data structure with 3 levels of nesting */}
          {[
            // Home menu with new arrivals, featured items, and trending sections
            {
              name: "Home",
              submenu: [
                {
                  name: "New Arrivals",
                  submenu: ["Latest Drops", "This Week", "Coming Soon"],
                },
                {
                  name: "Featured",
                  submenu: ["Editor's Pick", "Best Sellers", "Top Rated"],
                },
                {
                  name: "Trending",
                  submenu: ["Most Popular", "Seasonal", "Limited Edition"],
                },
              ],
            },
            // Fashion category with gender-specific sections and accessories
            {
              name: "Fashion",
              submenu: [
                {
                  name: "Men",
                  submenu: ["Shirts", "Pants", "Suits", "Accessories"],
                },
                {
                  name: "Women",
                  submenu: ["Dresses", "Tops", "Bottoms", "Accessories"],
                },
                {
                  name: "Kids",
                  submenu: ["Boys", "Girls", "Infants", "Teens"],
                },
                {
                  name: "Accessories",
                  submenu: ["Belts", "Watches", "Scarves", "Hats"],
                },
              ],
            },
            // Electronics section with devices and accessories
            {
              name: "Electronics",
              submenu: [
                {
                  name: "Phones",
                  submenu: [
                    "Smartphones",
                    "Basic Phones",
                    "Accessories",
                    "Cases",
                  ],
                },
                {
                  name: "Laptops",
                  submenu: ["Gaming", "Business", "Student", "2-in-1"],
                },
                {
                  name: "Gaming",
                  submenu: ["Consoles", "Games", "Controllers", "VR"],
                },
                {
                  name: "Accessories",
                  submenu: ["Chargers", "Cables", "Stands", "Storage"],
                },
              ],
            },
            // Bags and accessories categories
            {
              name: "Bags",
              submenu: [
                {
                  name: "Handbags",
                  submenu: ["Totes", "Clutches", "Shoulder Bags", "Cross-body"],
                },
                {
                  name: "Backpacks",
                  submenu: ["School", "Travel", "Sports", "Fashion"],
                },
                {
                  name: "Travel",
                  submenu: [
                    "Luggage",
                    "Duffel Bags",
                    "Travel Accessories",
                    "Organizers",
                  ],
                },
                {
                  name: "Wallets",
                  submenu: ["Men's", "Women's", "Card Holders", "Phone Cases"],
                },
              ],
            },
            // Footwear section with gender and purpose-specific categories
            {
              name: "Footwear",
              submenu: [
                {
                  name: "Men",
                  submenu: ["Casual", "Formal", "Sports", "Sandals"],
                },
                {
                  name: "Women",
                  submenu: ["Heels", "Flats", "Boots", "Sneakers"],
                },
                {
                  name: "Kids",
                  submenu: ["School Shoes", "Sports", "Casual", "Party Wear"],
                },
                {
                  name: "Sports",
                  submenu: ["Running", "Training", "Basketball", "Football"],
                },
              ],
            },
            // Groceries and household items
            {
              name: "Groceries",
              submenu: [
                {
                  name: "Fresh",
                  submenu: ["Vegetables", "Fruits", "Meat", "Dairy"],
                },
                {
                  name: "Packaged",
                  submenu: ["Snacks", "Cereals", "Canned", "Instant"],
                },
                {
                  name: "Beverages",
                  submenu: ["Coffee", "Tea", "Juices", "Soft Drinks"],
                },
                {
                  name: "Household",
                  submenu: ["Cleaning", "Kitchen", "Bathroom", "Laundry"],
                },
              ],
            },
            // Beauty and personal care products
            {
              name: "Beauty",
              submenu: [
                {
                  name: "Skincare",
                  submenu: ["Cleansers", "Moisturizers", "Serums", "Masks"],
                },
                {
                  name: "Makeup",
                  submenu: ["Face", "Eyes", "Lips", "Tools"],
                },
                {
                  name: "Haircare",
                  submenu: ["Shampoo", "Conditioner", "Styling", "Treatment"],
                },
                {
                  name: "Fragrances",
                  submenu: ["Women's", "Men's", "Unisex", "Sets"],
                },
              ],
            },
            // Wellness and fitness category
            {
              name: "Wellness",
              submenu: [
                {
                  name: "Fitness",
                  submenu: [
                    "Equipment",
                    "Clothing",
                    "Accessories",
                    "Nutrition",
                  ],
                },
                {
                  name: "Yoga",
                  submenu: ["Mats", "Props", "Clothing", "Meditation"],
                },
                {
                  name: "Supplements",
                  submenu: [
                    "Vitamins",
                    "Proteins",
                    "Weight Management",
                    "Sports",
                  ],
                },
                {
                  name: "Personal Care",
                  submenu: ["Bath", "Oral Care", "Body Care", "Hygiene"],
                },
              ],
            },
            // Jewellery and accessories
            {
              name: "Jewellery",
              submenu: [
                {
                  name: "Necklaces",
                  submenu: ["Chains", "Pendants", "Chokers", "Statement"],
                },
                {
                  name: "Rings",
                  submenu: ["Engagement", "Wedding", "Fashion", "Vintage"],
                },
                {
                  name: "Earrings",
                  submenu: ["Studs", "Hoops", "Drops", "Cuffs"],
                },
                {
                  name: "Bracelets",
                  submenu: ["Bangles", "Chain", "Cuff", "Charm"],
                },
              ],
            },
          ].map((item) => (
            // First level menu items
            <div key={item.name} className="group relative">
              <Link
                to="/"
                className="link flex items-center gap-1 transition duration-300 ease-in-out"
              >
                {item.name}
                <LiaAngleDownSolid size={12} />
              </Link>
              {/* Second level dropdown menu */}
              <div className="absolute top-full left-0 z-50 hidden min-w-[200px] rounded-md bg-white py-2 shadow-lg group-hover:block">
                {item.submenu.map((subItem) => (
                  <div key={subItem.name} className="group/sub relative">
                    <Link
                      to="/"
                      className="flex items-center justify-between px-4 py-2 text-[11px] hover:bg-gray-100"
                    >
                      {subItem.name}
                      <LiaAngleDownSolid size={12} />
                    </Link>
                    {/* Third level dropdown menu */}
                    <div className="absolute top-0 left-full z-50 hidden min-w-[200px] rounded-md bg-white py-2 shadow-lg group-hover/sub:block">
                      {subItem.submenu.map((subSubItem) => (
                        <Link
                          key={subSubItem}
                          to="/"
                          className="block px-4 py-2 text-[11px] hover:bg-gray-100"
                        >
                          {subSubItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ul>
      </div>

      {/* Right column: Delivery information */}
      <div className="col3 link flex w-[20%] cursor-pointer justify-center gap-4">
        <IoRocketOutline size={28} />
        <span>Free International Delivery</span>
      </div>

      {/* Side drawer component for mobile/tablet view */}
      <SideDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </div>
  );
}

export default Navigation;
