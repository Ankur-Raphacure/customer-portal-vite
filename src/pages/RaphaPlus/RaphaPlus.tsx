import React from "react";
import { RaphaPlusStyled } from "./RaphaPlus.styled";
import RPHome from "../../components/RaphaPlus/Home/RPHome";
import RPLogin from "../../components/RaphaPlus/Login/RPLogin";
import RPHospital from "../../components/RaphaPlus/Hospital/RPHospital";
import RPFooter from "../../components/RaphaPlus/Footer/RPFooter";
import PatientMonitoring from "../../components/RaphaPlus/RPPatientMonitoring/PatientMonitoring";

import RPPrivacyPolicy from "../../components/RaphaPlus/Policies/PrivacyPolicy/RPPrivacyPolicy";
import RPDisclaimer from "../../components/RaphaPlus/Policies/Disclaimer/RPDisclaimer";
import RPReturnRefund from "../../components/RaphaPlus/Policies/ReturnRefund/RPReturnRefund";
import RPSecurityPolicy from "../../components/RaphaPlus/Policies/SecurityPolicy/RPSecurityPolicy";
import RPShippingPolicy from "../../components/RaphaPlus/Policies/ShippingPolicy/RPShippingPolicy";
import RPTermsAndConditions from "../../components/RaphaPlus/Policies/TermsAndConditions/RPTermsAndConditions";
import RPDisclosure from "../../components/RaphaPlus/Policies/Disclosure/RPDisclosure";

import ComingSoon from "../ComingSoon/ComingSoon";
import RPDigitalClinic from "../../components/RaphaPlus/DigitalClinic/RPDigitalClinic";
import RPEHS from "../../components/RaphaPlus/EHS/RPEHS";
import RPSoftwareSol from "../../components/RaphaPlus/SoftwareSol/RPSoftwareSol";
import AboutUs from "../../components/RaphaPlus/AboutUs/AboutUs";
import RPHomeV2 from "../../components/RaphaPlus/RPHomeV2/RPHomeV2";

const RaphaPlus = (props: any) => {
  const { component } = props.match?.params;
  const renderContent = () => {
    switch (component) {
      case "home":
        return <RPHomeV2 />;
      case "login":
        return <RPLogin />;
      case "hospital-management":
        return <RPHospital />;
      case "patient-monitoring":
        return <PatientMonitoring />;
      case "privacy":
        return <RPPrivacyPolicy />;
      case "disclaimer":
        return <RPDisclaimer />;
      case "return":
        return <RPReturnRefund />;
      case "security":
        return <RPSecurityPolicy />;
      case "shipping":
        return <RPShippingPolicy />;
      case "terms":
        return <RPTermsAndConditions />;
      case "disclosure":
        return <RPDisclosure />;
      case "digital-clinic":
        return <RPDigitalClinic />;
      case "ehs":
        return <RPEHS />;
      case "software-sol":
        return <RPSoftwareSol />;
      case "aboutus":
        return <AboutUs />;
      default:
        return <ComingSoon />;
    }
  };

  return (
    <RaphaPlusStyled>
      {renderContent()}
      {/* <RPFooter /> */}
    </RaphaPlusStyled>
  );
};

export default RaphaPlus;
