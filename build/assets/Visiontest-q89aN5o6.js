import{r as p,bD as B,bE as w,fm as L,fn as S,fo as H,fp as V,W as x,ck as y,gE as $,ah as F,ai as O,af as A,ab as I,b$ as K,d as z,u as T,j as t,E as j,a3 as U}from"./index-BHf3qlKB.js";import{E as W}from"./Eyecare.styled-C2Nwxm5K.js";var X={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},Z=function(u,c){return p.createElement(B,w(w({},u),{},{ref:c,icon:X}))},G=p.forwardRef(Z);function q(i){var u=i.pageXOffset,c="scrollLeft";if(typeof u!="number"){var a=i.document;u=a.documentElement[c],typeof u!="number"&&(u=a.body[c])}return u}function J(i){var u,c,a=i.ownerDocument,e=a.body,r=a&&a.documentElement,n=i.getBoundingClientRect();return u=n.left,c=n.top,u-=r.clientLeft||e.clientLeft||0,c-=r.clientTop||e.clientTop||0,{left:u,top:c}}function Q(i){var u=J(i),c=i.ownerDocument,a=c.defaultView||c.parentWindow;return u.left+=q(a),u.left}var Y=function(i){L(c,i);var u=S(c);function c(){var a;H(this,c);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return a=u.call.apply(u,[this].concat(r)),a.onHover=function(o){var s=a.props,d=s.onHover,l=s.index;d(o,l)},a.onClick=function(o){var s=a.props,d=s.onClick,l=s.index;d(o,l)},a.onKeyDown=function(o){var s=a.props,d=s.onClick,l=s.index;o.keyCode===13&&d(o,l)},a}return V(c,[{key:"getClassName",value:function(){var e=this.props,r=e.prefixCls,n=e.index,o=e.value,s=e.allowHalf,d=e.focused,l=n+1,h=r;return o===0&&n===0&&d?h+=" ".concat(r,"-focused"):s&&o+.5>=l&&o<l?(h+=" ".concat(r,"-half ").concat(r,"-active"),d&&(h+=" ".concat(r,"-focused"))):(h+=l<=o?" ".concat(r,"-full"):" ".concat(r,"-zero"),l===o&&d&&(h+=" ".concat(r,"-focused"))),h}},{key:"render",value:function(){var e=this.onHover,r=this.onClick,n=this.onKeyDown,o=this.props,s=o.disabled,d=o.prefixCls,l=o.character,h=o.characterRender,v=o.index,m=o.count,f=o.value,b=typeof l=="function"?l(this.props):l,g=x.createElement("li",{className:this.getClassName()},x.createElement("div",{onClick:s?null:r,onKeyDown:s?null:n,onMouseMove:s?null:e,role:"radio","aria-checked":f>v?"true":"false","aria-posinset":v+1,"aria-setsize":m,tabIndex:s?-1:0},x.createElement("div",{className:"".concat(d,"-first")},b),x.createElement("div",{className:"".concat(d,"-second")},b)));return h&&(g=h(g,this.props)),g}}]),c}(x.Component);function M(){}var R=function(i){L(c,i);var u=S(c);function c(a){var e;H(this,c),e=u.call(this,a),e.stars=void 0,e.rate=void 0,e.onHover=function(n,o){var s=e.props.onHoverChange,d=e.getStarValue(o,n.pageX),l=e.state.cleanedValue;d!==l&&e.setState({hoverValue:d,cleanedValue:null}),s(d)},e.onMouseLeave=function(){var n=e.props.onHoverChange;e.setState({hoverValue:void 0,cleanedValue:null}),n(void 0)},e.onClick=function(n,o){var s=e.props.allowClear,d=e.state.value,l=e.getStarValue(o,n.pageX),h=!1;s&&(h=l===d),e.onMouseLeave(),e.changeValue(h?0:l),e.setState({cleanedValue:h?l:null})},e.onFocus=function(){var n=e.props.onFocus;e.setState({focused:!0}),n&&n()},e.onBlur=function(){var n=e.props.onBlur;e.setState({focused:!1}),n&&n()},e.onKeyDown=function(n){var o=n.keyCode,s=e.props,d=s.count,l=s.allowHalf,h=s.onKeyDown,v=s.direction,m=v==="rtl",f=e.state.value;o===y.RIGHT&&f<d&&!m?(l?f+=.5:f+=1,e.changeValue(f),n.preventDefault()):o===y.LEFT&&f>0&&!m||o===y.RIGHT&&f>0&&m?(l?f-=.5:f-=1,e.changeValue(f),n.preventDefault()):o===y.LEFT&&f<d&&m&&(l?f+=.5:f+=1,e.changeValue(f),n.preventDefault()),h&&h(n)},e.saveRef=function(n){return function(o){e.stars[n]=o}},e.saveRate=function(n){e.rate=n};var r=a.value;return r===void 0&&(r=a.defaultValue),e.stars={},e.state={value:r,focused:!1,cleanedValue:null},e}return V(c,[{key:"componentDidMount",value:function(){var e=this.props,r=e.autoFocus,n=e.disabled;r&&!n&&this.focus()}},{key:"getStarDOM",value:function(e){return $(this.stars[e])}},{key:"getStarValue",value:function(e,r){var n=this.props,o=n.allowHalf,s=n.direction,d=s==="rtl",l=e+1;if(o){var h=this.getStarDOM(e),v=Q(h),m=h.clientWidth;(d&&r-v>m/2||!d&&r-v<m/2)&&(l-=.5)}return l}},{key:"focus",value:function(){var e=this.props.disabled;e||this.rate.focus()}},{key:"blur",value:function(){var e=this.props.disabled;e||this.rate.blur()}},{key:"changeValue",value:function(e){var r=this.props.onChange;"value"in this.props||this.setState({value:e}),r(e)}},{key:"render",value:function(){for(var e=this.props,r=e.count,n=e.allowHalf,o=e.style,s=e.id,d=e.prefixCls,l=e.disabled,h=e.className,v=e.character,m=e.characterRender,f=e.tabIndex,b=e.direction,g=this.state,E=g.value,N=g.hoverValue,D=g.focused,k=[],P=l?"".concat(d,"-disabled"):"",C=0;C<r;C+=1)k.push(x.createElement(Y,{ref:this.saveRef(C),index:C,count:r,disabled:l,prefixCls:"".concat(d,"-star"),allowHalf:n,value:N===void 0?E:N,onClick:this.onClick,onHover:this.onHover,key:C,character:v,characterRender:m,focused:D}));var _=F(d,P,h,O({},"".concat(d,"-rtl"),b==="rtl"));return x.createElement("ul",{className:_,style:o,id:s,onMouseLeave:l?null:this.onMouseLeave,tabIndex:l?-1:f,onFocus:l?null:this.onFocus,onBlur:l?null:this.onBlur,onKeyDown:l?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},k)}}],[{key:"getDerivedStateFromProps",value:function(e,r){return"value"in e&&e.value!==void 0?w(w({},r),{},{value:e.value}):r}}]),c}(x.Component);R.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:M,character:"★",onHoverChange:M,tabIndex:0,direction:"ltr"};var ee=function(i,u){var c={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&u.indexOf(a)<0&&(c[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,a=Object.getOwnPropertySymbols(i);e<a.length;e++)u.indexOf(a[e])<0&&Object.prototype.propertyIsEnumerable.call(i,a[e])&&(c[a[e]]=i[a[e]]);return c},te=p.forwardRef(function(i,u){var c=i.prefixCls,a=i.tooltips,e=i.character,r=e===void 0?p.createElement(G,null):e,n=ee(i,["prefixCls","tooltips","character"]),o=function(m,f){var b=f.index;return a?p.createElement(K,{title:a[b]},m):m},s=p.useContext(A),d=s.getPrefixCls,l=s.direction,h=d("rate",c);return p.createElement(R,I({ref:u,character:r,characterRender:o},n,{prefixCls:h,direction:l}))});const ae=i=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 14 14",fill:"none",...i},p.createElement("path",{d:"M6.04894 1.42705C6.3483 0.505742 7.6517 0.505741 7.95106 1.42705L8.79611 4.02786C8.92999 4.43989 9.31394 4.71885 9.74717 4.71885H12.4818C13.4505 4.71885 13.8533 5.95846 13.0696 6.52786L10.8572 8.13525C10.5067 8.3899 10.3601 8.84127 10.494 9.25329L11.339 11.8541C11.6384 12.7754 10.5839 13.5415 9.80017 12.9721L7.58779 11.3647C7.2373 11.1101 6.7627 11.1101 6.41222 11.3647L4.19983 12.9721C3.41612 13.5415 2.36164 12.7754 2.66099 11.8541L3.50604 9.25329C3.63992 8.84127 3.49326 8.3899 3.14277 8.13525L0.930391 6.52787C0.146677 5.95846 0.549452 4.71885 1.51818 4.71885H4.25283C4.68606 4.71885 5.07001 4.43989 5.20389 4.02786L6.04894 1.42705Z",fill:"#FBBC04"})),ne=i=>p.createElement("svg",{width:11,height:11,viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},p.createElement("path",{id:"Vector",opacity:.8,fillRule:"evenodd",clipRule:"evenodd",d:"M1.40056 0.471681C2.08701 -0.247765 3.21738 -0.119929 3.79215 0.689893L4.50398 1.69117C4.97215 2.34997 4.93041 3.27039 4.37482 3.85248L4.24057 3.99399C4.22541 4.05341 4.22387 4.11577 4.23606 4.17594C4.2716 4.41853 4.46394 4.93225 5.26941 5.77656C6.07487 6.62086 6.5656 6.82302 6.79912 6.86108C6.8579 6.87425 6.91882 6.87242 6.9768 6.85572L7.20693 6.61432C7.70104 6.09704 8.45913 6.00012 9.07056 6.35033L10.1479 6.9687C11.0713 7.49669 11.3042 8.81904 10.5484 9.61162L9.74687 10.4512C9.49417 10.7158 9.15461 10.9364 8.74059 10.9774C7.71966 11.0779 5.34104 10.9494 2.84059 8.3291C0.5071 5.88299 0.0592409 3.74962 0.00227145 2.6984C-0.0259312 2.16684 0.2121 1.71733 0.515561 1.39983L1.40056 0.471681ZM3.11528 1.22442C2.82931 0.821891 2.29684 0.789783 1.99677 1.10432L1.1112 2.03187C0.925063 2.22689 0.835943 2.44213 0.847224 2.64786C0.892348 3.48325 1.25334 5.40791 3.43736 7.69706C5.72855 10.098 7.84431 10.1699 8.66219 10.0891C8.82915 10.073 8.99498 9.98145 9.1501 9.81913L9.95105 8.97898C10.2771 8.63769 10.2054 8.01576 9.74405 7.75176L8.6667 7.13399C8.36888 6.96394 8.0203 7.01983 7.8037 7.24696L7.54705 7.51631L7.24811 7.19999C7.54706 7.51631 7.54593 7.5169 7.54593 7.5169L7.54536 7.51809L7.54367 7.51988L7.53972 7.52344L7.53126 7.53177C7.50728 7.55484 7.48163 7.57591 7.45455 7.59479C7.40943 7.62631 7.34964 7.66139 7.27462 7.69052C7.12232 7.75057 6.92039 7.78268 6.67108 7.74225C6.18204 7.66317 5.53395 7.31177 4.67264 6.40919C3.81189 5.50662 3.47571 4.8276 3.40013 4.31269C3.36121 4.04989 3.39224 3.83702 3.44977 3.67649C3.48167 3.58627 3.52699 3.50197 3.58401 3.42676L3.60206 3.40595L3.60996 3.39703L3.61334 3.39346L3.61504 3.39168L3.61616 3.39049L3.77861 3.22044C4.02003 2.96655 4.05387 2.54618 3.82656 2.2257L3.11528 1.22442Z",fill:"black"})),se=z.div`
.custom-modal .modal-dialog {
    max-width: 900px; /* Increase the width of the modal */
    margin: 1.75rem auto;
  }
  
  .custom-modal .modal-content {
    padding: 20px;
    border-radius: 10px;
  }
  
  .clinic-modal-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  
  .clinic-image-modal {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    margin-right: 20px;
  }
  
  .clinic-modal-info {
    flex-grow: 1;
  }
  
  .clinic-modal-info h4 {
    margin-bottom: 10px;
    color: #000;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
  }
  
  .clinic-modal-info p {
    margin: 5px 0;
    color: #000;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
  .clinic-modal-info .clinic-color{
    color: #34A853;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
  }
  
  .appointment-times h5 {
    margin-top: 20px;
    color: #000;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
  }
  
  .time-slots {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px; */
    margin-top: 10px;
  }
  .slotbuttons{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap:10px;

  }
  .slot-category {
    margin-bottom: 20px;
  }
  
  .slot-category h6 {
    margin-bottom: 10px;
    color: #000;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
  }
  
  .time-slot-btn {
    background-color: #e0f7fa;
    border: 1px solid #00acc1;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  .time-slot-btn:hover {
    background-color: #b2ebf2;
  }
  
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 15px;
  }
  
  .modal-footer .btn-primary {
    background-color: #6200ea;
    border-color: #6200ea;
  }
  `,re=()=>{const i=T(),[u,c]=p.useState(!1),[a,e]=p.useState(null),r=()=>{i.push("/eyecare")},n=()=>{c(!1),e(null)},o=[{id:1,imageUrl:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736339287188.png",name:"Vision Pro Optical Store",address:"Magadi Main Rd, Chandana layout, Sunkadakatte, Bengaluru, Karnataka 560091",hours:"11:00AM to 09:30PM",phone:"+91 9876543210",rating:4.9}];return t.jsxs(W,{children:[t.jsx("div",{className:"vision-test",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"row",children:[t.jsx("button",{className:"backbtn",onClick:r,children:"Back"}),t.jsx("p",{className:"visiontext",children:"149 Stores providing free eye test near you"})]}),t.jsxs("div",{className:"row",children:[t.jsx("div",{className:"col-md-8",children:o.map(s=>t.jsxs("div",{className:"clinic-service-cardtwo",children:[t.jsx("img",{src:s.imageUrl,alt:`${s.name}`,className:"clinic-image"}),t.jsxs("div",{className:"clinic-info",children:[t.jsxs("div",{className:"heading-clinic",children:[t.jsx("div",{className:"",children:t.jsx("h3",{children:s.name})}),t.jsxs("div",{className:"clinic-rating",children:[t.jsx(ae,{}),"  ",t.jsx("span",{children:s.rating})]})]}),t.jsx("p",{children:s.address}),t.jsxs("p",{children:["Hours: ",s.hours]}),t.jsxs("p",{className:"phone",children:[t.jsx(ne,{}),"  ",t.jsx("a",{href:`tel:${s.phone}`,children:s.phone})]}),t.jsxs("div",{className:"clinic-actions",children:[t.jsx("button",{className:"store-details-btn",children:"Store Details"}),t.jsx("button",{className:"book-appointment-btn",onClick:()=>i.push("/doctor/bookingReview"),children:"Book Free Appointment"})]})]})]},s.id))}),t.jsx("div",{className:"col-md-4"})]})]})}),a&&t.jsx(j,{size:"lg",show:u,onHide:n,centered:!0,dialogClassName:"custom-modal",children:t.jsxs(se,{children:[t.jsx(j.Header,{closeButton:!0,children:t.jsx(j.Title,{children:a.name})}),t.jsxs(j.Body,{children:[t.jsx("div",{className:"row",children:t.jsxs("div",{className:"clinic-modal-content",children:[t.jsx("img",{src:a.imageUrl,alt:`${a.name}`,className:"clinic-image-modal"}),t.jsxs("div",{className:"clinic-modal-info",children:[t.jsx("h4",{children:a.name}),t.jsx("p",{children:a.address}),t.jsxs("p",{children:[t.jsx(te,{})," ",a.rating]}),t.jsxs("p",{children:[t.jsx("span",{className:"clinic-color",children:" Opens Now: "})," ",a.hours]})]})]})}),t.jsx("div",{className:"row",children:t.jsxs("div",{className:"appointment-times",children:[t.jsx("h5",{children:"Available Slots:"}),t.jsxs("div",{className:"time-slots",children:[t.jsxs("div",{className:"slot-category",children:[t.jsx("h6",{children:"Morning"}),t.jsxs("div",{className:"slotbuttons",children:[t.jsx("button",{className:"time-slot-btn",children:"09:00 AM"}),t.jsx("button",{className:"time-slot-btn",children:"09:30 AM"}),t.jsx("button",{className:"time-slot-btn",children:"10:00 AM"}),t.jsx("button",{className:"time-slot-btn",children:"12:00 PM"}),t.jsx("button",{className:"time-slot-btn",children:"01:00 PM"}),t.jsx("button",{className:"time-slot-btn",children:"02:00 PM"})]})]}),t.jsx("div",{className:"slot-category",children:t.jsxs("div",{className:"slot-category",children:[t.jsx("h6",{children:"Afernoon"}),t.jsxs("div",{className:"slotbuttons",children:[t.jsx("button",{className:"time-slot-btn",children:"09:00 AM"}),t.jsx("button",{className:"time-slot-btn",children:"09:30 AM"}),t.jsx("button",{className:"time-slot-btn",children:"10:00 AM"}),t.jsx("button",{className:"time-slot-btn",children:"12:00 PM"}),t.jsx("button",{className:"time-slot-btn",children:"01:00 PM"}),t.jsx("button",{className:"time-slot-btn",children:"02:00 PM"})]})]})}),t.jsx("div",{className:"slot-category",children:t.jsxs("div",{className:"slot-category",children:[t.jsx("h6",{children:"Evening"}),t.jsxs("div",{className:"slotbuttons",children:[t.jsx("button",{className:"time-slot-btn",children:"09:00 AM"}),t.jsx("button",{className:"time-slot-btn",children:"09:30 AM"}),t.jsx("button",{className:"time-slot-btn",children:"10:00 AM"}),t.jsx("button",{className:"time-slot-btn",children:"12:00 PM"}),t.jsx("button",{className:"time-slot-btn",children:"01:00 PM"}),t.jsx("button",{className:"time-slot-btn",children:"02:00 PM"})]})]})})]})]})})]}),t.jsx(j.Footer,{children:t.jsx(U,{variant:"primary",onClick:()=>alert("Appointment Booked"),children:"Book Now"})})]})})]})};export{re as default};
