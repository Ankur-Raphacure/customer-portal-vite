import styled from "styled-components";

export const AddToCartProductCardStyled = styled.div`
    .card-div{
        width:220px;
        height:320px;
        border-radius:15px;
        background-color:white;
        padding:20px 10px 0 10px;
    }
    .discount-banner-small{
        position:absolute;
        top:20px;
        left:-20px;
    }
    .card-img-container{
        position:relative;
    }
    .card-img{
        width:100%;
        height:100%;
        border-radius:15px;
    }
    .price-text{
        display:inline-block;
        text-decoration:line-through;
        margin-right:5px;
    }
    .price-text-discount{
        display:inline-block;
    }
    .addtocart-btn{
        background-color:rgb(37, 43, 97);
        width:70px;
        height:30px;
        border-radius:15px;
        color:white;
    }
    .btn-container{
        display:flex;
        justify-content:end;
    }
`;
