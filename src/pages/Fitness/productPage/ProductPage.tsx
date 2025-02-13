import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import ProductsDeck from "../../../components/Gym/productsDeck/ProductsDeck";
import ProductCard from "../../../components/Gym/productCard/productCard/ProductCard";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllFitnessCentersAPI } from "../../../redux/slices/fitness/fitnessService";

const ProductPage = () => {
  const { productId } = useParams() as any;
  const [selectedSize, setSelectedSize] = useState("XL");
  const [pincode, setPincode] = useState("");
  const dispatch = useDispatch()

  const sizes = [
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
  ];

  //sugessions
  const {
    loading: fitnessCentersLoading,
    data: fitnessCentersData,
    error: fitnessCentersError,
  } = useSelector((store: RootState) => store.Fitness.fitnessCenters);

  useEffect(() => {
    dispatch(getAllFitnessCentersAPI({ page: 1, count: 10 }));
  }, []);

  console.log("centers", fitnessCentersData);

  //

  return (
    <>
      <div>
        <div className="product-container">
          <div className="breadcrumb">
            Home / Raphamart / Sports shoe For Men
          </div>

          <div className="product-grid">
            <div className="product-images">
              <div className="save-tag">Save 20%</div>

              <div className="main-image">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1737932988347.png" alt="Blue Sports Shoe" />
              </div>

              <div className="thumbnail-container">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="thumbnail">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1737932988347.png"
                      alt={`Thumbnail ${num}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="product-details">
              <h1 className="product-title">Sports shoe For Men</h1>
              <p className="product-subtitle">Strip of 30 tablets</p>
              <p className="product-company">
                HealthMed Pharmaceuticals Pvt. Ltd.
              </p>

              <div className="size-selector">
                <p className="size-label">Size</p>
                <div className="size-buttons">
                  {sizes.map((size) => (
                    <button
                      key={size.value}
                      onClick={() => setSelectedSize(size.value)}
                      className={`size-button ${
                        selectedSize === size.value ? "selected" : ""
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="order-info">
                <div className="recent-orders">
                  <div className="cart-icon">
                    {/* <ShoppingCart className="icon" /> */}
                  </div>
                  <span className="order-count">
                    350 People Ordered Recently
                  </span>
                </div>

                <div className="price-info">
                  <span className="mrp">MRP ₹236.00</span>
                  <span className="sale-price">₹199.50</span>
                  <span className="tax-info">(Inclusive of all taxes)</span>
                </div>

                <div className="pincode-checker">
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="pincode-input"
                  />
                  <button className="check-button">CHECK</button>
                </div>

                <div className="product-selectors">
                  <div className="select-wrapper">
                    <select className="quantity-select">
                      <option>1 Pair</option>
                      <option>2 Pairs</option>
                      <option>3 Pairs</option>
                    </select>
                  </div>
                  <div className="select-wrapper">
                    <select className="size-select">
                      <option>Size XL</option>
                      <option>Size L</option>
                      <option>Size M</option>
                    </select>
                  </div>
                </div>

                <button className="add-to-cart">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-container">
          <div>
            <p>
              <b>Quick Overview</b>
            </p>
            <p>
              Provides quick relief from pain and discomfort within 15-30
              minutes and is formulated to last up to 8 hours for
              longer-lasting, symptom-free comfort. Its buffered formula reduces
              the risk of irritation
            </p>
          </div>
          <div>
            <p>
              <b>Product Introduction</b>
            </p>
            <p>
              Dolo 650 Tablet helps relieve pain and fever by blocking chemical
              messengers responsible for these symptoms. It treats headaches,
              migraines, toothaches, sore throats, period pains, arthritis,
              muscle aches, and the common cold. During the COVID-19 pandemic,
              it has been widely prescribed as a paracetamol-based medication.
              Generally well tolerated, it may occasionally cause stomach pain,
              nausea, or vomiting.
            </p>
          </div>
          <div>
            <p>
              <b>How to Use</b>
            </p>
            <p>
              Take Dolo 650 Tablet as advised by your doctor, preferably with
              food to avoid stomach upset. No more than four doses should be
              taken in 24 hours, with at least a 4-hour gap between doses. Do
              not exceed the recommended duration of use. Before using Dolo 650
              Tablet, inform your doctor if you have liver or kidney problems,
              allergies, or are on other medications. It is the preferred
              painkiller during pregnancy or breastfeeding. Use the lowest
              effective dose for the shortest time necessary.
            </p>
          </div>
        </div>
      </div>
      <div className="product-container">
        <ProductsDeck
          viewAllLink="/gymlist"
          heading={"Similar Products"}
          data={fitnessCentersData?.fitnessCenters}
          renderCard={(item: any, i: any) => {
            const data = {
              name: item?.name,
              place: item?.city,
              imgLink: item?.images,
              defaultImgLink:
                "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1737932988347.png",
              rating: item?.rating,
            };
            return (
              <ProductCard key={i} data={data} link={`/gymlist/${item?.id}`} />
            );
          }}
        />
      </div>
    </>
  );
};

export default ProductPage;
