import{d as k,b as N,r,j as a,L as w,aU as C,a as b,n as P,t as S,a7 as L,eO as E,eP as F,Y as z,Z as M,$ as I,a0 as O}from"./index-CitTC1Lo.js";import{P as R}from"./ProductsDeck-BCwTeiS3.js";import{P as G}from"./ProductCard-DIs9NHFD.js";const _=k.div`
  .search-box-div {
    margin-top: 10px;
    width: 100% !important;
  }
  .search-bar {
    position: relative !important;
  }
  .parent-search-left-div {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .main-div {
    padding: 10px 0 40px 0;
    background-color: rgb(233, 235, 241);
  }
  .intro-banner {
    background-color: rgb(18, 29, 89);
    width: 100%;
  }
  .intro-banner-img {
    width: 100%;
  }
  .search-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
  }
  .search-box-styled {
    border-radius: 25px;
    width: 100%;
    height: 50px;
    border: 2px solid rgb(18, 29, 89);
    padding: 0 48px 1px 48px;
    font-size: 24px;
  }
  .search-box-div {
    position: relative;
    width: 40%;
  }
  .search-voice-icon {
    position: absolute;
    right: 9px;
    top: 6px;
  }

  .category-deck {
    display: flex;
  }

  .other-services-container {
    padding: 10px 5% 10px 5%;
    margin-bottom: 50px;
  }
  .other-services-main {
    display: flex;
    gap: 25px;
    align-items: center;
  }

  .map-component{
    min-width:300px;
    width:30%
  }
  @media (max-width: 1329px) {
    .other-services-main {
      flex-direction: column;
    }
    .map-component{
      width:80%;
    }
  }

  .other-services-svg-map {
    width: 500px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Default: 3 columns */
    gap: 15px;
    width: 80%;
    justify-content: center;
    place-items: center;
  }

  .grid-item {
    background-color: white;
    color: black;
    padding: 10px 10px 0 10px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    width: 100%;
  }

  @media(max-width:744px){
    .category-deck{
      justify-content:center !important;
    }
  }

  /* Reduce to 2 columns when screen width is below 1024px */
  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Reduce to 1 column when screen width is below 600px */
  @media (max-width: 600px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .sports-img-container {
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .category-container {
    width: 100%;
    padding: 10px 5% 10px 5%;
    margin-bottom: 40px;
  }
  .category-container h3 {
    margin-bottom: 50px;
    font-weight: 700;
  }
  .category-descriptions {
    height: 50px;
    margin-bottom: 5px;
  }
  .category-deck {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .category-card {
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 25px;
    padding: 20px 15px 0px 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-img {
    border-radius: 25px;
    height: 100%;
    object-fit: contain;
  }
  .card-img-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 140px;
  }
  .link-to {
    color: black;
    text-decoration: none;
  }
  .bottom-banner{
    background-color: rgb(18, 29, 89);
    width: 100%;
    position:relative;
  }

  .bottom-banner-book-now{
    position:absolute;
    bottom:10px;
    left:50%;
    transform: translateX(-50%);
    border-radius:24px;
    padding:0 15px 0 15px;
    background-color:#2dfc7e;
    font-weight: bold;
    border: none;
  }
  .bottom-banner-book-now-link{
    text-decoration:none;
    color:black;
    font-weight:bold;
    margin:0;
    padding:0;
  }

  @media(max-width:950px){
    .bottom-banner-book-now-link{
      font-size:10px;
    } 
  }
  @media(max-width:500px){
    .bottom-banner-book-now-link{
      font-size:7px;
    } 
  }

`,$=k.div`
    .category-container{
        width:100%; 
        padding:10px 5% 10px 5%;
        margin-bottom:40px;
    }
    .category-container h3{
        margin-bottom:50px;
        font-weight: 600;
    }
    .category-descriptions{
        height:50px;
        margin-bottom:5px;
    }
    .category-deck{
        display:flex;
        gap:20px;
        justify-content:space-evenly;
        flex-wrap:wrap;
    }
    .category-card{
        width:100%;
        height:250px;
        background-color:white;
        border-radius:25px;
        padding:20px 15px 0px 15px;
        overflow:hidden;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .card-img{
        border-radius:25px;
        height:100%;
        object-fit:contain;
    }
    .card-img-container{
        display:flex;
        justify-content:center;
        width:100%;
        height:180px;
    }
    .link-to{
        color: black;
        text-decoration: none;
        flex-grow: 1;
        flex-basis: 300px;
        max-width: 350px;
    }

`,D=()=>{var d;const l=N(),[i,t]=r.useState(null);return r.useEffect(()=>{(async()=>{var p,s;const o=await l(C({sectionName:"fitness"}));((p=o==null?void 0:o.meta)==null?void 0:p.requestStatus)==="fulfilled"&&t((s=o==null?void 0:o.payload)==null?void 0:s.data)})()},[]),a.jsx(a.Fragment,{children:a.jsx($,{children:a.jsxs("div",{className:"category-container",children:[a.jsx("h3",{children:"Category"}),a.jsx("div",{className:"category-deck",children:(d=i==null?void 0:i.category_ids)==null?void 0:d.map(n=>a.jsx(a.Fragment,{children:a.jsx(w,{className:"link-to",to:"/fitnessCenters",children:a.jsxs("div",{className:"category-card",children:[a.jsx("h5",{children:n==null?void 0:n.name}),a.jsx("div",{className:"card-img-container",children:a.jsx("img",{className:"card-img",src:n==null?void 0:n.image,alt:n==null?void 0:n.name})})]})})}))})]})})})},K={width:"100%",height:"400px"},T=()=>{const[l,i]=r.useState(null);let t=null;const d=localStorage.getItem("selectedAddress");d&&(t=JSON.parse(d));const{isLoaded:n}=z({googleMapsApiKey:O});return r.useEffect(()=>{const o=()=>{t!=null&&t.latitude&&(t!=null&&t.longitude)&&i({lat:t.latitude,lng:t.longitude})},p=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(s=>{i({lat:s.coords.latitude,lng:s.coords.longitude})},s=>{S.error(`Error fetching geolocation: ${s==null?void 0:s.message}`),console.error("Error fetching geolocation:",s)}):console.error("Geolocation is not supported by this browser.")};t!=null&&t.latitude&&(t!=null&&t.longitude)?o():p()},[t==null?void 0:t.latitude,t==null?void 0:t.longitude]),n?a.jsx("div",{className:"mapWrapper",children:l?a.jsx(M,{mapContainerStyle:K,center:l,zoom:15,children:a.jsx(I,{position:l})}):a.jsx("p",{children:"Fetching location..."})}):a.jsx("div",{children:"Loading..."})},W=()=>{var j;const[l,i]=r.useState(),t=N(),{user:d,userCity:n}=b(e=>e.auth),{selectedCurrentAddress:o}=b(e=>e.profile),p=(e="bengaluru")=>{t(E({type:"gym",city:e==null?void 0:e.toLowerCase()})),t(F({type:"gym",city:e==null?void 0:e.toLowerCase()}))};r.useEffect(()=>{p(n==null?void 0:n.name)},[n==null?void 0:n.name]);const{loading:s,data:x,error:u}=b(e=>e.Fitness.fitnessCenters);r.useEffect(()=>{t(P({page:1,count:10,status:"active",role:"user",latitude:o==null?void 0:o.latitude,longitude:o==null?void 0:o.longitude}))},[o]),r.useEffect(()=>{u&&S.error(u)},[u]),console.log("centers",x);const[f,A]=r.useState(null);return r.useEffect(()=>{(async()=>{var h,g;const c=await t(C({sectionName:"fitness"}));((h=c==null?void 0:c.meta)==null?void 0:h.requestStatus)==="fulfilled"&&A((g=c==null?void 0:c.payload)==null?void 0:g.data)})()},[]),a.jsx(a.Fragment,{children:a.jsx(_,{children:a.jsxs("div",{className:"main-div",children:[a.jsx("div",{className:"intro-banner",children:a.jsx("img",{className:"intro-banner-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736322677896.png",alt:"rapha gym banner"})}),a.jsx("div",{className:"parent-search-left-div",children:a.jsx(L,{details:[" 💪 Gym"],handleonFilterName:()=>{},setSearchText:i,searchText:l})}),a.jsx(D,{}),a.jsx(R,{viewAllLink:"/fitnessCenters",padding:!0,heading:"Nearby Fitness Centres",data:x==null?void 0:x.fitnessCenters,renderCard:(e,c)=>{var g,m,y,v;const h={name:e==null?void 0:e.name,place:e==null?void 0:e.city,imgLink:(g=e==null?void 0:e.images)==null?void 0:g[0],rating:e==null?void 0:e.rating,distance:(e==null?void 0:e.distance_km)??"N/A",isRapha:e==null?void 0:e.isRapha};return a.jsx(G,{data:h,link:`/fitnessCenters/${(v=(y=(m=e==null?void 0:e.name)==null?void 0:m.split)==null?void 0:y.call(m," "))==null?void 0:v.join("-")}/${e==null?void 0:e.id}`},c)}}),a.jsx("div",{className:"intro-banner",children:a.jsx("img",{className:"intro-banner-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736325923696.png",alt:"rapha gym banner"})}),a.jsxs("div",{className:"other-services-container",children:[a.jsx("h3",{children:"Lorem ipsum dolor sit amet"}),a.jsxs("div",{className:"other-services-main",children:[a.jsx("div",{className:"map-component",children:a.jsx(T,{})}),a.jsx("div",{className:"grid-container",children:(j=f==null?void 0:f.category_ids)==null?void 0:j.map(e=>a.jsx(a.Fragment,{children:a.jsx(w,{className:"link-to",to:"/fitnessCenters",children:a.jsxs("div",{className:"category-card",children:[a.jsx("h5",{children:e==null?void 0:e.name}),a.jsx("div",{className:"card-img-container",children:a.jsx("img",{className:"card-img",src:e==null?void 0:e.image,alt:e==null?void 0:e.name})})]})})}))})]})]}),a.jsxs("div",{className:"bottom-banner",children:[a.jsx("img",{className:"intro-banner-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1738749613353.png",alt:"rapha gym banner"}),a.jsx("button",{className:"bottom-banner-book-now",children:a.jsx(w,{className:"bottom-banner-book-now-link",to:"/fitnessCenters",children:"BOOK NOW"})})]})]})})})};export{W as default};
