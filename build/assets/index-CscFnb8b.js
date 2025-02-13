import{r as o,j as t,ba as W,bb as X,bc as J,bd as B,be as Q,K as z,bf as O,d as T,bg as ee,bh as te,bi as ae,bj as ie,bk as ne,bl as se,bm as M,bn as le,bo as I,u as ce,b as oe,a as E,bp as de,bq as re,br as ge,c as P,t as A,v as xe,bs as he}from"./index-CitTC1Lo.js";import{u as me}from"./useTimeout-tpYfgdNW.js";const fe={[J]:"showing",[X]:"showing show"},H=o.forwardRef((e,n)=>t.jsx(W,{...e,ref:n,transitionClasses:fe}));H.displayName="ToastFade";const $=o.createContext({onClose(){}}),V=o.forwardRef(({bsPrefix:e,closeLabel:n="Close",closeVariant:s,closeButton:f=!0,className:i,children:p,...v},l)=>{e=B(e,"toast-header");const x=o.useContext($),g=Q(m=>{x==null||x.onClose==null||x.onClose(m)});return t.jsxs("div",{ref:l,...v,className:z(e,i),children:[p,f&&t.jsx(O,{"aria-label":n,variant:s,onClick:g,"data-dismiss":"toast"})]})});V.displayName="ToastHeader";const Z=o.forwardRef(({className:e,bsPrefix:n,as:s="div",...f},i)=>(n=B(n,"toast-body"),t.jsx(s,{ref:i,className:z(e,n),...f})));Z.displayName="ToastBody";const q=o.forwardRef(({bsPrefix:e,className:n,transition:s=H,show:f=!0,animation:i=!0,delay:p=5e3,autohide:v=!1,onClose:l,onEntered:x,onExit:g,onExiting:m,onEnter:_,onEntering:k,onExited:d,bg:r,...c},j)=>{e=B(e,"toast");const h=o.useRef(p),u=o.useRef(l);o.useEffect(()=>{h.current=p,u.current=l},[p,l]);const N=me(),y=!!(v&&f),C=o.useCallback(()=>{y&&(u.current==null||u.current())},[y]);o.useEffect(()=>{N.set(C,h.current)},[N,C]);const R=o.useMemo(()=>({onClose:l}),[l]),L=!!(s&&i),S=t.jsx("div",{...c,ref:j,className:z(e,n,r&&`bg-${r}`,!L&&(f?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return t.jsx($.Provider,{value:R,children:L&&s?t.jsx(s,{in:f,onEnter:_,onEntering:k,onEntered:x,onExit:g,onExiting:m,onExited:d,unmountOnExit:!0,children:S}):S})});q.displayName="Toast";const D=Object.assign(q,{Body:Z,Header:V}),ue=T.div`
  width: 100%;
  
  .container-max {
    max-width: 96rem;
    margin: 0 auto;
    padding: 0;
    width: 92.188%;
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

  .error_message {
    font-size: 12px;
    color: #ff0000;
    margin-top: 0.5rem;
    margin-bottom: 0;
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

  .package_container {
    .package_backcontainer {
      .packageBtnwrap {
        gap: 0.313rem;
        padding-top: 0.719rem;
        appearance: none;
        border: medium none;
        background: transparent;

        &:active,
        &:focus {
          outline: none;
        }

        .back-icon {
          height: 1.125rem;
          width: 1.313rem;
          display: inline-flex;
        }

        .back-text {
          font-size: 1rem;
          line-height: 1.438rem;
          color: #000;
          opacity: 0.8;
        }
      }
    }

    .package_listcontainer {
      width: 100%;
      .package_filter {
        width: 22.34%;
        display: block;
        min-height: 100vh;
      }

      .package_datacontainer {
        width: 76.65%;
        padding: 20px 12px 0 17px;

        @media only screen and (min-width: 1024px) {
          padding: 40px 23px 0 34px;
        }

        .package_header {
          width: 100%;
        }

        .package_search {
          width: 100%;
          .package_searchbox {
            margin-top: 1.313rem;
            position: relative;
            display: inline-block;
            width: 43.046%;

            @media only screen and (max-width: 767px) {
              width: 100%;
            }

            .package_searchInput {
              height: 2.688rem;
              border-radius: 0.625rem;
              border: none;
              width: 100%;
              padding-left: 1.25rem;
              padding-right: 5.625rem;
              font-size: 0.875rem;
              line-height: 1.25rem;
            }

            .package_searchInput:focus {
              border-color: none;
              outline: none;
            }

            .package_searchbtn {
              position: absolute;
              right: 0.188rem;
              top: 0.125rem;
              border: none;
              height: 2.438rem;
              background-color: #426f09;
              color: #fff;
              width: 5.313rem;
              border-radius: 0.625rem;
              font-size: 0.875rem;
              line-height: 1.25rem;
            }
          }
        }
      }
    }
  }

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

`,pe=T.div`
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
    line-height: 1.688rem;
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

  .opactiy-98 {
    opacity: 0.98;
  }

  .text-violet {
    color: #00c9aa;
  }

  .package_item {
    background: #ffffff;
    border-radius: 0.625rem;
    gap: 2rem;
    padding: 0.5rem;

    @media only screen and (min-width: 1025px) {
      padding: 1rem;
    }

    .package_img {
      display: none;

      @media only screen and (min-width: 1025px) {
        display: block;
      }

      img {
        width: 18.563rem;
        height: 10.688rem;
        object-fit: contain;
        opacity: 0.9;
        border-radius: 0.625rem;
      }
    }

    .package_datalist {
      gap: 1.063rem;

      .package_data {
        gap: 0.5rem;
      }

      .package_address {
        gap: 0.313rem;
        .address_icon {
          display: inline-flex;
          width: 0.625rem;
          height: 0.938rem;
        }
      }

      .package_ratingbox {
        gap: 0.688rem;

        .hosptial_rating {
          gap: 0.5rem;
        }

        .star_icon {
          position: relative;
          height: 1.375rem;
          display: inline-flex;
        }

        .stroke_icon {
          width: 0.125rem;
          height: 1.188rem;
          display: inline-flex;
        }
      }

      .package_opentime {
        gap: 0.688rem;
      }

      .package_helpbox {
        gap: 0.625rem;

        .package_helpdata {
          gap: 0.813rem;

          .package_helpitem {
            padding-left: 0.25rem;
            padding-right: 0.625rem;
            padding-top: 0.188rem;
            padding-bottom: 0.063rem;
            background: #dbecfb;
            gap: 0.625rem;

            .package_itemdata {
              gap: 0.25rem;

              .package_helpimg {
                width: 0.813rem;
                height: 0.813rem;
                position: relative;
              }
            }
          }

          .package_share {
            gap: 0.438rem;

            .share_icon {
              width: 1.125rem;
              height: 0.938rem;
              display: inline-flex;
            }
          }
        }

        .package_map {
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
`,we=e=>{var i,p,v,l,x,g,m,_,k;const n=()=>{var d;return((d=e.vendor)==null?void 0:d.image)??se},s=(d,r)=>{if(d&&r){d=d.split(":"),r=r.split(":");let c=new Date,j=new Date(c.getFullYear(),c.getMonth(),c.getDate(),...d),h=new Date(c.getFullYear(),c.getMonth(),c.getDate(),...r);return j<c&&h>c?"Open now":"Closed now"}else return"Open now"},f=d=>{if(d){d=d.split(":");let r=new Date;return new Date(r.getFullYear(),r.getMonth(),r.getDate(),...d).toLocaleTimeString("en-us",{hour:"2-digit",minute:"2-digit"})}else return null};return t.jsx(pe,{children:e.vendor?t.jsxs("div",{className:"package_item flex_center round-shadow W-100 opactiy-70",children:[t.jsx("div",{className:"package_img",children:t.jsx("img",{src:n(),alt:""})}),t.jsxs("div",{className:"package_datalist flex-col inlineflex_start",children:[t.jsxs("div",{className:"package_data flex-col flex_start",children:[t.jsxs("div",{className:"package_title",children:[t.jsx("div",{className:"opactiy-98 text-lg poppins-semibold",children:(i=e.vendor)==null?void 0:i.name}),t.jsx("div",{className:"opacity-50 text-sm poppins-medium",children:((p=e.vendor)==null?void 0:p.description)??"Diagnostic"})]}),t.jsxs("div",{className:"inlineflex_center package_address",children:[t.jsx("div",{className:"address_icon",children:t.jsx(ee,{})}),t.jsx("div",{className:"opacity-60 text-sm poppins-medium",children:((v=e.vendor)==null?void 0:v.address)??((l=e.vendor)==null?void 0:l.city)})]}),t.jsxs("div",{className:"package_ratingbox inlineflex_center",children:[t.jsxs("div",{className:"hosptial_rating flex_center",children:[t.jsx("div",{className:"star_icon",children:t.jsx(te,{})}),t.jsx("div",{className:"stroke_icon",children:t.jsx(ae,{})})]}),t.jsxs("div",{className:"opacity-70 text-sm poppins-regular",children:[((x=e.vendor)==null?void 0:x.rating)??4.8," Ratings"]})]}),t.jsxs("div",{className:"inlineflex_center package_opentime gap-[11px]",children:[t.jsxs("div",{className:"opacity-70 text-sm text-violet poppins-medium",children:[s((g=e.vendor)==null?void 0:g.slot_start_time,(m=e.vendor)==null?void 0:m.slot_end_time)," "]}),t.jsxs("div",{className:"opacity-70 text-sm poppins-medium",children:[f((_=e.vendor)==null?void 0:_.slot_start_time)??"7:00 AM"," To"," ",f((k=e.vendor)==null?void 0:k.slot_end_time)??"9:00 PM"]})]})]}),t.jsxs("div",{className:"inlineflex_center package_helpbox",children:[t.jsxs("div",{className:"flex_center package_helpdata",children:[t.jsx("div",{className:"inlineflex_start package_helpitem",children:t.jsxs("div",{className:"package_itemdata inlineflex_center",children:[t.jsx("div",{className:"package_helpimg inlineflex_start flex-col",children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",children:[t.jsxs("g",{clipPath:"url(#clip0_700_1487)",children:[t.jsx("path",{d:"M0.277402 6.422C0.277098 7.51425 0.564723 8.58075 1.11164 9.52078L0.225098 12.7326L3.53766 11.8708C4.45387 12.3657 5.48042 12.625 6.5236 12.6251H6.52634C9.97007 12.6251 12.7733 9.84452 12.7748 6.42688C12.7755 4.7708 12.1261 3.21352 10.9462 2.0419C9.76659 0.870392 8.1977 0.224877 6.52609 0.224121C3.08195 0.224121 0.278875 3.00451 0.277453 6.422",fill:"url(#paint0_linear_700_1487)"}),t.jsx("path",{d:"M0.0543359 6.42019C0.0539805 7.55174 0.351914 8.65639 0.918328 9.63008L0 12.957L3.43134 12.0643C4.37679 12.5758 5.44126 12.8455 6.52443 12.8459H6.52722C10.0945 12.8459 12.9985 9.96531 13 6.42533C13.0006 4.70973 12.3279 3.09647 11.1059 1.88288C9.88371 0.66945 8.25871 0.000705426 6.52722 0C2.95933 0 0.0557578 2.88016 0.0543359 6.42019ZM2.09782 9.46239L1.9697 9.26059C1.43112 8.41085 1.14684 7.4289 1.14725 6.42059C1.14837 3.47821 3.5617 1.08434 6.52925 1.08434C7.96636 1.08495 9.31694 1.64082 10.3328 2.64938C11.3485 3.65804 11.9075 4.99885 11.9071 6.42492C11.9058 9.36731 9.49244 11.7615 6.52722 11.7615H6.52509C5.55958 11.761 4.61266 11.5037 3.78686 11.0175L3.59034 10.9019L1.55411 11.4316L2.09782 9.46239Z",fill:"url(#paint1_linear_700_1487)"}),t.jsx("path",{d:"M4.90943 3.7361C4.78827 3.46889 4.66076 3.4635 4.54553 3.45881C4.45118 3.45478 4.34332 3.45508 4.23556 3.45508C4.1277 3.45508 3.95246 3.49534 3.80433 3.65583C3.65605 3.81646 3.23822 4.20465 3.23822 4.99417C3.23822 5.78375 3.81779 6.54677 3.89858 6.65394C3.97947 6.76091 5.01744 8.43297 6.66133 9.07622C8.02755 9.61079 8.30558 9.50447 8.60209 9.47766C8.89865 9.45095 9.55901 9.08958 9.69374 8.71484C9.82856 8.34016 9.82856 8.01899 9.78814 7.95187C9.74772 7.88501 9.63986 7.84485 9.47812 7.76463C9.31633 7.68437 8.5212 7.29613 8.37297 7.24257C8.22468 7.18906 8.11688 7.16235 8.00902 7.32304C7.90116 7.48347 7.59144 7.84485 7.49704 7.95187C7.40274 8.05915 7.30834 8.0725 7.14665 7.99223C6.98481 7.91172 6.46395 7.74246 5.84599 7.19581C5.36519 6.77044 5.0406 6.24515 4.94625 6.08446C4.8519 5.92403 4.93614 5.83706 5.01724 5.75709C5.08991 5.68519 5.17903 5.5697 5.25997 5.47603C5.34061 5.38231 5.36753 5.31544 5.42146 5.20842C5.47544 5.1013 5.44842 5.00758 5.40805 4.92731C5.36753 4.84704 5.05324 4.05339 4.90943 3.7361Z",fill:"white"})]}),t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"paint0_linear_700_1487",x1:"627.711",y1:"1251.07",x2:"627.711",y2:"0.224121",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#1FAF38"}),t.jsx("stop",{offset:"1",stopColor:"#60D669"})]}),t.jsxs("linearGradient",{id:"paint1_linear_700_1487",x1:"650",y1:"1295.7",x2:"650",y2:"0",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#F9F9F9"}),t.jsx("stop",{offset:"1",stopColor:"white"})]}),t.jsx("clipPath",{id:"clip0_700_1487",children:t.jsx("rect",{width:"13",height:"13",fill:"white"})})]})]})}),t.jsx("div",{className:"opacity-80 text-sm poppins-medium",children:"Need Help?"})]})}),t.jsxs("div",{className:"opacity-60 package_share flex_center flex",children:[t.jsx("div",{className:"share_icon",children:t.jsx(ie,{})}),t.jsxs("div",{className:"text-black text-sm poppins-medium",children:["Share"," "]})]})]}),t.jsxs("div",{className:"flex_center package_map",children:[t.jsx("div",{className:"map_icon",children:t.jsx(ne,{})}),t.jsx("div",{className:"opacity-70 text-sm poppins-medium",children:"View In Map"})]})]})]})]}):null})},ve=T.div`
  width: 100%;

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

    .testslist_container {
      display: flex;
      gap: 1.87vw;
      padding: 1.5rem 0;
      flex-wrap: wrap;
      align-content: stretch;
      /* img {
        width: 100%;
        max-height: 300px;
        object-fit: contain;
        height: 300px;
        min-height: 300px;
      } */
      .bottomSec {
        padding: 0 1rem;
      }
      .more-labs-action-btns {
        padding: 0 1rem;
        padding-bottom: 1rem;
      }
      @media only screen and (max-width: 767px) {
        gap: 1.2rem;
      }

      & > div {
        flex: 0 0 31.9%;

        @media only screen and (max-width: 767px) {
          flex: 0 0 100%;
        }
      }
    }

    .error_testlist {
      width: 100%;
      color: #ff0000;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      padding: 1.5rem 0;
    }

    .packageslist_container {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      padding: 1.5rem 0;

      .error_packagelist {
        width: 100%;
        color: #ff0000;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        display: block;
      }
    }
  }
`,_e=T.div`
  .poppins-semibold {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
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

  .heading-name-rating {
    margin: 14px 15px 9px 15px;

    .heading {
      font-size: 14px;
      line-height: 21px;
      color: #000;
      opacity: 0.8;
    }
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

  .cardstyle {
    width: 100%;
    height: auto;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }

  .more-labs-action-btns {
    display: flex;
    gap: 12px;
    padding: 1rem;
    button {
      width: 100%;
      height: 40px;
    }
    .details-btn {
      border-radius: 10px;
      border: 1px solid #9747ff;
      background: #fff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #9747ff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 12px;
      line-height: 18px;
      font-style: normal;
      line-height: normal;
    }
    .add-to-cart-btn {
      border-radius: 10px;
      background: #9747ff;
      color: #fff;
      font-size: 12px;
      line-height: 18px;
      font-style: normal;
      line-height: normal;
      border: none;
    }
  }

  .tests-include-list {
    color: #000;
    font-size: 12px;
    line-height: 21px;
    opacity: 0.5;
    margin-bottom: 7px;
    margin-top: 7px;
  }

  .amount-box {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    opacity: 0.6;
    margin-bottom: 11.5px;
  }
`,ke=e=>{var s,f,i,p,v,l,x,g,m,_,k,d,r,c;console.log(e,"props");const n={testData:e==null?void 0:e.testData,setShowTestDetails:()=>{e.setShowTestDetails(`true ${e==null?void 0:e.testData}`)},isAddedtoList:e==null?void 0:e.isAddedtoList,testaddToReview:()=>{e.testaddToReview(e==null?void 0:e.testData,"labtest")},testRemoveToReview:e==null?void 0:e.testRemoveToReview};return t.jsx(_e,{children:e.testData&&t.jsx(M,{origin:"packageDetails",title:((s=e==null?void 0:e.testData)==null?void 0:s.service_name)||"N/A",subtitle:"Diagnostic Test",featureButtonText:"Book Test",reportTime:"N/A",testCount:((i=(f=e==null?void 0:e.testData)==null?void 0:f.tests)==null?void 0:i.length)||"1",originalPrice:(((v=(p=e==null?void 0:e.testData)==null?void 0:p.price)==null?void 0:v.actual_cost)||((l=e==null?void 0:e.testData)==null?void 0:l.actual_cost)||0).toString(),discountedPrice:(((g=(x=e==null?void 0:e.testData)==null?void 0:x.price)==null?void 0:g.discounted_price)||((m=e==null?void 0:e.testData)==null?void 0:m.raphacure_cost)||0).toString(),discount:(((k=(_=e==null?void 0:e.testData)==null?void 0:_.price)==null?void 0:k.discount_percentage)||((d=e==null?void 0:e.testData)==null?void 0:d.discount_percentage)||0).toString(),hoverTitle:(r=e==null?void 0:e.testData)==null?void 0:r.service_name,addToCart:()=>{},packageDetails:n},(c=e==null?void 0:e.testData)==null?void 0:c.service_code)})},be=T.div`
  width: fit-content;
  /* margin: auto; */
  .bottomSec {
    padding: 0 1rem;
  }
  .more-labs-action-btns {
    padding: 0 1rem;
    padding-bottom: 1rem;
  }
  .imgWrapper {
    /* min-height: 10rem; */
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
    line-height: 1.688rem;
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

  .opactiy-98 {
    opacity: 0.98;
  }

  .text-violet {
    color: #00c9aa;
  }

  .package_item {
    border-radius: 15px;
    background: linear-gradient(254deg, #dffae2 -29.24%, #cdfcff 107.99%);
    border: 1px solid rgba(0, 0, 0, 0.05);
    gap: 29px;
    padding: 9px 9px 9px 6px;

    @media only screen and (min-width: 1025px) {
      padding: 17px 17px 17px 13px;
    }

    .package_img {
      display: none;

      @media only screen and (min-width: 1025px) {
        display: block;
      }

      img {
        width: 227px;
        height: 184px;
        border-radius: 10px;
        object-fit: contain;
      }
    }

    .package_datalist {
      gap: 34px;
      width: 100%;
      .package_topdata {
        .package_title {
          color: #000;
          opacity: 0.7;
          font-size: 16px;
          line-height: 24px;
        }

        .package_info {
          color: #000;
          opacity: 0.4;
          font-size: 12px;
          line-height: 18px;
        }

        .package_price {
          margin-top: 2px;
          font-size: 16px;
          line-height: 24px;
          color: #000;
        }

        .package_preparation {
          margin-top: 4px;
          font-size: 12px;
          line-height: 18px;
          color: #000;
          opacity: 0.7;
        }
      }

      .package_bottomdata {
        width: 100%;
        gap: 14px;
        .package_fasting {
          gap: 9px;
          .fasting_icon {
            display: inline-flex;
            width: 11px;
            height: 11px;
            opacity: 0.5;
          }
          .package_fastingtext {
            font-size: 12px;
            line-height: 18px;
            color: #000;
            opacity: 0.5;
          }
        }

        .package_actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          .package_water {
            gap: 9px;
            width: 30%;
            .water_icon {
              display: inline-flex;
              width: 9px;
              height: 11px;
              opacity: 0.6;
            }
            .package_watertext {
              font-size: 12px;
              line-height: 18px;
              color: #000;
              opacity: 0.5;
            }
          }

          .package_bookbtn {
            gap: 11px;
            flex-wrap: wrap;
            width: 70%;
            justify-content: flex-end;

            .details-btn {
              border-radius: 10px;
              background: #ffffff;
              color: #9747ff;
              border: 1px solid #9747ff;
              font-size: 14px;
              line-height: 21px;
              width: 23.66%;
              padding: 10px;
            }

            .booknow_btn {
              width: 23.66%;
              .booknow-btn {
                border-radius: 10px;
                background: #9747ff;
                color: #fff;
                font-size: 14px;
                line-height: 21px;
                border: medium none;
                padding: 10px;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`,ye=e=>{var s,f,i,p,v,l,x,g,m,_,k,d,r,c;const n={testData:e==null?void 0:e.package,setShowTestDetails:()=>{e.toggleShowDetails(e.indexKey)},isAddedtoList:e==null?void 0:e.isAddedtoList,testaddToReview:()=>{e.packageaddToReview(e==null?void 0:e.package,"labpackage")},testRemoveToReview:e==null?void 0:e.packageRemoveToReview};return t.jsx(be,{children:e.package?t.jsx(t.Fragment,{children:t.jsx(M,{origin:"packageDetails",title:((s=e==null?void 0:e.package)==null?void 0:s.service_name)||"N/A",subtitle:"Diagnostic Test",featureButtonText:"Book Test",reportTime:"N/A",testCount:((i=(f=e==null?void 0:e.package)==null?void 0:f.tests)==null?void 0:i.length)||"1",originalPrice:(((v=(p=e==null?void 0:e.package)==null?void 0:p.price)==null?void 0:v.actual_cost)||((l=e==null?void 0:e.package)==null?void 0:l.actual_cost)||0).toString(),discountedPrice:(((g=(x=e==null?void 0:e.package)==null?void 0:x.price)==null?void 0:g.discounted_price)||((m=e==null?void 0:e.package)==null?void 0:m.raphacure_cost)||0).toString(),discount:(((k=(_=e==null?void 0:e.package)==null?void 0:_.price)==null?void 0:k.discount_percentage)||((d=e==null?void 0:e.package)==null?void 0:d.discount_percentage)||0).toString(),hoverTitle:(r=e==null?void 0:e.package)==null?void 0:r.service_name,addToCart:()=>{},packageDetails:n},(c=e==null?void 0:e.package)==null?void 0:c.service_code)}):null})},je=e=>{var m,_,k,d,r,c,j;console.log(e.testList,"12");const[n,s]=o.useState(0),[f,i]=o.useState(!1),[p,v]=o.useState(null),[l,x]=o.useState({});o.useEffect(()=>{s(e==null?void 0:e.landToPackage)},[e==null?void 0:e.landToPackage]);const g=h=>{x(u=>({...u,[h]:!u[h]}))};return t.jsx(ve,{children:t.jsxs("div",{className:"content_container",children:[t.jsx("div",{className:"content_tabNav",children:(m=e.tabsList)==null?void 0:m.map((h,u)=>t.jsx("button",{className:u===n?"content_tabNav_item selected":"content_tabNav_item",onClick:()=>s(u),children:h}))}),n===0&&t.jsxs(t.Fragment,{children:[e.testList&&((_=e.testList.tests)==null?void 0:_.length)>0&&t.jsx("div",{className:"testslist_container",children:(k=e.testList.tests)==null?void 0:k.map(h=>{const u=e.labBookingList.findIndex(y=>(y==null?void 0:y.service_code)===h.service_code),N=y=>{v(y)};return t.jsxs("div",{children:[t.jsx(ke,{isAddedtoList:u,testData:h,testaddToReview:e.testaddToReview,testRemoveToReview:e.testRemoveToReview,setShowTestDetails:()=>N(h.service_code)}),p===h.service_code&&t.jsx(le,{children:t.jsx(I,{item:h,onClose:()=>v(null)})})]},h.service_code)})}),!e.testList||((d=e.testList.tests)==null?void 0:d.length)===0?t.jsx("div",{className:"error_testlist",children:t.jsx("p",{className:"error_text",children:e.searchText?`No Results found for \`${e.searchText}\``:"Tests are currently unavailable!"})}):null]}),n===1&&t.jsxs("div",{className:"packageslist_container",children:[e.packagesList&&((r=e.packagesList.packages)==null?void 0:r.length)>0&&((c=e.packagesList.packages)==null?void 0:c.map((h,u)=>{const N=l[u]||!1,y=e.labBookingList.findIndex(C=>(C==null?void 0:C.service_code)===h.service_code);return t.jsxs(t.Fragment,{children:[t.jsx(ye,{isAddedtoList:y,indexKey:u,package:h,packageaddToReview:e.testaddToReview,packageRemoveToReview:e.testRemoveToReview,toggleShowDetails:g}),N&&t.jsx(I,{item:h,fromPackage:!0,onClose:()=>g(u)})]})})),!e.packagesList||((j=e.packagesList.packages)==null?void 0:j.length)===0?t.jsx("div",{className:"error_packagelist",children:t.jsx("p",{className:"error_text",children:e.searchText?`No Results found for \`${e.searchText}\``:"Packages are currently unavailable!!"})}):null]})]})})},Ce=T.div`
  width: 100%;

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

  .flex_start {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .toast_container {
    width: 100%;
    height: 118px;
    background: #FFFFFF;
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
    border: medium none;

    .toast-body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 5.625%;
      padding-right: 4.14%;

      .review_datalist {
        width: 78%;

        .review_datas {
          gap: 1rem;
          overflow-x: scroll;
          -ms-overflow-style: none; 
          scrollbar-width: none;  

          &::-webkit-scrollbar {
            display: none;
          }

          .review_data {
            position: relative;

            .review_content {
              display: inline-flex;
              flex-direction: column;
              justify-content: flex-start;
              background: #F1E6E6;
              width: 185px;
              padding: 8px 13px 0 13px;

              div {
                font-size: 16px;
                line-height: 24px;
                color: #000;
              }

              .review_text {
                min-height: 48px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
              }
            }

            .review_deleteactions {
              position: absolute;
              top: 0;
              right: 0;

              .review_deletebtn {
                appearance: none;
                border: medium none;
                padding: 0;
                background: transparent;

                &:hover {
                  background: transparent;
                }
              }
            }
          }
        } 
      }

      .review_actions {
        width: 19.92%;
        text-align: right;

        .next-btn {
          border-radius: 10px;
          background: #9747ff;
          color: #fff;
          font-size: 14px;
          line-height: 21px;
          border: medium none;
          padding: 10px;
          width: 100%;
        }
      }
    }
  }

`,Ne=e=>t.jsx(Ce,{children:e.labBookingList&&e.labBookingList.length>0&&t.jsx("div",{className:"fixed-bottom py-2",children:t.jsx(D,{className:"toast_container",show:e.showReview,children:t.jsxs(D.Body,{children:[t.jsx("div",{className:"review_datalist",children:e.labBookingList&&e.labBookingList.length&&t.jsx("div",{className:"review_datas flex_start",children:e.labBookingList.map(n=>{var s;return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"review_data",children:[t.jsxs("div",{className:"review_content",children:[t.jsx("div",{className:"review_text poppins-medium",children:n==null?void 0:n.service_name}),t.jsx("div",{className:"review_price poppins-medium",children:((s=n==null?void 0:n.price)==null?void 0:s.discounted_price).toFixed(2)??"0.00"})]}),t.jsx("div",{className:"review_deleteactions",children:t.jsx("button",{className:"review_deletebtn",onClick:()=>e.handleTestRemove(n),children:t.jsx("span",{className:"review_delelteicon",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:t.jsx("path",{d:"M10 0C4.42857 0 0 4.42857 0 10C0 15.5714 4.42857 20 10 20C15.5714 20 20 15.5714 20 10C20 4.42857 15.5714 0 10 0ZM13.8571 15L10 11.1429L6.14286 15L5 13.8571L8.85714 10L5 6.14286L6.14286 5L10 8.85714L13.8571 5L15 6.14286L11.1429 10L15 13.8571L13.8571 15Z",fill:"#FA1A1A"})})})})})]})})})})}),t.jsx("div",{className:"review_actions",children:t.jsx("button",{className:"next-btn poppins-semibold",onClick:()=>e.redirectToReview(),children:"Next"})})]})})})}),Se=e=>{const n=ce(),s=oe(),f=["Available Tests","Packages"],{vendorDetails:i,vendorPackageList:p,vendorTestList:v,selectedTest:l,selectedPackage:x}=E(a=>a.labtest),{user:g}=E(a=>a.auth),[m,_]=o.useState(""),[k,d]=o.useState(!1),r=o.useRef(""),[c,j]=o.useState(new Array),[h,u]=o.useState(!1),[N,y]=o.useState(!1),[C,R]=o.useState(!1);o.useEffect(()=>{console.log("fromPackage",C,x),!N&&(l&&(l!=null&&l.service_name)||x&&(x!=null&&x.service_name))&&S()},[l,x]),o.useEffect(()=>{var w,b;const a=(b=(w=e==null?void 0:e.match)==null?void 0:w.params)==null?void 0:b.vendorId;(!i||(i==null?void 0:i.vendorById)!==a)&&s(de(a))},[]),o.useEffect(()=>{var w,b;const a=(b=(w=e==null?void 0:e.match)==null?void 0:w.params)==null?void 0:b.vendorId;(i==null?void 0:i.vendorById)!==a&&s(re({searchText:m,vendorId:a}))},[m,C]),o.useEffect(()=>{var w,b;const a=(b=(w=e==null?void 0:e.match)==null?void 0:w.params)==null?void 0:b.vendorId;(i==null?void 0:i.vendorById)!==a&&s(ge({searchText:m,vendorId:a}))},[m,c]);const L=a=>{d(!1),r.current=a.target.value,a.target.value===""&&_("")},S=()=>{let a=[...c];if(l&&(l!=null&&l.service_name)){let w={...l,labtestType:"labtest"};a.push(w)}else{let w={...x,labtestType:"labpackage"};a.push(w),R(!0)}j([...a]),y(!0),u(!0)},G=async(a,w)=>{if(!(g!=null&&g.id))s(P(!0));else{let b=[...c];a={...a,labtestType:w},b.push(a),j([...b]),A.success(`'${a==null?void 0:a.service_name}' added for review successfully!`),u(!0)}},U=a=>{a.preventDefault(),r.current&&r.current.length>=3?(d(!1),_(r.current)):d(!0)},K=async()=>{g!=null&&g.id?(await s(xe({doctorDetails:{...{vendor:[],tests:c}},hospitalDetails:i==null?void 0:i.vendorById,categoryType:"labtest",slot1:{},slot2:{}})),await s(he({selectedTest:{},selectedPackage:{}})),n.push("/labtest/bookingReview")):s(P(!0))},F=async a=>{if(!(g!=null&&g.id))s(P(!0));else{let w=[...c];w.splice(w.findIndex(b=>(b==null?void 0:b.service_code)===(a==null?void 0:a.service_code)),1),j([...w]),A.error(`'${a==null?void 0:a.service_name}' removed from review List!`),c.length===0&&u(!1)}};return t.jsx(ue,{children:t.jsxs("div",{className:"container-fluid container-max package_container",children:[t.jsx("div",{className:"package_backcontainer",children:t.jsxs("button",{className:"packageBtnwrap inlineflex_center",onClick:()=>n.goBack(),children:[t.jsx("div",{className:"back-icon inlineflex_center",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",children:t.jsx("path",{d:"M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z",fill:"#444444"})})}),t.jsx("div",{className:"back-text poppins-medium",children:"Back"})]})}),t.jsxs("div",{className:"package_listcontainer",children:[null,t.jsxs("div",{className:"package_datacontainer w-100 px-0",children:[t.jsx("div",{className:"package_header",children:t.jsx(we,{vendor:i==null?void 0:i.vendorById})}),t.jsx("div",{className:"package_search text-center",children:t.jsx("div",{className:"package_searchbox",children:t.jsxs("form",{onSubmit:U,children:[t.jsx("input",{type:"text",placeholder:"Search Lab Test’s Or Packages",onChange:L,className:"package_searchInput poppins-regular round-shadow bg-white"}),k&&t.jsx("p",{className:"error_message",children:"Type atleast 3 characters!!"}),t.jsx("button",{type:"submit",className:"package_searchbtn poppins-regular",children:"Search"})]})})}),t.jsx("div",{className:"package_data",children:t.jsx(je,{tabsList:f,packagesList:p,testList:v,labBookingList:c,landToPackage:C?1:0,testaddToReview:G,testRemoveToReview:F,searchText:r.current})})]})]}),t.jsx("div",{className:"package_reviewcontainer",children:t.jsx(Ne,{showReview:h,labBookingList:c,handleTestRemove:F,redirectToReview:K})})]})})};export{Se as default};
