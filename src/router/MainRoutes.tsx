import React, { useEffect, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { useLocation } from "react-router-dom";

import Home from "../pages/Home/Home";
import LabTest from "../pages/LabTest/LabTest";
import BookingReview from "../pages/Hospital/BookingReview/BookingReview";

import VideoCall from "../pages/VideoCall/VideoCall";
import Doctor from "../pages/Doctor";
import Hospital from "../pages/Hospital";

import Pharmacy from "../pages/Pharmacy/Pharmacy";
import ChatComponent from "../pages/Chat/v1/Chat";
import Chat2 from "../pages/Chat/Chat";
import LabTestV2 from "../pages/LabTestv2/LabTest";
import AllPackages from "../pages/AllPackages/AllPackages";
import AllLabTest from "../pages/AllTests/AllLabTests";
import UploadPrescription from "../pages/UploadPrescription/UploadPrescription";
import NewPrescription from "../pages/NewPrescription/NewPrescription";
import UploadSubPrescription from "../pages/UploadPrescription/UploadSubPrescription";
import ScanMedicineModule from "../pages/ScanByMedicine/ScanMedicineModule";
import ChatContextProvider from "../pages/Chat/context/ChatConext";
const BloodBanks = lazy(() => import("../pages/BloodBank/BloodBanks"));
const EPrescription = lazy(
  () => import("../pages/EPrescription/EPrescription"),
);
const FitnessProductPage = lazy(
  () =>
    import(
      "../pages/Fitness_v2/productPage/fitnessCenterPage/FitnessProductPage"
    ),
);
const FitnessPackageSelection = lazy(
  () =>
    import(
      "../pages/Fitness_v2/productPage/fitnessCenterPage/packageSelection/PackageSelection"
    ),
);
const Gallery = lazy(() => import("../pages/Gallery/Gallery"));
const BookDemo = lazy(() => import("../pages/BookDemo/BookDemo"));
const NextForm = lazy(() => import("../pages/BookDemo/NextForm"));
const Card = lazy(() => import("../pages/BookDemo/Card"));
const ConnectUs = lazy(
  () => import("../components/RaphaPlus/RPHomeV2/ConnectUs"),
);
const HyperSitePage = lazy(() => import("../pages/ClinicPage/HyperSitePage"));
const BookAppointment = lazy(
  () => import("../pages/ClinicPage/BookAppointment/BookAppointment"),
);
const DetailBookAppointment = lazy(
  () =>
    import("../pages/ClinicPage/DetailBookAppointment/DetailBookAppointment"),
);

const AllVendors = lazy(() => import("../pages/AllVendors/AllVendors"));
const DoctorDetails = lazy(() => import("../pages/Doctor/DoctorDetails"));
const DoctorsList = lazy(() => import("../pages/Doctor/DoctorsList"));
const ClinicDetails = lazy(
  () => import("../pages/Doctor/ClinicDetails/ClinicDetails"),
);
const SpecializationList = lazy(
  () => import("../pages/Doctor/SpecializationList"),
);
const Doctors = lazy(() => import("../pages/Doctor/Doctors"));

const AllLabTests = lazy(
  () => import("../pages/LabTest/AllLabTests/AllLabTests"),
);
const Packages = lazy(() => import("../pages/LabTest/Packages"));
// const Pharmacy = lazy(() => import("../pages/Pharmacy/Pharmacy"));
const AllPharmacyList = lazy(() => import("../pages/Pharmacy/AllPharmacyList"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const EditCart = lazy(() => import("../pages/Checkout/EditCart/EditCart"));
const Signin = lazy(() => import("../pages/Signin"));
const MyProfile = lazy(() => import("../pages/MyProfile"));
// const Doctor = lazy(() => import("../pages/Doctor"));
// const Hospital = lazy(() => import("../pages/Hospital"));
// const BookingReview = lazy(
//   () => import("../pages/Hospital/BookingReview/BookingReview")
// );
const PrivacyPolicy = lazy(
  () => import("../pages/policy/PrivacyPolicy/PrivacyPolicy"),
);
const Ayurveda = lazy(() => import("../pages/Ayurveda/Ayurveda"));
const Radiology = lazy(() => import("../pages/Radiology"));
const Fitness_v2 = lazy(() => import("../pages/Fitness_v2/index"));
const Fitness = lazy(() => import("../pages/Fitness/index"));
const ScanDetails = lazy(() => import("../pages/ScanDetails"));
const Fitnessonclick = lazy(() => import("../pages/Fitness/Fitnessonclick"));
const Detailedgym = lazy(
  () => import("../pages/Fitness/Fitnessonclick/Gymlist/Detailedgym"),
);
const AllScansList = lazy(() => import("../pages/Radiology/AllScansList"));
const HealthArticles = lazy(
  () => import("../pages/HealthArticles/HealthArticles"),
);
const Ambulance = lazy(() => import("../pages/Ambulance/Ambulance"));
const LabScan = lazy(() => import("../pages/LabScan/LabScan"));
const Item = lazy(() => import("../pages/Item/Item"));
const CityDialogList = lazy(() => import("../pages/CityDialog/CityDialogList"));
const MentalWellness = lazy(
  () => import("../pages/MentalWellness/MentalWellness"),
);
const DomiciliaryCare = lazy(
  () => import("../pages/Domiciliary/DomiciliaryCare"),
);
const Career = lazy(() => import("../pages/Career"));
const JobDescription = lazy(() => import("../pages/Career/JobDescription"));
const ApplyJobForm = lazy(() => import("../pages/Career/ApplyJobForm"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Doctordashboard = lazy(() => import("../pages/Doctordashboard"));
const Womenscare = lazy(() => import("../pages/Womenscare"));
const HospitalList = lazy(
  () => import("../pages/Doctor/hospitalList/hospitalList"),
);
const NetworkList = lazy(() => import("../pages/NetworkHospitals/NetworkList"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));
const AbhaHealths = lazy(() => import("../pages/AbhaHealth/AbhaHealths"));
const RaphaPlus = lazy(() => import("../pages/RaphaPlus/RaphaPlus"));
const HealthsArticle = lazy(
  () => import("../pages/HealthArticles/HealthsArticle"),
);
const CreateBlog = lazy(() => import("../pages/HealthArticles/CreateBlog"));
const RaphacureApp = lazy(() => import("../pages/RaphacureApp"));
const RPLogin = lazy(() => import("../components/RaphaPlus/Login/RPLogin"));
const ComingSoon = lazy(() => import("../pages/ComingSoon/ComingSoon"));
const AllTreatmentList = lazy(
  () => import("../pages/Ayurveda/AllTreatmentList"),
);
const AllCentresList = lazy(() => import("../pages/Ayurveda/AllCentresList"));
const CentresDetails = lazy(() => import("../pages/Ayurveda/CentresDetails"));
const Panchakarmas = lazy(
  () => import("../pages/Ayurveda/Panchakarma/Panchakarmas"),
);
const Naturopathys = lazy(
  () => import("../pages/Ayurveda/Naturopathy/Naturopathys"),
);
const Gynecologists = lazy(
  () => import("../pages/Womenscare/Gynecologist/Gynecologists"),
);
const PeriodTrackers = lazy(
  () => import("../pages/Womenscare/PeriodTracker/PeriodTrackers"),
);
const LactationSupports = lazy(
  () => import("../pages/Womenscare/LactationSupport/LactationSupports"),
);
const WomanActivitys = lazy(
  () => import("../pages/Womenscare/Womanactivity/WomanActivitys"),
);
const NutritionDiets = lazy(
  () => import("../pages/Womenscare/NutritionDiet/NutritionDiets"),
);
const HealthJourney = lazy(
  () => import("../pages/Womenscare/BMIHealthJourney/HealthJourney"),
);
const MealCategory = lazy(() => import("../pages/Womenscare/BMI/MealCategory"));
const SkinCares = lazy(() => import("../pages/Womenscare/SkinCare/SkinCares"));
const KeyAspects = lazy(
  () => import("../pages/Womenscare/KeyAspect/KeyAspects"),
);
const NursesHome = lazy(() => import("../pages/Domiciliary/NursesHome"));
const MedicalEquipments = lazy(
  () => import("../pages/Domiciliary/MedicalEquipments"),
);
const RemotePatient = lazy(() => import("../pages/Domiciliary/RemotePatient"));
const Vaccine = lazy(() => import("../pages/Domiciliary/Vaccine"));
const EquipmentDetail = lazy(
  () => import("../pages/Domiciliary/EquipmentDetail"),
);
const IcuHome = lazy(() => import("../pages/Domiciliary/IcuatHome"));
const ADHD = lazy(() => import("../pages/MentalWellness/Adhd"));
const Anger = lazy(() => import("../pages/MentalWellness/Anger"));
const Anxiety = lazy(() => import("../pages/MentalWellness/Anxiety"));
const Depression = lazy(() => import("../pages/MentalWellness/Depression"));
const Trauma = lazy(() => import("../pages/MentalWellness/Trauma"));
const MoodDairy = lazy(() => import("../pages/MentalWellness/MoodDairy"));
const Dentalcare = lazy(() => import("../pages/Dentalcare/Dentalcare"));
const Eyecare = lazy(() => import("../pages/Eyecare/Eyecare"));
const Clinicall = lazy(() => import("../pages/Dentalcare/Clinicall"));
const AllClinic = lazy(() => import("../pages/Eyecare/Allclinics"));
const Visiontest = lazy(() => import("../pages/Eyecare/Visiontest"));
const Accessories = lazy(() => import("../pages/Eyecare/Accessories"));
const ShopGlasses = lazy(() => import("../pages/Eyecare/ShopGlasses"));
const SpecsDetail = lazy(() => import("../pages/Eyecare/SpecsDetail"));
const GymIndex = lazy(() => import("../pages/Fitness/GymIndex"));
const GymCenterList = lazy(
  () => import("../pages/Fitness/GymCategory/GymCenterList"),
);
const GymViewDetails = lazy(
  () => import("../pages/Fitness/GymCategory/GymViewDetails"),
);
// const Gymlist = lazy(() => import("../pages/Fitness/Fitnessonclick/Gymlist"));
const Gymlist_v2 = lazy(
  () => import("../pages/Fitness_v2/fitnessCenters/FitnessCentersPage"),
);
const Gymlist = lazy(() => import("../pages/Fitness/Fitnessonclick/Gymlist"));
const UploadImages = lazy(() => import("../pages/UploadImages/UploadImages"));
const ActivitySummery = lazy(
  () => import("../pages/Dashboard/Components/Activities/ActivitySummery"),
);

const Terms = lazy(() => import("../pages/policy/Terms/Terms"));
const ReturnRefund = lazy(
  () => import("../pages/policy/ReturnRefund/ReturnRefund"),
);
const ShippingPolicies = lazy(
  () => import("../pages/policy/ShippingPolicies/ShippingPolicies"),
);
const SecurityPolicies = lazy(
  () => import("../pages/policy/SecurityPolicies/SecurityPolicies"),
);
const Disclaimer = lazy(() => import("../pages/policy/Disclaimer/Disclaimer"));

// const LabTest = lazy(() => import("../pages/LabTest/LabTest"));

// const ChatRoom = lazy(() => import("../pages/ChatRoom/ChatRoom"));
const MainRoutes: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={RPLogin} />
      <Route exact path="/videoCall" component={VideoCall} />
      <Route exact path="/hypersite/:siteName" component={HyperSitePage} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/dashboard/:sectionName" component={Dashboard} />
      <Route exact path="/eprescription/:prescId" component={EPrescription} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/labtest/allLabs" component={AllLabTests} />
      <Route exact path="/labtest/allBodyTests" component={AllLabTests} />
      <Route exact path="/labtest/allPackages" component={AllLabTests} />
      <Route exact path="/labtest" component={LabTestV2} />
      <Route exact path="/labtestv1" component={LabTest} />
      {/* <Route exact path="/labtest" component={LabTest} /> */}
      {/* <Route exact path="/labtestv2" component={LabTestV2} /> */}
      <Route exact path="/labtest/Packages/:vendorId" component={Packages} />
      {/* <Route exact path="/eyecare" component={EyeCare} /> */}
      <Route exact path="/eyecare" component={Eyecare} />
      <Route exact path="/pharmacy/:sectionName" component={AllPharmacyList} />
      <Route exact path="/pharmacy" component={Pharmacy} />
      <Route exact path="/radiology/allScans" component={AllScansList} />
      <Route
        exact
        path="/radiology/allScans/:sectionName"
        component={AllScansList}
      />
      <Route exact path="/radiology/allScansNearMe" component={AllScansList} />
      <Route exact path="/doctor/doctorlist/:id" component={DoctorsList} />
      <Route exact path="/doctor/doctorlist" component={DoctorsList} />
      <Route
        exact
        path="/doctor/specializationList"
        component={SpecializationList}
      />
      <Route
        exact
        path="/doctor/nearbyhospitals/:vendorId"
        component={DoctorsList}
      />
      <Route
        exact
        path="/doctor/clinicDetails/:vendorId/:categoryId"
        component={ClinicDetails}
      />
      <Route
        exact
        path="/doctor/clinicDetails/:vendorId"
        component={ClinicDetails}
      />
      <Route exact path="/doctor/:sectionName" component={DoctorsList} />
      <Route exact path="/dietReport/:id" component={MealCategory} />
      {/* <Route exact path="/doctorv2/:sectionName" component={DoctorsList} /> */}
      <Route exact path="/doctor" component={Doctors} />
      <Route exact path="/doctor/doctordetails/:id" component={DoctorDetails} />
      <Route exact path="/allpackages" component={AllPackages} />
      <Route exact path="/alllabtests" component={AllLabTest} />
      <Route exact path="/uploadprescription" component={UploadPrescription} />
      <Route exact path="/scanmedicine" component={ScanMedicineModule} />
      <Route
        exact
        path="/uploadprescription/uploadsubprescription"
        component={UploadSubPrescription}
      />
      <Route exact path="/newprescription" component={NewPrescription} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/myProfile" component={MyProfile} />
      <Route exact path="/doctorv2" component={Doctor} />
      <Route
        exact
        path="/:bookingtype/bookingReview/"
        component={BookingReview}
      />
      <Route exact path="/editcart/:sName" component={EditCart} />
      <Route exact path="/hospital/:hospitalId" component={Hospital} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      <Route exact path="/dentalcare" component={Dentalcare} />
      <Route exact path="/bloodbank" component={BloodBanks} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/return-refund" component={ReturnRefund} />
      <Route exact path="/shipping-policy" component={ShippingPolicies} />
      <Route exact path="/security-policy" component={SecurityPolicies} />
      <Route exact path="/disclaimer" component={Disclaimer} />
      <Route exact path="/ayurveda" component={Ayurveda} />
      <Route
        exact
        path="/ayurveda/alltreatmentlist"
        component={AllTreatmentList}
      />
      <Route exact path="/ayurveda/allcentrelist" component={AllCentresList} />
      <Route exact path="/ayurveda/centresdetails" component={CentresDetails} />
      <Route exact path="/ayurveda/panchakarmas" component={Panchakarmas} />
      <Route exact path="/ayurveda/naturopathys" component={Naturopathys} />
      <Route exact path="/ambulance" component={Ambulance} />
      <Route exact path="/radiology" component={Radiology} />
      <Route exact path="/fitness" component={Fitness} />
      <Route exact path="/fitness_v2" component={Fitness_v2} />
      <Route exact path="/fitnessonclick" component={Fitnessonclick} />
      <Route exact path="/Gymlist" component={Gymlist} />
      <Route exact path="/fitnessCenters" component={Gymlist_v2} />
      <Route
        exact
        path="/fitnessCenters/:productName/:productId"
        component={FitnessProductPage}
      />
      <Route
        exact
        path="/fitnessCenters/bookingConformation/:fitnessCenterID/:packageID"
        component={FitnessPackageSelection}
      />
      {/* <Route exact path="/Gymlist" component={Gymlist} /> */}
      <Route exact path="/newGymlist" component={GymIndex} />
      <Route exact path="/Gymlist/gymcenterlist" component={GymCenterList} />
      <Route exact path="/Gymlist/gymviewdetails" component={GymViewDetails} />
      <Route exact path="/citydialoglist" component={CityDialogList} />
      <Route
        exact
        path="/radiology/scan-details/:scanId"
        component={ScanDetails}
      />
      <Route exact path="/Detailedgym" component={Detailedgym} />
      <Route exact path="/scan-details" component={ScanDetails} />
      <Route exact path="/health-articles" component={HealthArticles} />
      <Route exact path="/LabScan" component={LabScan} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route
        exact
        path="/labTestDetils/:labTestServiceCode"
        component={ScanDetails}
      />
      <Route exact path="/raphaplus/:component" component={RaphaPlus} />
      <Route exact path="/chatroom/:component" component={ComingSoon} />
      <Route exact path="/chatroom">
        <Redirect to="/chat" />
      </Route>
      <Route
        exact
        path="/labPackageDetils/:labTestPackageServiceCode"
        component={ScanDetails}
      />
      <Route
        exact
        path="/labtest/lab-details/:labServiceCode"
        component={LabScan}
      />
      <Route exact path="/item/:category/:itemId" component={Item} />
      <Route exact path="/mentalwellness" component={MentalWellness} />
      <Route exact path="/DomiciliaryCare" component={DomiciliaryCare} />
      <Route exact path="/Career" component={Career} />
      <Route exact path="/job-description" component={JobDescription} />
      <Route exact path="/apply-job" component={ApplyJobForm} />
      <Route exact path="/doctordashboard" component={Doctordashboard} />
      <Route exact path="/womenscare" component={Womenscare} />
      <Route exact path="/womenscare/gynecologists" component={Gynecologists} />
      <Route
        exact
        path="/womenscare/periodtrackers"
        component={PeriodTrackers}
      />
      <Route
        exact
        path="/womenscare/lactationsupports"
        component={LactationSupports}
      />
      <Route
        exact
        path="/womenscare/nutritiondiets"
        component={NutritionDiets}
      />
      <Route
        exact
        path="/womenscare/womanactivitys"
        component={WomanActivitys}
      />
      <Route exact path="/womenscare/keyaspects" component={KeyAspects} />
      <Route exact path="/womenscare/skincares" component={SkinCares} />
      <Route exact path="/womenscare/mealcategory" component={MealCategory} />
      <Route exact path="/womenscare/healthjourney" component={HealthJourney} />
      <Route exact path="/networklist" component={NetworkList} />
      <Route exact path="/abhahealths" component={AbhaHealths} />
      <Route exact path="/healthsarticle" component={HealthsArticle} />
      <Route exact path="/createblog" component={CreateBlog} />
      <Route exact path="/comingsoon" component={ComingSoon} />
      <Route exact path="/raphacure-app" component={RaphacureApp} />
      <Route exact path="/Hospital" component={Hospital} />
      <Route
        exact
        path="/domiciliarycare/nurseforhome"
        component={NursesHome}
      />
      <Route
        exact
        path="/domiciliarycare/medicalequipments"
        component={MedicalEquipments}
      />
      <Route
        exact
        path="/domiciliarycare/remotepatient"
        component={RemotePatient}
      />
      <Route exact path="/domiciliarycare/vaccine" component={Vaccine} />
      <Route
        exact
        path="/domiciliarycare/medicalequipments/equipmentdetail"
        component={EquipmentDetail}
      />
      <Route exact path="/domiciliarycare/icuathome" component={IcuHome} />
      <Route exact path="/mentalwellness/adhd" component={ADHD} />
      <Route exact path="/mentalwellness/anger" component={Anger} />
      <Route exact path="/mentalwellness/anxiety" component={Anxiety} />
      <Route exact path="/mentalwellness/depression" component={Depression} />
      <Route exact path="/mentalwellness/trauma" component={Trauma} />
      <Route exact path="/mentalwellness/mooddiary" component={MoodDairy} />
      <Route exact path="/dentalcare/clinicall" component={Clinicall} />
      <Route exact path="/eyecare/allclinics" component={AllClinic} />
      <Route exact path="/eyecare/visiontest" component={Visiontest} />
      <Route exact path="/eyecare/accessories" component={Accessories} />
      <Route exact path="/UploadImages" component={UploadImages} />
      <Route exact path="/chat2" component={ChatComponent} />
      <Route
        exact
        path="/chat"
        component={() => (
          <ChatContextProvider>
            <Chat2 />
          </ChatContextProvider>
        )}
      />
      <Route
        exact
        path="/eyecare/accessories/glasses"
        component={ShopGlasses}
      />
      <Route
        exact
        path="/eyecare/accessories/glasses/detail"
        component={SpecsDetail}
      />
      <Route exact path="/bookdemo" component={BookDemo} />
      <Route exact path="/allvendors" component={AllVendors} />
      <Route exact path="/bookdemo/form" component={NextForm} />
      <Route exact path="/bookdemo/form/confirmation" component={Card} />
      <Route exact path="/connectus" component={ConnectUs} />
      <Route exact path="/bookappointment" component={BookAppointment} />
      <Route
        exact
        path="/bookappointment/DetailBookAppointment"
        component={DetailBookAppointment}
      />
    </Switch>
  );
};

export default MainRoutes;
