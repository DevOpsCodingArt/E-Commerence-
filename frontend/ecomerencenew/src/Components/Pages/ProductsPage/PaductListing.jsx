import React, { useState } from "react";
import ProductSideBar from "../../ProductSideBar/ProductSideBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductsSlider from "../../Products/ProductsSlider";
import TopSliderFilter from "./TopSliderFilter";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
function PaductListing() {
  const [view, setView] = useState("grid");
  return (
    <section className="m-h-screen w-full py-8">
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            className="link duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            className="link duration-300"
            href="/"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
      <div className="flex h-full w-full bg-white">
        <div className="sideBarWrapper container h-full w-[20%]">
          <ProductSideBar></ProductSideBar>
        </div>
        <div className="rightContent w-[78%]">
          <TopSliderFilter view={view} setView={setView}></TopSliderFilter>
          <ProductsSlider view={view}></ProductsSlider>
        </div>
      </div>
    </section>
  );
}

export default PaductListing;
