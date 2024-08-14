import React from "react";
import { BsViewList } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import ShopProducts from "./ShopProducts";
import ShopPagination from "./ShopPagination";
import PageIndicator from "../../Components/PageIndicator";
import Details from "../../Components/Details";
function Shop() {
  return (
    <>
      {/* <div className="shopHeader">
        <div className="shopHeaderText">
          <span className="title-1-shop">Shop</span>
          <p
            style={{
              display: "flex",
              fontWeight: "500",
              margin: "0",
              gap: "0.5rem",
            }}
            className="title-2-shop"
          >
            Home{" "}
            <span style={{ display: "flex" }}>
              <FaAngleRight style={{ fontSize: "1.25rem" }} />
            </span>
            <span style={{ fontWeight: "300" }}> Shop</span>
          </p>
        </div>
      </div> */}
      <PageIndicator page={"Shop"}/>
      <div className="shopBar">
        <div className="shopBar-div-a">
          <div className="shopBar-a">
            <HiMiniAdjustmentsHorizontal />
            Filter
            <BsViewList />
            <HiViewGrid />
          </div>
          <div className="shopBar-b">|</div>
          <div className="shopBar-c">
            <span>Showing 1-16 of 32 results</span>
          </div>
        </div>
        <div className="shopBar-d">
          <span>Show</span>
          <span>16</span>
          <span>Sort By</span>
          <span>Default </span>
        </div>
      </div>
      <ShopProducts/>

      <ShopPagination/>

      <Details/>
    </>
  );
}

export default Shop;
