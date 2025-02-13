import styled from "styled-components";

export const ProductDeckStyled = styled.div`
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
`;
