import{d as m,u as n,r as i,j as e}from"./index-f4owDEOR.js";const c=m.div`
  text-align: left;
  padding: 2rem;

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 1rem;
    
  }

  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 2rem;
    
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    justify-items: center;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .gallery-item {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .gallery-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`,h=({siteDetails:p})=>{const r=n().location.state,[l,o]=i.useState([]);return i.useEffect(()=>{var a;const t=(a=r==null?void 0:r.gallery)==null?void 0:a.map((d,s)=>({id:s,src:d,alt:`Image ${s+1}`}));o(t)},[r]),e.jsxs(c,{children:[e.jsx("h1",{children:"Gallery"}),e.jsxs("p",{children:["Do consectetur proident proident id eiusmod deserunt consequat ",e.jsx("br",{})," ","pariatur ad ex velit do Lorem reprehenderit."]}),e.jsx("div",{className:"gallery-grid",children:l.map(t=>e.jsx("div",{className:"gallery-item",children:e.jsx("img",{src:t.src,alt:t.alt,className:"gallery-image"})},t.id))})]})};export{h as default};
