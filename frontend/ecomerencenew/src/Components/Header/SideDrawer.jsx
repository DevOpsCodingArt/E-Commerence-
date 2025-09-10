// SideDrawer.jsx
// This component renders a side navigation drawer with category menu items
import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoClose, IoGameController } from "react-icons/io5";
import {
  GiClothes,
  GiDiamonds,
  GiHandBag,
  GiLipstick,
  GiMonclerJacket,
  GiNecklace,
  GiSunglasses,
  GiWallet,
  GiWatch,
} from "react-icons/gi";
import { MdChair, MdDevices, MdTablet, MdExpandMore } from "react-icons/md";
import { BiSolidWatch } from "react-icons/bi";
import { Collapse } from "@mui/material";

// SideDrawer component accepts open state and setter function as props
function SideDrawer({ open, setOpen }) {
  // State for managing expandable menu sections
  const [openFashion, setOpenFashion] = useState(false);
  const [openOuterwear, setOpenOuterwear] = useState(false);

  // Handler to close the drawer
  const handleClose = () => {
    setOpen(false);
  };

  // Sub-menu items for Fashion category
  const fashionSubItems = [
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    "Sportswear",
  ];

  // Sub-menu items for Outerwear category
  const outerwearSubItems = [
    "Jackets",
    "Coats",
    "Blazers",
    "Hoodies",
    "Sweaters",
  ];

  // Main drawer content component
  const DrawerList = (
    <Box sx={{ width: 270 }} role="presentation" onKeyDown={handleClose}>
      {/* Close button */}
      <IoClose
        onClick={handleClose}
        size={28}
        className="bg-primary hover:text-primary border-primary absolute right-0 ml-auto rounded-bl-2xl border-2 border-solid text-white hover:bg-white"
      />

      {/* Header title */}
      <h3 className="from-primary to-primary/70 mb-4 flex h-20 w-full items-center justify-center bg-gradient-to-r pt-4 text-2xl font-bold text-white shadow-lg">
        <span className="animate-pulse">Shop By Categories</span>
      </h3>

      {/* Category List */}
      <div className="py-2">
        {/* Array of category items with their properties */}
        {[
          {
            text: "Fashion",
            icon: <GiClothes className="text-blue-500" />,
            hasSubMenu: true,
            subItems: fashionSubItems,
            isOpen: openFashion,
            setOpen: setOpenFashion,
          },
          { text: "Jewellery", icon: <GiNecklace className="text-pink-500" /> },
          { text: "Watches", icon: <BiSolidWatch className="text-gray-700" /> },
          {
            text: "Outerwear",
            icon: <GiMonclerJacket className="text-green-500" />,
            hasSubMenu: true,
            subItems: outerwearSubItems,
            isOpen: openOuterwear,
            setOpen: setOpenOuterwear,
          },
          { text: "Cosmetics", icon: <GiLipstick className="text-red-400" /> },
          {
            text: "Accessories",
            icon: <GiHandBag className="text-yellow-600" />,
          },
          { text: "Electronic", icon: <MdDevices className="text-blue-600" /> },
          { text: "Furniture", icon: <MdChair className="text-brown-500" /> },
          {
            text: "Sunglasses",
            icon: <GiSunglasses className="text-gray-800" />,
          },
          {
            text: "Rolling Diamond",
            icon: <GiDiamonds className="text-purple-500" />,
          },
          {
            text: "Xbox Controller",
            icon: <IoGameController className="text-green-600" />,
          },
          {
            text: "Leather Watch",
            icon: <GiWatch className="text-amber-700" />,
          },
          {
            text: "Smart Tablet",
            icon: <MdTablet className="text-blue-700" />,
          },
          { text: "Purse", icon: <GiWallet className="text-rose-600" /> },
        ].map((item, index) => (
          // Wrap each item in Fragment for proper rendering
          <Fragment key={index}>
            <ListItem disablePadding>
              {/* Render either expandable menu item or link based on hasSubMenu property */}
              {item.hasSubMenu ? (
                <ListItemButton
                  className="px-4 py-3 hover:bg-gray-50"
                  onClick={() => item.setOpen(!item.isOpen)}
                >
                  <ListItemIcon className="min-w-[40px]">
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} className="text-gray-700" />
                  {/* Rotating expand icon based on menu state */}
                  <MdExpandMore
                    className={`text-gray-400 transition-transform ${
                      item.isOpen ? "rotate-180" : ""
                    }`}
                  />
                </ListItemButton>
              ) : (
                // Regular menu item link
                <Link to="/" className="w-full" onClick={handleClose}>
                  <ListItemButton className="px-4 py-3 hover:bg-gray-50">
                    <ListItemIcon className="min-w-[40px]">
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      className="text-gray-700"
                    />
                  </ListItemButton>
                </Link>
              )}
            </ListItem>

            {/* Collapsible submenu section */}
            {item.hasSubMenu && (
              <Collapse in={item.isOpen} timeout="auto" unmountOnExit>
                <div className="ml-4 border-l-2 border-blue-200 bg-gray-50">
                  <List component="div" disablePadding>
                    {/* Render submenu items */}
                    {item.subItems.map((subItem, subIndex) => (
                      <Link to="/" key={subIndex} onClick={handleClose}>
                        <ListItemButton className="py-2 pl-8 text-sm text-gray-600 hover:bg-white hover:text-blue-600">
                          {subItem}
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </div>
              </Collapse>
            )}
          </Fragment>
        ))}
      </div>
    </Box>
  );

  // Render the Material-UI Drawer component
  return (
    <Drawer anchor="left" open={open} onClose={handleClose}>
      {DrawerList}
    </Drawer>
  );
}

export default SideDrawer;
