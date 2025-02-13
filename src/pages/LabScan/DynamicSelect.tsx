// import React, { useEffect, useState } from "react";
// import { DoctorStyled } from "./DynamicSelect.styled";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import {
//   getDoctorsListAPI,
//   getHospitalListAPI,
// } from "../../redux/slices/doctor/doctorService";
// import VirtualDoctorsList from "../Doctor/virtualDoctorsList/virtualDoctorsList";
// import HospitalList from "../Doctor/hospitalList/hospitalList";
// import LabNearYouCard from "../../components/LabNearYouCard/LabNearYouCard";
// import PackageList from "./PackageList";

// const DynamicSelect = () => {
//   let [tabValue, setTabsValue] = useState(0);
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const { hospitalList, doctorsList, tablist } = useSelector(
//     (ReduxState: any) => ReduxState.doctor
//   );
//   useEffect(() => {
//     const doctorRequestOBj = {
//       count: 30,
//       page: 0,
//       searchText: "",
//     };
//     dispatch(getDoctorsListAPI(doctorRequestOBj));
//     const hospitalRequestOBj = {
//       cityId: "bengaluru",
//       count: 30,
//       page: 0,
//       searchText: "",
//     };
//     dispatch(getHospitalListAPI(hospitalRequestOBj));
//   }, [dispatch]);
//   return (
//     <DoctorStyled>
//       <div className="container-fluid container-max w-100 d-flex justify-content-between flex-wrap flex-md-nowrap">
//         <div className="content_container">
//           <div className="content_tabNav">
//             {tablist?.map((item: any, index: any) => {
//               return (
//                 <button
//                   className={
//                     index === tabValue
//                       ? "content_tabNav_item selected"
//                       : "content_tabNav_item"
//                   }
//                   onClick={() => setTabsValue(index)}
//                 >
//                   {item}
//                 </button>
//               );
//             })}
//           </div>
//           {tabValue === 0 && (
//             <div className="virutual_doctors_list">
//               <PackageList />
//               <PackageList />
//             </div>
//           )}
//           {tabValue === 1 && <div className="hospitals_list"></div>}
//         </div>
//       </div>
//     </DoctorStyled>
//   );
// };

// export default DynamicSelect;

import React, { useEffect, useState } from "react";
import { DoctorStyled } from "./DynamicSelect.styled";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getDoctorsListAPI,
  getHospitalListAPI,
} from "../../redux/slices/doctor/doctorService";
import VirtualDoctorsList from "../Doctor/virtualDoctorsList/virtualDoctorsList";
import HospitalList from "../Doctor/hospitalList/hospitalList";
import LabNearYouCard from "../../components/LabNearYouCard/LabNearYouCard";
import PackageList from "./PackageList";
import AvailableTests from "./AvailableTests";

const DynamicSelect = () => {
  let [tabValue, setTabsValue] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const { hospitalList, doctorsList, tablist } = useSelector(
    (ReduxState: any) => ReduxState.doctor,
  );
  useEffect(() => {
    const doctorRequestOBj = {
      count: 30,
      page: 0,
      searchText: "",
    };
    dispatch(getDoctorsListAPI(doctorRequestOBj));
    const hospitalRequestOBj = {
      cityId: "bengaluru",
      count: 30,
      page: 0,
      searchText: "",
    };
    dispatch(getHospitalListAPI(hospitalRequestOBj));
  }, [dispatch]);

  return (
    <DoctorStyled>
      <div className="container-fluid container-max w-100 d-flex justify-content-between flex-wrap flex-md-nowrap">
        <div className="content_container">
          <div className="content_tabNav">
            {["Lab Tests", "Packages"]?.map((item: any, index: any) => {
              return (
                <button
                  className={
                    index === tabValue
                      ? "content_tabNav_item selected"
                      : "content_tabNav_item"
                  }
                  onClick={() => setTabsValue(index)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {tabValue === 0 && (
            <div className="cards_container">
              <div className="card_row">
                <PackageList />
                <PackageList />
                <PackageList />
              </div>
              <div className="card_row">
                <PackageList />
                <PackageList />
                <PackageList />
              </div>
              <div className="card_row">
                <PackageList />
                <PackageList />
                <PackageList />
              </div>
            </div>
          )}

          {tabValue === 1 && (
            <div className="hospitals_list">
              <AvailableTests />
              <AvailableTests />
            </div>
          )}

          {tabValue === 1 && <div className="hospitals_list"></div>}
        </div>
      </div>
    </DoctorStyled>
  );
};

export default DynamicSelect;
