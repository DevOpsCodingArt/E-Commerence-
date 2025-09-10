import React from "react";
import { IoGrid } from "react-icons/io5";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GiHamburgerMenu } from "react-icons/gi";

function TopSliderFilter({ setView, view }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="my-3 flex w-[99%] items-center justify-between rounded-md bg-gray-200 p-4">
      <div className="left flex space-x-4">
        <GiHamburgerMenu
          size={20}
          onClick={() => setView("list")}
          className={view === "list" ? "text-red-500" : "text-black"}
        />
        <IoGrid
          size={20}
          onClick={() => setView("grid")}
          className={view === "grid" ? "text-red-500" : "text-black"}
        />
        <span>There are length of Products</span>
      </div>
      <div className="right flex items-center space-x-4">
        <span>Sort By </span>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="!bg-white !px-6 !text-black !capitalize"
          >
            Relevance
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem className="!py-2 !text-sm" onClick={handleClose}>
              Sales, highest to lowest
            </MenuItem>
            <MenuItem className="!py-2 !text-sm" onClick={handleClose}>
              Relevance
            </MenuItem>
            <MenuItem className="!py-2 !text-sm" onClick={handleClose}>
              Name, A to Z
            </MenuItem>
            <MenuItem className="!py-2 !text-sm" onClick={handleClose}>
              Price, low to high
            </MenuItem>
            <MenuItem className="!py-2 !text-sm" onClick={handleClose}>
              Price, high to low
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default TopSliderFilter;
