import styled from "styled-components";


export const ProductCardStyled = styled.div`
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
    .card-rating-svg{
        position:absolute;
        top:20px;
        left:-12px
    }
    .card-img{
        width:100%;
        border-radius:15px;
        height:100%;
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
        width: 200px;         
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
`