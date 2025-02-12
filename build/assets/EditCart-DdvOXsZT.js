import{d as ve,a as Q,r as a,b as Ne,u as _e,cX as G,R as K,dL as ke,dM as ye,dN as X,dO as je,j as e,cU as Ce,J as Se,K as Pe,aZ as Ae,dP as Le,dJ as Ie,dQ as Me,dR as $,dS as ze,dT as Fe}from"./index-DDOdRoFT.js";const Ue=ve.div`
  width: 100%;
  background: #f6f9fd;

  .container-max {
    max-width: 96rem;
    margin: 0 auto;
    padding-bottom: 100px;
  }

  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .poppins-medium {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .poppins-semibold {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
  }

  .poppins-bold {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 700;
  }

  .flex_start {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex_center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flex_wrapbetween {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .inlineflex_start {
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .inlineflex_center {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flexdirection_col {
    flex-direction: column;
    gap:7px;
  }

  .text-xs {
    font-size: 0.75rem;
    line-height: 1.5rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #000000;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #000000;
  }

  .opacity-50 {
    opacity: 0.5;
  }

  .opacity-60 {
    opacity: 0.6;
  }

  .opacity-70 {
    opacity: 0.7;
  }

  .opacity-80 {
    opacity: 0.8;
  }

  .bookingContainer {
    width: 90%;
    margin: auto;
    // margin-left: 3.412%;
    // margin-right: 10.396%;
  }

  .bookingBtnwrap {
    gap: 0.313rem;
    padding-top: 0.719rem;
    padding-bottom: 0.719rem;
    appearance: none;
    border: medium none;
    background: transparent;

    &:active,
    &:focus {
      outline: none;
    }

    .back-icon {
      height: 1rem;
      width: 0.625rem;
      display: inline-flex;
    }
  }
  .error_message {
    font-size: 14px;
  }
  .error_message1 {
    padding-left: 10px;
  }
  .doctor-img {
    img {
      width: 51px;
      height: 31px;
      border-radius: 5px;
    }
  }
  .address-field-error .selectaddress-btn {
    border: 1px solid red !important;
  }
  .booking-page-actions {
    margin-top: 50px;
    display: flex;
    gap: 20px;
    justify-content: end;
  }
  .address-section-ctmri {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
    flex-direction: row;
    .profilekey {
      width: 70px;
      font-weight: 600;
    }
    .profilevalue {
      line-height: 18px;
    }
  }
  .bookinglistcontainer {
    width: 100%;

    .bookinglistwrap {
      margin-top: 1.656rem;

      .patientDetails {
        margin-top: 29px;

        &::-webkit-scrollbar {
          display: none;
        }

        .accountProfileList {
          margin-right: 2.75rem;
          gap: 1.5rem;
          .accountProfileListItm {
            appearance: none;
            border: medium none;
            padding: 0;
            justify-content: center;
            width: 4.75rem;
            height: 4.75rem;
            background: #ffffff;
            border-radius: 0.625rem;

            img {
              width: 2.25rem;
              height: 2.5rem;
              border-radius: 100%;
            }

            .accountProfileListImgmore {
              background: rgba(251, 188, 4, 1);
              border-radius: 3.125rem;
              border: 1px solid #000;
            }

            .accountProfileListName {
              font-size: 0.625rem;
              color: #000000;
              margin-top: 0.5rem;
            }

            &.selected {
              background: #ff6fa4;

              .accountProfileListName {
                color: #ffffff;
              }
            }
          }
        }

        .SelectedProfileDetails {
          padding: 0.313rem 0 0.438rem 0.625rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 0.625rem;
          width: 79.92%;
          margin-top: 1.5rem;
        }
      }

      .bookinglist {
        width: 100%;

        .bookingItems {
          width: 100%;
          gap: 24px;

          .bookingItem {
            position: relative;
            width: 100%;
            background: #ffffff;
            border-radius: 10px;
            border: 1px solid #e5d9d9;

            .removeBookingItem {
              position: absolute;
              right: 0.313rem;
              top: 0.313rem;
              --bs-btn-close-bg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M10 0C4.42857 0 0 4.42857 0 10C0 15.5714 4.42857 20 10 20C15.5714 20 20 15.5714 20 10C20 4.42857 15.5714 0 10 0ZM13.8571 15L10 11.1429L6.14286 15L5 13.8571L8.85714 10L5 6.14286L6.14286 5L10 8.85714L13.8571 5L15 6.14286L11.1429 10L15 13.8571L13.8571 15Z' fill='%23FA1A1A'/%3E%3C/svg%3E");
              --bs-btn-close-color: transparent;
              --bs-btn-close-opacity: 1;
              --bs-btn-close-hover-opacity: 1;
              --bs-btn-close-focus-shadow: none;
            }

            .SelectedProfileDetails {
              width: 37.884%;
              padding-top: 5px;
              padding-left: 11px;

              .basic_details {
                padding-right: 11px;
                gap: 10px;
                width: 100%;

                .profile_imgwrap {
                  justify-content: center;
                  width: 4.75rem;
                  height: 4.75rem;
                  background: #ff6fa4;
                  border-radius: 0.625rem;
                  color: #ffffff;

                  .profile_img {
                    width: 2.25rem;
                    height: 2.5rem;
                    border-radius: 100%;
                  }

                  .profile_imgname {
                    font-size: 0.625rem;
                    margin-top: 0.5rem;
                    color: #ffffff;
                  }
                }

                .basic_detail {
                  .profilekey {
                    width: 55px;
                  }
                  div {
                    justifycontent: space-between;
                    span {
                      color: #745353;
                      line-height: 20px;
                      white-space: nowrap;
                      font-size: 12px;

                      &.profilevalue {
                        padding-left: 2px;
                      }
                    }
                  }
                }
              }

              .address_details {
                margin-top: 10px;
                margin-bottom: 8px;
                width: 100%;

                .address-btns {
                  gap: 2.205%;

                  button {
                    appearanc: none;
                    border-radius: 5px;
                    border: 1px solid #ac9494;
                    height: 34px;
                    background: #ffffff;
                    font-size: 12px;
                    font-family: Poppins, sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                    white-space: nowrap;
                    width: 47.549%;
                    padding: 0;
                  }
                }
              }
            }

            .doctor-divider-profile {
              border-right: 1px solid rgba(0, 0, 0, 0.2);
              position: absolute;
              display: inline-block;
              height: 100%;
              left: 37.703%;
            }

            .doctor-divider-doctor {
              border-right: 1px solid rgba(0, 0, 0, 0.2);
              position: absolute;
              display: inline-block;
              height: 100%;
              left: 75.858%;
            }
            .doctor-container {
              width: 38.065%;

              .doctorDetailsSection {
                margin-top: 10px;
                width: 100%;
                .doctor-details-top {
                  width: 100%;
                  padding-bottom: 9px;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                  gap: 8px;

                  .hospital-detailwrap {
                    padding-left: 11px;
                    padding-right: 29px;
                    gap: 14px;

                    .hospital-img {
                      img {
                        width: 53px;
                        height: 46px;
                        border-radius: 8px;
                      }
                    }

                    .hospital-detail {
                      gap: 7px;

                      .hospital-basic {
                        gap: 9px;
                        .hospital-name {
                          font-size: 12px;
                          line-height: 18px;
                          color: #000000;
                        }
                        .hospital-address {
                          font-size: 8px;
                          line-height: 12px;
                          color: #000;
                          opacity: 0.6;

                          .hospital-addimg {
                            padding-right: 4px;
                          }
                        }
                      }

                      .hospital-btns {
                        gap: 22px;
                        button {
                          appearance: none;
                          border: medium none;
                          padding: 0;
                          font-size: 10px;
                          line-height: 15px;
                          color: #9747ff;
                          background: none;
                        }
                      }
                    }
                  }
                  .doctor-detailwrap {
                    padding-left: 11px;
                    padding-right: 29px;
                    gap: 26px;
                    .doctor-img {
                      img {
                        width: 51px;
                        height: 31px;
                        border-radius: 5px;
                      }
                    }

                    .doctor-detail {
                      .doctor-name {
                        color: #000;
                        opacity: 0.9;
                        font-size: 12px;
                        line-height: 18px;
                      }

                      .doctor-department {
                        font-size: 8px;
                        line-height: 12px;
                        color: #000;
                        opacity: 0.6;
                      }
                    }

                    .hospital-btns {
                      gap: 22px;
                      button {
                        appearance: none;
                        border: medium none;
                        padding: 0;
                        font-size: 10px;
                        line-height: 15px;
                        color: #8d8d8d;
                      }
                    }
                  }
                }

                .doctor-details-bottom {
                  gap: 3px;
                  padding-left: 9px;
                  padding-right: 29px;
                  padding-top: 15px;
                  padding-bottom: 8px;

                  align-items: center;

                  .doctor-consultation {
                    opacity: 0.5;
                    font-size: 0.75rem;
                    line-height: 1rem;
                    color: #000000;
                  }

                  .doctor-consultationchoose {
                    padding-top: 10px;
                  }

                  .change-doctor {
                    .changedoctor_btn {
                      appearance: none;
                      border: medium none;
                      padding: 0;
                      background: transparent;

                      .changedoctor_btnwrap {
                        height: 2.188rem;
                        padding: 0.625rem;
                        background: #ffffff;
                        border: 1px solid #0d920a;
                        border-radius: 0.625rem;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        gap: 0.625rem;

                        .changedoctor_btntxt {
                          color: #00bf7f;
                          font-size: 0.625rem;
                          line-height: 0.75rem;
                        }
                      }
                    }
                  }
                }
              }

              .choosedoctor_btn {
                appearance: none;
                border: medium none;
                padding: 0;
                background: transparent;
                margin: 0 auto 22px auto;
                width: 100%;

                .choosedoctor_btnwrap {
                  width: 52.73%;
                  height: 44px;
                  padding: 0.625rem;
                  background: #FFFFFF;
                  border: 1px solid #9747FF;
                  border-radius: 0.313rem;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  gap: 0.625rem;

                  .choosedoctor_btntxt {
                    color: #9747FF;
                    font-size: 16px;
                    line-height: 24px;
                  }
                }
              }
            }

            .slotprice-container {
              width: 24.14%;
              padding-left: 18px;
              padding-top: 11px;

              .slots {
                width: 80%;
              }

              .price-container {
                margin-top: 31px;
                margin-bottom: 15px;
                width: 80%;
                gap: 8px;

                .original-value,
                .discount-value {
                  color: #777070;
                  width: 100%;
                  font-size: 12px;
                  line-height: 12px;
                }

                .total-value {
                  color: #000;
                  width: 100%;
                  font-size: 12px;
                  line-height: 12px;
                }

                .price-value {
                  text-align: right;
                }
              }
            }
          }
        }
      }
    }

    .review-actions {
      margin-top: 129px;
      margin-bottom: 58px;
      width: 100%;
      margin-right: 2px;

      .review-btns {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        gap: 2.265%;

        button {
          appearance: none;
          border: medium none;
          padding: 0;
          height: 53px;
          min-width: 17.5%;
          font-size: 16px;
          line-height: 24px;
          background: transparent;
          border-radius: 4px;

          &.addtocart-btn {
            color: #9747ff;
            border: 1px solid #9747ff;
            background: #ffffff;
          }

          &.booknow-btn {
            color: #ffffff;
            background: #9747ff;
          }
        }
      }
    }
  }
`;let Ee="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png",Te="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png",Re="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png",Ve="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";const Qe=I=>{var W;const{doctorDetails:y,hospitalDetails:l,consultationType:S,BookingArray:t,selectedProfileIds:h,idxforDoctorChange:P}=Q(s=>s.bookingReview),{ProfileData:q,dependentsData:d,isNelyAdedUser:M,userAddress:c}=Q(s=>s.profile),[Y,A]=a.useState(!1),[B,L]=a.useState(!1),[D,z]=a.useState(null),j=a.useRef(!1),[O,C]=a.useState(!1),[ee,F]=a.useState(""),[g,He]=a.useState({}),[Ze,se]=a.useState({}),[f,oe]=a.useState(!1),{bookingtype:m}=(W=I.match)==null?void 0:W.params;console.log("hospitalId",m),console.log("hospitalDetails",l),console.log("doctorDetails",y);const i=Ne(),x=_e();a.useEffect(()=>{if(window.scrollTo(0,0),q||i(G()),(!c||c&&c.length===0)&&i(K()),console.log("BookingArray vinod",t),console.log("BookingArray vinod",t),t&&t.length&&y){let s=0;P!=null&&P>=0?s=P:s=t.findIndex(o=>{var r;return((r=o==null?void 0:o.patientsDetails)==null?void 0:r.relation)==="Self"}),s>=0?H(s):H(0)}},[]),a.useEffect(()=>{M&&(V(d[d.length-1]),se({}),i(ke(!1)))},[M]),a.useEffect(()=>{j.current&&c.length&&(R(c[c.length-1],D),z(null))},[c]),a.useEffect(()=>{(!h||h&&h.length===0)&&d&&d.length&&V(d[0])},[d]);const ne=()=>{A(!0)},re=s=>{j.current=!0,L(!0),z(s)},U=s=>(s==null?void 0:s.image)??((s==null?void 0:s.gender)==="male"?Ee:Te),te=()=>(l==null?void 0:l.image)??ze,E=s=>{var o;return s||(((o=I.doctor)==null?void 0:o.gender)==="male"?Re:Ve)},ie=()=>{let s=[],o="accountProfileListItm round-shadow inlineflex_center flexdirection_col";s=d==null?void 0:d.filter(n=>h&&h.indexOf(n.id)===-1).map((n,p)=>e.jsxs("button",{className:o,onClick:()=>{xe(n)},children:[e.jsx("img",{className:"accountProfileListImg",src:E(n==null?void 0:n.image),alt:"{item?.first_name}"}),e.jsx("div",{className:"accountProfileListName poppins-medium",children:n==null?void 0:n.first_name})]}));let r=e.jsxs("button",{className:"accountProfileListItm round-shadow inlineflex_center flexdirection_col",onClick:()=>{ne()},children:[e.jsx("div",{className:"accountProfileListImg accountProfileListImgmore",children:e.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"0.5",y:"0.5",width:"33",height:"33",rx:"16.5",stroke:"black"}),e.jsx("path",{d:"M17 10V24M10 17H24",stroke:"#444444",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("div",{className:"accountProfileListName poppins-medium",children:"Add Member"})]});return s||(s=[]),s==null||s.push(r),s},ae=(s,o,r)=>s?e.jsxs("div",{className:"SelectedProfileDetails inlineflex_start flexdirection_col",children:[e.jsxs("div",{className:"basic_details flex_center",children:[e.jsxs("div",{className:"profile_imgwrap round-shadow inlineflex_center flexdirection_col",children:[e.jsx("img",{className:"profile_img",src:E(s==null?void 0:s.image),alt:s==null?void 0:s.first_name}),e.jsx("div",{className:"profile_imgname poppins-medium",children:s==null?void 0:s.first_name})]}),e.jsxs("div",{className:"basic_detail",children:[e.jsxs("div",{className:"poppins-regular text-xs flex_start",children:[e.jsx("span",{className:"profilekey",children:"Name : "}),e.jsxs("span",{className:"profilevalue",children:[Z((s==null?void 0:s.first_name)??"")," ",s==null?void 0:s.last_name]})]}),e.jsxs("div",{className:"poppins-regular text-xs flex_start",children:[e.jsx("span",{className:"profilekey",children:"Gender : "}),e.jsx("span",{className:"profilevalue",children:Z((s==null?void 0:s.gender)??"")})]}),e.jsxs("div",{className:"poppins-regular text-xs flex_start",children:[e.jsx("span",{className:"profilekey",children:"Age : "}),e.jsx("span",{className:"profilevalue",children:s==null?void 0:s.age})]}),e.jsxs("div",{className:"poppins-regular text-xs flex_start",children:[e.jsx("span",{className:"profilekey",children:"Number : "}),e.jsx("span",{className:"profilevalue",children:s==null?void 0:s.phoneNumber})]})]})]}),e.jsxs("div",{className:"address_details",children:[r&&e.jsxs("div",{className:"poppins-regular text-xs inlineflex_start flexdirection_col",children:[e.jsx("span",{className:"profilekey",children:"Address : "}),e.jsx("span",{className:"profilevalue",children:r==null?void 0:r.address})]}),e.jsxs("div",{className:f&&!(r!=null&&r.id)?"address-btns flex_start poppins-regular address-field-error":"address-btns flex_start poppins-regular",children:[e.jsx(Ie,{index:o,addressList:c,address:r,selectSavedAddress:be}),e.jsx("button",{onClick:()=>{re(o)},children:"Add Address"})]}),f&&!(r!=null&&r.id)&&e.jsx("p",{className:"error_message",children:" Please Select Address"})]})]}):null,T=(s,o)=>{i($(s)),o?x.push(`/hospital/${o}/`):x.push("/doctor/")},le=s=>{i($(s)),x.goBack()},de=(s,o)=>{let r=s.doctorDetails,n=s.hospitalDetails;return r?e.jsxs("div",{className:"doctorDetailsSection",children:[e.jsxs("div",{className:"doctor-details-top inlineflex_start flexdirection_col",children:[(n==null?void 0:n.name)&&e.jsxs("div",{className:"hospital-detailwrap flex_center",children:[e.jsx("div",{className:"hospital-img inlineflex_center",children:e.jsx("img",{className:"round-shadow",src:te(),alt:""})}),e.jsxs("div",{className:"hospital-detail inlineflex_start flexdirection_col",children:[e.jsxs("div",{className:"hospital-basic inlineflex_start flexdirection_col",children:[e.jsx("div",{className:"hospital-name poppins-semibold text-xs",children:n==null?void 0:n.name}),e.jsxs("div",{className:"hospital-address poppins-medium",children:[e.jsx("span",{className:"hospital-addimg",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 8 12",fill:"none",children:e.jsx("path",{d:"M4 5.725C3.62112 5.725 3.25776 5.58013 2.98985 5.32227C2.72194 5.06441 2.57143 4.71467 2.57143 4.35C2.57143 3.98533 2.72194 3.63559 2.98985 3.37773C3.25776 3.11987 3.62112 2.975 4 2.975C4.37888 2.975 4.74224 3.11987 5.01015 3.37773C5.27806 3.63559 5.42857 3.98533 5.42857 4.35C5.42857 4.53057 5.39162 4.70937 5.31983 4.87619C5.24804 5.04301 5.14281 5.19459 5.01015 5.32227C4.8775 5.44995 4.72001 5.55123 4.54669 5.62033C4.37337 5.68944 4.1876 5.725 4 5.725ZM4 0.5C2.93913 0.5 1.92172 0.905624 1.17157 1.62764C0.421427 2.34965 0 3.32892 0 4.35C0 7.2375 4 11.5 4 11.5C4 11.5 8 7.2375 8 4.35C8 3.32892 7.57857 2.34965 6.82843 1.62764C6.07828 0.905624 5.06087 0.5 4 0.5Z",fill:"#444444"})})}),e.jsx("span",{children:n==null?void 0:n.address})]})]}),e.jsxs("div",{className:"hospital-btns flex_start",children:[e.jsx("button",{className:"hospital-viewbtn poppins-medium",children:"View Centre"}),e.jsx("button",{className:"hospital-chngbtn poppins-medium",children:"Change Centre"})]})]})]}),e.jsxs("div",{className:"doctor-detailwrap flex_center ",children:[e.jsx("div",{className:"doctor-img inlineflex_center",children:e.jsx("img",{src:U(r),alt:""})}),e.jsxs("div",{className:"doctor-detail inlineflex_start flexdirection_col",children:[e.jsxs("div",{className:"doctor-name poppins-semibold text-xs",children:["Dr.",r.name]}),e.jsx("div",{className:"doctor-department poppins-medium",children:r.specialization})]})]})]}),f&&!(r!=null&&r.id)&&e.jsx("p",{className:"error_message error_message1",children:"Please Select the Doctor"}),e.jsxs("div",{className:"doctor-details-bottom flex_wrapbetween",children:[e.jsxs("div",{className:"doctor-consultation",children:["Mode:"," ",n!=null&&n.vendorId?"OPD Consultation":"Virtual Consultation"]}),e.jsx("div",{className:"change-doctor",children:e.jsx("button",{className:"changedoctor_btn",type:"button",onClick:()=>T(o,n==null?void 0:n.vendorId),children:e.jsx("div",{className:"changedoctor_btnwrap",children:e.jsx("div",{className:"changedoctor_btntxt poppins-regular",children:"Change Doctor"})})})})]})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"doctorDetailsSection",children:[e.jsx("div",{className:"doctor-details-top inlineflex_start flexdirection_col",children:e.jsx("button",{className:"choosedoctor_btn",onClick:()=>T(o,""),children:e.jsx("div",{className:"choosedoctor_btnwrap",children:e.jsx("div",{className:"choosedoctor_btntxt poppins-semibold",children:"Choose Doctor"})})})}),e.jsx("div",{className:"doctor-details-bottom flex_wrapbetween",children:e.jsxs("div",{className:"doctor-consultation doctor-consultationchoose",children:["Mode:"," ",n!=null&&n.vendorId?"OPD Consultation":"Virtual Consultation"]})})]})})},ce=(s,o)=>{const r=s==null?void 0:s.doctorDetails,n=s==null?void 0:s.hospitalDetails;return s?e.jsxs("div",{className:"doctorDetailsSection",children:[e.jsxs("div",{className:"doctor-detailwrap flex_center ",children:[e.jsx("div",{className:"doctor-img inlineflex_center",children:e.jsx("img",{src:U(n),alt:""})}),e.jsxs("div",{className:"doctor-detail inlineflex_start flexdirection_col",children:[e.jsxs("div",{className:"doctor-name poppins-semibold text-xs",children:[" ",n==null?void 0:n.name]}),e.jsxs("div",{className:"doctor-department poppins-medium",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736498912733.png"})," ",n==null?void 0:n.address,", ",n==null?void 0:n.city]})]})]}),f&&!(r!=null&&r.service_code)&&e.jsxs("p",{className:"error_message error_message1",children:[" ","Please Select the Labtest"]}),e.jsxs("div",{className:"doctor-details-bottom flex_wrapbetween",children:[e.jsxs("div",{className:"doctor-consultation",children:[e.jsxs("p",{children:[" Name: ",r==null?void 0:r.service_name]}),e.jsxs("p",{children:[" Description: ",r==null?void 0:r.description]})]}),e.jsx("div",{className:"change-doctor",children:e.jsx("button",{className:"changedoctor_btn",type:"button",onClick:()=>le(o),children:e.jsx("div",{className:"changedoctor_btnwrap",children:e.jsx("div",{className:"changedoctor_btntxt poppins-regular",children:"Change Lab test"})})})})]})]}):e.jsx(e.Fragment,{})},pe=s=>{i(Me(s))},R=(s,o)=>{let r={idx:o,address:{...s}};i(ye(r))},V=s=>{let o={doctorDetails:{...y},hospitalDetails:{...l},consultationType:S,patientsDetails:{...s}};console.log("bookingObject",o),i(X(o))},xe=s=>{let o={consultationType:S,patientsDetails:{...s}};console.log("bookingObject",o),i(X(o))},H=s=>{let o={doctorDetails:{...y},hospitalDetails:{...l},idx:s,consultationType:S};i(je(o))},he=()=>{A(!1),i(G()),C(!0);const s=g!=null&&g.id?"Successfully Updated the Member.":"Successfully Added the new Member.";F(s)},ge=()=>{L(!1),i(K()),C(!0),F("Successfully Added the new Address."),j.current=!0},fe=()=>{we()&&ue()},me=()=>{x.goBack()},ue=async s=>{const o=m=="ctmri"?"ctmri":m=="labtest"?"labtest":"doctor",r=[];t.map(n=>{r.push({...n,categoryName:o})}),await i(Fe(r)),x.goBack()};console.log("BookingArray",t);const we=()=>{console.log("BookingArray",t);let s=!1;return t.map(o=>{var r,n,p,u,w,b,v,N,_,k;(r=o==null?void 0:o.address)!=null&&r.id&&((n=o==null?void 0:o.patientsDetails)!=null&&n.id)&&(o.consultationType!=="OPD"||(p=o==null?void 0:o.hospitalDetails)!=null&&p.vendorId||(u=o==null?void 0:o.hospitalDetails)!=null&&u.id)&&((w=o==null?void 0:o.doctorDetails)!=null&&w.id||(b=o==null?void 0:o.doctorDetails)!=null&&b.service_code)&&((v=o==null?void 0:o.slot1)!=null&&v.dateStr&&((_=(N=o==null?void 0:o.slot1)==null?void 0:N.slot)!=null&&_.slot)||(k=o==null?void 0:o.doctorDetails)!=null&&k.service_code)?s=!0:oe(!0),console.log("itemB",o)}),s},be=(s,o)=>{R(s,o)},Z=s=>s.charAt(0).toUpperCase()+s.slice(1);return e.jsxs(Ue,{children:[e.jsx(Ce,{show:Y,onHide:()=>{A(!1)},addUserSuccess:he,selectedMember:g}),e.jsx(Se,{show:B,onHide:()=>{L(!1),j.current=!0},addUserSuccess:ge,selectedMember:g}),e.jsx(Pe,{show:O,titleText:ee,deleteText:"ok",cancelText:"",onCancel:()=>C(!1),onDelete:()=>C(!1)}),e.jsx("div",{className:"container-max",children:e.jsxs("div",{className:"bookingContainer",children:[e.jsxs("button",{className:"bookingBtnwrap inlineflex_center",onClick:()=>x.goBack(),children:[e.jsx("div",{className:"back-icon inlineflex_center",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M5.61538 10.5L1 6L5.61538 1.5M1.64103 6H11",stroke:"#444444",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("div",{className:"back-text poppins-medium text-sm",children:"Back"})]}),e.jsxs("div",{className:"bookinglistcontainer",children:[e.jsx("div",{className:"title poppins-semibold opacity-50",children:"Patient Details & Select Time Slot"}),e.jsxs("div",{className:"bookinglistwrap",children:[t&&t.length>0&&e.jsx("div",{className:"bookinglist",children:e.jsx("div",{className:"bookingItems inlineflex_start flexdirection_col",children:t==null?void 0:t.map((s,o)=>{var r,n,p,u,w,b,v,N,_,k,J;return e.jsxs("div",{className:"bookingItem flex_center round-shadow",children:[e.jsx(Ae,{className:"removeBookingItem",onClick:We=>pe(o)}),ae(s.patientsDetails,o,s.address),e.jsx("div",{className:"doctor-divider-profile"}),e.jsx("div",{className:"doctor-container",children:m=="labtest"||m=="ctmri"?e.jsxs(e.Fragment,{children:[" ",ce(s,o)]}):e.jsx(e.Fragment,{children:de(s,o)})}),e.jsx("div",{className:"doctor-divider-doctor"}),e.jsxs("div",{className:"slotprice-container inlineflex_start flexdirection_col",children:[e.jsxs("div",{className:"slots inlineflex_start flexdirection_col",children:[e.jsx(Le,{item:s,index:o,consultation:l!=null&&l.vendorId?"OPD Consultation":"Virtual Consultation"}),f&&(!((r=s==null?void 0:s.slot1)!=null&&r.dateStr)||!((p=(n=s==null?void 0:s.slot1)==null?void 0:n.slot)!=null&&p.slot))&&e.jsxs("p",{className:"error_message",children:[" ","Please Select the Time Slot Details"]})]}),e.jsxs("div",{className:"price-container inlineflex_start flexdirection_col",children:[e.jsxs("div",{className:"original-value flex_wrapbetween poppins-regular",children:[e.jsx("span",{className:"price-text",children:"Price"}),e.jsx("span",{className:"price-value",children:(v=(b=(((u=s==null?void 0:s.doctorDetails)==null?void 0:u.virtual_consultation_cost)||((w=s==null?void 0:s.doctorDetails)==null?void 0:w.actual_cost))??0)==null?void 0:b.toFixed(2))==null?void 0:v.toLocaleString("en-US")})]}),e.jsxs("div",{className:"discount-value flex_wrapbetween poppins-regular",children:[e.jsx("span",{className:"price-text",children:"Discount"}),e.jsx("span",{className:"price-value",children:"0.00"})]}),e.jsxs("div",{className:"total-value flex_wrapbetween poppins-semibold",children:[e.jsx("span",{className:"price-text",children:"Total Price"}),e.jsx("span",{className:"price-value",children:(J=(k=(((N=s==null?void 0:s.doctorDetails)==null?void 0:N.virtual_consultation_cost)||((_=s==null?void 0:s.doctorDetails)==null?void 0:_.discounted_price))??0)==null?void 0:k.toFixed(2))==null?void 0:J.toLocaleString("en-US")})]})]})]})]})})})}),e.jsx("div",{className:"patientDetails",children:e.jsx("div",{className:"accountProfileList flex_start",children:ie()})})]})]}),e.jsxs("div",{className:"booking-page-actions",children:[e.jsx("button",{onClick:me,className:"secoundary-button",children:"Cancel"}),e.jsx("button",{onClick:fe,className:"primary-button",children:"Update Cart"})]})]})})]})};export{Qe as default};
