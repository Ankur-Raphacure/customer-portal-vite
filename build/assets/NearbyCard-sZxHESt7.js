import{d as c,u as l,j as a}from"./index-BHf3qlKB.js";import{b as d}from"./index-D3gR5QY_.js";import{a as p}from"./index-Ca8DSw12.js";const g=c.div`
  --text-color: #252b61;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);
  font-family: Outfit, sans-serif;

  .nearby-card {
    background: white;
    border-radius: 2rem;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    img {
      margin: auto;
      max-width: 225px;
      max-height: 225px;
      object-fit: contain;
    }
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: #141414;
    min-height: 45px;
  }

  .info-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #a0c4ff; /* Light blue background for rating */
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-weight: bold;
    width: fit-content;
    font-size: 14px;
  }

  .rating-icon {
    color: #ffffff;
  }

  .rating-value {
    margin: 0;
  }

  .distance {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #1e1e1e;
    font-size: 14px;
  }

  .location-icon {
    color: #1e1e1e;
    font-weight: 400;
  }

  .distance-value {
    margin: 0;
    font-weight: 500;
    span {
      font-weight: 300;
    }
  }
`,h=({title:i,rating:e,distance:t,location:s,image:r,id:n})=>{const o=l();return a.jsx(g,{children:a.jsxs("div",{className:"nearby-card cursor-pointer",onClick:()=>{o.push(`/labtest/packages/${n}`)},children:[a.jsx("img",{src:r||"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732625990861.png",alt:"cardImgPlaceholder"}),a.jsx("h3",{className:"card-title",children:i}),a.jsxs("div",{className:"rating",children:[a.jsx(d,{size:20,className:"rating-icon"}),a.jsx("p",{className:"rating-value",children:e})]}),a.jsxs("div",{className:"distance",children:[a.jsx(p,{size:20,className:"location-icon"}),a.jsxs("p",{className:"distance-value",children:[t," - ",a.jsxs("span",{children:[" ",s]})]})]})]})})};export{h as N};
