import styled from "styled-components";


export const CategoryStyled = styled.div`
    .category-container{
        width:100%; 
        padding:10px 5% 10px 5% 
    }
    .category-descriptions{
        height:50px;
        margin-bottom:5px;
    }
    .category-deck{
        display:flex;
        gap:10px;
        justify-content:space-around;
        flex-wrap:wrap;
    }
    .category-card{
        width:260px;
        height:250px;
        background-color:white;
        border-radius:25px;
        padding:20px 15px 2px 15px;
        overflow:hidden;
    }
    .card-img{
        border-radius:25px;
        width:130px;
        height:100%;
    }
    .card-img-container{
        display:flex;
        justify-content:center;
        width:100%;
        height:140px;
    }

`