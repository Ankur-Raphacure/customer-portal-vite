import styled from "styled-components";


export const CategoryStyled = styled.div`
    .category-container{
        width:100%; 
        padding:10px 5% 10px 5%;
        margin-bottom:40px;
    }
    .category-container h3{
        margin-bottom:50px;
        font-weight: 600;
    }
    .category-descriptions{
        height:50px;
        margin-bottom:5px;
    }
    .category-deck{
        display:flex;
        gap:20px;
        justify-content:space-evenly;
        flex-wrap:wrap;
    }
    .category-card{
        width:100%;
        height:250px;
        background-color:white;
        border-radius:25px;
        padding:20px 15px 0px 15px;
        overflow:hidden;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .card-img{
        border-radius:25px;
        height:100%;
        object-fit:contain;
    }
    .card-img-container{
        display:flex;
        justify-content:center;
        width:100%;
        height:180px;
    }
    .link-to{
        color: black;
        text-decoration: none;
        flex-grow: 1;
        flex-basis: 300px;
        max-width: 350px;
    }

`