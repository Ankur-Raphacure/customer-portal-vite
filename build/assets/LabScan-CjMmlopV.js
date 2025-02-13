import{d as l,j as e,r as o,u as c,b as p,a as f,go as j,gp as b}from"./index-f4owDEOR.js";import{H as x}from"./Article-1-BqIxkfKp.js";const u=l.div`
  .main-card {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* display: grid; */
    gap: 26px;
    margin-top: 24px;
    padding: 0 1.5rem;
  }
  .Container-1 {
    display: flex;
    align-items: center;
  }
  .container-2 {
    /* width: 50rem; */
    height: auto;
  }
  .filter-card {
    width: 20rem;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .input-group {
    width: 35rem;
    margin: auto;
  }
  ul.pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li.page-item {
    margin: 0 5px;
  }

  a.page-link {
    text-decoration: none;
    color: #007bff;
    cursor: pointer;
    border: none;
  }

  a.page-link:hover {
    text-decoration: underline;
  }

  li.page-item.disabled a.page-link {
    color: #6c757d;
    pointer-events: none;
  }

  li.page-item.active a.page-link {
    font-weight: bold;
    text-decoration: underline;
  }
  .PaginationWrapper {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`,w=l.div`
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

  .flex-col {
    flex-direction: column;
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

  .opacity-60 {
    opacity: 0.6;
  }

  .opacity-70 {
    opacity: 0.7;
  }

  .opacity-80 {
    opacity: 0.8;
  }

  .opactiy-95 {
    opacity: 0.95;
  }

  .text-violet {
    color: #00c9aa;
  }

  .hospital_item {
    background: #ffffff;
    border-radius: 0.625rem;
    gap: 2rem;
    padding: 0.5rem;

    @media only screen and (min-width: 1025px) {
      padding: 1rem;
    }

    .hospital_img {
      display: none;

      @media only screen and (min-width: 1025px) {
        display: block;
      }

      img {
        width: 18.563rem;
        height: 10.688rem;
        opacity: 0.9;
        border-radius: 0.625rem;
      }
    }

    .hospital_datalist {
      gap: 1.063rem;

      .hospital_data {
        gap: 0.5rem;
      }

      .hospital_address {
        gap: 0.313rem;
        .address_icon {
          display: inline-flex;
          width: 0.625rem;
          height: 0.938rem;
        }
      }

      .hospital_ratingbox {
        gap: 0.688rem;

        .hosptial_rating {
          gap: 0.5rem;
        }

        .star_icon {
          position: relative;
          height: 0.875rem;
          display: inline-flex;
        }

        .stroke_icon {
          width: 0.125rem;
          height: 1.188rem;
          display: inline-flex;
        }
      }

      .hospital_opentime {
        gap: 0.688rem;
      }

      .hospital_helpbox {
        gap: 0.625rem;

        .hospital_helpdata {
          gap: 0.813rem;

          .hospital_helpitem {
            padding-left: 0.25rem;
            padding-right: 0.625rem;
            padding-top: 0.188rem;
            padding-bottom: 0.063rem;
            background: #dbecfb;
            gap: 0.625rem;

            .hospital_itemdata {
              gap: 0.25rem;

              .hospital_helpimg {
                width: 0.813rem;
                height: 0.813rem;
                position: relative;
              }
            }
          }

          .hospital_share {
            gap: 0.438rem;

            .share_icon {
              width: 1.125rem;
              height: 0.938rem;
              display: inline-flex;
            }
          }
        }

        .hospital_map {
          gap: 0.313rem;
          .map_icon {
            width: 1.063rem;
            height: 0.938rem;
            display: inline-flex;
          }
        }
      }
    }
  }
`,v=i=>{var s;return e.jsx(w,{children:e.jsxs("div",{className:"hospital_item flex_center round-shadow W-100 opactiy-70",children:[e.jsx("div",{className:"hospital_img",children:e.jsx("img",{src:x,alt:""})}),e.jsxs("div",{className:"hospital_datalist flex-col inlineflex_start",children:[e.jsxs("div",{className:"hospital_data flex-col flex_start",children:[e.jsx("div",{className:"opactiy-95 text-lg poppins-medium",children:"Bioline"}),e.jsx("p",{children:"Lucid Diagnostics, Lucid Diagnostic Center "}),e.jsxs("div",{className:"inlineflex_center hospital_address",children:[e.jsx("div",{className:"address_icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"15",viewBox:"0 0 10 15",fill:"none",children:e.jsx("path",{opacity:"0.6",d:"M5 7.15C4.5264 7.15 4.0722 6.96563 3.73731 6.63744C3.40242 6.30925 3.21429 5.86413 3.21429 5.4C3.21429 4.93587 3.40242 4.49075 3.73731 4.16256C4.0722 3.83437 4.5264 3.65 5 3.65C5.4736 3.65 5.9278 3.83437 6.26269 4.16256C6.59758 4.49075 6.78571 4.93587 6.78571 5.4C6.78571 5.62981 6.73953 5.85738 6.64979 6.0697C6.56004 6.28202 6.42851 6.47493 6.26269 6.63744C6.09687 6.79994 5.90002 6.92884 5.68336 7.01679C5.46671 7.10473 5.2345 7.15 5 7.15ZM5 0.5C3.67392 0.5 2.40215 1.01625 1.46447 1.93518C0.526784 2.8541 0 4.10044 0 5.4C0 9.075 5 14.5 5 14.5C5 14.5 10 9.075 10 5.4C10 4.10044 9.47322 2.8541 8.53553 1.93518C7.59785 1.01625 6.32608 0.5 5 0.5Z",fill:"#444444"})})}),e.jsx("div",{className:"opacity-60 text-sm poppins-medium",children:"Hsr Layout 1st main road[1km Away]"})]}),e.jsxs("div",{className:"hospital_ratingbox inlineflex_center",children:[e.jsxs("div",{className:"hosptial_rating flex_center",children:[e.jsx("div",{className:"star_icon",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"91",height:"15",viewBox:"0 0 91 15",fill:"none",children:[e.jsx("path",{d:"M2.86875 14.5L4.0875 9.32368L0 5.84211L5.4 5.38158L7.5 0.5L9.6 5.38158L15 5.84211L10.9125 9.32368L12.1312 14.5L7.5 11.7553L2.86875 14.5Z",fill:"#FBBC04"}),e.jsx("path",{d:"M21.8687 14.5L23.0875 9.32368L19 5.84211L24.4 5.38158L26.5 0.5L28.6 5.38158L34 5.84211L29.9125 9.32368L31.1312 14.5L26.5 11.7553L21.8687 14.5Z",fill:"#FBBC04"}),e.jsx("path",{d:"M40.8687 14.5L42.0875 9.32368L38 5.84211L43.4 5.38158L45.5 0.5L47.6 5.38158L53 5.84211L48.9125 9.32368L50.1312 14.5L45.5 11.7553L40.8687 14.5Z",fill:"#FBBC04"}),e.jsx("path",{d:"M59.8687 14.5L61.0875 9.32368L57 5.84211L62.4 5.38158L64.5 0.5L66.6 5.38158L72 5.84211L67.9125 9.32368L69.1312 14.5L64.5 11.7553L59.8687 14.5Z",fill:"#FBBC04"}),e.jsx("path",{opacity:"0.5",d:"M78.8687 14.5L80.0875 9.32368L76 5.84211L81.4 5.38158L83.5 0.5L85.6 5.38158L91 5.84211L86.9125 9.32368L88.1312 14.5L83.5 11.7553L78.8687 14.5Z",fill:"#FBBC04"})]})}),e.jsx("div",{className:"stroke_icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2",height:"19",viewBox:"0 0 2 19",fill:"none",children:e.jsx("path",{opacity:"0.1",d:"M1 0.75V18.25",stroke:"black"})})})]}),e.jsxs("div",{className:"opacity-70 text-sm poppins-regular",children:[(s=i.hospital)==null?void 0:s.rating," Ratings"]})]}),e.jsxs("div",{className:"inlineflex_center hospital_opentime gap-[11px]",children:[e.jsxs("div",{className:"opacity-70 text-sm text-violet poppins-medium",children:["Open now"," "]}),e.jsx("div",{className:"opacity-70 text-sm poppins-medium",children:"7.00 AM To 9.00 PM"})]})]}),e.jsxs("div",{className:"inlineflex_center hospital_helpbox",children:[e.jsxs("div",{className:"flex_center hospital_helpdata",children:[e.jsx("div",{className:"inlineflex_start hospital_helpitem",children:e.jsxs("div",{className:"hospital_itemdata inlineflex_center",children:[e.jsx("div",{className:"hospital_helpimg inlineflex_start flex-col",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[e.jsxs("g",{clipPath:"url(#clip0_700_1487)",children:[e.jsx("path",{d:"M0.277402 6.422C0.277098 7.51425 0.564723 8.58075 1.11164 9.52078L0.225098 12.7326L3.53766 11.8708C4.45387 12.3657 5.48042 12.625 6.5236 12.6251H6.52634C9.97007 12.6251 12.7733 9.84452 12.7748 6.42688C12.7755 4.7708 12.1261 3.21352 10.9462 2.0419C9.76659 0.870392 8.1977 0.224877 6.52609 0.224121C3.08195 0.224121 0.278875 3.00451 0.277453 6.422",fill:"url(#paint0_linear_700_1487)"}),e.jsx("path",{d:"M0.0543359 6.42019C0.0539805 7.55174 0.351914 8.65639 0.918328 9.63008L0 12.957L3.43134 12.0643C4.37679 12.5758 5.44126 12.8455 6.52443 12.8459H6.52722C10.0945 12.8459 12.9985 9.96531 13 6.42533C13.0006 4.70973 12.3279 3.09647 11.1059 1.88288C9.88371 0.66945 8.25871 0.000705426 6.52722 0C2.95933 0 0.0557578 2.88016 0.0543359 6.42019ZM2.09782 9.46239L1.9697 9.26059C1.43112 8.41085 1.14684 7.4289 1.14725 6.42059C1.14837 3.47821 3.5617 1.08434 6.52925 1.08434C7.96636 1.08495 9.31694 1.64082 10.3328 2.64938C11.3485 3.65804 11.9075 4.99885 11.9071 6.42492C11.9058 9.36731 9.49244 11.7615 6.52722 11.7615H6.52509C5.55958 11.761 4.61266 11.5037 3.78686 11.0175L3.59034 10.9019L1.55411 11.4316L2.09782 9.46239Z",fill:"url(#paint1_linear_700_1487)"}),e.jsx("path",{d:"M4.90943 3.7361C4.78827 3.46889 4.66076 3.4635 4.54553 3.45881C4.45118 3.45478 4.34332 3.45508 4.23556 3.45508C4.1277 3.45508 3.95246 3.49534 3.80433 3.65583C3.65605 3.81646 3.23822 4.20465 3.23822 4.99417C3.23822 5.78375 3.81779 6.54677 3.89858 6.65394C3.97947 6.76091 5.01744 8.43297 6.66133 9.07622C8.02755 9.61079 8.30558 9.50447 8.60209 9.47766C8.89865 9.45095 9.55901 9.08958 9.69374 8.71484C9.82856 8.34016 9.82856 8.01899 9.78814 7.95187C9.74772 7.88501 9.63986 7.84485 9.47812 7.76463C9.31633 7.68437 8.5212 7.29613 8.37297 7.24257C8.22468 7.18906 8.11688 7.16235 8.00902 7.32304C7.90116 7.48347 7.59144 7.84485 7.49704 7.95187C7.40274 8.05915 7.30834 8.0725 7.14665 7.99223C6.98481 7.91172 6.46395 7.74246 5.84599 7.19581C5.36519 6.77044 5.0406 6.24515 4.94625 6.08446C4.8519 5.92403 4.93614 5.83706 5.01724 5.75709C5.08991 5.68519 5.17903 5.5697 5.25997 5.47603C5.34061 5.38231 5.36753 5.31544 5.42146 5.20842C5.47544 5.1013 5.44842 5.00758 5.40805 4.92731C5.36753 4.84704 5.05324 4.05339 4.90943 3.7361Z",fill:"white"})]}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"paint0_linear_700_1487",x1:"627.711",y1:"1251.07",x2:"627.711",y2:"0.224121",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#1FAF38"}),e.jsx("stop",{offset:"1",stopColor:"#60D669"})]}),e.jsxs("linearGradient",{id:"paint1_linear_700_1487",x1:"650",y1:"1295.7",x2:"650",y2:"0",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#F9F9F9"}),e.jsx("stop",{offset:"1",stopColor:"white"})]}),e.jsx("clipPath",{id:"clip0_700_1487",children:e.jsx("rect",{width:"13",height:"13",fill:"white"})})]})]})}),e.jsx("div",{className:"opacity-80 text-sm poppins-medium",children:"Need Help?"})]})}),e.jsxs("div",{className:"opacity-60 hospital_share flex_center flex",children:[e.jsx("div",{className:"share_icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"15",viewBox:"0 0 18 15",fill:"none",children:e.jsx("path",{d:"M18 7L11 0V4C4 5 1 10 0 15C2.5 11.5 6 9.9 11 9.9V14L18 7Z",fill:"#444444"})})}),e.jsx("div",{className:"text-black text-sm poppins-medium",children:"Share "})]})]}),e.jsxs("div",{className:"flex_center hospital_map",children:[e.jsx("div",{className:"map_icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"15",viewBox:"0 0 17 15",fill:"none",children:e.jsx("path",{opacity:"0.7",d:"M10.45 9.45H13.05L15 14H2L3.95 9.45H6.55M9.15 4.9C9.15 5.07239 9.08152 5.23772 8.95962 5.35962C8.83772 5.48152 8.67239 5.55 8.5 5.55C8.32761 5.55 8.16228 5.48152 8.04038 5.35962C7.91848 5.23772 7.85 5.07239 7.85 4.9C7.85 4.72761 7.91848 4.56228 8.04038 4.44038C8.16228 4.31848 8.32761 4.25 8.5 4.25C8.67239 4.25 8.83772 4.31848 8.95962 4.44038C9.08152 4.56228 9.15 4.72761 9.15 4.9ZM4.6 4.9C4.6 8.15 8.5 11.4 8.5 11.4C8.5 11.4 12.4 8.15 12.4 4.9C12.4 2.67895 10.6541 1 8.5 1C6.3459 1 4.6 2.67895 4.6 4.9Z",stroke:"#444444",strokeWidth:"2"})})}),e.jsx("div",{className:"opacity-70 text-sm poppins-medium",children:"View In Map"})]})]})]})]})})},C=l.div`
  width: 100%;
  font-style: normal;

  .container-max {
    max-width: 96rem;
    margin: 0 auto;
    padding: 0;
  }

  .filter_container {
    width: 100%;
    display: block;
    min-height: 100vh;
  }

  .content_container {
    width: 100%;
    padding-top: 1.563rem;

    .content_tabNav {
      width: 100%;
      display: inline-flex;
      background: #ffffff;
      border-top-left-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
      height: 3.313rem;
      box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
    }

    .content_tabNav_item {
      appearance: none;
      background: #ffffff;
      width: 100%;
      font-size: 1rem;
      font-weight: 600;
      color: #000000;
      opacity: 0.7;
      padding-top: 0.938rem;
      padding-bottom: 0.875rem;
      height: 3.313rem;
      white-space: nowrap;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 0.313rem solid #ffffff;

      :focus {
        outline: none;
      }
    }

    .content_tabNav_item.selected {
      border-bottom-color: #9747ff;
    }

    .cards_container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.5rem 0;
    }

    .card_row {
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .virutual_doctors_list,
    .hospitals_list {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      padding: 1.5rem 0;
    }
  }

  .right_container {
    width: 26.72%;
    margin-right: 1.75rem;
  }
`,y=l.div`
  .sec-near-you {
    margin-left: 0px !important;
    padding-left: 0px !important;
  }

  .slot {
    background-image: url(/assets/images/labtests/slotbg.png);
    background: #f03e7f;
    width: 50%;
    float: right;

    font-size: 10px;
    color: #ffff;
    font-weight: 100px;
    text-align: center;
    opacity: 100%;
  }

  .text-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .btn-view-text {
    color: #9747ff;
    text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid #9747ff;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 46px;
    margin-top: 16px;
  }
  .heading-name-rating {
    // height: 24px;
    margin-top: 10px !important;
  }

  .imgspace {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: url(<path-to-image>) cover no-repeat;
    img {
      width: 100%;
    }
  }
  .svg-info-icon {
    margin-top: -4px;
    margin-left: 5px;
  }
  .cardstyle {
    width: 100%;
    height: auto;
    flex-shrink: 0;

    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }

  .rating {
    // color: #000;
    /* font-family: Poppins; */
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .locatio-name-sec-row {
    color: #000;
    /* font-family: Poppins; */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
    margin-bottom: 7px;
  }
  .locatio-name-sec-row img,
  .locatio-name-sec-row svg {
    height: 14px;
    width: 14px;
    margin-right: 5px;
  }
  .rating-sec-box {
    text-align: right;
    margin-top: -26px;
  }
  .rating-sec-box-text {
    background: #89a80c;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 5px;
  }
  .heading-name-rating h3 {
    margin-top: 3px;
  }
  .more-labs-action-btns {
    display: flex;
    gap: 12px;
    button {
      width: 100%;
      height: 39px;
    }
    .view-details-btn {
      border-radius: 10px;
      border: 1px solid #9747ff;
      background: #fff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #9747ff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 10px;
      font-style: normal;
      line-height: normal;
    }
    .add-to-cart-btn {
      border-radius: 10px;
      background: #9747ff;
      color: #fff;
      font-size: 10px;
      font-style: normal;
      line-height: normal;
      border: none;
    }
  }
  .labs-near-sec-name {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .tests-include-list {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
    margin-bottom: 6px;
  }
  .amount-box {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`,a=i=>{const{mostOrdersSection:s,item:n,addToCart:h}=i,[m,g]=o.useState(null),[t,r]=o.useState(!1);return c(),p(),e.jsx(y,{children:e.jsxs("div",{children:[e.jsx("div",{className:"near-you-item",children:e.jsxs("div",{className:" cardstyle px-2 py-2 flex  flex-col",children:[e.jsx("div",{className:"relative imgspace",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736332821023.png",alt:"Health360",className:"w-full h-full object-cover rounded-t-xl w-xl"})}),e.jsx("div",{className:"rating-sec-box",children:e.jsxs("span",{className:"rating-sec-box-text",children:[e.jsx("span",{className:"ml-1",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:e.jsx("path",{d:"M2.48625 12.5L3.5425 8.06316L0 5.07895L4.68 4.68421L6.5 0.5L8.32 4.68421L13 5.07895L9.4575 8.06316L10.5137 12.5L6.5 10.1474L2.48625 12.5Z",fill:"#FFD233"})})}),e.jsx("span",{className:"rating",children:"3.1 (234)"})]})}),e.jsx("div",{className:" heading-name-rating flex flex-col mt-1",children:s?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex",children:e.jsx("h3",{className:"float-left22 text-sm heading text-bold",children:"Json's"})}),e.jsx("div",{className:"flex locatio-name-sec-row mt-2",children:e.jsxs("span",{className:"flex float-left labs-near-sec-name text-sm opacity-70 text-overflow   ",children:[e.jsx("img",{src:x,className:"w-5 h-5 flex "}),"  ","HSR, Bengaluru, Karnataka"]})}),e.jsx("div",{className:" locatio-name-sec-row flex",children:e.jsxs("span",{className:"flex  labs-near-sec-name float-left text-sm opacity-70 overflow-x-hidden text-overflow",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",children:e.jsx("path",{opacity:"0.5",d:"M12.6 3.3H9.8V1.9C9.8 1.13 9.17 0.5 8.4 0.5H5.6C4.83 0.5 4.2 1.13 4.2 1.9V3.3H1.4C0.63 3.3 0 3.93 0 4.7V13.1C0 13.87 0.63 14.5 1.4 14.5H12.6C13.37 14.5 14 13.87 14 13.1V4.7C14 3.93 13.37 3.3 12.6 3.3ZM5.6 1.9H8.4V3.3H5.6V1.9ZM9.8 9.6H7.7V11.7H6.3V9.6H4.2V8.2H6.3V6.1H7.7V8.2H9.8V9.6Z",fill:"black"})})," "," ","Radiology, Cardiology, Ophtho."]})}),e.jsx("button",{className:"btn-view-text",children:"View Test"})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("div",{className:"",children:e.jsx("h6",{className:"float-left1 text-sm heading text-bold",children:"Alb/Glb ratio"})}),e.jsxs("div",{children:[e.jsx("p",{className:"tests-include-list",children:"1 Test Included"}),e.jsxs("p",{className:"amount-box",children:[e.jsx("svg",{width:"8",height:"11",viewBox:"0 0 8 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{opacity:"0.9",d:"M0.727273 0H8L7.27273 1.22222H4.90182C5.25091 1.57667 5.51273 1.99222 5.66545 2.44444H8L7.27273 3.66667H5.81818C5.7278 4.42849 5.33387 5.14235 4.70025 5.69251C4.06663 6.24267 3.23046 6.5969 2.32727 6.69778V6.72222H1.81818L6.18182 11H4.36364L0 6.72222V5.5H1.81818C3.09818 5.5 4.16 4.70556 4.33455 3.66667H0L0.727273 2.44444H4.11636C3.70909 1.72333 2.83636 1.22222 1.81818 1.22222H0L0.727273 0Z",fill:"black"})})," ","100.00 ",e.jsx("svg",{width:"13",className:"svg-info-icon",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{opacity:"0.5",d:"M7.15 3.25H5.85V7.15H7.15V3.25ZM6.5 8.45C6.31584 8.45 6.16135 8.5124 6.03655 8.6372C5.91175 8.762 5.84957 8.91627 5.85 9.1C5.85044 9.28373 5.91284 9.438 6.0372 9.5628C6.16157 9.6876 6.31584 9.75 6.5 9.75C6.68417 9.75 6.83844 9.6876 6.9628 9.5628C7.08717 9.438 7.14957 9.28373 7.15 9.1C7.15044 8.91627 7.08804 8.76178 6.9628 8.63655C6.83757 8.51132 6.6833 8.44913 6.5 8.45ZM6.5 3.8147e-06C7.39917 3.8147e-06 8.24417 0.170737 9.035 0.512204C9.82583 0.85367 10.5138 1.31669 11.0988 1.90125C11.6838 2.48582 12.1468 3.17374 12.4878 3.965C12.8288 4.75627 12.9996 5.60127 13 6.5C13.0004 7.39874 12.8297 8.24373 12.4878 9.035C12.1459 9.82627 11.6829 10.5142 11.0988 11.0988C10.5146 11.6833 9.8267 12.1463 9.035 12.4878C8.2433 12.8293 7.3983 13 6.5 13C5.6017 13 4.75671 12.8293 3.96501 12.4878C3.17331 12.1463 2.48539 11.6833 1.90126 11.0988C1.31712 10.5142 0.85389 9.82627 0.511558 9.035C0.169225 8.24373 -0.00129223 7.39874 7.62939e-06 6.5C0.00130749 5.60127 0.172041 4.75627 0.512207 3.965C0.852374 3.17374 1.31539 2.48582 1.90126 1.90125C2.48712 1.31669 3.17504 0.853455 3.96501 0.511555C4.75497 0.169655 5.59997 -0.000863075 6.5 3.8147e-06ZM6.5 1.3C5.04834 1.3 3.81876 1.80375 2.81126 2.81125C1.80376 3.81875 1.30001 5.04834 1.30001 6.5C1.30001 7.95167 1.80376 9.18125 2.81126 10.1888C3.81876 11.1963 5.04834 11.7 6.5 11.7C7.95167 11.7 9.18125 11.1963 10.1888 10.1888C11.1963 9.18125 11.7 7.95167 11.7 6.5C11.7 5.04834 11.1963 3.81875 10.1888 2.81125C9.18125 1.80375 7.95167 1.3 6.5 1.3Z",fill:"black"})})," "]})]}),e.jsxs("div",{className:"more-labs-action-btns",children:[e.jsx("button",{className:"view-details-btn",children:"View Details"}),e.jsx("button",{className:"add-to-cart-btn",children:"Add To Cart"})]})]})})})]})})," "]})})},N=l.div`
  width: 100%;
  height: auto;

  .main-card {
    display: flex;
    flex-direction: column;
  }

  .round-shadow {
    background-color: #e2f4ee;
    border-radius: 10px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 16px;
  }

  .round-shadow-1 {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 16px;
  }

  .sub-cards-container {
    display: flex;
    gap: 16px;
    width: 100%;
    overflow-x: auto;
  }

  .sub-card {
    flex: 0 0 auto;
    width: calc(33.333% - 16px);
    display: flex;
    flex-direction: column;

    .image-container {
      width: 100%;

      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }

  .sub-cards-container-1 {
    text-align: center;
  }

  .name-div {
    align-items: center;
    gap: 0px;

    h6 {
      margin: 0;
    }

    p {
      margin: 0;
      font-size: 12px;
    }
  }

  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem; /* Add margin if needed */
  }

  .btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .btn-outline-primary {
    width: 135px;
    border: 1px solid #9747ff;
    background-color: transparent;
    color: #9747ff;
    margin-right: 8px;
  }

  .btn.primary {
    width: 135px;
    background-color: #9747ff;
    color: white;
    border: none;
  }

  .discripsion {
    font-size: small;
    font-weight: 500;
  }

  .discripsion-div {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    font-size: small;
  }

  .d-flex {
    display: flex;
    gap: 0;
  }

  .button-container {
    display: flex;
    gap: 0;
  }
  .main-discription-div {
    align-items: end;
    height: 40px;
  }
  .sub-discription-div {
    margin-right: 40px;
  }
`,d=()=>e.jsx(N,{children:e.jsx("div",{className:"main-card round-shadow",children:e.jsxs("div",{className:"sub-cards-container",children:[[1].map((i,s)=>e.jsx("div",{className:"sub-card round-shadow-1",children:e.jsx("div",{className:"image-container",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736332737729.png",alt:`Sub Card ${i}`})})},s)),e.jsxs("div",{className:"child-div",children:[e.jsxs("div",{className:"name-div",children:[e.jsx("h5",{children:"360 Health Checkup"}),e.jsx("p",{children:"20 Tests Included"})]}),e.jsx("div",{className:"mt-2",children:e.jsx("h6",{children:"899.00"})}),e.jsx("div",{children:e.jsx("p",{className:"discripsion",children:"Preparation needed for checkup"})}),e.jsxs("div",{className:"d-flex main-discription-div",children:[e.jsxs("div",{className:"sub-discription-div",children:[e.jsxs("p",{className:"discripsion-div",children:[e.jsx("img",{src:"",alt:""}),"10-12 hours fasting require"]}),e.jsxs("p",{className:"discripsion-div ",children:[e.jsx("img",{src:"",alt:""}),"Water can be consumed"]})]}),e.jsxs("div",{className:"button-container",children:[e.jsx("button",{className:"btn btn-outline-primary",children:"View Details"}),e.jsx("button",{className:"btn primary",children:"Add To Cart"})]})]})]})]})})}),_=()=>{let[i,s]=o.useState(0);c();const n=p(),{hospitalList:h,doctorsList:m,tablist:g}=f(t=>t.doctor);return o.useEffect(()=>{n(j({count:30,page:0,searchText:""})),n(b({cityId:"bengaluru",count:30,page:0,searchText:""}))},[n]),e.jsx(C,{children:e.jsx("div",{className:"container-fluid container-max w-100 d-flex justify-content-between flex-wrap flex-md-nowrap",children:e.jsxs("div",{className:"content_container",children:[e.jsx("div",{className:"content_tabNav",children:["Lab Tests","Packages"].map((t,r)=>e.jsx("button",{className:r===i?"content_tabNav_item selected":"content_tabNav_item",onClick:()=>s(r),children:t}))}),i===0&&e.jsxs("div",{className:"cards_container",children:[e.jsxs("div",{className:"card_row",children:[e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{})]}),e.jsxs("div",{className:"card_row",children:[e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{})]}),e.jsxs("div",{className:"card_row",children:[e.jsx(a,{}),e.jsx(a,{}),e.jsx(a,{})]})]}),i===1&&e.jsxs("div",{className:"hospitals_list",children:[e.jsx(d,{}),e.jsx(d,{})]}),i===1&&e.jsx("div",{className:"hospitals_list"})]})})})},H=()=>e.jsx(u,{children:e.jsx("div",{className:"container-1",children:e.jsx("div",{className:"main-card",children:e.jsxs("div",{className:"container-2",children:[e.jsx(v,{}),e.jsxs("div",{className:"input-group mb-3 mt-4",children:[e.jsx("input",{type:"text",className:"form-control",placeholder:"Search Lab Test’s Or Packages","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),e.jsx("button",{type:"button",className:"btn btn-success",children:"search"})]}),e.jsx(_,{}),e.jsx("div",{className:"PaginationWrapper","aria-label":"Page navigation example",children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:"page-item disabled",children:e.jsx("a",{className:"page-link",href:"#","aria-disabled":"true",children:"Next Page"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{className:"page-link",href:"#",children:"1"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{className:"page-link",href:"#",children:"2"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{className:"page-link",href:"#",children:"3"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{className:"page-link",href:"#",children:"4"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{className:"page-link",href:"#",children:"5"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{className:"page-link",href:"#",children:"6"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{className:"page-link",href:"#",children:"7"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{className:"page-link",href:"#",children:"8"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{className:"page-link",href:"#",children:"9...."})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{className:"page-link",href:"#",children:"Go to Last Page"})})]})})]})})})});export{H as default};
