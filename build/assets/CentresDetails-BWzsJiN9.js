import{d as p,u as m,b as x,a as l,r as h,j as e,a_ as g,a$ as A,b0 as f,b1 as C,b2 as j}from"./index-BHf3qlKB.js";import{T as b}from"./TreatmentCard-BjhacL55.js";const y=p.div`
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
    background-image: linear-gradient(#d1f1da, #d1f7db);
    border-radius: 0.625rem;
    gap: 2rem;
    padding: 0.5rem;
    display: flex;
    height: 100%;
    width: 100%;

    @media only screen and (min-width: 1025px) {
      padding: 1rem;
    }

    .hospital_img {
      @media only screen and (min-width: 1025px) {
        display: block;
      }

      img {
        width: 100%;
        height: 15.688rem;
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
        margin-top: 1rem;
        margin-bottom: 0.5rem;
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
  .Container {
    /* display: flex; */
    justify-content: space-between;
    /* align-items: center;
    padding: 20px; */
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    height: 100%;
    width: 30%;
  }
  @media (max-width: 900px) {
    .Container {
      flex-direction: column;
    }
  }

  .TextContainer {
    /* flex: 1;
    padding: 10px; */
    flex: 1;
    padding: 10px;

    @media (max-width: 768px) {
      text-align: start;
    }
  }
  .Heading {
    width: 166px;
    position: relative;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    display: inline-block;
    opacity: 0.8;
    color: #000;

    span {
      color: #928c0a;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .SubHeading {
    width: 76px;
    position: relative;
    font-size: 13px;
    font-weight: 500;
    color: #000;
    text-align: left;
    display: inline-block;
    opacity: 0.6;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .StoreButton {
    width: 150px;
    display: inline-block;
  }

  .treatmentWrapper {
    padding: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
    display: grid;
  }
  @media (max-width: 1024px) {
    .treatmentWrapper {
      padding: 2rem;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      display: grid;
    }
    .search-by-disease {
      flex-direction: column;
    }
    .button-group {
      display: grid;
      gap: 1rem;
      width: 100%;
    }
    .more-labs-action-btns {
      flex-direction: column;
    }
    .full-content-sec-page-design {
      flex-direction: column;
    }
  }
  .contenal-1 {
    padding: 2rem;
  }
  .search-by-disease {
    /* font-family: Poppins, sans-serif; */
    margin: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 2rem;
  }
  .button-btn {
    color: black;
    border: 1px solid black;
  }
  .search-by-disease .button.active {
    color: #9747ff;
    border-color: #9747ff;
  }
  .search-by-disease .button {
    color: #000;
    border-color: #000;
  }
  .custom-btn {
    color: #fff;
    background: #9747ff;
  }
  .qr_code {
    display: flex;
    align-items: center;
    width: 14rem;
  }

  .Cutome-phone-img {
    margin-left: -1.2rem;
    margin-top: 2rem;
  }
  .flexdesign {
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    .hospital_item {
      display: block;
    }
    .flexdesign {
      display: block;
    }
    .Container {
      height: auto;
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    .btns-div {
      display: flex;
      justify-content: center;
      align-items: baseline;
      gap: 1rem;
    }
    .qr_code {
      display: flex;
      justify-content: center;
      align-items: baseline;
      gap: 1rem;
    }
    .Cutome-phone-img {
      margin-left: 3rem;
    }
    /* .search-by-disease {
      display: contents;
      margin-right: 3rem;
    } */
  }
`,v="/assets/phn_img-DqpYjDjF.png",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGUSURBVHgBjZI5SFxRFIa/M0sGAyJjukBm3pAUsUmTIm02SZ1GSEJQSLpEQbEQRRAtLARRUEFsLGytVdxQbKxEBTuXwQXHUcdBcBvH43lvFFFc5n9cLu++992Pc+4VCkOKm8NT8k/3oDJRo5SVuHBewycUQ0ED0l4Gc+Xw4+2THh8BEAnDVhXy0oGeUrN/hUjhw5AapEGBbBiNV8GZmX+WwHzFg7DPHlybPjPwohhZq4TMi9xXg53BUsp/he5A/hwkAasxaLAasPofMTCWOWRSR+mvPmVlSKj4noOEgUnl/Uckq2jWbOe2moFYaomJ88844QSEbN09GZudL2ome3dtemV0h5PeZryjlWjXG0gVeJ1e24RPv5X4hv0i1zV5WoimEoy11fFq3wz+5xx0vqMzNktT301NARW35YqYKZJMMNJcR2R3xwA/HdurNM8tczB2u3sBb3txgSTD9Q3ePHWyz9+NBeJnx9wXD4rs7DJU20h6fZlvyUWmj/Z4NNGWXp358Ef/Fb3O++5JkS/o3fL0RYZ8cwmXNZopF1vsrwAAAABJRU5ErkJggg==",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJzSURBVHgBdVRNa5NBEH4mCUT8IPETD5KkFA9VsQcvYlDRi3iyeulFFH+AxIvX1v4BW7yJF82tniIIogdF8OCppl4LMSpqpdYmamia5N1xdmbftw3iwuadmZ2PZ2afDQFg+HXlJlC+BBwsAeQNBGIGB1ndzNP05Q/A8yrwoqqWjP5enQJdmwKzeZKPIZK4JBLkdbZkmnZvATh6FtieB2r3xLYjz5hfiWtuCQw6xwApKTS0Oi1gcj9SGBkH9cUwEN++OIpMIrN835XTmB1LoXEug0qB1Ee39/e+Xs4KogNFac2jHXBoxyDEdZ98YUwfSalcX2UL9vhiZBTrEETOKnCoRD1OqtY+OfV/1HB4/dUF5KyIrQO/zSel5eO2BiFhz5xvHTY0zT/A9SIlxbhv56oPYkQc+t3at8ilrASPpjCzECGflhaPp7GbNhFrMtn+GxJZ735OySBFfnkxg+Zvxtx7h1qDUdpJqIylgYisxYBM/ZVHzt+SXe2EIMgLkvF9hNIukgQOEwWywTciVI6l0Ww7HXB9hbH4g3XwNvvRM0yzXaa7XV7rOv7fmlvoD52/+hwxJE73niJnbEZGvpH7PdwpZ5DbBsy8iYZ419pgtNaB6VMZ3Hg2QG3J6UikUUWUinmkRomtnPBzkJv66WRz2A6tjszrbSSt2QjaHaOD3hz7Ga23zSD6mgz38nwf9WVnnArUjAnakmLnH/ZQzJMNOn5Y3bZJdPsbOJsLBxZKSRokNv1HCMS2Jy3K90XgwUko47h6QR5fO/Bok5g0CHrMr0BWb9OWVj8CjyfttSTIc0Xg0Gn7JiDiN0X4Z/2SJEtPgY2Wqn8BnmiIDmiYLVsAAAAASUVORK5CYII=",N="data:image/png;base64,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",F=r=>{console.log("propssss",r);const o=m();x();const{allAyurvedsDiseaseList:t}=l(i=>i.generic),{userCity:B}=l(i=>i.auth),[a,c]=h.useState("General Health"),n=t==null?void 0:t.tests,s=i=>{c(i)},d=i=>{o.push(i)};return e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx("div",{className:" py-3 p-4",children:e.jsxs("span",{onClick:()=>{d("/ayurveda")},className:" text-xl cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 ",children:[e.jsx("svg",{width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z",fill:"#444444"})})," "," "," Back"]})}),e.jsxs("div",{className:"flexdesign contenal-1",children:[e.jsxs("div",{className:"hospital_item",children:[e.jsx("div",{className:"hospital_img",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736422837311.png",alt:"",className:"custome_img"})}),e.jsxs("div",{className:"hospital_datalist flex-col inlineflex_start",children:[e.jsxs("div",{className:"hospital_data flex-col flex_start",children:[e.jsx("div",{className:"opactiy-95 text-lg poppins-medium",children:"ABC Ayurveda Centre"}),e.jsx("div",{className:"opacity-60 text-sm poppins-medium",children:"Serenity Ayurveda, Natural Healing Center"}),e.jsxs("div",{className:"inlineflex_center hospital_address",children:[e.jsx("div",{className:"address_icon",children:e.jsx(g,{})}),e.jsx("div",{className:"opacity-60 text-sm poppins-medium",children:"824 Demond Parks"})]}),e.jsxs("div",{className:"hospital_ratingbox inlineflex_center",children:[e.jsxs("div",{className:"hosptial_rating flex_center",children:[e.jsx("div",{className:"star_icon",children:e.jsx(A,{})}),e.jsx("div",{className:"stroke_icon",children:e.jsx(f,{})})]}),e.jsx("div",{className:"opacity-70 text-sm poppins-regular",children:"4.8 Ratings"})]}),e.jsxs("div",{className:"inlineflex_center hospital_opentime gap-[11px]",children:[e.jsx("div",{className:"opacity-70 text-sm text-violet poppins-medium",children:"Open Now"}),e.jsx("div",{className:"opacity-70 text-sm poppins-medium",children:"7.00 AM To 9.00 PM"})]})]}),e.jsxs("div",{className:"inlineflex_center hospital_helpbox",children:[e.jsxs("div",{className:"flex_center hospital_helpdata",children:[e.jsx("div",{className:"inlineflex_start hospital_helpitem",children:e.jsxs("div",{className:"hospital_itemdata inlineflex_center",children:[e.jsx("div",{className:"hospital_helpimg inlineflex_start flex-col",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[e.jsxs("g",{clipPath:"url(#clip0_700_1487)",children:[e.jsx("path",{d:"M0.277402 6.422C0.277098 7.51425 0.564723 8.58075 1.11164 9.52078L0.225098 12.7326L3.53766 11.8708C4.45387 12.3657 5.48042 12.625 6.5236 12.6251H6.52634C9.97007 12.6251 12.7733 9.84452 12.7748 6.42688C12.7755 4.7708 12.1261 3.21352 10.9462 2.0419C9.76659 0.870392 8.1977 0.224877 6.52609 0.224121C3.08195 0.224121 0.278875 3.00451 0.277453 6.422",fill:"url(#paint0_linear_700_1487)"}),e.jsx("path",{d:"M0.0543359 6.42019C0.0539805 7.55174 0.351914 8.65639 0.918328 9.63008L0 12.957L3.43134 12.0643C4.37679 12.5758 5.44126 12.8455 6.52443 12.8459H6.52722C10.0945 12.8459 12.9985 9.96531 13 6.42533C13.0006 4.70973 12.3279 3.09647 11.1059 1.88288C9.88371 0.66945 8.25871 0.000705426 6.52722 0C2.95933 0 0.0557578 2.88016 0.0543359 6.42019ZM2.09782 9.46239L1.9697 9.26059C1.43112 8.41085 1.14684 7.4289 1.14725 6.42059C1.14837 3.47821 3.5617 1.08434 6.52925 1.08434C7.96636 1.08495 9.31694 1.64082 10.3328 2.64938C11.3485 3.65804 11.9075 4.99885 11.9071 6.42492C11.9058 9.36731 9.49244 11.7615 6.52722 11.7615H6.52509C5.55958 11.761 4.61266 11.5037 3.78686 11.0175L3.59034 10.9019L1.55411 11.4316L2.09782 9.46239Z",fill:"url(#paint1_linear_700_1487)"}),e.jsx("path",{d:"M4.90943 3.7361C4.78827 3.46889 4.66076 3.4635 4.54553 3.45881C4.45118 3.45478 4.34332 3.45508 4.23556 3.45508C4.1277 3.45508 3.95246 3.49534 3.80433 3.65583C3.65605 3.81646 3.23822 4.20465 3.23822 4.99417C3.23822 5.78375 3.81779 6.54677 3.89858 6.65394C3.97947 6.76091 5.01744 8.43297 6.66133 9.07622C8.02755 9.61079 8.30558 9.50447 8.60209 9.47766C8.89865 9.45095 9.55901 9.08958 9.69374 8.71484C9.82856 8.34016 9.82856 8.01899 9.78814 7.95187C9.74772 7.88501 9.63986 7.84485 9.47812 7.76463C9.31633 7.68437 8.5212 7.29613 8.37297 7.24257C8.22468 7.18906 8.11688 7.16235 8.00902 7.32304C7.90116 7.48347 7.59144 7.84485 7.49704 7.95187C7.40274 8.05915 7.30834 8.0725 7.14665 7.99223C6.98481 7.91172 6.46395 7.74246 5.84599 7.19581C5.36519 6.77044 5.0406 6.24515 4.94625 6.08446C4.8519 5.92403 4.93614 5.83706 5.01724 5.75709C5.08991 5.68519 5.17903 5.5697 5.25997 5.47603C5.34061 5.38231 5.36753 5.31544 5.42146 5.20842C5.47544 5.1013 5.44842 5.00758 5.40805 4.92731C5.36753 4.84704 5.05324 4.05339 4.90943 3.7361Z",fill:"white"})]}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"paint0_linear_700_1487",x1:"627.711",y1:"1251.07",x2:"627.711",y2:"0.224121",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#1FAF38"}),e.jsx("stop",{offset:"1",stopColor:"#60D669"})]}),e.jsxs("linearGradient",{id:"paint1_linear_700_1487",x1:"650",y1:"1295.7",x2:"650",y2:"0",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#F9F9F9"}),e.jsx("stop",{offset:"1",stopColor:"white"})]}),e.jsx("clipPath",{id:"clip0_700_1487",children:e.jsx("rect",{width:"13",height:"13",fill:"white"})})]})]})}),e.jsx("div",{className:"opacity-80 text-sm poppins-medium",children:"Need Help?"})]})}),e.jsxs("div",{className:"opacity-60 hospital_share flex_center flex",children:[e.jsx("div",{className:"share_icon",children:e.jsx(C,{})}),e.jsxs("div",{className:"text-black text-sm poppins-medium",children:["Share"," "]})]})]}),e.jsxs("div",{className:"flex_center hospital_map",children:[e.jsx("div",{className:"map_icon",children:e.jsx(j,{})}),e.jsx("div",{className:"opacity-70 text-sm poppins-medium",children:"View In Map"})]})]})]})]}),e.jsxs("div",{className:"Container d-flex",children:[e.jsxs("div",{className:"TextContainer",children:[e.jsxs("div",{className:"Heading mt-3",children:["Explore ",e.jsx("span",{children:"Raphacure"})," App"]}),e.jsx("div",{className:"SubHeading",children:"Available on"}),e.jsxs("div",{className:"btns-div",children:[e.jsxs("button",{className:"btn btn-dark mb-3 mt-2",children:[e.jsx("img",{src:w,alt:"",className:"me-2"}),"App store"]}),e.jsxs("button",{className:"btn btn-dark",children:[e.jsx("img",{src:u,alt:"",className:"me-2"}),"Play Store"]})]}),e.jsxs("div",{className:"qr_code mt-3 ",children:[e.jsx("div",{className:"me-4",children:e.jsx("button",{className:"btn custom-btn",children:"Download Now"})}),e.jsx("div",{children:e.jsx("img",{src:N,alt:""})})]})]}),e.jsx("div",{children:e.jsx("img",{src:v,alt:"",className:"Cutome-phone-img mb-3"})})]})]}),e.jsxs("div",{className:"search-by-disease",children:[e.jsx("h5",{children:"Search"}),e.jsxs("div",{className:" button-group",children:[e.jsx("button",{className:`btn button me-3 ${a==="General Health"?"active":""}`,onClick:()=>s("General Health"),children:"General Health"}),e.jsx("button",{className:`btn button me-3 ${a==="Sexual Health"?"active":""}`,onClick:()=>s("Sexual Health"),children:"Sexual Health"}),e.jsx("button",{className:`btn button me-3 ${a==="Mental Health"?"active":""}`,onClick:()=>s("Mental Health"),children:"Mental Health"}),e.jsx("button",{className:`btn button me-3 ${a==="Cardiovascular"?"active":""}`,onClick:()=>s("Cardiovascular"),children:"Cardiovascular"}),e.jsx("button",{className:`btn button me-3 ${a==="Hair & Skin"?"active":""}`,onClick:()=>s("Hair & Skin"),children:"Hair & Skin"})]})]}),e.jsx("div",{className:"treatmentWrapper",children:n==null?void 0:n.map((i,S)=>e.jsx(b,{mostOrdersSection:!0,item:i}))})]})})};export{F as default};
