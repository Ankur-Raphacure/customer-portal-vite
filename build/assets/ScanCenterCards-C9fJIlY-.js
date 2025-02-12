import{d as s,u as o,j as e,e6 as d}from"./index-BHf3qlKB.js";import{a as c}from"./index-B5-5kW4P.js";const p=s.div`
  /* Card Container */
  .scanCenter-card-container {
    flex: 1 1 calc(33.33% - 10px);
    max-width: 312px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: hidden;
    font-family: Arial, sans-serif;
    padding: 5px;
    cursor: pointer;
  }

  /* Card Header */
  .scanCenter-card-header {
    position: relative;
    padding: 5px;
    background-color: #f5f5f5;
    text-align: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .scanCenter-company-logo img {
    width: 100%;
    height: 140px;
  }

  .scanCenter-company-logo p {
    font-weight: bold;
    margin: 0;
  }

  .scanCenter-company-logo small {
    font-size: 12px;
    color: #666;
  }

  /* Badge */
  .scanCenter-badge {
    position: absolute;
    top: 0px;
    right: 0px;
    color: #333;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 0px 14px 0px 14px;
    background-color: #f0da69;
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      font-size: 12px;
      line-height: 14px;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #252b61;
    }
  }

  .scanCenter-badge img {
    width: 20px;
    height: 20px;
  }

  /* Card Body */
  .scanCenter-card-body {
    padding: 15px 15px;
    text-align: left;
  }

  .scanCenter-card-body h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    padding: 0px;
    width: 100%;
    font-size: 18px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #141414;
    opacity: 0.8;
  }

  .scanCenter-rating {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #fbfbfb;
    justify-content: center;
    width: 25%;
    border-radius: 20px;
    background-color: #92bdf6;
    height: 21px;
  }

  .scanCenter-rating .scanCenter-star {
    color: #fbfbfb;
    font-size: 16px;
  }

  .scanCenter-card-body p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    width: 100%;
    font-size: 14px;
    color: #a49b9b;
    font-family: Poppins, serif;
    margin-top: 10px;
  }

  .scanCenter-card-body .scanCenter-separator {
    margin: 0 5px;
  }
  .-scanCenter-star {
    font-size: 10px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #fbfbfb;
  }
  .rating-banner-div {
    position: absolute;
    z-index: 1;
    margin-left: -22px;
    margin-top: 2rem;
    p {
      margin: auto;
      margin-top: -47px;
      margin-right: 19px;
      font-size: 16px;
      font-size: 12px;
    }
    img {
      height: 2rem;
    }
  }
  .bannerWrapper {
    position: absolute;

    .rectangle {
      background: #92bdf6;
      padding: 7px;
      border-radius: 10px 45px 45px 0;
      width: 5rem;
      display: flex;
      align-items: center;
    }
    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #92bdf6;
    }
  }
  .connect-sec-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    border-radius: 0px 0px 15px 15px;
    background-color: #fff5d8;
    height: 39px;
    padding: 0px 18px;
    p {
      margin-bottom: 0px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    .scanCenter-card-container {
      max-width: 100%;
    }
  }
`,g=r=>{const i=o(),{viewScanCards:a,handleNavigateDetails:t,sectionName:n}=r;return e.jsx(p,{children:e.jsx("div",{className:"scanCenter-main-card-container",children:e.jsxs("div",{className:"scanCenter-card-container",onClick:()=>i.push(t(a==null?void 0:a.id)),children:[n&&e.jsx("div",{className:"rating-banner-div",children:e.jsxs("div",{className:"bannerWrapper",children:[e.jsxs("div",{className:"rectangle",children:[e.jsx(d,{className:"me-2"}),a==null?void 0:a.rating]}),e.jsx("div",{className:"triangle"})]})}),e.jsxs("div",{className:"scanCenter-card-header",children:[e.jsx("div",{className:"scanCenter-company-logo",children:e.jsx("img",{src:a==null?void 0:a.image,alt:"Company Logo"})}),e.jsxs("div",{className:"scanCenter-badge",children:[e.jsxs("span",{children:["Rapha ",e.jsx("br",{})," Assured"]}),e.jsx("img",{src:" https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733748919984.png",alt:"Shield Icon"})]})]}),e.jsxs("div",{className:"scanCenter-card-body",children:[e.jsx("h3",{children:a==null?void 0:a.name}),n!=="doctor"&&e.jsxs("div",{className:"scanCenter-rating",children:[e.jsx("span",{className:"-scanCenter-star",children:"★"}),e.jsx("span",{className:"-scanCenter-star",children:a==null?void 0:a.rating})]}),e.jsxs("div",{className:"d-flex align-items-baseline",children:[e.jsx(c,{className:"me-2"}),e.jsx("p",{children:a==null?void 0:a.address})]})]})]})})})};export{g as S};
