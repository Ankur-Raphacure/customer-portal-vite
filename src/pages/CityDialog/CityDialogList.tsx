import React, { useState } from "react";
import { CityPopupStyled } from "./CityDialogList.styled";
import city from "../../assets/images/healtharticle/City.png";
import { useDispatch, useSelector } from "react-redux";
import { updateUserCity } from "../../redux/slices/auth/authSlice";
import { updateCityNameAPI } from "../../redux/slices/auth/authService";
const CityDialogList = (props: any) => {
  const [show, setShow] = useState(props);
  const { handleClose } = props;
  const dispatch = useDispatch();
  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  console.log("configInfo", configInfo);
  const handleSelectCity = (item: any) => {
    console.log("item", item);
    dispatch(updateUserCity(item));
    handleClose();
    dispatch(updateCityNameAPI({ city: item?.id }));
  };
  const filteredCities = configInfo?.cities?.filter((city: any) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <CityPopupStyled>
      {show && (
        <div
          className="modal fade show"
          id="exampleModal"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="city-cancel-btns">
                <button
                  className="close-btn btn btn-outline-danger mt-1"
                  onClick={() => handleClose()}
                >
                  X
                </button>
              </div>
              <div className="search-div">
                <div>
                  <h4 style={{ display: "flex", justifyContent: "center" }}>
                    Select City
                  </h4>
                </div>
              </div>
              <div className="search-div">
                <input
                  className="form-control mt-3 mb-3 w-50"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="py-1 px-3">
                <h6>Popular Cities</h6>
              </div>

              <div className="cards-container px-3">
                {filteredCities?.slice(0, 6)?.map((item: any) => (
                  <div
                    className="pharmacy-card-box"
                    onClick={() => {
                      handleSelectCity(item);
                    }}
                    key={item.id}
                  >
                    <div className="pharmacy-box-top">
                      <img src={item?.image} alt={item.name} />
                    </div>
                    <div className="box-bottom">
                      <div className="name-div">
                        <p className="hospital_data">{item.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="py-1 px-3 mt-4">
                <h6>Popular Tier 2 Cities</h6>
              </div>

              <div className="btn-container px-3">
                {filteredCities?.map((item: any) => (
                  <button
                    onClick={() => {
                      handleSelectCity(item);
                    }}
                    className="btn btn-outline-info"
                    key={item.id}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </CityPopupStyled>
  );
};

export default CityDialogList;
