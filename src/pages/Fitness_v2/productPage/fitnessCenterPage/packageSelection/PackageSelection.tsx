import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import BreadCrumbModule from "../../../../Pharmacy/BreadCrumbModule";
import Loader from "../../../../../components/Loader/Loader";
import {
  PackagesCardButton,
  PackageSelectionStyled,
} from "./PackageSelection.style";
import PackageAccordion from "./PackageAccordion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { updateShowLoginModel } from "../../../../../redux/slices/auth/authSlice";
import { updateDoctordetails } from "../../../../../redux/slices/bookingScreen/bookingScreenSlice";


const Card: any = styled.div`
  background: white;
  padding: 20px;
  border-radius: 30px;
  box-shadow: ${(props: any) =>
    props?.selected
      ? "0 4px 10px rgba(0, 0, 0, 0.2)"
      : "0 2px 5px rgba(0, 0, 0, 0.1)"};
  flex-basis: ${(props: any) => (props?.selected ? "355px" : "330px")};
  border: ${(props: any) => (props?.selected ? "2px solid #00bcd4" : "none")};
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
  flex-grow: 0;
  position:relative;
  scale: ${(props:any)=>props?.selected ? "1.1" :"1"};
`;

const PackageSelection = () => {
    const dispatch = useDispatch()
    const history = useHistory()
  const location = useLocation() as any;
  const { fitnessCenterID, packageID } = useParams() as any;
  const [selected, setSelected] = useState(packageID);
  const [selectedFitnessCenter, setSelectedFitnessCenter] = useState(
    location.state?.selectedFitnessCenter
  );

  const [loading, isLoading] = useState(false);

  useEffect(() => {
    console.log("sel", selectedFitnessCenter);
  }, []);

  const list = [
    {
      title: "Fitness",
      link: `/fitness_v2`,
    },
    {
      title: "Gyms",
      link: "/fitnessCenters",
    },
    {
      title: location.state?.selectedFitnessCenter?.name,
      link: `/fitnessCenters/${location.state?.selectedFitnessCenter?.name
        ?.split?.(" ")
        ?.join("-")}/${location.state?.selectedFitnessCenter?.id}`,
    },
    {
      title: "packages",
      link: `/fitnessCenters/bookingConformation/${fitnessCenterID}/${packageID}`,
    },
  ];

  const {user} = useSelector((store:RootState)=>store.auth)


  const handleBookNow = async (currentPack:any) => {
    const vendor = {
      address: selectedFitnessCenter?.vendor?.address,
      city: selectedFitnessCenter?.vendor?.city,
      id: selectedFitnessCenter?.vendor?.id,
      image: selectedFitnessCenter?.images?.find(
        (item: any) => item?.length > 0
      ),
      name: selectedFitnessCenter?.vendor?.name,
      state: selectedFitnessCenter?.vendor?.state,
      type: "gym",
      zip: selectedFitnessCenter?.vendor?.zip,
    };
    let selectedPackage
    if(currentPack){
        selectedPackage = selectedFitnessCenter?.packages?.find((item:any)=>item?.service_code===currentPack)
    }else{
        selectedPackage = selectedFitnessCenter?.packages?.find((item:any)=>item?.service_code===selected)
    }
    const test = {
      visit_type: selectedPackage?.visit_type,
      service_name: selectedPackage?.service_name,
      service_code: selectedPackage?.service_code,
      price: selectedPackage?.price,
      preperation: selectedPackage?.preperation,
      image: selectedPackage?.image?.find((item: any) => item?.length > 0),
      description: selectedPackage?.description,
    };
    console.log("selected", selectedFitnessCenter);
    console.log("pack", selectedPackage);
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      await dispatch(
        updateDoctordetails({
          doctorDetails: test,
          hospitalDetails: vendor,
          categoryType: "gym",
          slot1: {},
          slot2: {},
        })
      );
      history.push(`/gym/bookingReview`);
    }
  };

  return (
    <PackageSelectionStyled>
      {loading && <Loader />}
      <div className="container">
        <div className="breadcrumb">
          <BreadCrumbModule moduleName={"gym"} list={list} />
        </div>
        <div className="page-heading">
          <h2>Choose Your Membership</h2>
        </div>
        <div className="packages-div">
          {selectedFitnessCenter?.packages?.map?.((pkg: any) => (
            <Card
              key={pkg?.service_code}
              selected={pkg?.service_code === selected}
              onClick={() => setSelected(pkg?.service_code)}
            >
              <div className="discount-badge">
                <svg
                  width="91"
                  height="46"
                  viewBox="0 0 91 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M91 5C91 2.23858 88.7614 0 86 0H18C8.05887 0 0 8.05887 0 18V18C0 27.9411 8.05888 36 18 36H91V5Z"
                    fill="#89DB7B"
                  />
                  <path d="M79 36H91L79 46V36Z" fill="#2C7420" />
                  <text
                    x="15%"
                    y="50%"
                    fill="black"
                  >
                    Save {pkg?.price?.discount_percentage}%
                  </text>
                </svg>
              </div>
              <div className="package-title-name-div">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 0C27.9405 0 36 8.05737 36 17.9985C36 27.9395 27.9406 36 18 36C8.05943 36 0 27.9396 0 17.9985C0 8.0573 8.05844 0 18 0ZM24.6888 23.6154C24.3025 23.8458 23.8649 23.9766 23.4155 23.9961L22.0502 24.0577C21.8259 24.0658 21.6047 24.1131 21.3967 24.1974C21.2381 24.2644 21.0896 24.353 20.9554 24.4608L23.2709 29.4264L23.8978 27.0848C23.9043 27.0567 23.9137 27.0293 23.9259 27.0031C23.9477 26.9562 23.9784 26.9141 24.0165 26.8791C24.0545 26.8442 24.0991 26.8171 24.1476 26.7994C24.1962 26.7817 24.2477 26.7737 24.2993 26.776C24.351 26.7782 24.4016 26.7907 24.4484 26.8126L26.6614 27.845L24.6891 23.6154H24.6888ZM15.0426 24.4608C14.9084 24.3529 14.7598 24.2643 14.6011 24.1974C14.3932 24.1131 14.1722 24.0658 13.948 24.0577L12.5825 23.9961C12.133 23.9766 11.6954 23.8458 11.309 23.6154L9.33715 27.845L11.55 26.8126C11.6034 26.7877 11.6618 26.7751 11.7207 26.7758C11.7796 26.7765 11.8377 26.7904 11.8905 26.8165C11.9433 26.8427 11.9896 26.8804 12.0259 26.9268C12.0622 26.9733 12.0875 27.0273 12.1001 27.0848L12.7273 29.4264L15.0426 24.4608ZM20.309 8.00168L19.2995 7.07976C18.9447 6.75419 18.4806 6.57356 17.9991 6.57356C17.5175 6.57356 17.0534 6.75419 16.6986 7.07976L15.689 8.00168C15.224 8.43573 14.6176 8.68662 13.9819 8.70794L12.6161 8.76954C12.1355 8.79118 11.6804 8.99183 11.3403 9.33205C11.0002 9.67227 10.7997 10.1274 10.7781 10.608L10.7163 11.9738C10.6949 12.6095 10.4441 13.216 10.0101 13.6811L9.08817 14.6903C8.76266 15.0453 8.58206 15.5093 8.58206 15.9909C8.58206 16.4725 8.76266 16.9366 9.08817 17.2916L10.0101 18.3012C10.4444 18.7662 10.6953 19.3729 10.7163 20.0088L10.7782 21.3741C10.7997 21.8547 11.0003 22.3099 11.3404 22.6501C11.6805 22.9903 12.1356 23.191 12.6162 23.2126L13.9819 23.2742C14.6176 23.2955 15.2241 23.5464 15.6891 23.9804L16.6987 24.9025C17.0535 25.228 17.5176 25.4086 17.9991 25.4086C18.4807 25.4086 18.9447 25.228 19.2996 24.9025L20.3091 23.9804C20.7741 23.5464 21.3806 23.2955 22.0163 23.2742L23.382 23.2126C23.8626 23.1912 24.3178 22.9906 24.658 22.6504C24.9982 22.3101 25.1986 21.8548 25.22 21.3741L25.2819 20.0088C25.3027 19.3729 25.5536 18.7662 25.988 18.3014L26.9098 17.2918C27.2361 16.9372 27.4173 16.4729 27.4175 15.991H27.4159C27.416 15.5093 27.2353 15.0451 26.9096 14.6901L25.9879 13.6809C25.5535 13.2159 25.3026 12.6091 25.2818 11.9732L25.2198 10.6078C25.1985 10.1272 24.998 9.67187 24.6579 9.33161C24.3177 8.99135 23.8625 8.79076 23.3819 8.76933L22.0162 8.70773C21.3804 8.6864 20.774 8.4355 20.3089 8.00147L20.309 8.00168ZM18.3584 10.8602C18.3281 10.7899 18.278 10.7301 18.2141 10.688C18.1502 10.646 18.0754 10.6235 17.9989 10.6235C17.9224 10.6235 17.8476 10.646 17.7837 10.688C17.7198 10.7301 17.6697 10.7899 17.6394 10.8602L16.2407 14.0952L12.7585 14.4233C12.6794 14.4252 12.6027 14.4509 12.5385 14.497C12.4742 14.5431 12.4254 14.6076 12.3983 14.6819C12.3713 14.7563 12.3672 14.837 12.3868 14.9137C12.4064 14.9904 12.4486 15.0593 12.508 15.1116L15.1533 17.4419L14.3892 20.8565C14.367 20.9321 14.3681 21.0126 14.3924 21.0876C14.4166 21.1625 14.4628 21.2285 14.525 21.2768C14.5872 21.3251 14.6625 21.3536 14.7411 21.3586C14.8197 21.3636 14.898 21.3448 14.9657 21.3047L17.9993 19.509L21.0327 21.3047L21.0334 21.3038C21.099 21.3427 21.1747 21.3616 21.251 21.3581C21.3273 21.3546 21.4009 21.3288 21.4627 21.2839C21.5246 21.2391 21.5719 21.1771 21.5989 21.1056C21.626 21.0342 21.6315 20.9564 21.6148 20.8819L20.8447 17.4422L23.4901 15.112L23.4896 15.111C23.547 15.0604 23.5884 14.9941 23.6085 14.9203C23.6287 14.8465 23.6269 14.7684 23.6033 14.6957C23.5796 14.6229 23.5352 14.5586 23.4756 14.5108C23.4159 14.4629 23.3435 14.4335 23.2673 14.4263L19.7575 14.0958L18.3582 10.8608L18.3584 10.8602ZM19.1302 14.6193L17.999 12.0024L16.8753 14.6015C16.8495 14.6704 16.8048 14.7307 16.7464 14.7755C16.688 14.8203 16.6181 14.8477 16.5448 14.8546L13.7085 15.1218L15.846 17.0054L15.8451 17.0063C15.8978 17.0525 15.937 17.112 15.9588 17.1786C15.9806 17.2451 15.9841 17.3163 15.969 17.3847L15.3462 20.1669L17.7934 18.7184C17.8542 18.681 17.9241 18.6609 17.9954 18.6604C18.0668 18.6598 18.1369 18.6788 18.1983 18.7153L20.651 20.1668L20.0356 17.4174C20.0131 17.345 20.0119 17.2675 20.0324 17.1944C20.0529 17.1213 20.0941 17.0557 20.151 17.0055L22.2893 15.1218L19.4531 14.8546V14.8541C19.3832 14.8474 19.3164 14.8221 19.2596 14.7808C19.2029 14.7395 19.1582 14.6837 19.1303 14.6193H19.1302Z"
                    fill="#1C3173"
                  />
                </svg>

                <h5 className="package-name">{pkg?.service_name}</h5>
              </div>
              <div>
                <h2 className="actual-price">
                  ₹{pkg?.price?.discounted_price}
                </h2>
              </div>
              <div className="card-price-div">
                <h5>discount</h5>
                <h5 className="actual-price-cut">₹{pkg?.price?.actual_cost}</h5>
                <h5 className="discounted-price">
                  ₹{pkg?.price?.discounted_price}
                </h5>
              </div>
              <div>
                <p dangerouslySetInnerHTML={{ __html: pkg?.description }} />
              </div>
              <div className="card-book-btn-div">
                <PackagesCardButton onClick={()=>handleBookNow(pkg?.service_code)} selected={pkg?.service_code === selected}>
                  Book Now
                </PackagesCardButton>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <PackageAccordion/>
        </div>
      </div>
    </PackageSelectionStyled>
  );
};

export default PackageSelection;
