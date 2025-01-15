import styled from "styled-components";



export const GymStyled = styled.div`
    .intro-banner{
        background-color:rgb(18, 29, 89);
        width:100%;
    }
    .intro-banner-img{
        width:100%
    }
    .search-container{
        display:flex;
        justify-content:center;
        margin-top:30px;
        width:100%
    }
    .search-box-styled{
        border-radius:25px;
        width:100%;
        height:50px;
        border:2px solid rgb(18, 29, 89);
        padding:0 48px 1px 48px;
        font-size:24px
    }
    .search-icon{
        position:absolute;
        left:9px;
        top:6px;
    }
    .search-box-div{
        position:relative;
        width:40%
    }
    .search-voice-icon{
        position:absolute;
        right:9px;
        top:6px;
    }



    .category-deck{
        display:flex;
    
    }


    .other-services-container{
        padding: 10px 5% 10px 5%;  
        margin-bottom:50px;
    }
    .other-services-main{
        display:flex;
        gap:25px;
        align-items:center;
    }
    .other-services-svg-map{
        width:500px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        grid-template-rows: repeat(2, 1fr);   
        gap: 15px;
        width: 80%; 
    }

    .grid-item {
        background-color: white;
        color: black;
        padding: 10px 10px 0 10px;
        border-radius: 10px;
        font-size:18px;
        font-weight: 500;
        width:200px;
    }
    
    .sports-img-container{
        width:100%;
        height:130px;
        display:flex;
        justify-content:center;
        align-items:flex-end;
    }

`   