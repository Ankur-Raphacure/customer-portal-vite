import{d as g,r as c,j as e,L as f}from"./index-CitTC1Lo.js";const m=g.div`
    .product-deck-container{
        margin:20px 0 20px 0;
        border-radius:10px;
        background-color:rgb(233, 235, 241);
        padding:0 10px 0 10px;
    }
    .product-new-color{
        background-color:rgb(246, 249, 253) !important;
    }
    .product-deck-container-padding{
        padding:0 5% 0 5%;
    }
    .product-deck-div{
        display: flex;
        gap: 16px;
        overflow-x: auto;
        padding: 16px; 
        scrollbar-width: none; 
    }
    .deck-heading{
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin-bottom:14px;
    }
    .deck-heading h3{
        margin:0;
    }
    .scroll-container{
        position:relative;
        width:100%;
    }
    .scroll-button {
        width:100px;
        height:100px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        background-color: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        padding: 0.5rem;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: background-color 0.2s ease;

        &:hover {
        background-color: #f0f0f0;
        }

        &.left {
            left: -10;
        }

        &.right {
            right: -50;
        }
    }
`,w=({data:r,renderCard:s,heading:d="product",padding:l=!0,viewAllLink:i,background:a})=>{const t=c.useRef(null),[b,p]=c.useState(!1),[k,u]=c.useState(!0),h=()=>{if(t.current){const{scrollLeft:o,scrollWidth:n,clientWidth:x}=t.current;p(o>0),u(o<n-x-1)}};return e.jsx(e.Fragment,{children:e.jsx(m,{children:e.jsxs("div",{className:`product-deck-container ${a?"product-new-color":""} ${l?" product-deck-container-padding":""}`,children:[e.jsxs("div",{className:"deck-heading",children:[e.jsx("h3",{children:d}),(i??null)&&e.jsx(f,{to:i,children:"View All"})]}),(r==null?void 0:r.length)===0?e.jsx(e.Fragment,{children:e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"150px"},children:e.jsx("p",{children:"No data found"})})}):e.jsx("div",{className:"scroll-container",children:e.jsx("div",{onScroll:h,ref:t,className:"product-deck-div",children:r==null?void 0:r.map((o,n)=>s(o,n))})})]})})})};export{w as P};
