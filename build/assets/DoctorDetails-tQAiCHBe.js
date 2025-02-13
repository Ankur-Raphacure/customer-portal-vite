import{ao as x,r as o,j as e,ap as A,aq as Ot,ar as $t,d as Pt,u as Bt,b as Et,k as Ft,q as Vt,a as ne,as as Wt,at as Lt,au as qt,av as Rt,aw as Ht,ax as Qt,ay as Gt,l as Yt,ag as Kt,ah as Xt,az as Xe,aA as Ut,aB as Jt,aC as Ue,aD as Zt,aE as Dt,af as en,c as tn,aF as nn,aG as on,aH as sn,aI as an}from"./index-CitTC1Lo.js";import{C as rn}from"./ContentLoaderSection-BJbbcI5C.js";import{S as ln}from"./ShareModal-Dhat-0Un.js";import{G as cn}from"./index-CsR-E3M6.js";import{v as dn,c as pn}from"./clinic-Cr6QJt7w.js";import{A as j}from"./Accordion-DR59O_fM.js";import"./react-content-loader.es-eXIN9kWh.js";const C=x.oneOf(["start","end"]),xn=x.oneOfType([C,x.shape({sm:C}),x.shape({md:C}),x.shape({lg:C}),x.shape({xl:C}),x.shape({xxl:C}),x.object]),fn={id:x.string,href:x.string,onClick:x.func,title:x.node.isRequired,disabled:x.bool,align:xn,menuRole:x.string,renderMenuOnMount:x.bool,rootCloseEvent:x.string,menuVariant:x.oneOf(["dark"]),flip:x.bool,bsPrefix:x.string,variant:x.string,size:x.string},oe=o.forwardRef(({title:_,children:u,bsPrefix:S,rootCloseEvent:q,variant:se,size:z,menuRole:I,renderMenuOnMount:$,disabled:R,href:P,id:k,menuVariant:M,flip:H,...ae},r)=>e.jsxs(A,{ref:r,...ae,children:[e.jsx(Ot,{id:k,href:P,size:z,variant:se,disabled:R,childBsPrefix:S,children:_}),e.jsx($t,{role:I,renderOnMount:$,rootCloseEvent:q,variant:M,flip:H,children:u})]}));oe.displayName="DropdownButton";oe.propTypes=fn;const Je=Pt.div`
  .doc-details-div {
    padding: 28px 60px 52px 60px;
    padding-bottom: 0;
  }
  .MobileHeader-main-div {
    display: none;
  }
  .bread-crumb-div {
    margin-bottom: 28px;
  }
  .main-container {
    display: flex;
    flex-direction: row;
  }
  .doctor-main-image-sec {
    max-width: 300px;
    object-fit: fill;
  }
  .virtual-types-list-all {
    display: flex;
    margin-top: 30px;
    margin-left: 30px;
    gap: 24px;
    label {
      font-size: 24px;
      text-transform: capitalize;
      padding-left: 7px;
      cursor: pointer;
    }
    input {
      height: 18px;
      width: 18px;
      cursor: pointer;
    }
  }
  .left-side {
    width: 60%;
  }
  .right-side {
    width: 40%;
    // position: sticky;
    // top: 150px;
    // height: 1000px;
  }
  .cardContainer {
    width: 100%;
    border: none;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 30px;
    padding-bottom: 10px;
    font-family: Arial, sans-serif;
    background-color: #fff;
  }

  .header {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-bottom: 16px;
  }

  .profile {
    display: flex;
    flex-direction: column;
  }
  .ratingContainer {
    background-color: #007aff;
    color: #fff;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .profileContainer {
    display: flex;
    width: 100%;
  }
  .share-btn-icon svg {
    height: 1.5rem;
    width: 1.5rem;
    opacity: 0.5;
  }

  .profileImage {
    /* width: 100%; */
    height: 240px;
    border-radius: 25px;
    margin-right: 16px;
  }

  .info {
    flex: 1;
  }

  .name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    font-size: 26px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    margin-bottom: 0px;
  }

  .bannerWrapper {
    position: absolute;
    top: 14rem;
    left: 4.8rem;
    width: 3rem;
    .rectangle {
      background: #92bdf6;
      padding: 2px 4px;
      border-radius: 10px 45px 45px 0;
      font-size: 16px;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #252b61;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #92bdf6;
    }
  }

  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #252b61;
    margin-bottom: 5px;
  }

  .qua {
    display: flex;
    flex-direction: row;
    gap: 6px;
    margin-top: 16px;

    img {
      width: 6%;
      height: 22.3px;
    }
  }

  .qualifications {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.5;
    line-height: 1.2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 12px;
  }

  .lang {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: baseline;
    /* align-items: center; */

    img {
      width: 19.4px;
      height: 14.8px;
      margin-left: 5px;
    }

    .languages {
      font-size: 16px;
      font-family: Inter;
      color: #000;
      text-align: left;
      opacity: 0.5;
      margin-bottom: 7px;
    }
  }

  .veri {
    display: flex;
    flex-direction: row;
    margin-left: 3px;
    align-items: center;
    gap: 9px;

    img {
      height: 21px;
    }
  }

  .verification {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.5;
    margin-bottom: 7px;
    margin-bottom: 0px;
  }

  .exp {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;

    img {
      width: 6%;
      height: 21px;
    }
  }

  .experience {
    font-size: 16px;
    font-family: Outfit;
    color: #000;
    text-align: left;
    opacity: 0.5;
  }

  .experienceContainer {
    background-color: #f8f8f8;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    text-align: center;
    font-weight: bold;
    color: #444;
  }

  .servicesContainer {
    border-radius: 15px;
    background-color: rgba(146, 189, 246, 0.2);
    margin-top: 16px;
    opacity: 1;
    padding: 40px;
    padding-bottom: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
      font-size: 18px;
      margin-bottom: 5px;
      font-weight: 500;
      font-family: Inter;
      color: #252b61;
      text-align: left;
    }
  }

  .serviceListDiv {
    margin-left: 20px;
  }

  .servicesList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
    list-style: disc;
    padding: 0;
    margin: 0;
  }

  .servicesList li {
    width: 15rem;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #000;
    text-align: left;
  }
  li::marker {
    font-size: 1.5rem;
  }

  .serviceListAll {
    width: fit-content;
    margin-left: auto;
    font-size: 16px;
    text-decoration: underline;
    font-family: Inter;
    color: #71aeff;
    text-align: left;
    border: none;
    background: none;
  }

  /* left-side bottom Hospitals details design */

  .hospital-container {
    margin-top: 35px;
    font-family: Arial, sans-serif;
    background-color: #fff;
    padding: 15px 80px 15px 35px;
    width: 100%;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin-bottom: 3rem;
  }

  .tabs {
    display: flex;
    gap: 20px;
    /* border-bottom: 2px solid #ddd; */
    /* margin-bottom: 16px; */
  }

  .tab {
    background: none;
    border: none;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    text-align: center;
    padding-bottom: 8px;
    cursor: pointer;
    opacity: 0.5;
  }

  .tab.active {
    color: #252b61;
    border-bottom: 4px solid #252b61;
    opacity: 0.9;
  }

  .hospital-list {
    overflow-y: scroll;
    height: auto;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .hospital-list::-webkit-scrollbar {
    display: none;
  }

  .hospital-card {
    background-color: #fff;
    border-bottom: 2px solid #e0e0e0;
    padding: 16px 0px 0px 0px;
  }

  .info-icon {
    display: inline-block;
    margin-left: 5px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #ccc;
    color: #ccc;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    position: relative;
  }

  .detailTooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8px;
    background-color: #e0e0e0;
    color: #000;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    text-align: left;
    white-space: normal;
    width: 250px;
    z-index: 1000;
  }

  .detailTooltip::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #e0e0e0 transparent;
  }
  .down-part {
    display: flex;
    flex-direction: row;
  }

  .hospital-header {
    display: flex;
    flex-direction: column;
  }

  .left-hospital-side {
    width: 29%;
  }

  .middle {
    margin-left: 60px;
  }
  .hospital-name {
    margin-bottom: -10px;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    color: #4a98ff;
    text-align: left;
    margin: 0;
  }

  .hospital-rating {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .stars {
    color: gold;
    font-size: 1.2rem;
  }
  .type-doctor-call-div {
    display: flex;
    margin: 10px 30px;
    gap: 1rem;
  }
  .hospital-address {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;
    width: 100%;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
  }
  .hospital-details {
    font-size: 14px;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.5;
  }

  .hospital-directions {
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;
    color: #176cdc;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 5px;

    span img {
      height: 18px;
    }
  }

  .hospital-images {
    display: flex;
    gap: 17px;
    margin: 16px 0;
  }

  .hospital-image {
    width: 70px;
    height: 46.7px;
    border-radius: 5px;
    object-fit: cover;
  }

  .hospital-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 60px;
  }

  .hospital-timings {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;

    p {
      margin-bottom: 0px;
    }
  }

  .hospital-fee {
    font-size: 1rem;
    font-weight: bold;
    span {
      font-size: 16px;
      font-weight: 600;
      font-family: Inter;
      color: #000;
    }
  }

  .call-now-button {
    border-radius: 45px;
    background-color: #a3dac2;
    font-size: 14px;
    font-weight: 500;
    font-family: Poppins;
    color: #252b61;
    /* height: 100%; */
    border: none;
    padding: 12px 34px;
    cursor: pointer;
  }
  .footer-part {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .call-now-button:hover {
    background-color: #81e6d9;
  }

  .free-question-card {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    font-family: "Arial", sans-serif;
    color: #333;
  }

  .icon-section {
    margin-bottom: 16px;
  }

  .query-icon {
    width: 124.6px;
    height: 124.6px;
  }

  .info-text {
    font-size: 13px;
    font-weight: 500;
    font-family: Inter;
    color: #000;
    text-align: center;
    display: inline-block;
    opacity: 0.5;
  }

  .ask-button {
    background-color: #001f60;
    color: white;
    font-size: 14px;
    padding: 12px 20px;
    border: none;
    border-radius: 45px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .ask-button:hover {
    background-color: #003d99;
  }
  .popover-div {
    width: 100%;
    margin: 10px 30px;
    button {
      color: #71aeff;
      font-family: Outfit, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      width: 50%;
      background-color: #fff;
      display: flex;
      align-items: center;
      border: none;
      padding: 0px;
    }
    .MdKeyboardArrowDown {
      color: #71aeff;
    }
  }
  .vendors-warning-msg {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    padding-bottom: 8px;
    cursor: pointer;
    opacity: 0.5;
  }
  .dropdown-menu.show {
    padding: 0.5rem;
    height: 10rem;
    overflow: scroll;
  }
  .dropdown-item {
    padding: 0px !important;
  }
  .Change-clinic-div {
    width: 100%;
    cursor: pointer;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: #fff;
    border: 0.5px solid #e4e4e4;
    margin-bottom: 1rem;
  }
  .Change-clinic-title {
    padding: 10px 10px 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Change-clinic-name {
    font-size: 16px;
    font-family: Outfit, sans-serif;
    color: #000;
    opacity: 0.6;
    font-weight: 500;
  }
  .Change-clinic-price {
    font-size: 16px;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #000;
    opacity: 0.6;
  }
  .Change-clinic-addr {
    padding: 0px 10px 10px 10px;
    gap: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 12px;
      font-family: Outfit, sans-serif;
      color: #000;
      opacity: 0.5;
      margin: 0px;
    }
  }
  /* Time - slot calendar css ---------------------------------------------------------------------------------------*/

  .ant-dropdown-menu-item {
    border-radius: 4px !important;
    border: 0.5px solid #e4e4e4 !important;
    background: #fff !important;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1) !important;
  }
  .user-add-picker {
    padding: 1rem;
    /* border-radius: 20px; */
    border: 1px solid rgba(234, 210, 210, 0.5);
    background: #edf8f3;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 92px;
    flex-shrink: 0;
    margin-left: 16.23px;
    margin-bottom: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 10px;
      margin-right: 8px;
    }
    p {
      width: 22rem;
      color: #000;
      font-family: Outfit, sans-serif;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0.5px;
      margin: 0px;
      line-height: 22px;
      span {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 1;
        color: #726666;
        font-family: Outfit, sans-serif;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1px;
        width: 12rem;
      }
    }
    button {
      border-radius: 20px;
      border: 1px solid #036;
      color: #252b61;
      font-size: 16px;
      letter-spacing: 1px;
    }
  }
  .showSelectedMember-main-div {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    height: 66px;
    p {
      padding: 20px 20px;
      margin: 0px;
      color: #1e1e1e;
      font-family: Outfit, sans-serif;
      font-size: 20px;
      font-weight: 500;
    }
  }
  .showSelectedMember-div {
    height: 500px;
    background: #f8f8ff;
    padding: 20px 20px;
  }
  .selected-member-div {
    border-radius: 10px;
    border: 1px solid rgba(228, 228, 228, 0.6);
    background: rgba(197, 226, 204, 0.6);
  }
  .user-div {
    cursor: pointer;
  }
  .select-member-div {
    border-radius: 10px;
    border: 1px solid rgba(228, 228, 228, 0.6);
    background: #fff;
    height: 109px;
    cursor: pointer;
  }
  .select-member-main-div {
    height: 16rem;
    overflow: scroll;
  }
  .showSelectedMember-title {
    color: rgba(0, 0, 0, 0.7);
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.27px;
    margin: 0px;
  }
  .showSelectedMember-btn {
    border-radius: 25px;
    background: #252b61;
    color: #f8f8ff;
    font-family: Outfit, sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.24px;
    display: flex;
    align-items: center;
  }
  .selected-member-detail {
    display: flex;
    align-items: center;
    padding: 21px 21px;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 10px;
      margin-right: 8px;
    }
    /* p {
      color: #000;
      font-family: Outfit, sans-serif;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.3px;
      line-height: 15px;
      margin: 0px; */

    span {
      color: #726666;
      font-family: Outfit, sans-serif;
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 1px;
    }
    /* } */
  }
  .select-member-div {
    display: flex;
    align-items: center;
    padding: 21px 21px;
    margin-bottom: 1rem;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 10px;
      margin-right: 8px;
    }
  }
  .user-name {
    color: #000;
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.3px;
    margin: 0px;
    margin-bottom: 5px;
  }

  .user-add {
    color: #726666;
    font-family: Outfit, sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 15px;
    margin: 0px;
  }
  .clinic-change-div {
    display: flex;
    align-items: center;
    margin: 0px;
  }
  .time-slot-picker {
    margin-left: 16.23px;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    border: none;
    font-family: Arial, sans-serif;
    width: 100%;
    padding: 20px 0px;
    background-color: #fff;
  }

  .toggle-container {
    position: relative;
    box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    height: 45px;
    overflow: hidden;
    text-align: left;
    font-size: 18px;
    color: #808080;
    font-family: Outfit, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    gap: 64px;
  }

  /* Toggle Labels */
  .toggle-label {
    font-size: 12px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Inter;
    color: #808080;
    transition: color 0.3s;
    cursor: pointer;
    opacity: 0.5;
  }
  .clinic-details-sec-all-sa {
    text-align: left;
    .clinicc-name {
      margin-bottom: 2px;
    }
    .clinicc-address {
      font-weight: 400;
      font-size: 14px;
    }
  }
  .toggle-label.active {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: "Inter", serif;
    color: #252b61;
    border-radius: 1.5px;
    border: none;
    background-color: unset;
    border-bottom: 3px solid #252b61;
    opacity: 1;
    cursor: pointer;
  }
  .disabledTrue {
    cursor: auto;
  }

  /* Toggle Switch */
  .toggle-switch {
    width: 40px;
    height: 20px;
    border-radius: 10px;
    background-color: #252b61;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle-switch.virtual {
    background-color: #ffffff;
  }

  .toggle-switch.clinic {
    background-color: #ffffff;
  }

  /* Toggle Circle */
  .toggle-circle {
    width: 16px;
    height: 16px;
    background-color: #252b61;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.3s;
  }

  .toggle-switch.virtual .toggle-circle {
    transform: translateX(0);
  }

  .toggle-switch.clinic .toggle-circle {
    transform: translateX(20px);
  }

  .day-selector-container {
    padding: 0px 10px;
    box-shadow: 0px 12px 19px -9px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
  }

  /* Arrows */
  .arrow-button {
    background-color: transparent;
    border: none;
    font-size: 37px;
    color: #252b61;
    cursor: pointer;
    padding: 5px;
    user-select: none;
  }

  /* Scrollable Day Selector */
  .day-selector {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scroll-behavior: smooth;
    white-space: nowrap;
    flex: 1;
  }

  .day-selector::-webkit-scrollbar {
    display: none; /* Hide scrollbar for better design */
  }

  /* Day Button Styling */
  .day-button {
    flex-shrink: 0;
    padding: 10px 20px;
    border: none;
    background-color: unset;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s;

    .day-text {
      font-size: 14px;
      font-family: Inter;
      color: #000;
      text-align: center;
    }

    .slot-count {
      font-size: 12px;
      font-family: Inter;
      color: #1aad69;
    }
  }

  .day-button.selected {
    border-radius: 1.5px;
    border: none;
    background-color: unset;
    border-bottom: 3px solid #252b61;
  }

  .title-slot {
    padding: 0px 27px;
    font-size: 26px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Inter;
    color: #131313;
    text-align: left;
    margin-bottom: 16px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .fee {
    margin-top: 2rem !important;
    display: flex;
    text-align: center;
    margin: 0px 30px;
    font-size: 16px;
    font-weight: bold;
    color: #555;
    justify-content: space-between;

    h1 {
      font-size: 21px;
      letter-spacing: 0.02em;
      font-family: Inter;
      color: #000;
      opacity: 0.7;
    }

    h2 {
      font-size: 14px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      margin-right: 0;
    }
  }

  .day-selector {
    display: flex;
    justify-content: space-between;
  }

  .time-slot-container {
    max-height: 15rem;
    overflow-y: auto;
    padding: 10px 10px 10px 47.5px;
    background: #fff;
    border-radius: 6px;
  }

  .time-slot-section {
    margin-bottom: 15px;
  }

  .section-header {
    justify-content: space-between;
    display: flex;
    margin-bottom: 10px;

    p {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 0px;

      h1 {
        font-size: 18px;
        font-family: Inter;
        color: #000;
        font-weight: 400;
      }

      h2 {
        font-size: 16px;
        font-family: Inter;
        color: #000;
        opacity: 0.5;
      }
    }
  }

  .slots {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    gap: 16px 30px;
    padding: 0px 40px 0px 0px;
    p {
      margin-top: 0.5rem;
      margin-bottom: 0px;
      font-size: 16px;
      font-family: Inter;
      color: #000;
      opacity: 0.5;
    }
  }
  .time-slots-div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px 30px;
    padding: 0px 40px 0px 0px;
    height: 10rem;
    overflow: scroll;
  }

  .slot-button {
    width: 100%;
    padding: 8px;
    border: none;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
    height: 49.8px;
    font-size: 14px;
    font-family: Outfit, sans-serif;
    color: #252b61;
    text-align: center;
  }

  .slot-button.selected {
    background-color: #a3dac2;
    color: #ffffff;
  }

  .slot-button.disabled {
    background-color: #edecec;
    color: #ffffff;
    cursor: not-allowed;
  }

  .time-slot-container::-webkit-scrollbar {
    width: 8px;
  }

  .time-slot-container::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }

  .time-slot-container::-webkit-scrollbar-track {
    background: #f9f9f9;
    margin-top: 10px;
  }

  .book-button {
    width: 90%;
    margin: 0px 27px;
    padding: 18px;
    border: none;
    margin-top: 30px;
    font-weight: 500;
    font-family: Outfit;
    border-radius: 43px;
    height: 63.3px;
    overflow: hidden;
    text-align: center;
    font-size: 18px;
    background-color: #252b61;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .book-button:disabled {
    background-color: #252b61;
    color: #ffffff;

    cursor: not-allowed;
  }
  .accordion-module-div {
    padding: 0px 30px 30px 30px;
  }
  .accordion-item {
    border: none;
  }
  .accordion-button:not(.collapsed) {
    background-color: #fff;
  }
  button:focus:not(:focus-visible) {
    box-shadow: none;
  }
  .DropdownButton-module-div {
    padding: 0px 30px 30px 30px;
    button {
      width: 100%;
      text-align: start;
      background-color: rgba(240, 218, 105, 0.3);
      border: none;
      font-size: 17px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #131313;
    }
  }

  .dropdown-menu.show {
    width: 100%;
  }
  .dropdown,
  .dropdown-center,
  .dropend,
  .dropstart,
  .dropup,
  .dropup-center {
    width: 100% !important;
  }
  .no-slots-are-available {
    padding: 30px;
    // text-align: center;
    border-top: 1px solid #e2e2e2;
    p {
      font-size: 18px;
      letter-spacing: 0.02em;
      font-family: Inter;
      color: #000;
      opacity: 0.6;
    }
    button {
      border-radius: 45px;
      border: none;
      /* width: 100%; */
      font-size: 18px;
      color: #252b61;
      font-family: Outfit, sans-serif;
      background: #252b61;
      color: #fff;
      padding: 5px 20px;
    }
  }
  .main-selectedSlot-div {
    padding: 0px 30px 30px 30px;
  }
  .selectedSlot-div {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 21px;
      font-family: Outfit, sans-serif;
      color: #000;
      white-space: pre-wrap;
      margin: 0px;
    }
    button {
      border-radius: 12px;
      background-color: rgba(163, 218, 194, 0.5);
      border: 0.6px solid #252b61;
      box-sizing: border-box;
      width: fit-content;
      height: 43px;
      text-align: center;
      font-size: 16px;
      color: #252b61;
      font-family: Outfit, sans-serif;
      padding: 0px 14px;
      span {
        text-transform: uppercase;
      }
    }
  }
  .book-selectedSlot-div {
    margin-top: 2rem;
    padding: 20px 30px;
    width: 100%;
    border-radius: 6px;
    background-color: rgba(240, 218, 105, 0.3);
  }
  .Slot-Window {
    font-size: 20px;
    letter-spacing: 1.5px;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #252b61;
  }
  .Time-Windows {
    font-size: 26px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }
  .options-show {
    font-size: 18px;
    letter-spacing: 0.02em;
    line-height: 32px;
    font-family: Outfit, sans-serif;
    color: #000;
    img {
      height: 16px;
      margin-right: 10px;
    }
  }
  .btn-Windows {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  .add-more-slot {
    border-radius: 45px;
    border: 1px solid #252b61;
    width: 100%;
    font-size: 18px;
    color: #252b61;
    font-family: Outfit, sans-serif;
  }
  .pay-proceed {
    border-radius: 45px;
    border: none;
    width: 100%;
    font-size: 18px;
    color: #252b61;
    font-family: Outfit, sans-serif;
    background: #252b61;
    color: #fff;
  }
  .selectedSlot-map-data {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 1rem;
  }
  .time-slot-Available-warning {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 18px;
      font-weight: 400;

      padding-bottom: 8px;
      opacity: 0.5;
    }
  }
  .preferred-time-slot-div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  /* Doctor's card CSS --------------------------------------------------------------------------------- */

  .doctor-card {
    width: 100%;
    margin-left: 16.23px;
    margin-top: 35px;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: rgba(191, 219, 255, 0.6);
    padding: 30px 37px;
    font-family: "Arial", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 30.34px;
    margin-bottom: 54px;
  }

  .doctor-profile {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    border-radius: 17px;
    background-color: #fff;
    height: 102px;
    padding: 0px 10px;
  }

  .doctor-image {
    width: 80px;
    height: 80px;
    margin-right: 12px;
  }

  .doctor-info {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .doctor-name {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.8;
    margin: 0;
  }

  .doctor-specialty {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #252b61;
    text-align: left;
    margin-top: 12px;
  }

  .doctor-connect {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 32.33px;
  }

  .connect-info {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    margin-left: 20px;
    font-size: 14px;
    color: #333;
    gap: 20px;

    span {
      line-height: 1.2;
      font-size: 24px;
      color: #252b61;
      text-align: left;
      font-family: Inter;
    }
  }

  .connect-icon {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 16px;
  }

  .chat-button,
  .instant-connect-button {
    flex: 1;
    padding: 18px 30px;
    font-size: 18px;
    font-family: Inter;
    border: none;
    border-radius: 45px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .chat-button {
    background-color: #fff;
    color: #252b61;
  }

  .instant-connect-button {
    background-color: #001f60;
    color: #fff;
  }
  .name-mobile-view {
    display: none;
  }
  .lang-mobile-view {
    display: none;
  }
  @media (max-width: 768px) {
    .virtual-types-list-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      label {
        font-size: 14px;
        font-size: 14px;
        margin-bottom: 0;
        padding: 0;
      }
    }
    .MobileHeader-main-div {
      display: block;
    }
    .selectedSlot-div {
      button {
        font-size: 13px;
      }
    }
    .languages {
      display: none;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
      width: 100%;
    }
    .user-data {
      width: 13rem;
    }
    .user-add-picker p {
      width: 100%;
    }
    .add-more-slot,
    .pay-proceed {
      font-size: 17px;
    }
    .doc-details-div {
      padding: 10px 10px;
      padding-bottom: 0px;
    }
    .cardContainer {
      padding: 10px;
    }
    .profileContainer {
      flex-direction: column;
    }
    .bannerWrapper {
      display: none;
    }
    .left-side {
      width: 100%;
    }
    .title-web-view,
    .info-web-view,
    .experience-web-view,
    .share-btn-icon-web-view,
    .name-web-view {
      display: none;
    }
    .hospital-container {
      padding: 10px;
    }
    .tabs {
      justify-content: space-around;
    }
    .hospital-address {
      width: 20rem;
    }
    .hospital-directions {
      width: 8rem !important;
    }
    .main-container {
      flex-direction: column-reverse;
    }
    .bread-crumb-div {
      margin: 0;
    }
    .toggle-container {
      height: 100%;
      background: #f0f0f5;
      border-radius: 20px;
      padding: 0.7rem;
      width: fit-content;
      margin: auto;
      span.toggle-label.active {
        background: #fff;
        border-radius: 10px;
        padding: 0.5rem;
        border-bottom: 0;
        font-weight: 800;
      }
    }
    .right-side {
      width: 100%;
    }
    .DropdownButton-module-div {
      display: none;
    }
    .profile {
      background: #e3e3e3;
      height: 7rem;
      width: 7rem;
      border-radius: 7rem;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0px;
    }
    .profileImage {
      height: 6rem;
      width: 6rem;
      border-radius: 6rem;
      margin-right: 0px;
    }
    .name-mobile-view {
      display: block;
    }
    .profile {
      display: flex;
    }
    .user-add-picker,
    .time-slot-picker {
      margin-left: 0px;
    }
    .time-slot-picker {
      margin-bottom: 30px;
    }
    .toggle-label {
      display: flex;
      flex-direction: row;
      gap: 10px;
      text-wrap: nowrap;
    }
    .toggle-label.active {
      font-size: 12px;
    }
    .fee {
      margin: 0px 10px;
    }
    .fee h1 {
      font-size: 14px;
    }
    .select-member-div {
      height: 100%;
    }
    .showSelectedMember-div {
      height: 100%;
    }
    .lang-mobile-view {
      display: flex;
    }
    .servicesContainer {
      padding: 10px !important;
    }
    .time-slots-div {
      padding: 10px;
      gap: 10px 10px;
    }
    .servicesList {
      grid-template-columns: repeat(1, 1fr) !important;
    }
    .accordion-module-div {
      padding: 0px;
    }
    .query-icon {
      width: 105.6px;
      margin-top: 1rem;
      height: 105.6px;
    }
    .main-selectedSlot-div {
      padding: 0px;
    }
    .selectedSlot-div,
    .book-selectedSlot-div {
      padding: 5px 10px;
    }
    .selectedSlot-map-data {
      align-items: flex-end;
    }
    .selectedSlot-div p {
      font-size: 17px;
    }
    .Slot-Window {
      font-size: 17px;
    }
    .Time-Windows {
      font-size: 18px;
      margin: 0px;
    }
    .options-show {
      font-size: 14px;
      margin: 0px;
    }
    .btn-Windows {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 480px) {
    .toggle-container {
      /* flex-direction: column; */
      justify-content: center;
      gap: 1rem;
    }
  }
`,Ze="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/1732785725785EMTYDOCTORIMAGE.png-1732785730293.png",ie="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737528180590.png",In=()=>{var ze,Ie,Ce,Ae,_e,Me,Te,Oe,$e,Pe,Be,Ee,Fe,Ve,We;const _=Bt(),u=Et(),{id:S}=Ft(),q=Vt(),{type:se,selectedHospital:z}=q.state||{},[I,$]=o.useState("Info"),[R,P]=o.useState(null),[k,M]=o.useState("VIRTUAL"),[H,ae]=o.useState([]),[r,De]=o.useState(""),[p,et]=o.useState(""),[T,re]=o.useState(""),[gn,hn]=o.useState([]),[tt,le]=o.useState(0),[l,ce]=o.useState({}),[nt,Q]=o.useState(!0),[it,de]=o.useState(!1),[pe,xe]=o.useState(!1),[mn,ot]=o.useState(""),[c,fe]=o.useState({}),[bn,st]=o.useState(!0),{doctorDetailList:y,allDoctorRelatedHospitalList:f,allTimeslotsIList:m}=ne(t=>t.doctor);(Ie=(ze=f==null?void 0:f[0])==null?void 0:ze.vendor)==null||Ie.id;const{user:w}=ne(t=>t.auth),{userAddress:B,userDependents:E,dependentsData:un,dependentsUserData:wn}=ne(t=>t.profile);console.log("allDoctorRelatedHospitalList",f);const n=(Ce=y==null?void 0:y.data)==null?void 0:Ce.doctorDetails,G=((_e=(Ae=y==null?void 0:y.data)==null?void 0:Ae.possibleTypes)==null?void 0:_e.length)>0?(Me=y==null?void 0:y.data)==null?void 0:Me.possibleTypes:[n==null?void 0:n.type];console.log("doctorDetails",n);const[at,Y]=o.useState(!1),ge=()=>Y(!1),rt=()=>Y(!0),[F,lt]=o.useState({}),[ct,K]=o.useState(!1),[dt,V]=o.useState(!1),[pt,he]=o.useState(""),[xt,X]=o.useState(!1),[W,ft]=o.useState({}),[s,me]=o.useState({}),[gt,be]=o.useState(!1),[v,ue]=o.useState("opd");o.useEffect(()=>{w!=null&&w.id&&me(w)},[w]),o.useEffect(()=>{var i;const t=Wt();if(console.log("selectedClinic",c),console.log("selectedVirtualType",v),console.log("formattedDates",t),t.length>0){const a={doctor_id:S,type:v,vendor_id:k==="VIRTUAL"?void 0:((i=c==null?void 0:c.vendor)==null?void 0:i.id)||(c==null?void 0:c.vendor_id),body:{dates:t}};u(Lt(a))}},[v,c,k]),o.useEffect(()=>{yt(),Nt()},[S]),o.useEffect(()=>{f.length>0&&fe(f[0])},[f]);const ht=[{title:"Doctor",link:"/doctor"},{title:"Doctor List",link:"/doctor/doctorlist"},{title:n==null?void 0:n.name}],O=o.useRef(null),mt=()=>{O.current&&O.current.scrollBy({left:-200,behavior:"smooth"})},bt=()=>{O.current&&O.current.scrollBy({left:200,behavior:"smooth"})},ut=t=>{pe?et(`${T}_${t}`):De(`${T}_${t}`),Q(!1)},wt=t=>{P(t)},vt=()=>{P(null)},jt=({rating:t})=>e.jsxs("div",{className:"bannerWrapper",children:[e.jsxs("div",{className:"rectangle",children:[e.jsx(en,{fill:"#252B61",className:"me-2"})," ",t]}),e.jsx("div",{className:"triangle"})]}),yt=async()=>{var a,d;de(!0);const t=await u(qt(S)),i=(d=(a=t==null?void 0:t.payload)==null?void 0:a.data)==null?void 0:d.possibleTypes;(i==null?void 0:i.length)>0&&(ue(i[0]),M(i[0]==="opd"?"IN_CLINIC":"VIRTUAL")),de(!1)},Nt=async()=>{await u(Rt(S))},g=o.useMemo(()=>{let t="";return B==null||B.map(i=>{i!=null&&i.isDefault&&(t=i)}),t},[B]);o.useMemo(()=>{let t="";return z==null||z.map(i=>{i&&(t=i)}),t},[z]);const kt=(t,i)=>{var d;le(t);const a=((d=m[t])==null?void 0:d.timeslots)||[];ce(a),re(i==null?void 0:i.date)},St=async t=>{var i,a,d;try{const h=[],b={virtual_type:v==="opd"?null:v,package_code:void 0,useWallet:!0,doctor_id:n==null?void 0:n.id,vendor_id:k==="VIRTUAL"?void 0:((i=c==null?void 0:c.vendor)==null?void 0:i.id)||(c==null?void 0:c.vendor_id),address_id:g==null?void 0:g.id,user_id:parseInt(s==null?void 0:s.id),collection_1_date:r?r==null?void 0:r.split("_")[0]:null,collection_1_slot:r?r==null?void 0:r.split("_")[1]:null,collection_2_date:p?p==null?void 0:p.split("_")[0]:null,collection_2_slot:p?p==null?void 0:p.split("_")[1]:null,attachment_ids:nn("doctor"),section_key:"doctor"};h.push(b);const N=await u(on({carts:h}));(a=N==null?void 0:N.payload)!=null&&a.success?zt(t):ot(`Error: ${(d=N==null?void 0:N.error)==null?void 0:d.message}`)}catch(h){console.log(h)}},zt=async t=>{await u(sn()),await u(an({})),_.push("/checkout")},we=()=>{w!=null&&w.id?St("booknow"):u(tn(!0))},ve=t=>{lt(t),K(!0)},It=()=>{K(!1),u(Dt()),V(!0);const t=F!=null&&F.id?"Successfully Updated the Address.":"Successfully Added the new Address.";he(t)},Ct=()=>{X(!0),ft({})},At=()=>{X(!1),u(Zt()),V(!0);const t=W!=null&&W.id?"Successfully Updated the Member.":"Successfully Added the new Member.";he(t)},_t=t=>{me(t),Y(!1)},je=window.location.href;o.useEffect(()=>{var t,i;if(m&&m.length>0){const a=new Date,d=b=>b<=9?`0${b}`:b;`${d(a.getFullYear())}${d(a.getMonth()+1)}${d(a.getDate())}`;const h=m.findIndex(b=>b.total_slots>0);if(h!==-1){le(h);const b=((t=m[h])==null?void 0:t.timeslots)||[];ce(b),re((i=m[h])==null?void 0:i.date)}}},[m]);const ye=(t,i)=>{Q(!0),xe(i)},Mt=t=>{fe(t),st(!1)};function U(t){const[i,a,d]=t.split("-");return`${d}-${a}-${i}`}const J=t=>{const{slots:i}=t;return e.jsx(e.Fragment,{children:(i==null?void 0:i.length)>0?e.jsx("div",{className:"time-slots-div",children:i&&Array.isArray(i)&&(i==null?void 0:i.map((a,d)=>e.jsx("button",{className:`slot-button ${a?"":"disabled"} ${H===a?"selected":""}`,onClick:()=>ut(a),children:a},d)))}):e.jsx(e.Fragment,{children:(T==null?void 0:T.length)>0?e.jsx("div",{className:"time-slot-Available-warning",children:e.jsx("p",{children:"No Time Slots Available"})}):e.jsx("div",{className:"time-slot-Available-warning",children:e.jsx("p",{children:"Select Date"})})})})},Ne=t=>String(t).padStart(2,"0"),Z=t=>`${t.getFullYear()}-${Ne(t.getMonth()+1)}-${Ne(t.getDate())}`,ke=new Date,Se=new Date;Se.setDate(ke.getDate()+1);const D=Z(ke),ee=Z(Se),Tt=m==null?void 0:m.reduce((t,i)=>t+i.total_slots,0);return e.jsxs(Je,{children:[e.jsx(Ht,{show:xt,onHide:()=>{X(!1)},addUserSuccess:At,selectedMember:W}),e.jsx(Qt,{show:ct,onHide:()=>{K(!1)},addUserSuccess:It,selectedAddress:F}),e.jsx(Gt,{show:dt,titleText:pt,deleteText:"ok",cancelText:"",onCancel:()=>V(!1),onDelete:()=>V(!1)}),e.jsx(ln,{show:gt,url:je,title:"Share on",handleClose:()=>{be(!1)},onCopyClick:()=>{navigator.clipboard.writeText(je)}}),it?e.jsx(rn,{fromPage:"doctorDetails"}):e.jsxs("div",{className:"doc-details-div",children:[e.jsx("div",{className:"bread-crumb-div",children:e.jsx(Yt,{list:ht})}),e.jsxs("div",{className:"main-container",children:[e.jsxs("div",{className:"left-side",children:[e.jsxs("div",{className:"cardContainer",children:[e.jsx("div",{className:"header",children:e.jsxs("div",{className:"profileContainer",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("div",{className:"profile",children:[e.jsx(jt,{rating:Math.round(n==null?void 0:n.rating)}),e.jsx("img",{src:(n==null?void 0:n.image)||Ze,alt:"Doctor Profile",className:"profileImage doctor-main-image-sec"}),e.jsxs("div",{className:"exp experience-web-view",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735651541375.png",alt:""}),e.jsxs("span",{className:"experience ",children:[n==null?void 0:n.work_experience_years,"+ Years Experience"]})]})]}),e.jsxs("div",{className:"name-mobile-view ms-2",children:[e.jsx("h2",{className:"name ",children:n==null?void 0:n.name}),e.jsx("p",{className:"title ",children:n==null?void 0:n.specialization})]})]}),e.jsxs("div",{className:"info",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center ",children:[e.jsx("h2",{className:"name name-web-view",children:n==null?void 0:n.name}),e.jsx("button",{onClick:()=>{be(!0)},className:"btn share-btn-icon share-btn-icon-web-view",title:"Click to Share",children:e.jsx(cn,{})})]}),e.jsx("p",{className:"title title-web-view",children:n==null?void 0:n.specialization}),(n==null?void 0:n.highest_education)&&e.jsxs("div",{className:"qua",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735889830917.png",alt:""}),e.jsx("p",{className:"qualifications",children:n==null?void 0:n.highest_education})]}),(n==null?void 0:n.work_experience_years)&&e.jsxs("div",{className:"lang lang-mobile-view",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735651541375.png",alt:""}),e.jsxs("p",{className:"languages",children:[n==null?void 0:n.work_experience_years,"+ Years Experience"]})]}),(n==null?void 0:n.languages)&&e.jsxs("div",{className:"lang",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735652815819.png",alt:""}),e.jsx("p",{className:"languages",children:n==null?void 0:n.languages})]}),e.jsxs("div",{className:"veri",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735894581102.png",alt:""}),e.jsx("p",{className:"verification",children:"Medical Registration Verified"})]})]})]})}),e.jsxs("div",{className:"servicesContainer",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Specialization"}),e.jsx("div",{className:"serviceListDiv",children:e.jsx("ul",{className:"servicesList",children:e.jsx("li",{children:n==null?void 0:n.specialization})})})]}),(n==null?void 0:n.bio)&&e.jsxs("div",{children:[e.jsx("h3",{children:"Bio :-"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:n==null?void 0:n.bio}})]})]})]}),e.jsxs("div",{className:"hospital-container",children:[e.jsxs("div",{className:"tabs",children:[e.jsx("button",{className:`tab ${I==="Info"?"active":""}`,onClick:()=>$("Info"),children:"Info"}),e.jsx("button",{className:`tab ${I==="Consult Q&A"?"active":""}`,onClick:()=>$("Consult Q&A"),children:"Consult Q&A"})]}),I==="Info"&&e.jsx("div",{className:"hospital-list",children:Array.isArray(f)&&(f==null?void 0:f.length)>0?f==null?void 0:f.map((t,i)=>{var a,d,h,b,te,N,Le,qe,Re,He,Qe,Ge,Ye;return e.jsxs("div",{className:"hospital-card",children:[e.jsx("div",{className:"hospital-header",children:e.jsx("h2",{className:"hospital-name",children:(a=t==null?void 0:t.vendor)==null?void 0:a.name})}),e.jsxs("div",{className:"down-part",children:[e.jsxs("div",{className:"left-hospital-side",children:[e.jsxs("div",{className:"hospital-rating",children:[e.jsx("span",{children:(d=t==null?void 0:t.vendor)==null?void 0:d.rating}),e.jsxs("span",{className:"stars",children:["★".repeat(((h=t==null?void 0:t.vendor)==null?void 0:h.rating)||0),"☆".repeat(5-(((b=t==null?void 0:t.vendor)==null?void 0:b.rating)||0))]})]}),e.jsx("p",{className:"hospital-address",children:(te=t==null?void 0:t.vendor)==null?void 0:te.address}),e.jsx("p",{className:"hospital-details",children:(N=t==null?void 0:t.vendor)==null?void 0:N.details}),e.jsxs("a",{href:"#",className:"hospital-directions",children:[e.jsx("span",{children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1736000077017.png",alt:""})})," ","Get Directions"]})]}),e.jsx("div",{className:"middle",children:e.jsxs("div",{className:"hospital-timings",children:[e.jsx("p",{children:(Le=t==null?void 0:t.vendor)==null?void 0:Le.days}),e.jsx("p",{children:(qe=t==null?void 0:t.vendor)==null?void 0:qe.timings})]})}),e.jsx("div",{className:"hospital-footer",children:e.jsxs("div",{className:"hospital-fee",children:[e.jsx("span",{children:(Re=t==null?void 0:t.vendor)==null?void 0:Re.fee}),e.jsxs("div",{className:"info-icon",onMouseEnter:()=>{var L;return wt((L=t==null?void 0:t.vendor)==null?void 0:L.id)},onMouseLeave:vt,children:["i",R===((He=t==null?void 0:t.vendor)==null?void 0:He.id)&&e.jsxs("div",{className:"detailTooltip",children:[e.jsx("strong",{children:"This fee is indicative and might vary."}),e.jsx("br",{}),e.jsx("span",{children:"NOTE: Fees are payable at the clinic. There are NO charges for booking an appointment."})]})]})]})})]}),e.jsxs("div",{className:"footer-part",children:[e.jsx("div",{className:"hospital-images",children:((Qe=t==null?void 0:t.vendor)==null?void 0:Qe.images)&&((Ye=(Ge=t==null?void 0:t.vendor)==null?void 0:Ge.images)==null?void 0:Ye.map((L,Ke)=>e.jsx("img",{src:L,alt:`Hospital ${i+1} - ${Ke+1}`,className:"hospital-image"},Ke)))}),e.jsx("div",{children:e.jsx("button",{className:"call-now-button mb-2",children:"Call Now"})})]})]},i)}):e.jsx("div",{className:"vendors-warning-msg",children:e.jsx("p",{children:"No vendors available"})})}),I==="Consult Q&A"&&e.jsxs("div",{className:"free-question-card",children:[e.jsx("div",{className:"icon-section",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735999749446.png",alt:"Query Icon",className:"query-icon"})}),e.jsxs("p",{className:"info-text",children:["No query answered by this doctor. Get ",e.jsx("br",{}),"answers ",e.jsx("br",{}),"to your health queries now"]}),e.jsx("button",{className:"ask-button",onClick:()=>_.push("/chat"),children:"Ask Free Question"})]})]})]}),e.jsxs("div",{className:"right-side",children:[e.jsxs("div",{className:"user-add-picker",children:[e.jsx("img",{src:(s==null?void 0:s.image)||ie,alt:"user_Image"}),e.jsxs("div",{className:"user-data",children:[(s==null?void 0:s.relation)&&(s==null?void 0:s.first_name)&&e.jsxs(e.Fragment,{children:[s==null?void 0:s.first_name," ",s==null?void 0:s.last_name," (",s==null?void 0:s.relation,")"]}),(g==null?void 0:g.address)&&e.jsx("p",{children:e.jsxs("span",{children:[" ",g==null?void 0:g.address]})})]}),w!=null&&w.id?e.jsx("button",{className:"btn",onClick:rt,children:"Change"}):e.jsx("button",{className:"btn",onClick:we,children:"Login"})]}),e.jsxs("div",{className:"time-slot-picker",children:[e.jsx("h2",{className:"title-slot",children:"Pick a Time Slot"}),e.jsxs("div",{className:"toggle-container",children:[e.jsxs("span",{className:`toggle-label ${k=="VIRTUAL"?"active":""} ${(n==null?void 0:n.type)==="both"||(n==null?void 0:n.type)==="virtual"?"":"disabledTrue"}`,onClick:()=>{((n==null?void 0:n.type)==="both"||(n==null?void 0:n.type)==="virtual")&&M("VIRTUAL")},children:[e.jsx("img",{src:dn}),"Virtual Consult"]}),e.jsxs("span",{className:`toggle-label ${k=="VIRTUAL"?"":"active"} ${(n==null?void 0:n.type)==="both"||(n==null?void 0:n.type)==="opd"?"":"disabledTrue"}`,onClick:()=>{((n==null?void 0:n.type)==="both"||(n==null?void 0:n.type)==="opd")&&M("IN_CLINIC")},children:[e.jsx("img",{src:pn}),"Clinic Consult"]})]}),k==="VIRTUAL"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"virtual-types-list-all",children:G==null?void 0:G.map((t,i)=>(console.log("itemtype",t),e.jsx(e.Fragment,{children:t!=="call"&&e.jsxs("div",{className:"virtual-types-list-row",children:[e.jsx("input",{type:"radio",checked:v===t,onChange:()=>ue(t),id:`virtual-types-list${i}`,name:"virtual-types-list-row-list-radio",value:t}),e.jsxs("label",{htmlFor:`virtual-types-list${i}`,children:[t," ",t==="video"?"call":t==="instant"?"90 Sec":""]})]})})))}),e.jsxs("div",{className:"fee",children:[e.jsx("h1",{children:"Virtual Appointment Fee:"}),e.jsxs("h2",{children:["₹"," ",v==="call"?n==null?void 0:n.call_consultation_cost:v==="chat"?n==null?void 0:n.chat_consultation_cost:v==="video"?n==null?void 0:n.virtual_consultation_cost:v==="instant"?n==null?void 0:n.instant_consultation_cost:(n==null?void 0:n.virtual_consultation_cost)||0]})]}),e.jsx("br",{})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"fee",children:[e.jsx("h1",{children:"Clinic Appointment Fee: "}),e.jsxs("h2",{children:[" ₹ ",(c==null?void 0:c.consultation_cost)||0]})]}),e.jsxs("div",{className:"fee mt-4",children:[e.jsxs("div",{className:"clinic-details-sec-all-sa",children:[e.jsxs("p",{className:"clinicc-name",children:[(Te=c==null?void 0:c.vendor)==null?void 0:Te.name,"   ",e.jsxs("span",{children:[(Oe=c==null?void 0:c.vendor)==null?void 0:Oe.rating," ",e.jsx("span",{className:"stars",children:"★"})]})]}),e.jsx("p",{className:"clinicc-address",children:($e=c==null?void 0:c.vendor)==null?void 0:$e.address})]}),e.jsx("p",{})]}),(f==null?void 0:f.length)>1&&e.jsx("div",{className:"popover-div ",children:e.jsx("div",{className:"mb-4",children:e.jsxs(A,{children:[e.jsx(A.Toggle,{variant:"success",id:"dropdown-basic",children:"Change Clinic"}),f==null?void 0:f.map(t=>{var i,a,d,h;return e.jsx(A.Menu,{children:e.jsx(A.Item,{children:e.jsxs("div",{onClick:()=>Mt(t),className:"Change-clinic-div",children:[e.jsxs("div",{className:"Change-clinic-title",children:[e.jsx("p",{className:"Change-clinic-name",children:(i=t==null?void 0:t.vendor)==null?void 0:i.name}),e.jsxs("p",{className:"Change-clinic-price",children:["₹",(a=t==null?void 0:t.vendor)==null?void 0:a.id]})]}),e.jsxs("div",{className:"Change-clinic-addr",children:[e.jsxs("p",{children:[(d=t==null?void 0:t.vendor)==null?void 0:d.rating,e.jsx("span",{className:"stars ms-2",children:"★"})]}),e.jsx("p",{children:(h=t==null?void 0:t.vendor)==null?void 0:h.address})]})]})})})})]})})})]}),Tt>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"DropdownButton-module-div",children:e.jsx(oe,{id:"dropdown-basic-button",title:e.jsxs("span",{children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737374782298.png",alt:"icon",className:"me-3"}),"Select your Preferred Hour for Consultation"]}),children:e.jsxs(A.Item,{children:["Doctors' schedules are dynamic. ",e.jsx("br",{})," Help us by sharing a one-hour window that works for you. ",e.jsx("br",{})," ","We'll find the best matching slot and confirm back."]})})}),nt?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"day-selector-container",children:[e.jsx("button",{className:"arrow-button left",onClick:mt,children:e.jsx(Kt,{})}),e.jsx("div",{className:"day-selector",ref:O,children:Array.isArray(m)&&(m==null?void 0:m.map((t,i)=>{const a=new Date(t==null?void 0:t.date),d=Z(a),h=(t==null?void 0:t.date)===D?"Today":(t==null?void 0:t.date)===ee?"Tomorrow":U(d);return e.jsx(e.Fragment,{children:(t==null?void 0:t.total_slots)>0&&e.jsxs("button",{className:`day-button ${tt===i?"selected":""} `,onClick:()=>kt(i,t),children:[e.jsx("div",{className:"day-text",children:h}),e.jsxs("div",{className:"slot-count",children:[t==null?void 0:t.total_slots," Slots"]})]},i)})}))}),e.jsx("button",{className:"arrow-button right",onClick:bt,children:e.jsx(Xt,{})})]}),e.jsx("div",{className:"accordion-module-div mt-2",children:e.jsxs(j,{defaultActiveKey:["0","1"],children:[((Pe=l==null?void 0:l.morning)==null?void 0:Pe.length)>0?e.jsxs(j.Item,{eventKey:"0",children:[e.jsxs(j.Header,{children:["Morning"," ",`(${(Be=l==null?void 0:l.morning)==null?void 0:Be.length})`]}),e.jsx(j.Body,{children:e.jsx(J,{slots:l==null?void 0:l.morning})})]}):"",((Ee=l==null?void 0:l.afternoon)==null?void 0:Ee.length)>0?e.jsxs(j.Item,{eventKey:"1",children:[e.jsxs(j.Header,{children:["Afternoon"," ",`(${(Fe=l==null?void 0:l.afternoon)==null?void 0:Fe.length})`]}),e.jsx(j.Body,{children:e.jsx(J,{slots:l==null?void 0:l.afternoon})})]}):"",((Ve=l==null?void 0:l.evening)==null?void 0:Ve.length)>0?e.jsxs(j.Item,{eventKey:"2",children:[e.jsxs(j.Header,{children:["Evening"," ",`(${(We=l==null?void 0:l.evening)==null?void 0:We.length})`]}),e.jsx(j.Body,{children:e.jsx(J,{slots:l==null?void 0:l.evening})})]}):""]})})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"main-selectedSlot-div",children:[e.jsxs("div",{className:"selectedSlot-div",children:[e.jsxs("div",{className:"preferred-time-slot-div",children:[e.jsx("p",{children:"Preferred Time 1"}),p&&e.jsx("p",{children:"Preferred Time 2"})]}),e.jsxs("div",{className:"selectedSlot-map-data",children:[e.jsxs("button",{onClick:()=>ye(r,!1),children:[(r==null?void 0:r.split("_")[0])===D?"Today":(r==null?void 0:r.split("_")[0])===ee?"Tomorrow":`${U(r==null?void 0:r.split("_")[0])}`," ",e.jsxs("span",{children:[" ",`${r==null?void 0:r.split("_")[1]}`]}),e.jsx(Xe,{className:"ms-3"})]}),p&&e.jsxs("button",{onClick:()=>ye(p,!0),children:[(p==null?void 0:p.split("_")[0])===D?"Today":(p==null?void 0:p.split("_")[0])===ee?"Tomorrow":`${U(p==null?void 0:p.split("_")[0])}`," ",e.jsxs("span",{children:[" ",`${p==null?void 0:p.split("_")[1]}`]}),e.jsx(Xe,{className:"ms-3"})]})]})]}),e.jsxs("div",{className:"book-selectedSlot-div",children:[e.jsx("p",{className:"Slot-Window",children:"Choose Your Backup Slot Window"}),e.jsx("p",{className:"Time-Windows",children:"Why Two Time Windows?"}),e.jsxs("p",{className:"options-show",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737376276059.png",alt:""}),"Increases chances of finding a suitable slot"," "]}),e.jsxs("p",{className:"options-show",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737376276059.png",alt:""}),"Provides flexibility for both patient & doctor"," "]}),e.jsxs("p",{className:"options-show",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737376276059.png",alt:""}),"Reduces scheduling"," "]}),e.jsxs("div",{className:"btn-Windows",children:[!pe&&e.jsx("button",{onClick:()=>{Q(!0),xe(!0)},className:"btn add-more-slot",children:"Add Second Slot"}),e.jsx("button",{className:"btn pay-proceed",onClick:we,disabled:!r||r.length===0,title:!r||r.length===0?"Select a time slot":"",children:"Proceed to pay"})]})]})]})})]}):e.jsxs("div",{className:"no-slots-are-available",children:[e.jsx("p",{children:"No slots are available now. Please check with similar doctors"}),e.jsx("button",{onClick:()=>{_.push("/doctor/doctorlist")},children:"View similar doctors"})]})]}),(n==null?void 0:n.available_in_90)&&e.jsxs("div",{className:"doctor-card",children:[e.jsxs("div",{className:"doctor-profile",children:[e.jsx("img",{src:(n==null?void 0:n.image)||Ze,alt:"Doctor",className:"doctor-image"}),e.jsxs("div",{className:"doctor-info",children:[e.jsx("h4",{className:"doctor-name",children:n==null?void 0:n.name}),e.jsx("p",{className:"doctor-specialty",children:n==null?void 0:n.specialization})]})]}),e.jsxs("div",{className:"doctor-connect",children:[e.jsxs("div",{className:"connect-info",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735996347890.png",alt:"Lightning",className:"connect-icon"}),e.jsxs("span",{children:["Connect With Doctor ",e.jsx("br",{})," in ",e.jsx("b",{children:"90 seconds"})]})]}),e.jsxs("div",{className:"action-buttons",children:[e.jsx("button",{className:"chat-button",children:"Chat"}),e.jsx("button",{className:"instant-connect-button",children:"Instant Connect"})]})]})]})]})]})]}),e.jsx(Ut,{show:at,onHide:ge,backdrop:"static",keyboard:!1,children:e.jsxs(Je,{children:[e.jsxs("div",{className:"showSelectedMember-main-div",children:[e.jsx("p",{children:"Who Is this booking for ?"}),e.jsx("button",{className:"btn",onClick:ge,children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737529487635.png",alt:"user_img"})})]}),e.jsxs("div",{className:"showSelectedMember-div",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[e.jsx("p",{className:"showSelectedMember-title",children:"Selected Member"}),e.jsxs("button",{className:"btn showSelectedMember-btn",onClick:Ct,children:[e.jsx(Jt,{className:"me-2"})," Add Member"]})]}),e.jsxs("div",{className:"selected-member-div",children:[e.jsxs("div",{className:"selected-member-detail",children:[e.jsx("img",{src:(s==null?void 0:s.image)||ie,alt:""}),e.jsxs("div",{className:"d-flex",children:[e.jsxs("div",{className:"user-div",children:[e.jsxs("p",{className:"user-name",children:[s==null?void 0:s.first_name," ",s==null?void 0:s.last_name," (",s==null?void 0:s.relation,") ",e.jsx("br",{})]}),e.jsxs("p",{className:"user-add",children:[" ",g==null?void 0:g.address]})]}),e.jsx("div",{children:e.jsx("button",{className:"btn",onClick:()=>{ve(g)},children:e.jsx(Ue,{})})})]})]}),e.jsx("div",{className:"selected-member-edit"})]}),e.jsx("p",{className:"showSelectedMember-title mt-3",children:"Saved members"}),e.jsx("div",{className:"select-member-main-div",children:Array.isArray(E)&&(E==null?void 0:E.map(t=>e.jsxs("div",{className:"select-member-div",children:[e.jsx("img",{src:(t==null?void 0:t.image)||ie,alt:""}),e.jsxs("div",{className:"d-flex",children:[e.jsxs("div",{className:"user-div",onClick:()=>_t(t),children:[e.jsxs("p",{className:"user-name",children:[t==null?void 0:t.first_name," ",t==null?void 0:t.last_name," (",t==null?void 0:t.relation,") ",e.jsx("br",{})]}),e.jsxs("p",{className:"user-add",children:[" ",g==null?void 0:g.address]})]}),e.jsx("div",{children:e.jsx("button",{className:"btn",onClick:()=>{ve(g)},children:e.jsx(Ue,{})})})]})]})))})]})]})})]})};export{In as default};
