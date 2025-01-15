// import React, { useEffect, lazy } from "react";
// import { Redirect, Route, Switch } from "react-router-dom";

// import { useLocation } from "react-router-dom";

// import Home from "../pages/Home/Home";
// import { DentalCare } from "../pages/DentalCareModule/DentalCare";
// import { BloodBanks } from "../pages/BloodBank/BloodBanks";

// import VideoCall from "../pages/VideoCall/VideoCall";
// import ChatRoom from "../pages/ChatRoom/ChatRoom";

// import AllLabTests from "../pages/LabTest/AllLabTests/AllLabTests";
// import Packages from "../pages/LabTest/Packages";
// import Pharmacy from "../pages/Pharmacy/Pharmacy";
// import AllPharmacyList from "../pages/Pharmacy/AllPharmacyList";
// import Checkout from "../pages/Checkout";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import Cart from "../pages/Cart/Cart";
// import EditCart from "../pages/Checkout/EditCart/EditCart";
// import Signin from "../pages/Signin";
// import MyProfile from "../pages/MyProfile";
// import Doctor from "../pages/Doctor";
// import Hospital from "../pages/Hospital";
// import BookingReview from "../pages/Hospital/BookingReview/BookingReview";
// import PrivacyPolicy from "../pages/policy/PrivacyPolicy/PrivacyPolicy";
// import Ayurveda from "../pages/Ayurveda/Ayurveda";
// import Radiology from "../pages/Radiology";
// import Fitness from "../pages/Fitness";
// import ScanDetails from "../pages/ScanDetails";
// import Fitnessonclick from "../pages/Fitness/Fitnessonclick";
// import Detailedgym from "../pages/Fitness/Fitnessonclick/Gymlist/Detailedgym";
// import AllScansList from "../pages/Radiology/AllScansList";
// import HealthArticles from "../pages/HealthArticles/HealthArticles";
// import Ambulance from "../pages/Ambulance/Ambulance";
// import LabScan from "../pages/LabScan/LabScan";
// import Item from "../pages/Item/Item";
// import CityDialogList from "../pages/CityDialog/CityDialogList";
// import MentalWellness from "../pages/MentalWellness/MentalWellness";
// import DomiciliaryCare from "../pages/Domiciliary/DomiciliaryCare";
// import Career from "../pages/Career";
// import JobDescription from "../pages/Career/JobDescription";
// import ApplyJobForm from "../pages/Career/ApplyJobForm";
// import AboutUs from "../pages/AboutUs/AboutUs";
// import Doctordashboard from "../pages/Doctordashboard";
// import Womenscare from "../pages/Womenscare";
// import HospitalList from "../pages/Doctor/hospitalList/hospitalList";
// import NetworkList from "../pages/NetworkHospitals/NetworkList";
// import ContactUs from "../pages/ContactUs/ContactUs";
// import AbhaHealths from "../pages/AbhaHealth/AbhaHealths";
// import RaphaPlus from "../pages/RaphaPlus/RaphaPlus";
// import HealthsArticle from "../pages/HealthArticles/HealthsArticle";
// import CreateBlog from "../pages/HealthArticles/CreateBlog";
// import RaphacureApp from "../pages/RaphacureApp";
// import RPLogin from "../components/RaphaPlus/Login/RPLogin";
// import ComingSoon from "../pages/ComingSoon/ComingSoon";
// import AllTreatmentList from "../pages/Ayurveda/AllTreatmentList";
// import AllCentresList from "../pages/Ayurveda/AllCentresList";
// import CentresDetails from "../pages/Ayurveda/CentresDetails";
// import Panchakarmas from "../pages/Ayurveda/Panchakarma/Panchakarmas";
// import Naturopathys from "../pages/Ayurveda/Naturopathy/Naturopathys";
// import Gynecologists from "../pages/Womenscare/Gynecologist/Gynecologists";
// import PeriodTrackers from "../pages/Womenscare/PeriodTracker/PeriodTrackers";
// import LactationSupports from "../pages/Womenscare/LactationSupport/LactationSupports";
// import WomanActivitys from "../pages/Womenscare/Womanactivity/WomanActivitys";
// import NutritionDiets from "../pages/Womenscare/NutritionDiet/NutritionDiets";
// import HealthJourney from "../pages/Womenscare/BMIHealthJourney/HealthJourney";
// import MealCategory from "../pages/Womenscare/BMI/MealCategory";
// import SkinCares from "../pages/Womenscare/SkinCare/SkinCares";
// import KeyAspects from "../pages/Womenscare/KeyAspect/KeyAspects";
// import NursesHome from "../pages/Domiciliary/NursesHome";
// import MedicalEquipments from "../pages/Domiciliary/MedicalEquipments";
// import RemotePatient from "../pages/Domiciliary/RemotePatient";
// import Vaccine from "../pages/Domiciliary/Vaccine";
// import EquipmentDetail from "../pages/Domiciliary/EquipmentDetail";
// import IcuHome from "../pages/Domiciliary/IcuatHome";
// import ADHD from "../pages/MentalWellness/Adhd";
// import Anger from "../pages/MentalWellness/Anger";
// import Anxiety from "../pages/MentalWellness/Anxiety";
// import Depression from "../pages/MentalWellness/Depression";
// import Trauma from "../pages/MentalWellness/Trauma";
// import MoodDairy from "../pages/MentalWellness/MoodDairy";
// import Dentalcare from "../pages/Dentalcare/Dentalcare";
// import Eyecare from "../pages/Eyecare/Eyecare";
// import Clinicall from "../pages/Dentalcare/Clinicall";
// import AllClinic from "../pages/Eyecare/Allclinics";
// import Visiontest from "../pages/Eyecare/Visiontest";
// import Accessories from "../pages/Eyecare/Accessories";
// import ShopGlasses from "../pages/Eyecare/ShopGlasses";
// import SpecsDetail from "../pages/Eyecare/SpecsDetail";
// import GymIndex from "../pages/Fitness/GymIndex";
// import GymCenterList from "../pages/Fitness/GymCategory/GymCenterList";
// import GymViewDetails from "../pages/Fitness/GymCategory/GymViewDetails";
// import Gymlist from "../pages/Fitness/Fitnessonclick/Gymlist";
// import UploadImages from "../pages/UploadImages/UploadImages";
// import ActivitySummery from "../pages/Dashboard/Components/Activities/ActivitySummery";
// import ChatComponent from "../pages/Chat/ChatComponent";

// const Terms = lazy(() => import("../pages/policy/Terms/Terms"));
// const ReturnRefund = lazy(
//   () => import("../pages/policy/ReturnRefund/ReturnRefund")
// );
// const ShippingPolicies = lazy(
//   () => import("../pages/policy/ShippingPolicies/ShippingPolicies")
// );
// const SecurityPolicies = lazy(
//   () => import("../pages/policy/SecurityPolicies/SecurityPolicies")
// );
// const Disclaimer = lazy(() => import("../pages/policy/Disclaimer/Disclaimer"));
// const LabTest = lazy(() => import("../pages/LabTest/LabTest"));

// // const ChatRoom = React.lazy(() => import("../pages/ChatRoom/ChatRoom"));
// const MainRoutes: React.FC = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/login" component={RPLogin} />
//       <Route exact path="/videoCall" component={VideoCall} />
//       <Route exact path="/home" component={Home} />
//       <Route exact path="/cart" component={Cart} />
//       <Route exact path="/checkout" component={Checkout} />
//       <Route exact path="/dashboard/:sectionName" component={Dashboard} />
//       <Route exact path="/dashboard" component={Dashboard} />
//       <Route exact path="/labtest/allLabs" component={AllLabTests} />
//       <Route exact path="/labtest/allBodyTests" component={AllLabTests} />
//       <Route exact path="/labtest/allPackages" component={AllLabTests} />
//       <Route exact path="/labtest" component={LabTest} />
//       <Route exact path="/labtest/Packages/:vendorId" component={Packages} />
//       {/* <Route exact path="/eyecare" component={EyeCare} /> */}
//       <Route exact path="/eyecare" component={Eyecare} />
//       <Route exact path="/pharmacy/:sectionName" component={AllPharmacyList} />
//       <Route exact path="/pharmacy" component={Pharmacy} />
//       <Route exact path="/radiology/allScans" component={AllScansList} />
//       <Route exact path="/radiology/allScansNearMe" component={AllScansList} />

//       <Route exact path="/signin" component={Signin} />
//       <Route exact path="/myProfile" component={MyProfile} />
//       <Route exact path="/doctor" component={Doctor} />
//       <Route
//         exact
//         path="/:bookingtype/bookingReview/"
//         component={BookingReview}
//       />
//       <Route exact path="/editcart/:sName" component={EditCart} />
//       <Route exact path="/hospital/:hospitalId" component={Hospital} />
//       <Route exact path="/privacy-policy" component={PrivacyPolicy} />
//       <Route exact path="/dentalcare" component={Dentalcare} />
//       <Route exact path="/bloodbank" component={BloodBanks} />
//       <Route exact path="/terms" component={Terms} />
//       <Route exact path="/return-refund" component={ReturnRefund} />
//       <Route exact path="/shipping-policy" component={ShippingPolicies} />
//       <Route exact path="/security-policy" component={SecurityPolicies} />
//       <Route exact path="/disclaimer" component={Disclaimer} />
//       <Route exact path="/ayurveda" component={Ayurveda} />
//       <Route
//         exact
//         path="/ayurveda/alltreatmentlist"
//         component={AllTreatmentList}
//       />
//       <Route exact path="/ayurveda/allcentrelist" component={AllCentresList} />
//       <Route exact path="/ayurveda/centresdetails" component={CentresDetails} />
//       <Route exact path="/ayurveda/panchakarmas" component={Panchakarmas} />
//       <Route exact path="/ayurveda/naturopathys" component={Naturopathys} />
//       <Route exact path="/ambulance" component={Ambulance} />
//       <Route exact path="/radiology" component={Radiology} />
//       <Route exact path="/fitness" component={Fitness} />
//       <Route exact path="/fitnessonclick" component={Fitnessonclick} />
//       <Route exact path="/Gymlist" component={Gymlist} />
//       <Route exact path="/newGymlist" component={GymIndex} />
//       <Route exact path="/Gymlist/gymcenterlist" component={GymCenterList} />
//       <Route exact path="/Gymlist/gymviewdetails" component={GymViewDetails} />
//       <Route exact path="/citydialoglist" component={CityDialogList} />
//       <Route
//         exact
//         path="/radiology/scan-details/:scanId"
//         component={ScanDetails}
//       />
//       <Route exact path="/Detailedgym" component={Detailedgym} />
//       <Route exact path="/scan-details" component={ScanDetails} />
//       <Route exact path="/health-articles" component={HealthArticles} />
//       <Route exact path="/LabScan" component={LabScan} />
//       <Route exact path="/aboutus" component={AboutUs} />
//       <Route exact path="/contactus" component={ContactUs} />
//       <Route
//         exact
//         path="/labTestDetils/:labTestServiceCode"
//         component={ScanDetails}
//       />
//       <Route exact path="/raphaplus/:component" component={RaphaPlus} />
//       <Route exact path="/chatroom/:component" component={ComingSoon} />
//       <Route exact path="/chatroom">
//         <Redirect to="/chat" />
//       </Route>
//       <Route
//         exact
//         path="/labPackageDetils/:labTestPackageServiceCode"
//         component={ScanDetails}
//       />
//       <Route
//         exact
//         path="/labtest/lab-details/:labServiceCode"
//         component={LabScan}
//       />
//       <Route exact path="/item/:category/:itemId" component={Item} />
//       <Route exact path="/mentalwellness" component={MentalWellness} />
//       <Route exact path="/DomiciliaryCare" component={DomiciliaryCare} />
//       <Route exact path="/Career" component={Career} />
//       <Route exact path="/job-description" component={JobDescription} />
//       <Route exact path="/apply-job" component={ApplyJobForm} />
//       <Route exact path="/doctordashboard" component={Doctordashboard} />
//       <Route exact path="/womenscare" component={Womenscare} />
//       <Route exact path="/womenscare/gynecologists" component={Gynecologists} />
//       <Route
//         exact
//         path="/womenscare/periodtrackers"
//         component={PeriodTrackers}
//       />
//       <Route
//         exact
//         path="/womenscare/lactationsupports"
//         component={LactationSupports}
//       />
//       <Route
//         exact
//         path="/womenscare/nutritiondiets"
//         component={NutritionDiets}
//       />
//       <Route
//         exact
//         path="/womenscare/womanactivitys"
//         component={WomanActivitys}
//       />
//       <Route exact path="/womenscare/keyaspects" component={KeyAspects} />
//       <Route exact path="/womenscare/skincares" component={SkinCares} />
//       <Route exact path="/womenscare/mealcategory" component={MealCategory} />
//       <Route exact path="/womenscare/healthjourney" component={HealthJourney} />
//       <Route exact path="/networklist" component={NetworkList} />
//       <Route exact path="/abhahealths" component={AbhaHealths} />
//       <Route exact path="/healthsarticle" component={HealthsArticle} />
//       <Route exact path="/createblog" component={CreateBlog} />
//       <Route exact path="/comingsoon" component={ComingSoon} />
//       <Route exact path="/raphacure-app" component={RaphacureApp} />
//       <Route exact path="/Hospital" component={Hospital} />
//       <Route
//         exact
//         path="/domiciliarycare/nurseforhome"
//         component={NursesHome}
//       />
//       <Route
//         exact
//         path="/domiciliarycare/medicalequipments"
//         component={MedicalEquipments}
//       />
//       <Route
//         exact
//         path="/domiciliarycare/remotepatient"
//         component={RemotePatient}
//       />
//       <Route exact path="/domiciliarycare/vaccine" component={Vaccine} />
//       <Route
//         exact
//         path="/domiciliarycare/medicalequipments/equipmentdetail"
//         component={EquipmentDetail}
//       />
//       <Route exact path="/domiciliarycare/icuathome" component={IcuHome} />
//       <Route exact path="/mentalwellness/adhd" component={ADHD} />
//       <Route exact path="/mentalwellness/anger" component={Anger} />
//       <Route exact path="/mentalwellness/anxiety" component={Anxiety} />
//       <Route exact path="/mentalwellness/depression" component={Depression} />
//       <Route exact path="/mentalwellness/trauma" component={Trauma} />
//       <Route exact path="/mentalwellness/mooddiary" component={MoodDairy} />
//       <Route exact path="/dentalcare/clinicall" component={Clinicall} />
//       <Route exact path="/eyecare/allclinics" component={AllClinic} />
//       <Route exact path="/eyecare/visiontest" component={Visiontest} />
//       <Route exact path="/eyecare/accessories" component={Accessories} />
//       <Route exact path="/UploadImages" component={UploadImages} />
//       <Route exact path="/chat" component={ChatComponent} />
//       <Route
//         exact
//         path="/eyecare/accessories/glasses"
//         component={ShopGlasses}
//       />
//       <Route
//         exact
//         path="/eyecare/accessories/glasses/detail"
//         component={SpecsDetail}
//       />
//     </Switch>
//   );
// };

// export default MainRoutes;
