import styled from "styled-components";

export const JobDescriptionStyled = styled.div`
width: 100% !important;
background-color: #FFF;
.job-card{
    width: 80%;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1.5rem;
    margin: auto;
}
.about-company{
    border: 1px solid #E2E8F0;
    padding: 51px 16px;
    border-radius: 4px;
    margin-top:25px;
}
.logo-sec{
    width: 73px;
    height: 37px;
    object-fit: contain;
    img{
        width: 100%;
        height: 100%;
    }
}
.job-header{
    h2{
        width: 188.7px;
        font-size: 16px;
        line-height: 24px;
        color: #095934;
        height: 24px;
    }
    p{
        width: 49.2px;
        font-size: 12px;
        line-height: 18px;
        color: #5a7184;
        height: 18px;
    }
}
.small-logo{
    width: 30px;
    height: 30px;
    object-fit: contain;
    img{
        width: 100%;
        height: 100%;
    }
}
.logo-title{
    h3{
        width: 61px;
        font-size: 13px;
        line-height: 19.5px;
        font-weight: 500;
        color: #000;
        text-align: left;
        display: flex;
        align-items: center;
        height: 19.5px;
    }
    p{
        width: 69px;
        font-size: 12px;
        line-height: 18px;
        color: #5a7184;
        text-align: left;
        display: flex;
        align-items: center;
        height: 18px;
        margin-bottom: 0px;
    }
}
.about-comp-sec{
    h3{
        width: 124px;
        font-size: 15px;
        line-height: 22.5px;
        font-weight: 600;
        color: #000;
        display: flex;
        align-items: center;
        height: 22px;
    }
    p{
        width: 265px;
        font-size: 14px;
        line-height: 21px;
        color: #5a7184;
        text-align: justify;
        display: flex;
        align-items: center;
    }
}
.jobDes-buttons-sec{
    button{
        width: 37%;
        background-color: #ebeef3;
        height: 40px;
        text-align: center;
        font-size: 12px;
        color: #3f598a;
        line-height: 14.4px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
        border: 1px solid #e2e8f0;
    }
}
.about-job{

}
.job-details-sec{
    border: 1px solid #E2E8F0;
    padding: 25px 16px;
    border-radius: 4px;
    margin-top: 25px;
}
.job-title{
    margin-bottom: 36px;
    h2{
        font-size: 20px;
        line-height: 30px;
        font-weight: 600;
        color: #183b56;
        display: flex;
        align-items: center;
    }
    p{
        font-size: 12px;
        line-height: 18px;
        color: #5a7184;
        height: 18px;
    }
    button{
        border-radius: 24px;
        background-color: #34b27e;
        border: 2px solid #34b27e;
        box-sizing: border-box;
        height: 32px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 6.7px 10px 8.5px;
        min-width: 32px;
        cursor: pointer;
        text-align: center;
        font-size: 14px;
        color: #fff;    
    }
}
.job-des-log-sec{
    width: 60%;
}
.job-des-logos{
    .job-des-logos-bag{
        width: 36px;
        height: 36px;
        object-fit: contain;
        img{
            width: 100%;
            height: 100%; 
        }
    }
    h4{
        font-size: 13px;
        line-height: 19.5px;
        font-weight: 500;
        color: #000;
        display: flex;
        align-items: center;
    }
    p{
        font-size: 13px;
        line-height: 19.5px;
        color: #5a7184;
        margin-bottom: 0px;
    }
}
.job-description{
    margin-top: 33px;
    h3{
        font-size: 15px;
        line-height: 22.5px;
        font-weight: 600;
        color: #000;
    }
    p{
        font-size: 14px;
        line-height: 21px;
        color: #5a7184;
    }    
}
.responsibilities{
    h3{
        font-size: 14px;
        line-height: 21px;
        font-weight: 600;
        color: #4b5760;
    }
    p{
        font-size: 14px;
        line-height: 21px;
        color: #5a7184;
    }
}
.requirements{
    h3{
        font-size: 14px;
        line-height: 21px;
        font-weight: 600;
        color: #4b5760;
    }
    p{
        font-size: 14px;
        line-height: 21px;
        color: #5a7184;
    }
}
.education{
    border: 1px solid #e7e7e7;
    // padding: 24px 33px;
    h3{
        font-size: 15px;
        line-height: 22.5px;
        font-weight: 600;
        color: #000;
    }
    p{
        font-size: 14px;
        line-height: 21px;
        color: #5a7184;
    }
}
.interview-process{
    h3{
    font-size: 15px;
    line-height: 22.5px;
    font-weight: 600;
    color: #000;
    }
}
.accordion{
    margin-top: 21px;
}
.accordion-button:not(.collapsed) {
    background-color: #f9fbfe !important;
}
.accordion-button:focus{
    box-shadow: unset !important;
}
.accordion-button{
    padding: 7px;
}
.accordion-button, .accordion-header{
    font-size: 16px;
    line-height: 24px;
    color: #5a7184;
}
.accordion-body{
    font-size: 14px;
    line-height: 21px;
    color: #5a7184;
}

@media only screen and  (max-width: 700px) {
    .job-card {
        display: block;
        width: 100%;
        .job-des-log-sec {
            width: 100%;
        }
    }
    .about-company {
        padding-top: 0px;
        padding-bottom: 10px;
    }
    .logo-sec {
    width: 100px;
    height: 90px;
    }
    
}

`;
