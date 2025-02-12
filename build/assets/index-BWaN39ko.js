import{d as o,u as s,j as e}from"./index-DDOdRoFT.js";import{s as a,l as r}from"./location-DmGFsq7I.js";const l="/assets/bannerBack-CKZhCsFx.png",c=o.div`
width: 100%;
background-color: #FFF;
textarea:focus, input:focus, select:focus{
        outline: none;
}
::marker {
     color: #2B75FA !important;
}
.career-section{
    width: 80%;
    margin: auto;
    padding-top: 4%;
    @media (max-width: 700px) {
        width: 95%;
        padding-top: 12%;
    }
}
.cbanner-section{
    display: flex;
    border-radius: 23px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    background: linear-gradient(258.26deg, #c6e5f7, #b3e6df 42.15%, #fff 89.53%);
    height: 378px;
    div{
        flex-basis: 100%;
    }
    .banner-back-set{
        background-image:url(${l});
        background-size: cover;
        background-position: center;
    }
    .banner-txt-sec{
        font-size: 38px;
        letter-spacing: 0.04em;
        line-height: 71%;
        display: inline-block;
        opacity: 0.8;
        color: #000;
        padding: 12%;
        h1{
            display: flex;
            flex-direction: column;
            font-weight: 800;
        }
        span{
            color: #0056fd;
        }
    }
    li{
        width: 188px;
        font-size: 14px;
        letter-spacing: -0.02em;
        line-height: 25px;
        font-weight: 500;
        color: #000;
        text-align: left;
        height: 32px;
        opacity: 0.5;
        margin-bottom: 22px;
        
    }
    .banner-image-sec{
        display: flex;
        justify-content: center;
    }
    @media (max-width: 700px) {
        display: block;
        width: 100%;
        height: auto;
        li {
            width: 163px;
        }
        .banner-txt-sec{
            padding: unset;
            h1{
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 11px;
            }
            div{
                padding: 0% 4%;
            }
        }
    }
}
.search-section {
    width: 462px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid #818181;
    border-radius: 6px;
    background-color: #FFF;
    padding: 5px;
    margin: 4px 0px;
    input {
        width: 100%;
        border-radius: 6px;
        background-color: #fff;
        border: 1px solid #F8F8F8;
        box-sizing: border-box;
        height: 40px;
        padding: 9.5px 17px;
        text-align: left;
        font-size: 18px;
        color: #818181;
        margin: 4px 0px;
    }
    button {
        border-radius: 4px;
        background-color: #9474ff;
        height: 48px;
        padding: 13.8px 29.6px 15px;
        box-sizing: border-box;
        min-width: 40px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
     @media (max-width: 700px) {
        width: unset;
    }   
}
.jobSearchBtns{
    margin-right:15px;
    appearance: none;
    background: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z' fill='%23212121'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    border-radius: 2px;
    padding: 0.25rem 2rem 0.25rem 0.75rem;
    background-position-x: right;
}
.job-listing-section{
    margin-top : 46px;
    margin-bottom: 18px;
    h3{
        font-size: 18px;
        line-height: 27px;
        font-weight: 700;
        color: #183b56;
    }
}
.showingJobBtns{
    border-radius: 30px;
    background-color: #f9fbfe;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    height: 40px;
    text-align: center;
    font-size: 14px;
    color: #5a7184;
    margin-left: 29px;
    background-position: right 0.5rem center;
    padding: 0.25rem 2rem 0.25rem 0.75rem;
    background-position-x: right;

}
.company-logo{
    width: 48.03px;
    height: 51.27px;
    object-fit: contain;
    margin: 2px 20px 2px 11px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background-color: #f7f8f9;
    }
}
.content-sec{
    .job-card{
        border: 1px solid #EBEEF3;
        padding: 17px 21px;
    }
}
.job-title{
    margin-right: 12%;
    h4{
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        color: #000;
    }
    p{
        font-size: 12px;
        line-height: 18px;
        font-weight: 500;
        color: #5a7184;
        margin-bottom: 0px;
    }
}
.salary{
    margin-right: 9%;
    gap: .5rem;
    .salary-bag{
        width: 39px;
        height: 39px;
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
        text-align: left;
    }
    p{
        font-size: 13px;
        line-height: 19.5px;
        color: #5a7184;
        text-align: left;
        margin-bottom: 0px;
    }
}
.location{
    gap: 0.5rem;
    margin-right: 9%;
    .location-img{
        width: 39px;
        height: 39px;
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
    }
    p{
        font-size: 13px;
        line-height: 19.5px;
        color: #5a7184;
        margin-bottom: 0px;
    }
}
.apply{
    button {
        border-radius: 24px;
        border: 2px solid #9474ff;
        box-sizing: border-box;
        height: 32px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 6.7px 10px 8.5px;
        min-width: 32px;
        text-align: center;
        font-size: 14px;
        color: #9474ff;
        background-color: transparent;
    }
}
.pagecount-sec{
    margin-top: 29px;
    p{
        font-size: 16px;
        line-height: 24px;
        color: #000;
        text-align: left;
    }
    .count-number{
        box-shadow: 0px 3px 8px rgba(50, 50, 93, 0.07);
        border-radius: 5px;
        background-color: #ebeef3;
        height: 36px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 7.8px 16.2px 9px 16.1px;
        box-sizing: border-box;
        min-width: 40px;
        text-align: center;
    }
}

@media only screen and  (max-width: 700px) {
    .job-listing-section{
        h3{
            font-size: 14px;
        }
    }
    .content-sec{
        .job-card{
            gap: 0.5rem;
            padding: 3px;
            .company-logo{
                width: 30px;
                height: 35px;
                margin: 0px;
                img{
                    width: unset;
                }
            }
            .job-title {
                margin-right: 0px;
                h4{
                    font-size: 12px;
                    line-height: 18px;
                    width: 90px;
                }
                p{
                    font-size: 10px;
                    line-height: 12px;
                    font-weight: 500;
                }
            }
            .salary{
                gap: 0.25rem;
                margin-right: 0px;
                align-items: center;
                .salary-bag{
                    width: 30px;
                    height: 30px;
                }
                h4{
                    font-size: 12px;
                    line-height: unset;
                }
                p{
                    font-size: 9px;
                    line-height: 12px;
                    font-weight: 500;
                }
            }
            .location{
                gap: 0.25rem;
                margin-right: 0px;
                align-items: center;
                .location-img{
                    width: 30px;
                    height: 30px;
                }
                h4{
                    font-size: 12px;
                    line-height: unset;
                }
                p{
                    font-size: 10px;
                    line-height: 12px;
                    font-weight: 500;
                }
            }
         }
    } 
    .apply button{
        width: 57px;
        height: 27px;
        font-size: 9px;
        padding: 2.7px 5px 3.5px;
        border: 1px solid #9474ff;
        border-radius: 24px;
        margin-right: 0px;
    }
}
`,x="/assets/Background-Cw1sBQbf.svg",d="/assets/womanWorkDesk-kTCgwJgZ.png";function g(){const i=s(),t=n=>{i.push(n)};return e.jsx(c,{children:e.jsxs("div",{className:"career-section",children:[e.jsxs("div",{className:"cbanner-section",children:[e.jsx("div",{className:"banner-back-set",children:e.jsxs("div",{className:"banner-txt-sec",children:[e.jsxs("h1",{children:["Why join  ",e.jsx("span",{children:"Raphacure?"})]}),e.jsxs("div",{className:"d-flex mt-4",children:[e.jsxs("ul",{className:"ps-3 pe-3",children:[e.jsx("li",{children:"Work with cutting-edge healthcare technology."}),e.jsx("li",{children:"Enjoy opportunities for professional development."}),e.jsx("li",{children:"Be part of a collaborative and dynamic team."})]}),e.jsxs("ul",{className:"ps-3 pe-3",children:[e.jsx("li",{children:"Contribute to improving healthcare services."}),e.jsx("li",{children:"Receive a comprehensive benefits package."}),e.jsx("li",{children:"Benefit from flexible working arrangements."})]})]})]})}),e.jsx("div",{className:"banner-image-sec",children:e.jsx("img",{src:d,alt:"hero"})})]}),e.jsxs("div",{className:"content-sec",children:[e.jsxs("div",{className:"search-section mt-5",children:[e.jsx("input",{type:"text",className:"",placeholder:"UX"}),e.jsx("button",{className:"btn btn-primary",children:"Search"})]}),e.jsxs("div",{className:"job-description mt-5",children:[e.jsx("select",{className:"jobSearchBtns ",children:e.jsx("option",{value:"job-role",children:"Job Role"})}),e.jsx("select",{className:"jobSearchBtns ",children:e.jsx("option",{value:"location",children:"Location"})}),e.jsx("select",{className:"jobSearchBtns ",children:e.jsx("option",{value:"experience",children:"Experience"})})]}),e.jsxs("div",{className:"job-listing-section d-flex justify-content-between ",children:[e.jsx("h3",{children:"Showing 3 Jobs"}),e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("select",{className:"showingJobBtns ",children:e.jsx("option",{value:"location",children:"Location"})}),e.jsx("select",{className:"showingJobBtns ",children:e.jsx("option",{value:"position",children:"Position"})})]})]}),e.jsxs("div",{className:"job-card d-flex align-items-center",children:[e.jsx("div",{className:"company-logo ",children:e.jsx("img",{src:x,alt:"company logo"})}),e.jsxs("div",{className:"job-title d-flex flex-column",children:[e.jsx("h4",{className:"mb-0",children:"Technical Content Writer"}),e.jsx("p",{children:"Raphacure Pvt Ltd"})]}),e.jsxs("div",{className:"salary d-flex",children:[e.jsx("div",{className:"salary-bag",children:e.jsx("img",{src:a,alt:"Salary"})}),e.jsxs("div",{className:"salary-Bag-txt ml-1",children:[e.jsx("h4",{className:"m-0",children:"Not disclosed"}),e.jsx("p",{children:"Annual Salary"})]})]}),e.jsxs("div",{className:"location d-flex",children:[e.jsx("div",{className:"location-img",children:e.jsx("img",{src:r,alt:"Location"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-0",children:"Bengaluru"}),e.jsx("p",{children:"Location"})]})]}),e.jsx("div",{className:"apply ",children:e.jsx("button",{onClick:()=>t("/job-description"),children:"Apply Now"})})]}),e.jsxs("div",{className:"pagecount-sec d-flex justify-content-between",children:[e.jsx("p",{className:"count-text",children:" ● Page 1 of 1 pages"}),e.jsx("p",{className:"count-number",children:"1"})]})]})]})})}export{g as default};
