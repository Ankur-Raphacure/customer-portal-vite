import styled from "styled-components";

export const ApplyJobFormStyled = styled.div`
width: 100% !important;
.applyJobContainer{
    background-color: #FFF;
    padding-top: 6%;
}
.header {
    background-color: #34b27e;
    div{
        width: 65%;
        margin: auto;
        font-size: 40px;
        color: #fff;
        padding: 19.5px;
        h1 {
            font-size: 40px;
            line-height: 55.38px;
            color: #FFF;
            margin-bottom: 10px;
        }
        p {
            font-size: 12px;
            line-height: 16px;
            text-transform: uppercase;
            color: #FFF;
        }
    } 
}
.form-sec{
    width: 62%;
    margin: auto;
    padding-top: 35px;
}
.back-link {
    font-size: 14px;
    line-height: 19px;
    color: #9747ff;
    display: inline-block;
    margin-bottom: 14px;
    cursor: pointer;
    svg{
        width: 14px;
        height: 14px;
        path{ 
            fill: #9747ff;
       }
    }
}
.apply-header {
    font-size: 24px;
    line-height: 32.99px;
    color: #333;
    margin-bottom: 38.99px;
}
.upload-resume {
    width: 100%;
    border-radius: 3.25px;
    background-color: #f8f8f9;
    border: 1px dashed #b4bac5;
    height: 82.5px;
    text-align: center;
    font-size: 14px;
    color: #9747ff;
    input{
        width: 100%;
    }
    label{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        p{
            margin-bottom: 0px;
        }
    }
}
.input-sec{
    margin-top: 20px;
    textarea:focus, input:focus, select:focus{
        outline: none;
    }
    input, select, textarea{
        border: 1px solid #d8dde6;
    }
    .input-div{
        width:90%;
        input, select{
            width:100%;
            border-radius: 3.9px;
            background-color: #fff;
            border: 1px solid #d8dde6;
            box-sizing: border-box;
            height: 39px;
            font-size: 14px;
            color: #afafaf;
            padding: 2px 14px;
        }
        textarea{
            width: 100%;
        }
        p{
            margin-bottom: 8px;
            font-size: 14px;
            line-height: 21px;
            color: #333;
            height: 21px;
        }
    }
}
.additional-documents-sec{
    margin-top: 39.62px;
    p{
        width: 156px;
        font-size: 14px;
        line-height: 21px;
        color: #333;
        margin-bottom: 8px;
    }
}
.additional-documents{
    width: 21%;
    label{
        border-radius: 3.25px;
        border: 1px solid #e9ecef;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 21px;
        color: #5faceb;
        padding: 14px;
        cursor: pointer;
        p{
            margin-bottom: 0px;
        }
    }
    .addAttach-Txt{
        color: #5faceb !important;
    }
}
.experience-years{
    display: flex;
    gap: 1.5rem;
}
.captcha-sec{
    align-items: baseline;
    p{
        padding-left: 12px;
        letter-spacing: 7px;
        width: 10%;
    }
    input {
        border-radius: 3.25px;
        background-color: #fff;
        border: 1px solid #d8dde6;
        box-sizing: border-box;
        height: 47.5px;
        font-size: 14px;
        color: #AFAFAF;
        margin-left: 12px;
        padding: 0px 10px;
    }
    span{
        padding: 0px 25px;
    }
    .spinner-icon {
        -webkit-animation: rotation 2s infinite linear;
    }
    @-webkit-keyframes rotation {
        from {-webkit-transform: rotate(0deg);}
        to   {-webkit-transform: rotate(359deg);}
    }
}

.submission-form{
    border-radius: 3.9px;
    background-color: #9747ff;
    height: 52px;
    opacity: 0.65;
    min-width: 215px;
    max-width: 215px;
    min-height: 1px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    color: #FFF;
    border: unset;
}
.confirmation-sec{
    align-items: baseline;
    input{
        margin-right: 3px;

    }
    p{
        font-size: 14px;
        line-height: 21px;
        color: #333;
        margin-top: -3px;
    }
    span{
        font-size: 14px;
        line-height: 21px;
        color: #9747ff;
        cursor: pointer;
    }
}
.experience-sec{
    width: -webkit-fill-available !important;
    input, select{
        border-radius: 3.9px;
        background-color: #fff;
        height: 37.4px;
        border: 1px solid #e9ecef;
        border-right: 1px solid #e9ecef;
    }
    button{
        border: 1px solid #e9ecef;
        margin-left: -3px;
        border-radius: 3px 0px 0px 3px;
        background-color: #f8f9fa;
        font-size: 16.3px;
        color: #495057;
        padding: 0px 18px;
        width: 87px;
    }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
.skill-sec{
    width: 100% !important;
}

@media only screen and  (max-width: 700px) {
.header{
    div{
        width: 100%;
    }
}
.form-sec{
    width: 100%;
}
.apply-header {
    margin-bottom: 22.99px;
    text-align: center;
}
.additional-documents {
    width: 47%;
}
.experience-years{
    flex-direction: column;
    .input-div {
        width: 100%;
    }
}
.captcha-sec p {
    width: 20%;
}

}








`;