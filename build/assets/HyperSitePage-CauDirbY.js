import{r as t,u as S,j as e,d as j,a1 as k,a2 as N,a3 as z,a4 as C,a5 as E,b as D,a as A,a6 as B,a7 as M,a8 as H,a9 as P,aa as q,ab as L,t as U,ac as _,ad as G}from"./index-f4owDEOR.js";const O=({siteDetails:o})=>{const[a,h]=t.useState({}),[n,l]=t.useState(""),s=S();t.useEffect(()=>{h(o)},[o]);const m=(a==null?void 0:a.banner_images)||[];t.useEffect(()=>{m.length>0&&l(m[0])},[m]);const u=(f,r)=>{l(f),r===3&&(console.log("All gallery images:",m),s.push({pathname:"/gallery",state:{gallery:m}}))};return e.jsxs("div",{className:"galleryPreview",children:[e.jsx("div",{className:"otherImages",children:m.slice(0,4).map((f,r)=>e.jsxs("div",{className:`image ${n===f?"active":""}`,onClick:()=>u(f,r),children:[e.jsx("img",{src:f,alt:`Gallery Image ${r+1}`}),r===3&&e.jsx("div",{className:"imageOverlay",children:e.jsxs("span",{children:[m.length,"+"]})})]},r))}),e.jsx("div",{className:"currImage",children:n?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:n,alt:"Current Preview"}),e.jsx("div",{className:"head",children:e.jsxs("h1",{children:["Your Partner in ",e.jsx("br",{})," Health & Wellness"]})})]}):e.jsx("p",{children:"No image selected"})})]})},V=j.div`
.specialization {
    padding: 0px 40px;
    .paragraph {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .react-multi-carousel-list {
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    h2 {
      font-weight: 700;
      font-size: 32px;
    }
    p {
      font-weight: 400;
      font-size: 18px;
      width: 100%;
      font-family: Inter;
      color: #171a1f;
    }
    .view {
      padding: 10px 30px;
      font-size: 18px;
      font-weight: 400;
      border: none;
      border-radius: 32px;
      text-align: center;
      cursor: pointer;
      display: inline-block;
    }
    .cards {
      display: flex;
      width: 100%;
    }

    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .paragraph {
      display: flex;
      justify-content: space-between;
      margin: 0 auto 2rem;
      font-size: 1rem;
    }

    .paragraph p {
      margin: 0;
    }

    .view {
      color: #007bff;
      cursor: pointer;
      font-weight: bold;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1.5rem;
      justify-items: center;
      @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .card {
      background: #f9f9f9;
      width: 100%;
      border: none;
      border-radius: 10px;
      /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
      padding: 1rem;
      text-align: center;
      transition: transform 0.2s ease-in-out;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card-image {
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
        margin-bottom: 0.5rem;
      }
    }

    .card-title {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: 500;
      font-size: 20px;
      color: #333;
    }

    .mobile-view {
      display: none;
    }
  }

  @media (max-width: 391px) {
    padding: 0px 20px;
    .multi-carousel-modal {
      display: none;
    }

    .specialization {
      .mobile-view {
        display: block;
      }

      .view-all-btn {
        display: none;
      }
    }

    .specialization {
      text-align: center;
      font-family: Arial, sans-serif;
      padding: unset;
    }

    .specialization-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .specialization p {
      display: none;
    }

    .specialization h2 {
      font-size: 22px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
      margin-bottom: unset;
    }

    .specialization-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      justify-items: center;
    }

    .specialization-card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .image-container {
      width: 100%;
      height: 100%;
      background: #fff7e9;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .specialization-image {
      width: 80%;
      height: auto;
      border-radius: 50%;
    }

    .specialization-name {
      font-size: 16px;
      font-weight: 500;
      margin-top: 10px;
    }

    .view-more {
      margin-top: 20px;
      font-size: 14px;
      background: none;
        border: none;
        color: #1e1e1e;
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`,$=({siteDetails:o})=>{var w;const[a,h]=t.useState({}),[n,l]=t.useState([]),[s,m]=t.useState([]);t.useEffect(()=>{const p=[...k,...N];l(p)},[]),t.useEffect(()=>{h(o)},[o]);const u=t.useMemo(()=>{var p;return((p=a==null?void 0:a.specializations)==null?void 0:p.map((d,x)=>({id:x+1,title:d})))||[]},[a]);t.useEffect(()=>{const p=n.reduce((d,x)=>{const c=x.title||x.name;return u.some(g=>g.title===c)&&d.push({title:c||"",name:c||"",imageUrl:x.imageUrl,navigatePath:x.navigatePath}),d},[]);m(p)},[u,n]),t.useEffect(()=>{console.log("matchedSpecializations : ",s)},[s]);const[f,r]=t.useState(4),v=async()=>{r(s.length)};return e.jsx(V,{children:e.jsxs("div",{className:"specialization",children:[e.jsx("h2",{children:"Our Specialization"}),e.jsx("div",{className:"paragraph",children:e.jsx("p",{children:"Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit."})}),e.jsx("div",{className:"multi-carousel-modal",children:e.jsx(z,{allCategoriesList:s,itemstoShow:5})}),e.jsxs("div",{className:"mobile-view",children:[e.jsx("div",{className:"specialization-grid",children:(w=s==null?void 0:s.slice(0,f))==null?void 0:w.map((p,d)=>e.jsxs("div",{className:"specialization-card",children:[e.jsx("div",{className:"image-container",children:e.jsx("img",{src:p.imageUrl||"default-image-url",alt:p.title,className:"specialization-image"})}),e.jsx("p",{className:"specialization-name",children:p.title})]},d))}),f<=4&&e.jsx("button",{className:"view-more",onClick:v,children:"View More"})]}),e.jsx("button",{className:"view-all-btn",onClick:()=>{},children:"View All"})]})})},Y=j.div`
  padding: 0px 40px;
  .services-section {
    /* padding: 2rem 0rem; */
    /* background-color: #f9f9f9; */
  }

  .container {
    max-width: 100%;
    margin: 0 auto;
  }

  /* Heading and description */
  .heading {
    font-size: 32px;
    font-weight: 700;
  }

  .description {
    color: #6b7280;
    font-size: 18px;
    font-weight: 400;
  }

  /* Services wrapper */
  .services-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 34px; /* Space between boxes */
    justify-content: space-between;
  }

  .service-card {
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 2rem;
    flex: 1 1 calc(23% - 1rem); /* Ensures responsive design with 4 cards per row */
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    color: #333;
    width: 266px;
    cursor: pointer;
    &:hover {
      background-color: #e2e2e2;
    }
  }
  .view-more-button {
    display: inline-block;
    float: right;
    text-decoration: underline;
    font-size: 22px;
    font-weight: 400;
    color: #252b61;
    border: none;
    background: none;
  }

  .mobile-view {
    display: none;
  }

  @media (max-width: 1024px) {
    .services-wrapper {
      gap: 24px;
    }

    .service-card {
      flex: 1 1 calc(33.33% - 1rem); /* 3 cards per row */
    }

    .heading,
    .description {
      margin-left: 20px;
    }
  }

  @media (max-width: 768px) {
    .services-wrapper {
      gap: 20px;
      justify-content: center;
    }

    .service-card {
      flex: 1 1 calc(45% - 1rem); /* 2 cards per row */
    }

    .heading {
      font-size: 28px;
    }

    .description {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .services-wrapper {
      gap: 16px;
    }

    .service-card {
      flex: 1 1 100%; /* Single card per row */
      width: auto;
    }

    .heading {
      font-size: 24px;
      margin-left: 10px;
    }

    .description {
      font-size: 14px;
      margin-left: 10px;
    }

    .view-more {
      text-align: center;
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }
  .react-multi-carousel-list {
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 391px) {

    padding: 0px 20px;

    .mobile-view {
      display: block;
    }
    .multi-carousel-modal {
      display: none;
    }
    .view-more-button {
      display: none;
    }

    .description {
      display: none;
    }

    .container {
      padding: unset;
    }

    .heading {
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
    }

    .specialization-grid {
      margin-top: 30px;
    }

    .specialization-name{
      text-wrap: nowrap;
    }

    .view-more {
      margin-left: 130px;
      margin-top: unset;
    }
  }
`,W=({siteDetails:o})=>{var p;const[a,h]=t.useState({}),[n,l]=t.useState([]),[s,m]=t.useState([]);t.useEffect(()=>{const d=[...k,...N];l(d)},[]),t.useEffect(()=>{h(o)},[o]);const[u,f]=t.useState([]);t.useEffect(()=>{f((a==null?void 0:a.services)||[])},[a]),t.useEffect(()=>{const d=n.reduce((x,c)=>{const g=c.title||c.name;return u.includes(g)&&x.push({title:g||"",name:g||"",imageUrl:c.imageUrl,navigatePath:c.navigatePath}),x},[]);m(d)},[u,n]),t.useEffect(()=>{console.log("matchedServices : ",s)},[s]);const[r,v]=t.useState(4),w=async()=>{v(s.length)};return e.jsx(Y,{children:e.jsx("section",{className:"services-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"heading",children:"Our Services"}),e.jsxs("p",{className:"description",children:["Do consectetur provident proident id eiusmod deserunt consequat",e.jsx("br",{}),"pariatur ad ex velit do Lorem reprehenderit."]}),e.jsx("div",{className:"multi-carousel-modal",children:e.jsx(z,{allCategoriesList:s,itemstoShow:5})}),e.jsxs("div",{className:"mobile-view",children:[e.jsx("div",{className:"specialization-grid",children:(p=s==null?void 0:s.slice(0,r))==null?void 0:p.map((d,x)=>e.jsxs("div",{className:"specialization-card",children:[e.jsx("div",{className:"image-container",children:e.jsx("img",{src:d.imageUrl||"default-image-url",alt:d.title,className:"specialization-image"})}),e.jsx("p",{className:"specialization-name",children:d.title})]},x))}),r<=4&&e.jsx("button",{className:"view-more",onClick:w,children:"View More"})]}),e.jsx("div",{className:"view-more",children:e.jsx("button",{className:"view-more-button",onClick:()=>{},children:"View More"})})]})})})},F=j.div`
  padding: 0px 40px;
  .aboutuscontainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background-color: #fff;
    border-radius: 0;
    width: 100%;
    height: 100%;
  }

  .image-section {
    flex: 1;
    margin-right: 20px;
  }

  .image {
    width: 100%;
    height: 454.8px;
    border-radius: 15px;
  }

  .text-section {
    flex: 1;
    padding: 20px;
  }

  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 70px;
  }

  .description {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
    margin-left: 70px;
  }

  @media (max-width: 1024px) {
    .aboutuscontainer {
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .image-section {
      margin-right: 0;
      margin-bottom: 20px;
    }

    .text-section {
      padding: 10px;
    }

    .title {
      font-size: 28px;
      margin-left: 0;
      text-align: center;
    }

    .description {
      font-size: 14px;
      margin-left: 0;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 24px;
    }

    .description {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .aboutuscontainer {
      padding: 10px;
    }

    .title {
      font-size: 20px;
    }

    .description {
      font-size: 12px;
    }
  }

  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }

    .aboutuscontainer {
      width: 100%;
      margin: 0 auto;
      overflow-x: hidden;
      padding: 0;
    }
  }

  @media (max-width: 391px) {
    padding: 0px 20px;
    .image {
      width: 100%;
      height: 208px;
    }
    .aboutuscontainer {
      padding: 0;
    }

    .text-section {
      padding: 0px;
    }

    .title {
      margin-left: unset;
      text-align: left;
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
    }

    .description {
      text-align: left;
      font-size: 14px;
      line-height: 19px;
      font-family: Inter;
      color: #171a1f;
    }
  }
`,X=({siteDetails:o})=>{const[a,h]=t.useState({});return t.useEffect(()=>{h(o)},[o]),e.jsx(F,{children:e.jsxs("div",{className:"aboutuscontainer",children:[e.jsx("div",{className:"image-section",children:e.jsx("img",{src:(a==null?void 0:a.about_us_image)||"default_image_url",alt:"About us",className:"image"})}),e.jsxs("div",{className:"text-section",children:[e.jsx("h1",{className:"title",children:"About Us"}),e.jsx("p",{className:"description",children:"Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.  consequat pariatur ad ex velit do Lorem reprehenderit."})]})]})})},J=j.div`
  padding: 0px 40px;
  .getstartedcontainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 12px;
  }

  .text-section {
    flex: 1;
    margin-right: 20px;
  }

  .title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-left: 64px;
  }

  .description {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
    margin-left: 64px;
  }

  .button {
    padding: 10px 20px;
    background-color: #252b61;
    color: #fff;
    border: none;
    border-radius: 39px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 64px;
  }

  .image-section {
    flex: 1;
  }

  .image {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    .getstartedcontainer {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px;
    }

    .text-section {
      margin-right: 0;
      margin-bottom: 20px;
    }

    .title {
      font-size: 36px;
      margin-left: 0;
    }

    .description {
      font-size: 14px;
      margin-left: 0;
    }

    .button {
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 28px;
    }

    .description {
      font-size: 12px;
    }

    .button {
      font-size: 14px;
      padding: 8px 16px;
    }
  }

  @media (max-width: 480px) {
    .getstartedcontainer {
      padding: 10px;
    }

    .title {
      font-size: 24px;
    }

    .description {
      font-size: 12px;
    }

    .button {
      font-size: 12px;
      padding: 6px 12px;
    }

    .image {
      border-radius: 4px;
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }

  @media (max-width: 391px) {
    padding: 0px 20px;
    .getstartedcontainer {
      border: none;
      padding: unset;
      display: flex;
      flex-direction: column-reverse;
    }

    .text-section {
      text-align: left;
      margin-top: 10px;
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
    }

    .description {
      font-size: 14px;
      font-family: Inter;
      color: #171a1f;
      margin-bottom: 10px;
    }

    .image {
      width: 100%;
      /* height: 208px; */
    }
  }
`,K=({siteDetails:o})=>e.jsx(J,{children:e.jsxs("div",{className:"getstartedcontainer",children:[e.jsxs("div",{className:"text-section",children:[e.jsx("h1",{className:"title",children:"Get started!"}),e.jsx("p",{className:"description",children:"Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit."}),e.jsx("button",{className:"button",children:"Book appointment"})]}),e.jsx("div",{className:"image-section",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/112825-1733827703705.png",alt:"Person using a smartphone",className:"image"})})]})}),Q=j.div`
  padding: 0px 40px;
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .paragraph {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 2rem;
    font-size: 1rem;
  }

  .paragraph p {
    margin: 0;
  }

  /* styles.css */
  .doctor-card {
    border-radius: 12px;
    /* padding: 20px; */
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    width: 100%;
    /* max-width: 300px; */
  }

  .rapha-assured {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ffe169;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      width: fit-content;
      height: fit-content;
      object-fit: none;
      border-radius: 0;
    }
  }

  .doctor-image {
    display: flex;
    background: #f0f0f5;
    img {
      margin: auto;
      width: fit-content;
      height: fit-content;
      border-radius: 8px;
      padding: 3rem 2rem 0 2rem;
    }
  }

  .doctor-info {
    margin-top: 15px;
    padding: 10px 20px;
    position: relative;
  }

  .doctor-info h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  .doctor-info h3 {
    margin: 5px 0;
    color: #666;
    font-size: 1rem;
  }

  .qualifications {
    color: #888;
    font-size: 0.9rem;
  }

  .experience,
  .languages {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
    color: #666;
  }

  .quick-booking {
    background: #ffe169;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border-radius: 20px;
    margin-top: 10px;
  }

  .doctors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .lightning-icon {
    width: fit-content;
    height: fit-content;
    border-radius: 0;
  }

  .bannerWrapper {
    position: absolute;
    top: -1rem;
    right: -1rem;
    .rectangle {
      background: #f0da69;
      padding: 5px;
      border-radius: 40px 10px 0 45px;
      display: flex;
      flex-direction: row;
      white-space: nowrap;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
    .triangle {
      width: 0;
      height: 0;
      border-right: 1rem solid transparent;
      border-top: 0.8rem solid #d2be59;
      position: absolute;
      right: 0;
    }
  }

  .hospital-specislist-main-div p {
    margin: unset;
    width: 100%;
    position: relative;
    font-size: 18px;
    line-height: 27px;
    font-family: Inter;
    color: #171a1f;
  }

  .hospital-specislist-main-div h5 {
    margin: unset;
    font-size: 32px;
    display: inline-block;
    font-family: Inter;
    color: #171a1f;
  }

  .hospital-specislist-sub-main-div {
    padding: unset;
  }

  .scanCenter-card-container img {
  }

  @media (max-width: 1024px) {
    .paragraph {
      flex-direction: column;
      text-align: center;
    }

    .doctor-card {
      max-width: 100%;
      margin: 0 auto;
      width: 100%;
    }

    .doctors-grid {
      grid-template-columns: 2fr 2fr;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .doctors-grid {
      grid-template-columns: 2fr 2fr;
    }

    .doctor-card {
      padding: 10px;
    }

    .doctor-info h2 {
      font-size: 1rem;
    }

    .doctor-info h3 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 605px) {
    .doctors-grid {
      grid-template-columns: 2fr;
    }
  }

  @media (max-width: 480px) {
    .paragraph {
      font-size: 0.9rem;
    }

    .doctor-info {
      padding: 10px;
    }

    .doctor-info h2 {
      font-size: 0.9rem;
    }

    .doctor-info h3 {
      font-size: 0.8rem;
    }

    .quick-booking {
      padding: 5px;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 391px) {
    padding: 0px 20px;
    .hospital-specislist-main-div h5 {
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
    }

    .viewAllBtn {
      display: none;
    }

    .hospital-specislist-main-div p {
      font-size: 14px;
      line-height: 19px;
      font-weight: 300;
      margin-bottom: 20px;
      margin-top: 10px;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
    }

    .react-multi-carousel-track {
      overflow: scroll;
      width: 85%;
    }

    .docDesc {
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }
  .hospital-specislist-main-div p {
    position: absolute;
    top: 0;
    right: 7px;
  }
`,Z=({siteDetails:o})=>{const[a,h]=t.useState([{id:1,name:"Dr.Annette Black",specialization:"Ayurvedic",qualifications:"MBBS, MS",experience:"5+",languages:["English","Hindi","Tamil"],image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734334899016.png",quickBooking:!0},{id:2,name:"Dr. Alan White",specialization:"Radiology",qualifications:"MBBS, MS",experience:"5+",languages:["English","Hindi","Tamil"],image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734334899016.png",quickBooking:!1},{id:3,name:"Dr. Test Black",specialization:"Ayurvedic",qualifications:"MBBS, MS",experience:"5+",languages:["English","Hindi","Tamil"],image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734334899016.png",quickBooking:!0},{id:4,name:"Dr. Demo White",specialization:"Radiology",qualifications:"MBBS, MS",experience:"5+",languages:["English","Hindi","Tamil"],image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734334899016.png",quickBooking:!1},{id:5,name:"Dr. Demo White",specialization:"Radiology",qualifications:"MBBS, MS",experience:"5+",languages:["English","Hindi","Tamil"],image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734334899016.png",quickBooking:!1}]),n=S();return e.jsx(Q,{children:e.jsx(C,{children:e.jsxs("div",{className:"hospital-specislist-main-div",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center hospital-specislist-sub-main-div ",children:[e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h5",{className:"hospital-specislist-h5-div",children:"Our Doctors"}),e.jsx("p",{className:"docDesc",children:"Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit."})]}),e.jsx("div",{className:"hospital-specislist-p-div",children:e.jsx("button",{className:"viewAllBtn",onClick:()=>n.push("/doctor"),children:"View All"})})]}),e.jsx("div",{className:"doctore-card-div "}),e.jsx(z,{doctorDetails:E,itemstoShow:4})]})})})},R=j.div`
  padding: 10px 40px;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .paragraph {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 2rem;
    font-size: 1rem;
  }

  .paragraph p {
    margin: 0;
    width: 100%;
    font-size: 18px;
    font-family: Inter;
    color: #171a1f;
  }

  .mobile-view {
    display: none;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.75rem;
    }

    .paragraph {
      font-size: 0.9rem;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    .paragraph {
      font-size: 0.85rem;
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
      text-align: center;
    }

    .paragraph {
      font-size: 0.75rem;
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
    }
  }

  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }

  @media (max-width: 391px) {
    padding: 0px 20px;
    .paragraph p {
      display: none;
    }

    .mobile-view {
      display: block;
    }

    h2 {
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
      margin-bottom: unset;
    }
    .specialization-name {
      text-wrap: nowrap;
    }

    .view-more {
      margin-left: 112px;
      margin-top: unset;
    }
  }
`,ee=({siteDetails:o})=>{var p;const[a,h]=t.useState({}),[n,l]=t.useState([]),[s,m]=t.useState([]);t.useEffect(()=>{const d=[...k,...N];l(d)},[]),t.useEffect(()=>{h(o)},[o]);const[u,f]=t.useState([]);t.useEffect(()=>{f((a==null?void 0:a.services)||[])},[a]),t.useEffect(()=>{const d=n.reduce((x,c)=>{const g=c.title||c.name;return u.includes(g)&&x.push({title:g||"",name:g||"",imageUrl:c.imageUrl,navigatePath:c.navigatePath}),x},[]);m(d)},[u,n]),t.useEffect(()=>{console.log("matchedServices : ",s)},[s]);const[r,v]=t.useState(4),w=async()=>{v(s.length)};return e.jsx(R,{children:e.jsxs("div",{className:"affiliated-services-container",children:[e.jsx("h2",{children:"Our Affiliated Services"}),e.jsx("div",{className:"paragraph",children:e.jsxs("p",{children:["Do consectetur proident proident id eiusmod deserunt consequat"," ",e.jsx("br",{}),"pariatur ad ex velit do Lorem reprehenderit."]})}),e.jsx("div",{className:"multi-carousel-modal",children:e.jsx(z,{allCategoriesList:N,itemstoShow:5})}),e.jsxs("div",{className:"mobile-view",children:[e.jsx("div",{className:"specialization-grid",children:(p=s==null?void 0:s.slice(0,r))==null?void 0:p.map((d,x)=>e.jsxs("div",{className:"specialization-card",children:[e.jsx("div",{className:"image-container",children:e.jsx("img",{src:d.imageUrl||"default-image-url",alt:d.title,className:"specialization-image"})}),e.jsx("p",{className:"specialization-name",children:d.title})]},x))}),r<=4&&e.jsx("button",{className:"view-more",onClick:w,children:"View More"})]})]})})},ie=j.section`
  padding: 4rem 0rem;
  background-color: #eaedfc;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .testimonials-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .testimonial-card {
    margin-top: 20px;
    background: white;
    border-radius: 20px;
    padding: 2rem;
    width: 100%;
    max-width: 800px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.5s ease-out;

    .testimonial-inner {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
  }

  .testimonial-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .testimonial-content {
    flex: 1;

    h3 {
      font-size: 1.5rem;
      margin: 0 0 1rem;
      color: #333;
    }

    p {
      color: #666;
      line-height: 1.6;
      margin: 0 0 1rem;
    }

    .testimonial-date {
      color: #888;
      font-size: 0.9rem;
    }
  }

  .nav-button {
    background: white;
    border: none;
    font-size: 25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      background: #f0f0f0;
      transform: translateY(-50%) scale(1.1);
    }

    &.prev {
      left: 0;
      margin-left: 15px;
    }

    &.next {
      right: 0;
      margin-right: 15px;
    }
  }

  .testimonials-dots {
    display: flex;
    gap: 8px;
    margin-top: 2rem;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ccc;
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        background: #333;
        transform: scale(1.2);
        width: 1.5rem;
        border-radius: 10px;
      }

      &:hover {
        background: #999;
      }
    }
  }

  .testimonial-mobile {
    display: none;
  }

  .testimonial-header {
    display: none;
  }

  .testimonial-header-mobile {
    display: none;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    .testimonial-inner {
      flex-direction: column;
      text-align: center;
    }

    .testimonial-image {
      width: 100px;
      height: 100px;
    }

    .nav-button {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 1024px) {
    .testimonial-card {
      padding: 1.5rem;
    }

    .testimonial-image {
      width: 100px;
      height: 100px;
    }

    .nav-button {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 768px) {
    .testimonial-inner {
      flex-direction: column;
      text-align: center;
    }

    .testimonial-image {
      width: 90px;
      height: 90px;
    }

    .testimonial-content {
      h3 {
        font-size: 1.25rem;
      }

      p {
        font-size: 0.95rem;
      }

      .testimonial-date {
        font-size: 0.85rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .testimonial-card {
      padding: 1rem;
    }

    .testimonial-image {
      width: 80px;
      height: 80px;
    }

    .testimonial-content {
      h3 {
        font-size: 1.1rem;
      }

      p {
        font-size: 0.9rem;
      }

      .testimonial-date {
        font-size: 0.8rem;
      }
    }

    .nav-button {
      width: 30px;
      height: 30px;
    }

    .testimonials-dots {
      .dot {
        width: 6px;
        height: 6px;
      }
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }

  @media (max-width: 391px) {
    background-color: unset;
    min-height: unset;

    .testimonial-desktop {
      display: none;
    }

    .testimonial-header-mobile {
      display: block;
    }

    .testimonial-mobile {
      display: block;
    }

    .testimonial-header {
      display: block;
      display: flex;
      flex-direction: row;
    }

    .nav-button.prev {
      display: none;
    }
    .nav-button.next {
      display: none;
    }

    .testimonial-header-mobile {
      display: flex;
      flex-direction: row;
      gap: 110px;
    }

    .button-mobile {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .testimonial-title-mobile {
      font-size: 18px;
      line-height: 14px;
      font-weight: 600;
      font-family: Inter;
      color: #202a3f;
      text-wrap: nowrap;
    }

    .nav-button-mobile.left-arrow {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      color: white;
      border: unset;
      background-color: #252b61;
      align-items: center; /* Center the arrow vertically */
      justify-content: center;
    }

    .nav-button-mobile.right-arrow {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      color: white;
      border: unset;
      background-color: #252b61;
      align-items: center; /* Center the arrow vertically */
      justify-content: center;
    }

    .testimonial-header h3 {
      font-size: 14px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      text-align: left;
    }

    .testimonial-date {
      font-size: 9px;
      letter-spacing: 0.05em;
      font-weight: 500;
      font-family: Inter;
      color: #252b61;
    }

    .content {
      line-height: 0rem;
      margin-top: 6px;
      margin-left: 15px;
    }

    .testimonial-body {
      p {
        font-size: 14px;
        font-family: Inter;
        color: #4d4d4d;
        text-align: left;
      }
    }

    .testimonial-card {
      border-radius: unset;
      box-shadow: unset;
      margin-top: unset;
      padding: 10px 20px;
    }

    .testimonials-container {
      justify-content: unset;
      display: flex;
      flex-direction: column;
      align-items: unset;
    }

    .nav-button {
      position: unset;
    }

    .testimonial-card .testimonial-inner {
      align-items: unset;
      gap: 0.5rem;
    }
    .testimonial-image {
      width: 50px;
      height: 50px;
    }
  }
`,te=({name:o,content:a,date:h,imageUrl:n,className:l})=>e.jsx("div",{className:l,children:e.jsxs("div",{className:"testimonial-inner",children:[e.jsx("img",{src:n,alt:"testimonial",className:"testimonial-image"}),e.jsxs("div",{className:"testimonial-content",children:[e.jsx("h3",{children:o}),e.jsx("div",{dangerouslySetInnerHTML:{__html:a}}),e.jsx("span",{className:"testimonial-date",children:h})]})]})}),ae=({name:o,content:a,date:h,imageUrl:n,className:l})=>e.jsx("div",{className:l,children:e.jsxs("div",{className:"testimonial-inner",children:[e.jsxs("div",{className:"testimonial-header",children:[e.jsx("img",{src:n,alt:"testimonial",className:"testimonial-image"}),e.jsxs("div",{className:"content",children:[e.jsx("h3",{children:o}),e.jsx("span",{className:"testimonial-date",children:h})]})]}),e.jsx("div",{className:"testimonial-body",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:a}})})]})}),ne=({siteDetails:o})=>{var f,r,v,w,p,d,x,c;const[a,h]=t.useState({});t.useEffect(()=>{h(o)},[o]);const n=(a==null?void 0:a.testimonials)||[],[l,s]=t.useState(0),m=()=>{s(g=>g===0?n.length-1:g-1)},u=()=>{s(g=>g===n.length-1?0:g+1)};return e.jsxs(ie,{children:[e.jsxs("div",{className:"testimonials-container",children:[e.jsx("button",{className:"nav-button prev",onClick:m,children:"<"}),e.jsxs("div",{className:"testimonial-header-mobile",children:[e.jsx("h2",{className:"testimonial-title-mobile",children:"Clients Testimonial's"}),e.jsxs("div",{className:"button-mobile",children:[e.jsx("button",{className:"nav-button-mobile left-arrow","aria-label":"Previous",onClick:m,children:"←"}),e.jsx("button",{className:"nav-button-mobile right-arrow","aria-label":"Next",onClick:u,children:"→"})]})]}),n.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"testimonial-desktop",children:e.jsx(te,{name:(f=n[l])==null?void 0:f.tile,content:(r=n[l])==null?void 0:r.description,date:(v=n[l])==null?void 0:v.date,imageUrl:(w=n[l])==null?void 0:w.imageURL,className:`testimonial-card slide-${l}`})}),e.jsx("div",{className:"testimonial-mobile",children:e.jsx(ae,{name:(p=n[l])==null?void 0:p.tile,content:(d=n[l])==null?void 0:d.description,date:(x=n[l])==null?void 0:x.date,imageUrl:(c=n[l])==null?void 0:c.imageURL,className:`testimonial-card slide-${l}`})})]}),e.jsx("button",{className:"nav-button next",onClick:u,children:">"})]}),e.jsx("div",{className:"testimonials-dots",children:n.map((g,b)=>e.jsx("span",{className:`dot ${b===l?"active":""}`,onClick:()=>s(b)},b))}),e.jsx("div",{className:"mobile-view"})]})},oe=j.div`
  padding: 20px;
  padding-bottom: 40px;
  min-height: 50vh;

  .gallery {
    clip-path: polygon(
                0% 0%,  /* Top left */
                25% 10%, /* Top shrink start */
                75% 10%, /* Top shrink end */
                100% 0%, /* Top right */
                100% 100%, /* Bottom right */
                75% 90%, /* Bottom shrink end */
                25% 90%, /* Bottom shrink start */
                0% 100%  /* Bottom left */
            );
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .react-multi-carousel-item img {
    height: 25rem;
  }

  .paragraph {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 2rem;
    font-size: 1rem;
  }

  .paragraph p {
    margin: 0;
    font-family: Inter;
    color: #171a1f;
    font-size: 18px;
    width: 100%;
  }

  .container {
    margin-top: 10rem;
    position: relative;
    top: 100%;
    /* left: 50%; */
    width: 300px;
    /* transform: translate(-50%, -50%); */
    height: 400px;
    perspective: 2000px;
  }

  .ring {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: transform 0.1s ease-out;
    cursor: grab;
  }

  .ring.grabbing {
    cursor: grabbing;
  }

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    backface-visibility: hidden;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .img.active {
    transform: scale(0.8); /* Makes center image smaller */
  }

  .img.side {
    transform: scale(1.2); /* Makes side images larger */
  }

  .container:hover {
    .img {
      opacity: 0.5 !important;
    }
    .img:hover {
      opacity: 1 !important;
    }
  }

  .view-all {
    width: 7%;
    text-decoration: underline;
    font-size: 18px;
    font-weight: 400;
    color: #252b61;
    border: none;
    background: none;
  }

  .meta-link {
    position: fixed;
    left: 10px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    z-index: 10000;
  }

  #source-link {
    top: 60px;
  }
  #yt-link {
    top: 10px;
  }

  .meta-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .meta-link span {
    color: white;
    font-family: sans-serif;
  }

  .meta-link i.fas {
    color: rgb(94, 106, 210);
  }
  .meta-link i.fab {
    color: rgb(219, 31, 106);
  }

  .mobile-view {
    display: none;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.75rem;
    }

    .paragraph {
      flex-direction: column;
      align-items: center;
      font-size: 0.9rem;
    }

    .container {
      width: 250px;
      height: 350px;
      scale: 0.8;
    }
  }

  @media (max-width: 890px) {
    .container {
      scale: 0.6;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    .paragraph {
      font-size: 0.8rem;
    }

    .container {
      width: 200px;
      height: 300px;
      scale: 0.5;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.25rem;
      text-align: center;
    }

    .paragraph {
      font-size: 0.75rem;
    }

    .container {
      width: 150px;
      height: 250px;
      scale: 0.4;
    }

    .meta-link {
      padding: 8px 16px;
      gap: 3px;
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }

  @media (max-width: 391px) {
    .gallery {
      display: none;
    }

    .mobile-view {
      display: block;
    }

    h2 {
      margin: unset;
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
    }

    .paragraph {
      display: none;
    }
  }
`,se=j.div`
  /* General container styles */
  .gallery-container {
    font-family: Arial, sans-serif;
    width: 100%;
    margin: 0 auto;
    padding: 16px 0px;
    box-sizing: border-box;
  }

  .gallery-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
  }

  .gallery-layout {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  /* Left section (Main Image + Two Below) */
  .gallery-left {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 2;
  }

  .gallery-main {
    width: 100%;
  }

  .gallery-main-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  .gallery-bottom {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    width: 48%;
  }

  .gallery-bottom-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
  }

  /* Right section (Side Images) */
  .gallery-right {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .gallery-side-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
  }
  .gallery-view-all {
    margin-top: 20px;
    font-size: 14px;
    background: none;
    border: none;
    color: #1e1e1e;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 125px;
  }

  @media (max-width: 391px) {
    .gallery-layout {
      display: flex;
      flex-direction: row;
    }
  }
`,re=()=>{const o=["https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png"];return e.jsx(se,{children:e.jsxs("div",{className:"gallery-container",children:[e.jsxs("div",{className:"gallery-layout",children:[e.jsxs("div",{className:"gallery-left",children:[e.jsx("div",{className:"gallery-main",children:e.jsx("img",{src:o[0],alt:"Main",className:"gallery-main-image"})}),e.jsxs("div",{className:"gallery-bottom",children:[e.jsx("img",{src:o[1],alt:"Below 1",className:"gallery-bottom-image"}),e.jsx("img",{src:o[2],alt:"Below 2",className:"gallery-bottom-image"})]})]}),e.jsxs("div",{className:"gallery-right",children:[e.jsx("img",{src:o[3],alt:"Side 1",className:"gallery-side-image"}),e.jsx("img",{src:o[4],alt:"Side 2",className:"gallery-side-image"}),e.jsx("img",{src:o[5],alt:"Side 3",className:"gallery-side-image"})]})]}),e.jsx("button",{className:"gallery-view-all",children:"View All"})]})})},le=({siteDetails:o})=>{const[a,h]=t.useState({});t.useEffect(()=>{h(o)},[o]);const n=t.useRef(null),[l,s]=t.useState(0),[m,u]=t.useState(!1),[f,r]=t.useState(0),[v,w]=t.useState(0),p=(a==null?void 0:a.gallery)||Array.from({length:10},(c,g)=>({id:g,url:`https://picsum.photos/id/${g+32}/600/400/`}));t.useEffect(()=>{console.log("images : ",p)},[p]);const d=()=>{n.current.querySelectorAll(".img").forEach(b=>{const i=x(b);i>330||i<30?(b.classList.add("active"),b.classList.remove("side")):(b.classList.add("side"),b.classList.remove("active"))})},x=c=>{const b=c.style.transform.match(/rotateY\(([-\d.]+)deg\)/);return b?parseFloat(b[1]):0};return t.useEffect(()=>{n.current&&(n.current.style.transform=`rotateY(${l}deg)`,d())},[l]),e.jsxs(oe,{children:[e.jsx("h2",{children:"Gallery"}),e.jsxs("div",{className:"paragraph",children:[e.jsxs("p",{children:["Do consectetur proident proident id eiusmod deserunt consequat ",e.jsx("br",{}),"pariatur ad ex velit do Lorem reprehenderit."]}),e.jsx("button",{className:"view-all",onClick:()=>{},children:"View All"})]}),e.jsx("div",{className:"gallery",children:e.jsx(z,{galleryList:p})}),e.jsx("div",{className:"mobile-view",children:e.jsx(re,{})})]})},de=j.div`
  /* padding: calc(40px + 2rem); */
  padding-top: unset;
  font-family: Inter, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .galleryPreview {
    padding: 0px 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 7fr;
    gap: 2rem;
  }
  .otherImages {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
    .image:hover {
      border: 1px solid #000000;
      cursor: pointer;
      border-radius: 15px;
    }
  }

  .image {
    position: relative;
    /* border-radius: 15px; */
    overflow: hidden;
  }

  .image img {
    width: 100%;
    /* height: auto; */
    filter: brightness(0.6);
  }

  .imageOverlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;

    color: #ffffff;
    text-align: center;
    z-index: 2;
  }

  .imageOverlay::after {
    content: "";
    position: absolute;
    top: 80%;
    left: 50%;
    width: 50px;
    height: 2px;
    background-color: #ffffff;
    transform: translate(-50%, 100%);
  }

  div > img {
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
    height: 100%;
  }
  .heroText {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 40px;
    h1 {
      font-size: 42px;
      font-weight: 700;
      color: #000000;
    }
    button {
      background: #252b61;
      height: 64.7px;
      padding: 10px 30px;
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      border: none;
      border-radius: 32px;
    }
  }

  .view-all-btn {
    display: inline-block;
    float: right;
    text-decoration: underline;
    font-size: 22px;
    font-weight: 400;
    color: #252b61;
    border: none;
    background: none;
  }

  

  @media (max-width: 391px) {

    .multi-carousel-modal {
      display: none;
    }

    .specialization {
      .mobile-view {
        display: block;
      }

      .view-all-btn {
        display: none;
      }
    }

    .specialization {
      text-align: center;
      font-family: Arial, sans-serif;
    }

    .specialization-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .specialization p {
      display: none;
    }

    .specialization h2 {
      font-size: 22px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
      margin-bottom: unset;
    }

    .specialization-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      justify-items: center;
    }

    .specialization-card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .image-container {
      width: 100%;
      height: 100%;
      background: #fff7e9;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .specialization-image {
      width: 80%;
      height: auto;
      border-radius: 50%;
    }

    .specialization-name {
      font-size: 16px;
      font-weight: 500;
      margin-top: 10px;
    }

    .view-more {
      margin-top: 20px;
      font-size: 14px;
      background: none;
        border: none;
        color: #1e1e1e;
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .head {
    display: none;
  }

  @media (max-width: 1024px) {
    .paragraph {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .cards {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .galleryPreview {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column-reverse;
      gap: 1rem;
    }
    .otherImages {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: none;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .heroText {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .heroText h1 {
      font-size: 36px;
    }
    .heroText button {
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    .view {
      font-size: 18px;
      padding: 8px 20px;
    }

    .cards {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.8rem;
    }

    .card {
      padding: 0.8rem;
      /* width: 100%; */
    }

    .card-title {
      font-size: 18px;
    }

    .galleryPreview {
      display: flex;
      flex-direction: column-reverse;
      gap: 1rem;
    }

    .otherImages {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: none;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .heroText h1 {
      font-size: 32px;
    }
    .heroText button {
      font-size: 16px;
      padding: 8px 20px;
    }
    .specialization .cards {
      display: block;
      width: 70%;
    }

    .specialization .card {
      margin-bottom: 1rem;
      text-align: center;
    }

    .specialization .card-image img {
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    .paragraph {
      font-size: 0.9rem;
    }

    .galleryPreview {
      display: flex;
      flex-direction: column-reverse;
      gap: 1rem;
    }

    .otherImages {
      /* display: flex; */
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 16px;
    }

    .view {
      font-size: 16px;
      padding: 6px 15px;
    }

    .cards {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }

    .card {
      padding: 0.5rem;
    }

    .card-title {
      font-size: 16px;
    }

    .component {
      gap: 2rem;
      padding: 20px;
    }
    .heroText h1 {
      font-size: 28px;
    }
    .heroText button {
      font-size: 14px;
      padding: 6px 15px;
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }
  .viewAllBtn {
    width: 200px;
    background: #252b61;
    border: 1px solid #e2e2e2;
    height: 40px;
    border-radius: 8px;
    color: #fff;
  }

  @media (max-width: 391px) {
    gap: 2rem;
    .head {
      display: block;
    }
    .galleryPreview {
      padding: 0px 20px;
    }

    .currImage {
      height: 208px;
    }

    .otherImages {
      height: 65px;
      margin-top: unset;
    }

    .heroText h1 {
      display: none;
    }

    .head {
      position: absolute;
      margin-top: -4rem;
      
      h1 {
        color: white;
        margin-left: 50px;
        text-align: center;
        font-weight: 700;
        font-style: italic;
      }
    }

    .heroText button {
      margin-top: unset;
    }
  }
`,pe=o=>{var b;const a=D(),{siteName:h}=(b=o==null?void 0:o.match)==null?void 0:b.params,{universalSearchResults:n}=A(({generic:i})=>i),[l,s]=t.useState(!1),[m,u]=t.useState(""),f=S(),[r,v]=t.useState();t.useEffect(()=>{console.log("siteName : ",h),(async()=>{var I,T;const y=await a(L(h));if(y!=null&&y.error){U.error(((I=y==null?void 0:y.error)==null?void 0:I.message)||"Unknown Error Occured");return}v(((T=y==null?void 0:y.payload)==null?void 0:T.data)||{})})()},[h,a]);const w=i=>{a(_({searchText:i,type:"generic,homeopathy,wellness,branded"}))},p=t.useCallback(B.debounce(i=>w(i),500),[]),d=i=>{s(!0),u(i),p(i)},x=()=>{f.push("/bookappointment")},c=i=>{f.push(i)},g=i=>{s(!1),a(G([])),(i==null?void 0:i.to_link)==="/pharmacy"?c(`/item/generic/${i==null?void 0:i.linkable_id}`):(i==null?void 0:i.linkable_type)==="packages"?c(`/labPackageDetils/${i==null?void 0:i.linkable_id}`):(i==null?void 0:i.type)==="ctmri"?c(`/radiology/scan-details/${i==null?void 0:i.linkable_id}`):(i==null?void 0:i.linkable_type)==="tests"?c(`/labTestDetils/${i==null?void 0:i.linkable_id}`):(i==null?void 0:i.type)==="hospital"?c(`/hospital/${i==null?void 0:i.linkable_id}`):c(`/doctor?q=${m}`)};return t.useEffect(()=>{console.log("hyperSiteDetails : ",r)},[r]),e.jsxs(de,{children:[e.jsxs("div",{className:"searchWrapper",children:[e.jsx(M,{details:H,handleonFilterName:d}),e.jsx(P,{children:l&&e.jsx("div",{className:"search-popup",children:e.jsxs("div",{className:"search-popup-content",children:[e.jsxs("div",{className:"search-heading-text-div",children:[e.jsxs("p",{children:["Showing Result for ",m]}),e.jsx("button",{className:"btn",onClick:()=>s(!1),children:e.jsx(q,{})})]}),m&&(n==null?void 0:n.length)>0?n.map((i,y)=>e.jsxs("div",{className:"search-popup-item",onClick:()=>g(i),children:[(i==null?void 0:i.image)&&e.jsx("div",{className:"search-popup-image",children:e.jsx("img",{src:i==null?void 0:i.image,alt:(i==null?void 0:i.name)||"Search Result"})}),e.jsxs("div",{className:"search-popup-details",children:[e.jsx("p",{className:"search-popup-name",children:i==null?void 0:i.name}),e.jsx("p",{className:"search-popup-type",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732179533099.png",alt:""})})]})]},y)):m.length>2?e.jsx("div",{children:e.jsxs("div",{className:"search-popup-no-results",children:[e.jsxs("p",{className:"search-popup-title",children:["No result found for ",m]}),e.jsx("p",{className:"search-popup-sub-title",children:"Search with another brand or category"}),e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732181068454.png",alt:""})]})}):null]})})})]}),e.jsx(O,{siteDetails:r}),e.jsxs("div",{className:"heroText",children:[e.jsx("h1",{children:"Your Partner in Health and Wellness"}),e.jsx("button",{onClick:x,children:"Book Appointment"})]}),e.jsx($,{siteDetails:r}),e.jsx(W,{siteDetails:r}),e.jsx(Z,{siteDetails:r}),e.jsx(X,{siteDetails:r}),e.jsx(ee,{siteDetails:r}),e.jsx(ne,{siteDetails:r}),e.jsx(K,{siteDetails:r}),e.jsx(le,{siteDetails:r})]})};export{pe as default};
