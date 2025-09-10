import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductZoom from "../../Products/ProductZoom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function ProductsDetails() {
  return (
    <section className="py-5">
      <div className="container">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
          </Breadcrumbs>
        </div>
      </div>
      <div className="conatiner flex gap-4">
        <div className="productZoom w-full">
          <ProductZoom></ProductZoom>
        </div>
      </div>
    </section>
  );
}
export default ProductsDetails;
