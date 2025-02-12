import{d,j as e,L as p}from"./index-DDOdRoFT.js";import{I as a}from"./Image-Dpy2fY3U.js";import{S as c}from"./location-5VwLk7gW.js";import{S as l}from"./badge-Bb6-Gyc4.js";const m=d.div`
  width: 100%;
  background: #000;

  .banner-wrapper {
    width: 70%;
    margin: 0 auto; /* Center align horizontally */
  }
  .card-link {
    text-decoration: none;
  }
  .banner {
    display: flex;
    align-items: flex-start;
    gap: 20px; /* Adjust the gap between left-content and right-content */
    border-radius: 25px;
    border: 1px solid #81ff34;
    background: #2d154c;
    overflow: hidden; /* Ensure no overflow from children */
    padding: 12px;
    margin-top: 30px;
  }

  .left-content {
    width: 70%; /* 60% width for left content */
    padding: 20px; /* Adjust padding as needed */
    color: #fff; /* Example text color */
  }
  .left-contnet h2 {
    color: #fff3f3;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .subscribe {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    width: 144px;
    height: 32px;
    padding: 6px 8px 6px 23px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 12px;
    background: #9747ff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.07);
    border: none;
  }
  .ptext {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.5;
  }
  .pprice {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .price {
    color: #6ddc6b;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .right-content {
    width: 30%; /* 40% width for right content */
    overflow: hidden; /* Ensure image does not overflow */
    text-align: center;
  }

  .right-content img {
    text-align: center;
  }

  /* Media Query for Tablets and Smaller Screens */
  @media (max-width: 768px) {
    .banner {
      flex-direction: column;
    }

    .left-content,
    .right-content {
      width: 100%;
    }

    .right-content {
      margin-top: 20px; /* Space between image and text on smaller screens */
    }

    .subscribe {
      width: 100%; /* Full width button on smaller screens */
      margin-top: 15px; /* Space between text and button */
    }
  }

  // category section

  .category-wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .headingcat {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.92px;
    margin-top: 42px;
    margin-left: 12px;
    margin-bottom: 24px;
  }

  .categoryCardMainDiv {
    display: flex;
    flex-wrap: wrap; /* Allow cards to wrap into multiple rows */
    justify-content: center; /* Center align items */
    gap: 20px; /* Space between cards */
  }

  .catCardDiv {
    flex: 1 0 calc(50% - 20px); /* Two cards per row (50% width minus gaps) */
    padding: 4px;
    background-color: #000;
    border-radius: 20px;
    border: 1px solid #52ff00;
    text-align: center;
    margin-bottom: 20px; /* Bottom margin between rows */
    box-sizing: border-box; /* Ensure padding and borders are included in width calculation */
  }

  .imageDiv {
    /* Your styles for image container */
  }

  .imageName {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    .catCardDiv {
      flex-basis: calc(
        50% - 20px
      ); /* Two cards per row on screens up to 768px */
    }
  }

  .pro-wrapper {
    width: 90%;
    margin: 0 auto; /* Center align horizontally */
  }

  .proCardMainDiv {
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
    margin-top: 20px; /* Adjust top margin as needed */
  }

  .proCardDiv {
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: #132803;
    width: 188px;
    margin: 0 10px; /* Adjust horizontal margin as needed */
    padding: 6px; /* Add padding for inner content */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .proimageDiv {
    position: relative; /* Ensure relative positioning for absolute child */
    text-align: center;
  }
  .roundedImages {
    max-width: 100%;
  }

  .roundedImages {
    object-fit: cover;
  }

  .savingsTag {
    position: absolute;
    top: 5px;
    left: 5px;
    color: #fff500;
    padding: 5px;
    font-size: 10px;
    border-radius: 5px;
    z-index: 1;
  }

  .proimageName {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
  }

  .proLocation {
    display: flex;
  }

  .proLocation svg {
    width: 9px;
    height: 11px;
    fill: #f5f5f5;
    margin-right: 5px;
  }

  .prolocation {
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    line-height: normal;
  }

  .proimagePrice {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 5px;
  }

  .addToCartButton {
    background-color: #9747ff;
    color: #fff;
    border: none;
    padding: 10px;
    margin-top: auto;
    cursor: pointer;
    border-radius: 25px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  .addToCartButton:hover {
    background-color: #7e3aff;
  }

  /* Media Query for Mobile Screens */
  @media screen and (max-width: 768px) {
    .proCardMainDiv {
      flex-wrap: nowrap; /* Prevent wrapping */
      overflow-x: scroll; /* Allow horizontal scrolling */
      -webkit-overflow-scrolling: touch; /* Smooth scrolling for iOS */
    }

    .proCardDiv {
      flex: 0 0 auto; /* Prevent flex items from growing */
      width: 140px; /* Adjust card width for smaller screens */
      margin-right: 5px; /* Reduce margin */
    }

    .proimageName {
      font-size: 10px; /* Adjust font size */
    }

    .proimagePrice {
      font-size: 10px; /* Adjust font size */
    }
  }

  .banner-style {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`,h=[{id:1,title:"Card 1",text:"GYM",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry"},{id:2,title:"Card 2",text:"YOGA",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry"},{id:3,title:"Card 3",text:"Zumba",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry"},{id:4,title:"Card 4",text:"Aerobic",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry"},{id:5,title:"Card 5",text:"Activities",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry"},{id:6,title:"Card 6",text:"Courses",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry"}],x=()=>e.jsxs("div",{className:"category-wrapper",children:[e.jsx("h2",{className:"headingcat",children:"Category"}),e.jsx("div",{className:"categoryCardMainDiv",children:h.map(r=>e.jsx(p,{to:"/Gymlist",className:"card-link",children:e.jsxs("div",{className:"catCardDiv",children:[e.jsx("div",{className:"imageDiv",children:e.jsx(a,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405441317.png"})}),e.jsx("p",{className:"imageName",children:r.text})]})},r.id))})]}),s=[{title:"Card 1",text:"Fitness",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$19.99",hasSaving:!0},{title:"Card 2",text:"Gamezone",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$24.99",hasSaving:!1},{title:"Card 3",text:"Rapha Mart",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$14.99",hasSaving:!0},{title:"Card 4",text:"Virtual Fit",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$29.99",hasSaving:!1},{title:"Card 5",text:"FitTrack Hub",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$39.99",hasSaving:!0},{title:"Card 6",text:"Loren Ipsum",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$9.99",hasSaving:!0}],f=r=>e.jsxs("div",{className:"pro-wrapper",children:[e.jsx("h2",{className:"headingcat",children:"Procoarses"}),e.jsx("div",{className:"proCardMainDiv",children:s==null?void 0:s.map((t,i)=>e.jsxs("div",{className:"proCardDiv",children:[e.jsxs("div",{className:"proimageDiv",children:[e.jsx(a,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736404166575.png",className:"roundedImages"}),t.hasSaving&&e.jsxs("div",{className:"savingsTag",children:[e.jsx(l,{}),"  20% Saving"]})]}),e.jsx("p",{className:"proimageName",children:t.text}),e.jsxs("div",{className:"proLocation",children:[e.jsx(c,{}),e.jsx("p",{className:"prolocation",children:"HSR Layout"})]}),e.jsx("p",{className:"proimagePrice",children:t.price}),e.jsx("button",{className:"addToCartButton",children:"Add to Cart"})]},i))})]}),o=[{title:"Card 1",text:"Fitness",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$19.99",hasSaving:!0},{title:"Card 2",text:"Gamezone",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$24.99",hasSaving:!1},{title:"Card 3",text:"Rapha Mart",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$14.99",hasSaving:!0},{title:"Card 4",text:"Virtual Fit",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$29.99",hasSaving:!1},{title:"Card 5",text:"FitTrack Hub",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$39.99",hasSaving:!0},{title:"Card 6",text:"Loren Ipsum",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$9.99",hasSaving:!0}],g=r=>e.jsxs("div",{className:"pro-wrapper",children:[e.jsx("h2",{className:"headingcat",children:"Recommended"}),e.jsx("div",{className:"proCardMainDiv",children:o==null?void 0:o.map((t,i)=>e.jsxs("div",{className:"proCardDiv",children:[e.jsxs("div",{className:"proimageDiv",children:[e.jsx(a,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736406360272.png",className:"roundedImages"}),t.hasSaving&&e.jsxs("div",{className:"savingsTag",children:[e.jsx(l,{}),"  20% Saving"]})]}),e.jsx("p",{className:"proimageName",children:t.text}),e.jsx("p",{className:"proimagePrice",children:t.price}),e.jsx("button",{className:"addToCartButton",children:"Add to Cart"})]},i))})]}),n=[{title:"Card 1",text:"Fitness",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$19.99",hasSaving:!0},{title:"Card 2",text:"Gamezone",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$24.99",hasSaving:!1},{title:"Card 3",text:"Rapha Mart",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$14.99",hasSaving:!0},{title:"Card 4",text:"Virtual Fit",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$29.99",hasSaving:!1},{title:"Card 5",text:"FitTrack Hub",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$39.99",hasSaving:!0},{title:"Card 6",text:"Loren Ipsum",subtitle:"Transform Your Smile: The Art of Cosmetic Dentistry",price:"$9.99",hasSaving:!0}],u=r=>e.jsxs("div",{className:"pro-wrapper",style:{marginBottom:"32px"},children:[e.jsx("h2",{className:"headingcat",children:"Recommended"}),e.jsx("div",{className:"proCardMainDiv",children:n==null?void 0:n.map((t,i)=>e.jsxs("div",{className:"proCardDiv",children:[e.jsxs("div",{className:"proimageDiv",children:[e.jsx(a,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736404166575.png",className:"roundedImages"}),t.hasSaving&&e.jsxs("div",{className:"savingsTag",children:[e.jsx(l,{}),"  20% Saving"]})]}),e.jsx("p",{className:"proimageName",children:t.text}),e.jsxs("div",{className:"proLocation",children:[e.jsx(c,{}),e.jsx("p",{className:"prolocation",children:"HSR Layout"})]}),e.jsx("p",{className:"proimagePrice",children:t.price}),e.jsx("button",{className:"addToCartButton",children:"Add to Cart"})]},i))})]}),C=()=>e.jsxs(m,{children:[e.jsx("div",{className:"banner-wrapper",children:e.jsxs("div",{className:"banner",children:[e.jsxs("div",{className:"left-content",children:[e.jsx("h2",{children:"Premium Fitness Gear at Affordable Prices"}),e.jsx("p",{className:"ptext",children:"Achieve your fitness goals with expert-led virtual training. Join today and experience convenient, effective workouts from anywhere!"}),e.jsxs("p",{className:"pprice",children:["Starting at t ",e.jsx("span",{className:"price",children:" ₹ 199"})]}),e.jsx("button",{className:"subscribe",children:"Subscribe Now"})]}),e.jsx("div",{className:"right-content",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405109989.png",alt:"fitness"})})]})}),e.jsx(x,{}),e.jsx(f,{}),e.jsx("div",{className:"banner-wrapper banner-style",children:e.jsxs("div",{className:"banner",children:[e.jsxs("div",{className:"left-content",children:[e.jsx("h2",{children:"Crazy Deals 60% Off Treadmills"}),e.jsx("p",{className:"ptext",children:'Get Fit for Less Shop Premium Treadmills at Unbeatable Prices!"'}),e.jsx("button",{className:"subscribe",children:"Subscribe Now"})]}),e.jsx("div",{className:"right-content",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736406171478.png",alt:"fitness"})})]})}),e.jsx(g,{}),e.jsx(u,{})]});export{C as default};
