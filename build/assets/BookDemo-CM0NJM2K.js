import{a5 as de,a6 as Ce,a7 as Se,a8 as ze,a9 as Me,T as je,r as l,aa as Q,ab as z,y as se,ac as q,ad as Re,ae as ee,af as Ne,ag as te,ah as $,ai as E,aj as _e,ak as Pe,d as Ee,u as Ie,al as Y,j as r,am as De,an as Ye,ao as qe,ap as Ae,aq as Te}from"./index-DDOdRoFT.js";import{a as ne}from"./index-yoN86szv.js";import{P as Fe,g as $e}from"./PickerPanel-DijdoFhR.js";import{r as Le,a as Ve}from"./toInteger-DRM63Fnc.js";var L,ae;function Oe(){if(ae)return L;ae=1;var e=9007199254740991,c=Math.floor;function o(n,i){var a="";if(!n||i<1||i>e)return a;do i%2&&(a+=n),i=c(i/2),i&&(n+=n);while(i);return a}return L=o,L}var V,re;function Be(){if(re)return V;re=1;var e=Le(),c=e("length");return V=c,V}var O,ie;function He(){if(ie)return O;ie=1;var e="\\ud800-\\udfff",c="\\u0300-\\u036f",o="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",i=c+o+n,a="\\ufe0e\\ufe0f",t="["+e+"]",g="["+i+"]",f="\\ud83c[\\udffb-\\udfff]",s="(?:"+g+"|"+f+")",x="[^"+e+"]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",w="\\u200d",d=s+"?",p="["+a+"]?",k="(?:"+w+"(?:"+[x,b,v].join("|")+")"+p+d+")*",h=p+d+k,S="(?:"+[x+g+"?",g,b,v,t].join("|")+")",y=RegExp(f+"(?="+f+")|"+S+h,"g");function M(N){for(var j=y.lastIndex=0;y.test(N);)++j;return j}return O=M,O}var B,oe;function fe(){if(oe)return B;oe=1;var e=Be(),c=de(),o=He();function n(i){return c(i)?o(i):e(i)}return B=n,B}var H,le;function Ue(){if(le)return H;le=1;var e=Oe(),c=Ce(),o=Se(),n=de(),i=fe(),a=ze(),t=Math.ceil;function g(f,s){s=s===void 0?" ":c(s);var x=s.length;if(x<2)return x?e(s,f):s;var b=e(s,t(f/i(s)));return n(s)?o(a(b),0,f).join(""):b.slice(0,f)}return H=g,H}var U,ce;function We(){if(ce)return U;ce=1;var e=Ue(),c=fe(),o=Ve(),n=Me();function i(a,t,g){a=n(a),t=o(t);var f=t?c(a):0;return t&&f<t?e(t-f,g)+a:a}return U=i,U}var Ge=We();const Je=je(Ge);var Ke=10,Xe=20;function Ze(e){var c=e.fullscreen,o=e.validRange,n=e.generateConfig,i=e.locale,a=e.prefixCls,t=e.value,g=e.onChange,f=e.divRef,s=n.getYear(t||n.getNow()),x=s-Ke,b=x+Xe;o&&(x=n.getYear(o[0]),b=n.getYear(o[1])+1);for(var v=i&&i.year==="年"?"年":"",w=[],d=x;d<b;d++)w.push({label:"".concat(d).concat(v),value:d});return l.createElement(se,{size:c?void 0:"small",options:w,value:s,className:"".concat(a,"-year-select"),onChange:function(k){var h=n.setYear(t,k);if(o){var S=q(o,2),y=S[0],M=S[1],N=n.getYear(h),j=n.getMonth(h);N===n.getYear(M)&&j>n.getMonth(M)&&(h=n.setMonth(h,n.getMonth(M))),N===n.getYear(y)&&j<n.getMonth(y)&&(h=n.setMonth(h,n.getMonth(y)))}g(h)},getPopupContainer:function(){return f.current}})}function Qe(e){var c=e.prefixCls,o=e.fullscreen,n=e.validRange,i=e.value,a=e.generateConfig,t=e.locale,g=e.onChange,f=e.divRef,s=a.getMonth(i||a.getNow()),x=0,b=11;if(n){var v=q(n,2),w=v[0],d=v[1],p=a.getYear(i);a.getYear(d)===p&&(b=a.getMonth(d)),a.getYear(w)===p&&(x=a.getMonth(w))}for(var k=t.shortMonths||a.locale.getShortMonths(t.locale),h=[],S=x;S<=b;S+=1)h.push({label:k[S],value:S});return l.createElement(se,{size:o?void 0:"small",className:"".concat(c,"-month-select"),value:s,options:h,onChange:function(M){g(a.setMonth(i,M))},getPopupContainer:function(){return f.current}})}function et(e){var c=e.prefixCls,o=e.locale,n=e.mode,i=e.fullscreen,a=e.onModeChange;return l.createElement(Re,{onChange:function(g){var f=g.target.value;a(f)},value:n,size:i?void 0:"small",className:"".concat(c,"-mode-switch")},l.createElement(ee,{value:"month"},o.month),l.createElement(ee,{value:"year"},o.year))}function tt(e){var c=e.prefixCls,o=e.fullscreen,n=e.mode,i=e.onChange,a=e.onModeChange,t=l.useRef(null),g=l.useContext(Q),f=l.useMemo(function(){return z(z({},g),{isFormItemInput:!1})},[g]),s=z(z({},e),{onChange:i,fullscreen:o,divRef:t});return l.createElement("div",{className:"".concat(c,"-header"),ref:t},l.createElement(Q.Provider,{value:f},l.createElement(Ze,z({},s)),n==="month"&&l.createElement(Qe,z({},s))),l.createElement(et,z({},s,{onModeChange:a})))}function nt(e){function c(a,t){return a&&t&&e.getYear(a)===e.getYear(t)}function o(a,t){return c(a,t)&&e.getMonth(a)===e.getMonth(t)}function n(a,t){return o(a,t)&&e.getDate(a)===e.getDate(t)}var i=function(t){var g=t.prefixCls,f=t.className,s=t.style,x=t.dateFullCellRender,b=t.dateCellRender,v=t.monthFullCellRender,w=t.monthCellRender,d=t.headerRender,p=t.value,k=t.defaultValue,h=t.disabledDate,S=t.mode,y=t.validRange,M=t.fullscreen,N=M===void 0?!0:M,j=t.onChange,A=t.onPanelChange,T=t.onSelect,W=l.useContext(Ne),ue=W.getPrefixCls,me=W.direction,I=ue("picker",g),C="".concat(I,"-calendar"),G=e.getNow(),ge=te(function(){return p||e.getNow()},{defaultValue:k,value:p}),J=q(ge,2),_=J[0],pe=J[1],he=te("month",{value:S}),K=q(he,2),P=K[0],xe=K[1],D=l.useMemo(function(){return P==="year"?"month":"date"},[P]),be=l.useCallback(function(m){var u=y?e.isAfter(y[0],m)||e.isAfter(m,y[1]):!1;return u||!!(h!=null&&h(m))},[h,y]),X=function(u,R){A==null||A(u,R)},ve=function(u){pe(u),n(u,_)||((D==="date"&&!o(u,_)||D==="month"&&!c(u,_))&&X(u,P),j==null||j(u))},Z=function(u){xe(u),X(_,u)},F=function(u){ve(u),T==null||T(u)},ke=function(){var u=t.locale,R=z(z({},Pe),u);return R.lang=z(z({},R.lang),(u||{}).lang),R},ye=l.useCallback(function(m){return x?x(m):l.createElement("div",{className:$("".concat(I,"-cell-inner"),"".concat(C,"-date"),E({},"".concat(C,"-date-today"),n(G,m)))},l.createElement("div",{className:"".concat(C,"-date-value")},Je(String(e.getDate(m)),2,"0")),l.createElement("div",{className:"".concat(C,"-date-content")},b&&b(m)))},[x,b]),we=l.useCallback(function(m,u){if(v)return v(m);var R=u.shortMonths||e.locale.getShortMonths(u.locale);return l.createElement("div",{className:$("".concat(I,"-cell-inner"),"".concat(C,"-date"),E({},"".concat(C,"-date-today"),o(G,m)))},l.createElement("div",{className:"".concat(C,"-date-value")},R[e.getMonth(m)]),l.createElement("div",{className:"".concat(C,"-date-content")},w&&w(m)))},[v,w]);return l.createElement(_e,{componentName:"Calendar",defaultLocale:ke},function(m){return l.createElement("div",{className:$(C,E(E(E({},"".concat(C,"-full"),N),"".concat(C,"-mini"),!N),"".concat(C,"-rtl"),me==="rtl"),f),style:s},d?d({value:_,type:P,onChange:F,onTypeChange:Z}):l.createElement(tt,{prefixCls:C,value:_,generateConfig:e,mode:P,fullscreen:N,locale:m.lang,validRange:y,onChange:F,onModeChange:Z}),l.createElement(Fe,{value:_,prefixCls:I,locale:m.lang,generateConfig:e,dateRender:ye,monthCellRender:function(R){return we(R,m.lang)},onSelect:F,mode:D,picker:D,disabledDate:be,hideHeader:!0}))})};return i}var at=nt($e);const rt=Ee.div`
  background-color: #ffffff;
  font-family: Inter, sans-serif;
  .p-75 {
    padding: 5rem;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: -20px;
  }
  .booking-container {
    display: flex;
    color: #333;
    border-radius: 5px;
    margin: 0 auto;
    padding: 0px;
    border: 1px solid #ddd;
    display: grid;
    grid-template-columns: 1.5fr 2fr;
  }
  .calendar-container {
    width: 50%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
  }

  .left-panel,
  .right-panel {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }

  .left-panel {
    flex: 1;
    padding: 30px;
    background-color: #ffffff;
    border-right: 1px solid #ddd;
    border-radius: 5px;
  }

  .left-panel h2 {
    color: #003b8e;
    font-weight: bold;
    margin-bottom: 10px;
    font-weight: 600px;
    font-size: 16px;
  }

  .left-panel h1 {
    color: #002e66;
    font-size: 32px;
    font-weight: 700px;
    margin-bottom: 20px;
  }

  .info {
    background-color: #ecffec;
  }

  .info p {
    display: flex;
    align-items: center;
    margin: 8px 0;
    font-size: 16px;
    font-weight: 600px;
    color: #555;
    line-height: 19.36px;
  }

  .key-features-container h3 {
    margin-top: 25px;
    font-size: 18px;
    font-weight: 600;
    font-family: Inter;
    color: #252b61;
    line-height: 21.78px;
  }

  .key-features-container ul {
    list-style: none;
    padding: 0;
    margin: 15px 0;
  }

  .key-features-container li {
    margin: 10px 0;
    font-size: 16px;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    line-height: 19.36px;
  }

  .key-features-container li::before {
    content: "•";
    margin-right: 8px;
    color: #002e66;
    font-size: 1.2em;
  }

  .back-button {
    background: none;
    border: none;
    border-radius: 53px;
    font-size: 1.5em;
    cursor: pointer;

    margin-bottom: 20px;
    background-color: #003a80;
    color: #fff;
    font-weight: bold;
  }

  .right-panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 7rem;
    background-color: #ffffff;
    border-radius: 15px;

    h2 {
      font-weight: 600px;
      font-size: 20.8px;
      margin-top: 10px;
      width: 210px;
      font-family: Inter;
      color: #000;
    }
  }

  .calendar-time-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2em;
    margin-bottom: 20px;
    color: #003a80;
    font-weight: bold;
    margin-left: 275px;
  }

  .calendar-header span {
    margin: 0 30px;
  }

  .nav-button {
    background: none;
    border: none;
    font-size: 20px;
    color: #003a80;
    cursor: pointer;
  }

  .calendar-days {
    width: 54px;
    height: 54px;
  }

  .weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;
    margin-left: 8px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
    text-align: center;
  }

  .dates-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
  }

  .day-button {
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    background-color: #f0f4ff;
    color: #003a80;
    font-size: 0.9em;
    font-weight: bold;
  }

  .day-button:hover {
    background-color: #d9e6ff;
  }

  .day-button.selected {
    background-color: #252b61;
    color: #fff;
    font-weight: bold;
  }

  .day-button.disabled {
    background-color: #f2f2f2;
    color: #aaa;
    cursor: not-allowed;
  }

  .time-slots h3 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #003a80;
    margin-left: 12px;
  }

  .time-slots-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    height: 590px;
    overflow-y: scroll;
    padding: 0 1rem;
  }

  .time-slots-grid::-webkit-scrollbar {
    width: 5px;
  }

  .time-slots-grid::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  .time-slots-grid::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .time-slots-grid::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .time-slot-button {
    padding: 10px;
    font-size: 12px;
    border: 1px solid #b5c8db;
    border-radius: 5px;
    background-color: #ffffff;
    color: #252b61;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    width: 150px ;
  }

  .time-slot-button:hover {
    background-color: #d9e6ff;
  }
  .time-slot-button.selected {
    font-weight: bold;
    background-color: #eaedfc;
    width: fit-content ;
    border: none;
  }

  .time-slot-button:disabled {
    background-color: #f2f2f2;
    color: #aaa;
    cursor: not-allowed;
  }
  .time-slot-container {
    display: flex;
    align-items: center;
    gap: 10px;

    button {
      /* width: 100%; */
      height: 100%;
    }
  }

  .selected-time-container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .selected-time-container p {
    font-size: 16px;
    font-weight: bold;
    color: #003a80;
  }

  .next-button {
    padding: 8px 16px;
    font-size: 14px;
    color: #fff;
    background-color: #252b61;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    display: inline-block;
    width: fit-content;
  }

  .next-button:hover {
    background-color: #002e66;
  }

  .calendar-time-container {
    justify-content: center;
  }
  .react-calendar {
    border: none;
  }
  button.react-calendar__tile {
    border-radius: 50%;
  }

  .doctor-tool-card {
    background-color: #ffffff;
    border-radius: 15px;
    border-right: 1px solid rgba(0, 0, 0, 0.26);
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    & > div {
      padding: 0 2rem;
      font-family: Inter;
    }
  }

  .doctor-tool-card > div:last-child {
    margin-bottom: 70px;
    margin-top: 25px;
  }

  .header {
    margin-bottom: 1rem;
  }

  .back-icon {
    font-size: 1.5rem;
    color: #ffffff;
    cursor: pointer;
    background-color: #003a80;
    border-radius: 50%;
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem auto;
  }

  .company-name {
    font-size: 16px;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    margin-top: 0.5rem;
  }

  .title {
    font-weight: 600;
    font-size: 30px;
    color: #00254d;
    margin-top: 0.5rem;
  }

  .details-section {
    background-color: #f0f8f4;

    padding: 1rem 2rem !important;
  }

  .detail {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .detail span {
    font-weight: 600;
  }

  .icon {
    font-size: 1.2rem;
    color: #666;
    margin-right: 0.5rem;
  }

  .key-features h3 {
    font-size: 18px;
    font-weight: bold;
    color: #00254d;
    margin-bottom: 0.5rem;
  }

  .key-features ul {
    list-style: none;
    padding-left: 0;
  }

  .key-features li {
    font-size: 0.9rem;
    font-weight: bolder;
    margin-bottom: 0.3rem;
    color: #333;
  }

  .key-features li::before {
    content: "•";
    color: #00254d;
    display: inline-block;
    width: 1rem;
  }
  .ant-picker-calendar-header {
    text-wrap: nowrap;
    margin-top: 45px;
  }
  .ant-picker-date-panel {
    .ant-picker-cell-disabled::before {
      pointer-events: none;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      margin: auto;
    }
    .ant-picker-cell-inner.ant-picker-calendar-date.ant-picker-calendar-date-today::before {
      border-radius: 50%;
      margin: auto;
    }
    .ant-picker-cell-inner.ant-picker-calendar-date {
      border-radius: 50%;
      padding: 5px 8px;
      height: auto;
    }
  }
  .ant-picker-month-panel {
    td.ant-picker-cell-disabled::before {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin: auto;
    }
    td.ant-picker-cell {
      & > div.ant-picker-cell-inner {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: auto;
      }
    }
  }

  .ant-picker-date-panel {
    .ant-picker-cell {
      &.ant-picker-cell-in-view {
        .ant-picker-cell-inner.ant-picker-calendar-date {
          border-radius: 50%;
          padding: 5px 8px;
          height: auto;
        }
        .ant-picker-calendar-date-today::before {
          border-radius: 50%;
          margin: auto;
        }
      }
      &:not(.ant-picker-cell-in-view) {
        .ant-picker-cell-inner {
          visibility: hidden;
        }
      }
    }
  }

  .calendar-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    gap: 50px;
  }

  .calendar-navigation button {
    background-color: #edf4fe;
    color: #40a4f1;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 25px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calendar-navigation span {
    font-size: 18px;
    font-weight: bold;
    color: #6c7680;
    width: 150px;
    text-align: center;
    display: inline-block;
  }

  button:disabled {
    opacity: 0.5;
    background: white;
  }

  .ant-picker-calendar.ant-picker-calendar-mini {
    @media screen and (min-width: 1200px) {
      scale: 1.23;
    }
  }

  .calendar-time-container,
  .ant-picker-calendar.ant-picker-calendar-mini,
  .ant-picker-panel,
  .ant-picker-date-panel,
  .ant-picker-body,
  table.ant-picker-content {
    height: 100%;
  }

  .ant-picker-date-panel
    .ant-picker-cell.ant-picker-cell-in-view
    .ant-picker-cell-inner.ant-picker-calendar-date {
    background-color: #eaedfc;
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    color: white;
    background-color: #252b61 !important;
  }

  .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner {
  }

  .ant-picker-date-panel .ant-picker-cell.ant-picker-cell-in-view.past-date {
    background-color: transparent !important;
  }
  .ant-picker-cell-disabled {
    .ant-picker-cell-inner.ant-picker-calendar-date {
      background-color: #fff !important;
    }
  }
  .ant-picker-cell-disabled::before {
    background-color: #fff !important;
  }

  .ant-picker-cell-in-view.ant-picker-cell-today
    .ant-picker-cell-inner::before {
    border: 1px solid #252b61 !important;
  }
  @media screen and (max-width: 1000px) {
    .booking-container {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 1200px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */
      padding: 2rem;
      height: auto;
      min-height: 100vh;
    }

    .time-slots {
      margin: 0 auto;
    }

    .left-panel,
    .right-panel {
      padding: 20px;
    }

    .right-panel h2 {
      font-size: 18px;
      text-align: center;
      margin-bottom: 1rem;
    }

    .calendar-time-container {
      gap: 20px;
      flex-direction: column;
      @media screen and (min-width: 1200px) {
        scale: 1.23;
      }
    }

    .time-slot-container {
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    .p-75 {
      padding: 1.5rem;
    }

    .calendar-header {
      flex-direction: column;
      align-items: center;
      font-size: 1em;
    }

    .nav-button {
      font-size: 1em;
    }

    .calendar-days {
      width: 45px;
      height: 45px;
    }

    .day-button {
      width: 35px;
      height: 35px;
      line-height: 35px;
      font-size: 0.8em;
    }

    .key-features h3 {
      font-size: 16px;
    }

    .key-features li {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 480px) {
    .arrow-icon {
      display: none;
    }
  }

  @media screen and (max-width: 392px) {
    .p-75 {
      padding: 1rem;
      
    }

    .back-icon {
      font-size: 1.9rem;
      margin: -16.5rem auto;
      margin-left: -32px;
    }

    .booking-container {
      border: transparent !important;
      margin-top: unset !important;
      margin-bottom: unset !important;
    }

    .company-name {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: black;
    }

    .title {
      text-align: center;
      font-size: 28px !important;
      font-weight: 600;
    }

    .header h2 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    .details-section {
      font-size: 0.9rem;
    }

    .calendar-container {
      width: 100%;
      padding: 10px;
    }

    .day-button {
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-size: 0.7em;
    }

    .time-slots-grid {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
      overflow-y: scroll;
      height: 800px;
      
    }

    .time-slots h3 {
      font-size: 26px;
    }
    .time-slot-button {
      
      margin: auto;
      width: 300px;
      padding: 20px 10px;
      font-size: 21px;
    }

    .time-slot-button.selected {
      width: 140px;
    }

    .next-button {
      font-size: 0.8rem;
      width: 140px;
      padding: 20px 10px;
      font-size: 21px;
    }

    .right-panel {
      border-left: unset !important;
    }

    .key-features-container {
      background-color: #eaedfc;
      padding: 20px !important;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      margin-top: 25px !important;
    }

    .key-features-container.active {
      background-color: #fff;
    }

    .key-features-container h3 {
      color: #252b61;

      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
    }

    .key-features-list {
      display: none;
      margin-top: 10px;
      list-style-type: disc;
      /* margin-left: 0px; */
      font-size: 16px;
      padding-left: 21px;
      li {
        font-weight: 600;
        margin-left: -10px !important;
      }
    }

    .key-features-container.active .key-features-list {
      display: block;
    }

    .key-features-icon {
      transform: rotate(0deg);
      transition: transform 0.3s ease;
    }

    .key-features-container.active .key-features-icon {
      transform: rotate(180deg);
    }

    .doctor-tool-card > div:last-child {
      margin-bottom: 50px;
    }
  }

  .time-slots-container {
    width: 100%;
    .back-icon {
      margin: 0;
      @media screen and (min-width: 1200px) {
        display: none;
      }
    }
    .time-slots {
      text-align: center;
      overflow-y: scroll;
    }
    .time-slot-container {
      margin: auto;
      /* width: 100%; */
    }
  }
`,it=()=>{const e=[];for(let c=9;c<=17;c++)for(let o=0;o<60;o+=30){const n=c>12?c-12:c,i=c>=12?"PM":"AM",a=`${n}:${o.toString().padStart(2,"0")} ${i}`;e.push(a)}return e},st=()=>{const e=Ie(),[c,o]=l.useState(Y()),[n,i]=l.useState(null),[a,t]=l.useState(null),[g,f]=l.useState(!0),[s,x]=l.useState(!0),b=()=>{x(!s)},v=d=>{o(p=>d==="prev"&&p.isSame(Y(),"month")?p:d==="prev"?p.clone().subtract(1,"month"):p.clone().add(1,"month"))},w=()=>{const d=n?it():[],p=()=>{if(a){const k=n.format("YYYY-MM-DD");e.push("/bookdemo/form",{selectedDate:k,selectedTime:a})}};return d.map((k,h)=>r.jsxs("div",{className:"time-slot-container",children:[r.jsx("button",{className:`time-slot-button ${a===k?"selected":""}`,onClick:()=>t(k),children:k}),a===k&&r.jsx("button",{className:"next-button",onClick:p,children:"Next"})]},h))};return l.useEffect(()=>{const d=()=>{const p=window.innerWidth;f(!(n&&p<1200))};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[n]),r.jsx(rt,{children:r.jsxs("div",{className:"p-75 align-items-baseline wrapper",children:[g&&r.jsxs("div",{className:"booking-container",children:[r.jsxs("div",{className:"doctor-tool-card",children:[r.jsxs("div",{className:"header",children:[r.jsx(ne,{size:32,className:"back-icon",onClick:()=>e.push("/")}),r.jsx("h3",{className:"company-name",children:"Raphaplus"}),r.jsxs("h2",{className:"title",children:["Experience Rapha + ",r.jsx("br",{}),"Clinic Management ",r.jsx("br",{}),"Doctor Tool"]})]}),r.jsxs("div",{className:"details-section",children:[r.jsxs("div",{className:"detail",children:[r.jsx(De,{className:"icon"}),r.jsx("span",{children:"15 min"})]}),r.jsxs("div",{className:"detail",children:[r.jsx(Ye,{className:"icon"}),r.jsxs("span",{children:["Web conferencing details provided ",r.jsx("br",{}),"upon confirmation."]})]}),r.jsxs("div",{className:"detail",children:[r.jsx(qe,{className:"icon"}),r.jsx("span",{children:"India Standard Time"})]})]}),r.jsxs("div",{className:`key-features-container ${s?"active":""}`,onClick:b,children:[r.jsxs("h3",{children:["Key Features:",s?r.jsx(Ae,{className:"arrow-icon"}):r.jsx(Te,{className:"arrow-icon"})]}),r.jsxs("ul",{className:"key-features-list",children:[r.jsx("li",{children:"Effortless Multi-Clinic Management"}),r.jsx("li",{children:"Patient Management"}),r.jsx("li",{children:"Customize Rx"}),r.jsx("li",{children:"Robust Appointment Scheduling"})]})]})]}),r.jsxs("div",{className:"right-panel",children:[r.jsx("h2",{children:"Select a Date & Time"}),r.jsxs("div",{className:"calendar-time-container",children:[r.jsxs("div",{className:"calendar-navigation",children:[r.jsx("button",{onClick:()=>v("prev"),disabled:c.isSame(Y(),"month"),children:"<"}),r.jsx("span",{children:c.format("MMMM YYYY")}),r.jsx("button",{onClick:()=>v("next"),children:">"})]}),r.jsx(at,{fullscreen:!1,value:c,onPanelChange:d=>o(d),onSelect:d=>{i(d),o(d)},disabledDate:d=>d&&(d<Y().startOf("day")||d.day()===0||d.day()===6),headerRender:()=>null})]})]})]}),n&&r.jsxs("div",{className:"time-slots-container",children:[r.jsx(ne,{size:32,className:"back-icon",onClick:()=>i(null)}),r.jsxs("div",{className:`time-slots ${n?"":"hidden"}`,children:[r.jsx("h3",{children:n.format("dddd, MMMM D")}),r.jsx("div",{className:"time-slots-grid",children:w()})]})]})]})})};export{st as default};
