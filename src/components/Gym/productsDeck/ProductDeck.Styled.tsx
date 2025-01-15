import styled from "styled-components";


export const ProductDeckStyled = styled.div`
    .product-deck-container{
        padding:0 5% 0 5%;
        margin:20px 0 20px 0;
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
`