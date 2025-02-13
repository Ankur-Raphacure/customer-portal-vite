import React, { useCallback, useEffect, useState, useRef } from "react";
import { DoctorsStyled } from "./Doctors.styled";
import SideFilterModule from "../Pharmacy/SideFilterModule";
import BreadCrumbModule from "../Pharmacy/BreadCrumbModule";
import DoctorCardModule from "./DoctorCardModule";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import {
  doctorsSearchTextChange,
  hospitalsSearchTextChange,
} from "../Pharmacy/PharmacyObjectsModule";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDoctorAPI,
  getDoctorFiltersAPI,
  getNearByHospitalAPI,
  getTypeFiltersAPI,
} from "../../redux/slices/doctor/doctorService";
import ContentLoaderSection from "./../../components/ContentLoaderSection/ContentLoaderSection";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { DoctorCardStyled } from "./DoctorCard.styled";
import { IoIosStar } from "react-icons/io";
import EmpanelWithUs from "../../components/EmpanelWithUs/EmpanelWithUs";
import virtualIcon from "../../assets/images/virtual.svg";
import clinicIcon from "../../assets/images/clinic.svg";

const AdvImg1 =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737787650549.png";
const AdvImg2 =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737787679017.png";
const DoctorsList = (props: any) => {
  const location = useLocation();
  const item = location.state;
  // const [selectedHospital, setSelectedHospital] = useState<any[]>(
  //   item ? [item] : []
  // );
  let { vendorId } = props?.match?.params;
  console.log("vendorId", vendorId);
  let specializationId = props?.match?.params?.id;

  const pathUrl = window.location.pathname;
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<any>();
  const count = 25;
  const [page, setPage] = useState(1);
  const [specialization, setSpecialization] = useState<number[]>(
    specializationId ? [Number(specializationId)] : ([] as any),
  );
  const [languages, setLanguages] = useState([] as any);
  const [gender, setGender] = useState([] as any);
  const [status, setStatus] = useState(["approved"] as any);
  const [consultType, setConsultType] = useState([] as any);
  const [weekOffDays, setWeekOffDays] = useState([] as any);
  const [availableIn, setAvailableIn] = useState(false as any);
  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState("");

  const [showEmpanelWithUsModel, setShowEmpanelWithUsModel] = useState(false);
  const [selectedHospitalData, setSelectedHospitalData] = useState({} as any);

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { allNearByHospitalList, allDoctorsFiltersData } = useSelector(
    (ReduxState: any) => ReduxState.doctor,
  );
  const { selectedCurrentAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile,
  );
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [doctorsListData, setDoctorsListData] = useState<any>([]);
  const [totalDoctors, setToatlDoctors] = useState(0);
  const [allDoctorFilter, setAllDoctorFilter] = useState<any>({});
  const [showHospitalDoctors, setShowHospitalDoctors] = useState(true);
  const [isLoadMoreClick, setIsLoadMoreClick] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState(
    pathUrl?.includes("nearbyhospitals") ? "clinic" : ("online" as any),
  );

  const [updatedFilters, setUpdatedFilters] = useState(false);
  const [filtersDevHeight, setFiltersDevHeight] = useState("" as any);
  const filtersDivRef = useRef<HTMLDivElement | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const list = [
    {
      title: "Doctor",
      link: `/doctor`,
    },
    {
      title:
        selectedServiceType === "clinic"
          ? "Nearby Hospital"
          : "Virtual Consultation",
    },
  ];

  console.log("allDoctorsFiltersData", allDoctorsFiltersData);
  console.log("filtersDevHeight", filtersDevHeight);

  useEffect(() => {
    if (vendorId) {
      setShowHospitalDoctors(true);
    }
  }, [vendorId]);

  useEffect(() => {
    console.log("selectedServiceType : ", selectedServiceType);
  }, [selectedServiceType]);

  // const handleScroll = () => {
  //   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  //   if (
  //     scrollHeight - scrollTop <= clientHeight + 100 &&
  //     scrollTop > 2000 &&
  //     !isPageLoading
  //   ) {
  //     // setIsPageLoading(true);
  //     if (sectionName === "nearbyhospitals") {
  //       getNearByHospitalnLsit();
  //     } else {
  //       handleLoadMore();
  //     }
  //     console.log("load more items");
  //     console.log("scrollTop", scrollTop);
  //     console.log("scrollHeight", scrollHeight);
  //     console.log("clientHeight", clientHeight);
  //     // loadMoreItems();
  //   }
  // };
  const handleonFilterName = async (event: any) => {
    handleClearAll();
    setSearchText(event);
    // setPage(1);
    setDoctorsListData([]);
  };
  const getAllDoctorsList = async (ssType: any) => {
    let body = {} as any;
    if (searchText) {
      body.searchText = searchText;
    }
    // if (id) {
    //   body.specialization = id;
    // }
    if (specialization) {
      body.category_ids = specialization;
    }
    if (languages) {
      body.languages = languages;
    }
    if (gender) {
      body.gender = gender;
    }
    if (status) {
      body.status = status;
    }
    if (consultType.length > 0) {
      body.type = consultType;
    }
    // if (weekOffDays) {
    //   body.weekOffDays = weekOffDays;
    // }
    if (availableIn) {
      body.availableIn90 = availableIn;
    }
    if (minPrice) {
      body.minVirtualConsultationCost = minPrice;
    }
    if (maxPrice) {
      body.maxVirtualConsultationCost = maxPrice;
    }

    body.count = count;
    body.page = page;

    setIsPageLoading(true);

    const res: any = await dispatch(
      getAllDoctorAPI({
        id: ssType === "clinic" ? vendorId : null,
        body: {
          filters: {
            ...body,
            availabilities: true,
            type: ["virtual"],
          },
        },
      }),
    );
    setIsPageLoading(false);
    console.log("res?.payload?.data", res?.payload?.data);
    if (res?.payload?.data?.vendor?.id) {
      setSelectedHospitalData(res?.payload?.data?.vendor);
    }

    if (res?.payload?.success && Array.isArray(res?.payload?.data?.doctors)) {
      if (isLoadMoreClick) {
        setDoctorsListData([
          ...doctorsListData,
          ...res?.payload?.data?.doctors,
        ]);
      } else {
        setDoctorsListData([...res?.payload?.data?.doctors]);
      }
      setToatlDoctors(parseInt(res?.payload?.data?.totalCount || 0));
      setIsLoadMoreClick(false);
    }
  };
  useEffect(() => {
    getAllDoctorsList(selectedServiceType);
  }, [
    specialization,
    languages,
    gender,
    status,
    consultType,
    weekOffDays,
    availableIn,
    page,
    vendorId,
    minPrice,
    maxPrice,
  ]);
  const handleLoadMore = () => {
    // Use functional update to ensure we have latest page state
    setPage((prevPage) => prevPage + 1);
    setIsLoadMoreClick(true);
  };
  useEffect(() => {
    console.log("Current page:", page);
  }, [page]);

  useEffect(() => {
    if (
      pathUrl.includes("nearbyhospitals") ||
      selectedServiceType === "clinic"
    ) {
      getNearByHospitalnLsit();
    }
    setShowHospitalDoctors(false);
  }, [selectedCurrentAddress, searchText, page, specialization]);
  console.log("selectedCurrentAddress", selectedCurrentAddress);
  const getNearByHospitalnLsit = async () => {
    setIsPageLoading(true);
    const body = {
      searchText: searchText,
      section_name: "doctor",
      count: count,
      page: page,
      category_ids: specialization,
    } as any;

    if (selectedCurrentAddress?.latitude && selectedCurrentAddress?.longitude) {
      body.latitude = selectedCurrentAddress.latitude;
      body.longitude = selectedCurrentAddress.longitude;
      body.distanceWithin = 300000;
    }
    // if (specialization) {
    //   body.category_ids = specialization;
    // }
    // setPage(1);
    await dispatch(getNearByHospitalAPI(body));
    setIsPageLoading(false);
  };
  const handleOnClickActive = async (typeS: any) => {
    await handleClearAll();
    await setSelectedServiceType(typeS);
    if (typeS === "clinic") {
      setConsultType(["opd"]);
      getNearByHospitalnLsit();
    } else {
      setConsultType(["virtual"]);
      // getAllDoctorsList(typeS);
    }
  };

  const getUpdatedFiltersCall = async (body: any, filtersList: any) => {
    setIsPageLoading(true);
    await dispatch(
      getTypeFiltersAPI({
        filters: {
          ...body,
          status: ["approved"],
          filtersNeeded: filtersList,
          type: selectedServiceType === "online" ? ["virtual"] : ["opd"],
          availabilities: true,
        },
      }),
    );
    setIsPageLoading(false);
    setTimeout(() => {
      setUpdatedFilters(!updatedFilters);
    }, 100);
  };
  useEffect(() => {
    const body: any = {};
    if (searchText) {
      body.searchText = searchText;
    }
    getUpdatedFiltersCall(body, [
      "languages",
      "category_ids",
      "gender",
      "type",
    ]);
  }, [searchText, selectedServiceType]);
  useEffect(() => {
    const body: any = {};

    // if (consultType.length > 0) {
    //   body.type = consultType;
    // }
    // if (gender) {
    //   body.gender = gender;
    // }
    if (specialization) {
      body.category_ids = specialization;
    }
    getUpdatedFiltersCall(body, ["languages", "gender", "type"]);
  }, [specialization]);

  useEffect(() => {
    const body: any = {};
    if (consultType.length > 0) {
      body.type = consultType;
    }

    if (specialization) {
      body.category_ids = specialization;
    }
    getUpdatedFiltersCall(body, ["languages", "gender"]);
  }, [consultType]);
  useEffect(() => {
    const body: any = {};
    if (consultType.length > 0) {
      body.type = consultType;
    }

    if (gender) {
      body.gender = gender;
    }
    if (specialization) {
      body.category_ids = specialization;
    }
    getUpdatedFiltersCall(body, ["languages"]);
  }, [gender]);

  // filter
  // const getDoctorsListApi = useCallback(async () => {
  //   // const body = getBodyJson();
  //   // const res: any = await dispatch(
  //   //   getDoctorFiltersAPI({
  //   //     filters: {
  //   //       ...body,
  //   //       filtersNeeded: [
  //   //         "status",
  //   //         "experience",
  //   //         "availableIn90",
  //   //         "ratings",
  //   //       ],
  //   //     },
  //   //   })
  //   // );
  //   // setAllDoctorFilter({
  //   //   Ratings: res?.payload?.data?.ratings,
  //   //   "Available by 90": res?.payload?.data?.availableIn90,
  //   //   Experience: res?.payload?.data?.experience,
  //   // });
  // }, [
  //   id,
  //   dispatch,
  //   status,
  //   weekOffDays,
  //   availableIn,
  //   page,
  //   selectedHospital,
  //   minPrice,
  //   maxPrice,
  // ]);

  // useEffect(() => {
  //   getDoctorsListApi();
  // }, [getDoctorsListApi]);
  const DoctorBookingReviewProp = (obj: any, type: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/doctor/doctordetails/${obj?.id}`);
    }
  };
  const handleCardSelection = (item: any) => {
    console.log("item", item);
    // setPage(1);
    const speUrl =
      specialization?.length > 0 ? `/${specialization?.join(",")}` : "";
    // dispatch(updateSelectedHospitalData(item));
    history.push(`/doctor/clinicDetails/${item?.id}${speUrl}`);
    // setSelectedHospital([{ ...item }]);

    // setSelectedHospital((prevSelected: any) => {
    //   if (prevSelected.includes(item)) {
    //     return prevSelected.filter((selected: any) => selected !== item);
    //   } else {
    //     return [...prevSelected, item];
    //   }
    // });
  };
  const doctorFiltersMethod = (lable: any, value: any, record: any) => {
    const helper = (prevState: any[], incoming: any) => {
      const isExists = prevState.includes(incoming);
      if (isExists) {
        return prevState.filter((prev) => prev != incoming);
      } else {
        return [...prevState, incoming];
      }
    };
    setPage(1);
    setDoctorsListData([]);
    if (lable === "Specialization") {
      setSpecialization((prev: any) => helper(prev, record?.id));
      setGender([]);
      setLanguages([]);
      setConsultType([]);
      setAvailableIn(false);
    } else if (lable === "Type") {
      setConsultType((prev: any) => helper(prev, value));
      setGender([]);
      setLanguages([]);
      setAvailableIn(false);
    } else if (lable === "Gender") {
      setGender((prev: any) => helper(prev, value));
      setLanguages([]);
      setAvailableIn(false);
    } else if (lable === "Languages") {
      setLanguages((prev: any) => helper(prev, value));
      setAvailableIn(false);
    } else if (lable === "Status") {
      setStatus((prev: any) => helper(prev, value));
    } else if (lable === "Week Off Days") {
      setWeekOffDays((prev: any) => helper(prev, value));

      // setPage(1);
    } else if (lable === "Available by 90") {
      setAvailableIn((prev: boolean) => !prev);
    }
  };
  const Banner = ({ rating }: any) => {
    return (
      <DoctorCardStyled>
        <div className="bannerWrapper">
          <div className="rectangle">
            <IoIosStar fill="#252B61" className="me-2 " /> {Math.round(rating)}
          </div>
          <div className="triangle"></div>
        </div>
      </DoctorCardStyled>
    );
  };

  const handleClearAll = (fromSearch?: any) => {
    setSpecialization([]);
    setLanguages([]);
    setGender([]);
    setConsultType([]);
    setWeekOffDays([]);
    if (!fromSearch) {
      setSearchText("");
    }
    setAvailableIn(false);
    // setPage(1);
    setMinPrice(0);
    setMaxPrice("");
  };
  const filterPriceRange = (value: any) => {
    setMinPrice(value?.[0] ?? 0);
    setMaxPrice(value?.[1]);
  };
  const handleInputChange = (value: any) => {
    setMinPrice(value?.[0] ?? 0);
    setMaxPrice(value?.[1]);
  };
  const selectedCheckBox = (lable: any, value?: any, record?: any) => {
    if (lable === "Specialization") {
      return specialization?.find((item: any) => item == record?.id)
        ? true
        : false;
    } else if (lable === "Languages") {
      return languages?.find((item: any) => item == value);
    } else if (lable === "Gender") {
      return gender?.find((item: any) => item == value);
    } else if (lable === "Status") {
      return status?.find((item: any) => item == value);
    } else if (lable === "Type") {
      return consultType?.find((item: any) => item == value);
    } else if (lable === "Week Off Days") {
      return weekOffDays?.find((item: any) => item == value);
    } else if (lable === "Available by 90") {
      return availableIn;
    }
    return false;
  };
  const DoctorChat = () => {
    history.push("/chat");
  };
  const DoctorBookConsultProp = (obj: any) => {
    // if (!user?.id) {
    //   dispatch(updateShowLoginModel(true));
    // } else {
    history.push(`/doctor/doctordetails/${obj?.id}`);
    // }
  };

  const showOtherClinics = () => {
    setShowHospitalDoctors(false);
  };
  const filtersdata1 = {
    ...allDoctorFilter,
    Type: allDoctorsFiltersData?.type,
    Gender: allDoctorsFiltersData?.gender,
    Specialization: allDoctorsFiltersData?.category_ids,
    Languages: allDoctorsFiltersData?.languages,
  };
  console.log("allDoctorFilter", allDoctorFilter);
  console.log("allDoctorsFiltersData", allDoctorsFiltersData);
  console.log("filtersdata1", filtersdata1);
  console.log("doctorsListData", doctorsListData);
  console.log("doctorsListData", showHospitalDoctors);
  return (
    <DoctorsStyled filtersHeight={`1350px`}>
      <EmpanelWithUs
        sectionName={"doctor"}
        show={showEmpanelWithUsModel}
        onHide={() => {
          setShowEmpanelWithUsModel(false);
        }}
      />

      <div className="BreadCrumbModule">
        <BreadCrumbModule list={list} />
      </div>
      <div className="doctor-list-main-div">
        <div className="side-filter-p-div" ref={filtersDivRef}>
          <SideFilterModule
            origin="doctor"
            doctorFilter={filtersdata1}
            doctorFiltersMethod={doctorFiltersMethod}
            handleClearAll={handleClearAll}
            filterPriceRange={filterPriceRange}
            selectedCheckBox={selectedCheckBox}
            consultType={consultType}
            handleInputChange={handleInputChange}
            specialization={specialization}
            pathName={"/doctor"}
            selectedServiceType={selectedServiceType}
          />
        </div>
        <div className="doctor-list-p-div">
          <div className="toggle-container">
            <span
              className={`toggle-label ${
                selectedServiceType === "online" ? "active" : ""
              }`}
              onClick={() => handleOnClickActive("online")}
            >
              <img src={virtualIcon} />
              Online Consultation
            </span>

            <span
              className={`toggle-label ${
                selectedServiceType === "clinic" ? "active" : ""
              }`}
              onClick={() => handleOnClickActive("clinic")}
            >
              <img src={clinicIcon} />
              Clinic Consult
            </span>
          </div>

          <div className="search-by-text">
            <SearchByTextModule
              details={
                selectedServiceType === "clinic"
                  ? hospitalsSearchTextChange
                  : doctorsSearchTextChange
              }
              handleonFilterName={handleonFilterName}
              setSearchText={setSearchText}
              searchText={searchText}
            />
          </div>
          {isPageLoading && <ContentLoaderSection fromPage="doctorsList" />}
          {selectedServiceType === "online" ? (
            <>
              <div className="page-count-div">
                <p>
                  Showing {doctorsListData?.length} Doctors{" "}
                  {totalDoctors > 0 ? `of ${totalDoctors} doctors` : ""}{" "}
                </p>
              </div>
              <div className="allDocList">
                {doctorsListData?.length > 0 &&
                  doctorsListData?.map((item: any, index: any) => (
                    <DoctorCardModule
                      key={index}
                      appointment={{
                        id: item?.id,
                        name: item?.name,
                        department: item?.specialization,
                        experience: item?.work_experience_years,
                        languages: item?.languages,
                        education: item?.highest_education,
                        inClinicFee: item?.name,
                        videoConsultFee: item?.minutes_before_virtual,
                        gender: item?.gender,
                        consultantType: item?.name,
                        specialization: item?.specialization,
                        slots: item?.name,
                        rating: item?.rating,
                        image: item?.image,
                        availableIn90: item?.availableIn90,
                        doctoreType: item?.type,
                      }}
                      DoctorBookingReviewProp={DoctorBookingReviewProp}
                      DoctorChatProp={DoctorChat}
                      DoctorBookConsultProp={DoctorBookConsultProp}
                    />
                  ))}
              </div>
              {!isPageLoading && doctorsListData?.length > 0 && (
                <>
                  <div className="d-flex mt-4">
                    {totalDoctors <= page * count ? (
                      <></>
                    ) : (
                      <button className="loadMoreBtn" onClick={handleLoadMore}>
                        Load More
                      </button>
                    )}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="page-count-div">
                <p>
                  Showing {allNearByHospitalList?.vendors?.length} Hospitals of{" "}
                  {allNearByHospitalList?.total}
                </p>
              </div>
              {/* {showHospitalDoctors ? (
                <>
                  {vendorId && (
                    <>
                      {selectedHospitalData?.id && (
                        <>
                          <div className="selected-opd-div">
                            <div className={`appointment-card `}>
                              <div className="selected-left-middle">
                                <div className="opd-card-left">
                                  <img
                                    src={selectedHospitalData?.image}
                                    alt={selectedHospitalData?.name}
                                  />
                                </div>
                                <div className="opd-card-right">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                      <p className="doctor-title">
                                        {selectedHospitalData?.name}
                                      </p>

                                      <div className="d-flex align-items-center">
                                        <img
                                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737012130996.png"
                                          alt=""
                                          className="me-2"
                                        />
                                        
                                        <p className="selected-location-text">
                                          {selectedHospitalData?.address}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {doctorsListData?.length === 0 && (
                        <p className="no-doctors-clinis-data">
                          No Doctors Are available !
                        </p>
                      )}
                      <p className="show-other-clinis-data">
                        <span onClick={showOtherClinics}>
                          {`Show other Clinic's`}
                        </span>
                      </p>
                      {doctorsListData?.length > 0 && (
                        <>
                          {Array.isArray(doctorsListData) &&
                            doctorsListData?.map((item: any, index: any) => (
                              <DoctorCardModule
                                key={index}
                                appointment={{
                                  id: item?.id,
                                  name: item?.name,
                                  department: item?.specialization,
                                  experience: item?.work_experience_years,
                                  languages: item?.languages,
                                  education: item?.highest_education,
                                  inClinicFee: item?.name,
                                  videoConsultFee: item?.minutes_before_virtual,
                                  gender: item?.gender,
                                  consultantType: item?.name,
                                  specialization: item?.specialization,
                                  slots: item?.name,
                                  rating: item?.rating,
                                  image: item?.image,
                                  availableIn90: item?.availableIn90,
                                  doctoreType: item?.type,
                                }}
                                DoctorBookingReviewProp={
                                  DoctorBookingReviewProp
                                }
                                DoctorChatProp={DoctorChat}
                                DoctorBookConsultProp={DoctorBookConsultProp}
                              />
                            ))}
                        </>
                      )}
                    </>
                  )}
                </>
              ) : ( */}
              <>
                {allNearByHospitalList?.vendors?.map((item: any) => {
                  return (
                    <div className="opd-detail-card">
                      <div className={`appointment-card`}>
                        <div
                          className="left-middle left-middle-mobile-view"
                          // onClick={() => history.push(`/doctor/doctorlist`)}
                        >
                          <div
                            onClick={() => handleCardSelection(item)}
                            className="opd-card-left"
                          >
                            <Banner rating={item?.rating} />
                            <img src={item?.image} alt={item?.name} />
                          </div>
                          <div className="opd-card-right">
                            <div
                              onClick={() => handleCardSelection(item)}
                              className="d-flex justify-content-between align-items-center"
                            >
                              <div>
                                <p className="doctor-title">{item?.name}</p>
                                {item?.doc && (
                                  <p className="specelization-text">
                                    <img
                                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737007939872.png"
                                      alt=""
                                      className="me-2"
                                    />
                                    {item?.doc}
                                  </p>
                                )}

                                <p className="location-text">
                                  <img
                                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737008143639.png"
                                    alt=""
                                    className="me-2"
                                  />
                                  {item?.distance_km && (
                                    <>
                                      {Math.round(item?.distance_km)} Km away,
                                    </>
                                  )}
                                  &nbsp;
                                  <span>{item?.address}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="doctors-list-all-sec-all-full">
                          <div className="doctors-list-all-sec-all">
                            {item?.doctors?.slice(0, 2)?.map((item2: any) => {
                              return (
                                <div
                                  onClick={() => {
                                    DoctorBookConsultProp(item2);
                                  }}
                                >
                                  <div>
                                    <img src={item2?.image} />
                                  </div>
                                  <div>
                                    <p className="d-name-sec">{item2?.name}</p>
                                    <p>
                                      {item2?.specialization?.map(
                                        (speItem: any, index2: any) => {
                                          return (
                                            <>
                                              {index2 !== 0 ? " | " : ""}
                                              {speItem?.name}
                                            </>
                                          );
                                        },
                                      )}
                                    </p>
                                    <p className="doctor-lang-name">
                                      {item2?.languages}
                                    </p>
                                    <p>
                                      {item2?.work_experience_years} Years Exp.
                                    </p>
                                    <p className="d-book-now-sec">
                                      <button>Book Now</button>
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          {item?.doctors?.length > 2 && (
                            <div className="view-all-docts-sec">
                              <button onClick={() => handleCardSelection(item)}>
                                View All Doctors
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
              {/* )} */}
              {!isPageLoading &&
                ((doctorsListData?.length > 5 && showHospitalDoctors) ||
                  allNearByHospitalList?.vendors?.length > 5) && (
                  <div className="d-flex mt-4">
                    {allNearByHospitalList?.total < page * count ? (
                      <></>
                    ) : (
                      <button className="loadMoreBtn" onClick={handleLoadMore}>
                        Load More
                      </button>
                    )}
                  </div>
                )}
            </>
          )}

          {/* <div className="nearbyHospitals">
            {sectionName1 === "nearbyhospitals" ? <></> : null}
          </div> */}

          {/* <CardStackEffect origin="doctorsList" data={data} /> */}
        </div>
        <div className="suggution-doctor-list-p-div">
          <div className="my-preference-div">
            <button
              className="btn "
              onClick={() => {
                setShowEmpanelWithUsModel(true);
              }}
            >
              My Preference
            </button>
          </div>
          <div className="suggution-doctor-list-div">
            <div className="add-cards">
              <div className="add-cards-title">
                <div>
                  <p>Your Personalized Period Guide</p>
                  <button className="btn">Start Now</button>
                </div>
                <img src={AdvImg1} alt="" />
              </div>
            </div>
            <div className="add-cards1">
              <div className="add-cards-title1">
                <div>
                  <p>
                    Your Health, One Tap Away Download the Raphacure App Today!
                  </p>
                  <button className="btn">Download</button>
                </div>
                <img src={AdvImg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DoctorsStyled>
  );
};

export default DoctorsList;
