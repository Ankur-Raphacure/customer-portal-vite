import styled from "styled-components";


export const ProductCardStyled = styled.div`
    width:252px;

    
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
    .product-deck-card{
        width:252px;
        height:265px;
        background-color:white;
        border-radius:15px;
        flex: 0 0 auto;
        padding:5px 5px 0 5px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
    .card-image-container{
        position:relative;
        display:flex;
        height:60%
    }
    .card-rating-div{
        position:absolute;
        top: 20px;
        left: -27px;
    }
    .card-rating-svg{
        position:absolute;
        top:0px;
        left:0px
    }
    .card-rating-p{
        position:absolute;
        top:-2px;
        left:20px;
    }
    .card-img{
        width:100%;
        border-radius:15px;
        height:100%;
        object-fit:contain;
        border:1px solid #eaeaea;
    }
    .card-bottom-container{
        display:flex;
        gap:10px;
        margin:0 0 0 10px;
    }
    .rapha-assured-svg{
        position:absolute;
        right:0
    }
    .card-item-nowrap{
        white-space: nowrap;  
        overflow: hidden;    
        text-overflow: ellipsis;       
    }
    .card-item-name{
        height:48px;
        margin:10px 5px 10px 5px;
        display: -webkit-box;  
        -webkit-line-clamp: 2;   
        -webkit-box-orient: vertical; 
        overflow: hidden;          
        text-overflow: ellipsis; 
        line-height: 1.5em;         
        max-height: 3em;   
    }
    .link-to{
        text-decoration: none;
        color:black;
        display:flex;
        justify-content:center;
        width:252px;
    }
    .place-p{
        color:rgb(164, 155, 155);
    }
`