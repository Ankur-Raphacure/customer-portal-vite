import { ReactComponent as LocationUser } from "../../assets/icons/LocationUser.svg";
import { ReactComponent as AmbulanceDS } from "../../assets/icons/ambulanceDS.svg";
import { ReactComponent as Carporate } from "../../assets/icons/carporate.svg";
import { ReactComponent as DocDS } from "../../assets/icons/docDS.svg";
import { ReactComponent as HospitalDs } from "../../assets/icons/hospitalDs.svg";
import { ReactComponent as UsersList } from "../../assets/icons/usersList.svg";
import { ReactComponent as DoctorCtr } from "../../assets/icons/doctorCtr.svg";
import { ReactComponent as RadiologyCtr } from "../../assets/icons/radiologyCtr.svg";
import { ReactComponent as LabTestCtr } from "../../assets/icons/labtestCtr.svg";
import { ReactComponent as PharmacyCtr } from "../../assets/icons/pharmacyCtr.svg";
import styled from "styled-components";

const Icons = styled.div`
  svg {
    height: 4.5rem;
    width: 4.5rem;
    @media (max-width: 768px) {
      height: 3.5rem;
      width: 3.5rem;
    }
  }
`;

export const getAFixMdPackages = [
  {
    title: "Doctor Consultation Virtual",
    description: "Connect with a Doctor Anytime",
    imageUrl: <DoctorCtr />,
    navigatePath: "/doctor",
    background: "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  },
  {
    title: "Pharmacy",
    description: "Pharmacy Services Tailored for You",
    imageUrl: <PharmacyCtr />,
    navigatePath: "/pharmacy",
    background: "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
  },
  {
    title: "Lab Test",
    description: "Comprehensive Lab Testing Services",
    imageUrl: <LabTestCtr />,
    navigatePath: "/labtest",
    background:
      "linear-gradient(235deg,#feefc1 8.72%,rgba(254, 239, 193, 0.1) 97.2%)",
  },
  {
    title: "Inclinic Consultation",
    description: "Connect with a OPD Hospitals Anytime",
    imageUrl: <DoctorCtr />,
    navigatePath: "/doctor?tab=opd",
    background: "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  },
];

export const categories = [
  {
    title: "Doctor Consultation",
    description: "Connect with a Doctor Anytime",
    imageUrl: (
      // "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730956721614.png",
      <DoctorCtr />
    ),
    navigatePath: "/doctor",
    background: "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  },
  {
    title: "Pharmacy",
    description: "Pharmacy Services Tailored for You",
    imageUrl: (
      // "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730885024252.png",
      <PharmacyCtr />
    ),
    navigatePath: "/pharmacy",
    background: "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
  },
  {
    title: "Lab Test",
    description: "Comprehensive Lab Testing Services",
    imageUrl: (
      // "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730885092327.png",
      <LabTestCtr />
    ),
    navigatePath: "/labtest",
    background:
      "linear-gradient(235deg,#feefc1 8.72%,rgba(254, 239, 193, 0.1) 97.2%)",
  },
  {
    title: "Radiology",
    description: "Quick and Accurate Radiology Tests",
    imageUrl: (
      // "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730885140318.png",
      <RadiologyCtr />
    ),
    navigatePath: "/radiology",
    background: "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  },
];
export const subCategories = [
  {
    name: "Ambulance",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731387359120.png",
    navigatePath: "/ambulance",
  },
  {
    name: "Fitness",
    imageUrl:
      " https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731387492180.png",
    navigatePath: "/Gymlist",
  },
  {
    name: "Domiciliary Care",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731387522381.png",
    navigatePath: "/domiciliarycare",
  },
  {
    name: "Women’s Care",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731387586052.png",
    navigatePath: "/womenscare",
  },
  {
    name: "Eye Care",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388032965.png",
    navigatePath: "/eyecare",
  },
  {
    name: "Dental Care",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388076089.png",
    navigatePath: "/dentalcare",
  },
  {
    name: "Mental Wellness",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388112106.png",
    navigatePath: "/mentalwellness",
  },
  {
    name: "Ayurveda",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388141135.png",
    navigatePath: "/ayurveda",
  },
  {
    name: "Domiciliary Care",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388141135.png",
    navigatePath: "/domiciliaryCare",
  },
];

export const allPackagesList = [
  {
    key: "opd_consultation",
    name: "Opd",
    description: "Connect with a OPD Hospitals Anytime",
    imageUrl: <DoctorCtr />,
    navigatePath: "/doctor?tab=opd",
    background: "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  },
  {
    key: "virtual_consultation",
    name: "Virtual Consultation",
    description: "Connect with a Doctor Anytime",
    imageUrl: <DoctorCtr />,
    navigatePath: "/doctor",
    background: "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  },
  {
    key: "dental_consultation",
    name: "Dental Consultation",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388076089.png",
    navigatePath: "/dentalcare",
  },
  {
    key: "eye_consultation",
    name: "Eye Consultation",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388032965.png",
    navigatePath: "/eyecare",
  },
  {
    key: "diagnostic_test",
    name: "Diagnostic Test",
    description: "Comprehensive Lab Testing Services",
    imageUrl: <LabTestCtr />,
    navigatePath: "/labtest",
    background:
      "linear-gradient(235deg,#feefc1 8.72%,rgba(254, 239, 193, 0.1) 97.2%)",
  },
  {
    key: "dc_tests",
    name: "Dc Tests",
    imageUrl: <></>,
    navigatePath: "#",
  },
  {
    key: "pharmacy",
    name: "Pharmacy",
    description: "Pharmacy Services Tailored for You",
    imageUrl: <PharmacyCtr />,
    navigatePath: "/pharmacy",
    background: "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
  },
  {
    key: "gym_subscription",
    name: "Gym Subscription",
    imageUrl:
      " https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731387492180.png",
    navigatePath: "/Gymlist",
  },
  {
    key: "ambulance",
    name: "Ambulance",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731387359120.png",
    navigatePath: "/ambulance",
  },
  {
    key: "ctmri_tests",
    name: "Ctmri Tests",
    description: "Quick and Accurate Radiology Tests",
    imageUrl: <RadiologyCtr />,
    navigatePath: "/radiology",
    background: "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  },
  {
    key: "virtual_consultation_specific",
    name: "Virtual Consultation Specific",
    description: "Connect with a Doctor Anytime",
    imageUrl: <DoctorCtr />,
    navigatePath: "/doctor",
    background: "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  },
  {
    key: "panchakarma",
    name: "Panchakarma",
    imageUrl:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388141135.png",
    navigatePath: "/ayurveda/panchakarmas",
  },
  {
    key: "diagnostic_packages",
    name: "Diagnostic Packages",
    description: "Comprehensive Lab Package Services",
    imageUrl: <LabTestCtr />,
    navigatePath: "/labtest",
    background:
      "linear-gradient(235deg,#feefc1 8.72%,rgba(254, 239, 193, 0.1) 97.2%)",
  },
];

export const topHealthcareSpecialist = [
  {
    id: "26",
    name: "Dr Latha P",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731047926156.png",
    exp: "10",
    lang: "English",
    specialization: "Psychologist,Counselor",
    gender: "Female",
    rating: "4.6",
  },
  {
    id: "20417",
    name: "Dr V Deepthi",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731051708487.png",
    exp: "1",
    lang: "English,Hindi",
    specialization: "Diabetologist",
    gender: "Female",
    rating: "4.7",
  },
  {
    id: "59",
    name: "Dr Amrutha Gowri Suresh",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731051733616.png",
    exp: "26",
    lang: "English,Hindi,Kannada,Tamil,Telugu",
    specialization: "Nutritionist,Nutritionist",
    gender: "Female",
    rating: "4.9",
  },
  {
    id: "816",
    name: "Capt V S Prabhakar",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1734588868860.png",
    exp: "20",
    lang: "English,Hindi,Kannada,Tamil,Malayalam",
    specialization: "General Physician,Diabetologist",
    gender: "Male",
    rating: "5.0",
  },
];
export const data = [
  {
    id: 1,
    img: (
      <Icons>
        <UsersList />
      </Icons>
    ),
    title: "5 Lakhs+",
    subtitle: "Lives Covered",
  },
  {
    id: 4,
    img: (
      <Icons>
        <LocationUser />
      </Icons>
    ),
    title: "1000+",
    subtitle: "Pin code Covered",
  },
  {
    id: 2,
    img: (
      <Icons>
        <DocDS />
      </Icons>
    ),
    title: "200+ ",
    subtitle: "Doctors On Panel",
  },
  {
    id: 5,
    img: (
      <Icons>
        <AmbulanceDS />
      </Icons>
    ),
    title: "1000+",
    subtitle: "Ambulance",
  },
  {
    id: 3,
    img: (
      <Icons>
        <Carporate />
      </Icons>
    ),
    title: "300+ ",
    subtitle: "Corporate Clients",
  },
  {
    id: 6,
    img: (
      <Icons>
        <HospitalDs />
      </Icons>
    ),
    title: "2000+ ",
    subtitle: "Hospital Partners",
  },
];
export const items = [
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834617006.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834638942.png",
  },
  {
    img: " https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834657582.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834675970.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834696522.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834718637.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834738555.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834756859.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834775600.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834805788.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834826680.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834844541.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834863987.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834883131.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729834902461.png",
  },
];
export const AbhaCardImg = [
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730872120932.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730872150711.png",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730872182864.png",
  },
];
