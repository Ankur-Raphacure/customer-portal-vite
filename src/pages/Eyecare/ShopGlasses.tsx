import React, { useEffect, useState } from "react";
import { ShopglassStyled } from "./Shopglasess.Styled";
import { useHistory } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllEyewearGlassessAPI } from "../../redux/slices/generic/genericService";

const ShopGlasses = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);

  const { allEyewearGlassessList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );

  const spectaclesData = allEyewearGlassessList?.eyewear;

  console.log(allEyewearGlassessList, "allEyewearGlassessList");

  const handleColorSelect = (color: any) => {
    setSelectedColor(color);
  };
  const handleBackClick = () => {
    history.push("/eyecare/accessories");
  };
  const handleDetailLink = () => {
    history.push("/eyecare/accessories/glasses/detail");
  };
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  useEffect(() => {
    dispatch(getAllEyewearGlassessAPI(100));
  }, []);

  return (
    <ShopglassStyled>
      <div className="shop container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-3">
            <div className="filter">
              <div className="row ">
                <div className="back-btn" onClick={handleBackClick}>
                  Back
                </div>
              </div>
              <div className="row">
                <div className="filter-sec">
                  <div className="filter-category">
                    <h5>Age group</h5>
                    <div className="checkbox-group">
                      <label>
                        <input type="checkbox" />
                        8-12 yrs
                      </label>
                      <label>
                        <input type="checkbox" />
                        12-16 yrs
                      </label>
                    </div>
                  </div>
                  <div className="filter-category">
                    <h5>Frame Type</h5>
                    <div className="frame-type">
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337422099.png"
                          alt="Full Rim"
                          className="frame-image"
                        />
                        Full Rim
                      </button>
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337474548.png"
                          alt="Half Rim"
                          className="frame-image"
                        />
                        Half Rim
                      </button>
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337523884.png"
                          alt="Rimless"
                          className="frame-image"
                        />
                        Rimless
                      </button>
                    </div>
                  </div>
                  <div className="filter-category">
                    <h5>Frame Shape</h5>
                    <div className="frame-shape">
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337523884.png"
                          alt=" Rectangle"
                          className="frame-image"
                        />
                        Rectangle
                      </button>
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337618936.png"
                          alt="Square"
                          className="frame-image"
                        />
                        Square
                      </button>
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337676032.png"
                          alt="Round"
                          className="frame-image"
                        />
                        Round
                      </button>
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337719687.png"
                          alt="Cat Eye"
                          className="frame-image"
                        />
                        Cat Eye
                      </button>
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337764064.png"
                          alt=" Geometric"
                          className="frame-image"
                        />
                        Geometric
                      </button>
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337808309.png"
                          alt="Wayfarer"
                          className="frame-image"
                        />
                        Wayfarer
                      </button>
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337993547.png"
                          alt="Wayfarer"
                          className="frame-image"
                        />
                        Aviator
                      </button>
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736338102527.png"
                          alt="Oval"
                          className="frame-image"
                        />
                        Oval
                      </button>
                      <button className="frame-option">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736338153395.png"
                          alt="Hexagonal"
                          className="frame-image"
                        />
                        Hexagonal
                      </button>
                    </div>
                  </div>
                  <div className="filter-category">
                    <h5>Frame Color</h5>
                    <div className="checkbox-group">
                      <label>
                        <input type="checkbox" />
                        Black
                      </label>
                      <label>
                        <input type="checkbox" />
                        Blue
                      </label>
                      <label>
                        <input type="checkbox" />
                        Gunmetal
                      </label>
                      <label>
                        <input type="checkbox" />
                        Green
                      </label>
                      <label>
                        <input type="checkbox" />
                        Grey
                      </label>
                      <label>
                        <input type="checkbox" />
                        Silver
                      </label>
                      <label>
                        <input type="checkbox" />
                        Transparent
                      </label>
                      <label>
                        <input type="checkbox" />
                        Gold
                      </label>
                      <label>
                        <input type="checkbox" />
                        Purple
                      </label>
                      <label>
                        <input type="checkbox" />
                        Maroon
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-lg-9">
            <div className="spectacles">
              <div className="row">
                {spectaclesData?.map((spec: any) => (
                  <div key={spec.id} className="col-md-4">
                    <div className="card">
                      <div className="card-header">
                        <img
                          src={
                            spec?.image
                              ? spec?.image
                              : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736338278838.png"
                          }
                          className="card-img-top"
                          alt={spec.name}
                          onClick={handleDetailLink}
                        />
                        <div className="wishlist-icon" onClick={toggleFavorite}>
                          {isFavorited ? (
                            <AiFillHeart color="red" size={24} />
                          ) : (
                            <AiOutlineHeart color="gray" size={24} />
                          )}
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{spec.frame_features}</h5>
                        <div className="span-text">
                          <p className="card-text">Size: {spec.size}</p>
                          {/* <div className="color-options">
                            {spec.colors.map((color: any, index: any) => (
                              <span
                                key={index}
                                className={`color-dot ${
                                  selectedColor === color ? "selected" : ""
                                }`}
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorSelect(color)}
                              ></span>
                            ))}
                          </div> */}
                        </div>

                        <p className="card-price">{spec.price}</p>
                        <div className="free-lenses">
                          Get FREE BLU Screen Lenses
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShopglassStyled>
  );
};

export default ShopGlasses;
