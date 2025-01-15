import styled from "styled-components";

export const DocdashboardStyled = styled.div`
  width: 100%;
  padding-top: 12px;

  .maindash {
    display: flex;
    width: 100%;
    gap: 12px;
  }
  .dashboardnav {
    width: 15%;
    height: 943px;
    flex-shrink: 0;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.05);
  }

  .leftsec {
    width: 60%;
  }

  .rightsec {
    width: 25%;
  }

 
  //   overview css
  .overview {
    display: flex;
    justify-content: space-between;
    gap:12px;
    margin-bottom:24px;
  }

  .overview-left {
    width: 40%;
  }

  .patient-overview {
    border-radius: 10px;
    border: 1px solid #f1e8fc;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
    padding: 10px;
    h4 {
      color: #000;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      opacity: 0.8;
      margin:0;
    }
    .overview-icon {
      text-align: center;
      margin:0;
    }
    .num {
      color: #000;
      text-align: center;
        margin:0;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.6px;
    }
    .totpat {
      color: #000;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.42px;
      
    }
    .pat-cat {
      display: flex; 
    }

    .leftcat,
    .rightcat {
      flex: 1;
      p{
      color: #000;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 150.472%; /* 18.057px */
        letter-spacing: 0.36px;
            span{
            color: #000;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 150.472%; /* 18.057px */
            letter-spacing: 0.36px;}
      }
    }
  }
    .leftcat{
    text-align:center;
    }

  .overview-right {
    width: 60%;
    display: flex;
  }

  .Totalconsult,
  .upcomingconsut {
    width: 50%;
    gap:6px;
  }
.consult {
  border-radius: 10px;
  border: 1px solid #F1E8FC;
  background: #FFF;
  box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.10);
  text-align: center;
  padding: 4px;
  margin: 0 6px 6px 6px;
  cursor: pointer;
  position: relative; /* Add this line */
}

.consult .icon-svg {
  margin-bottom: 8px;
}

.totnumber {
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.6px;
  margin: 0;
}

.consult .percentage {
  position: absolute; /* Add this line */
  top: 4px; /* Adjust as needed */
  right: 4px; /* Adjust as needed */
  color: #168803;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.3px;
}
.consult .iconred{
color:red !important;
}




// Appoint Order
.appoint-order {
 
}

.search-bar {
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid rgba(204, 204, 204, 0.80);
  overflow: hidden;
}

.search-bar .search-icon {
  margin: 0 10px; 
  font-size: 16px; 
  color: #CCC; 
  cursor:pointer;
}

.search-bar input[type="text"] {
  flex: 1;
  padding: 10px;
  border: none;
  font-size: 14px;
  outline: none;
  background: transparent;
}

.search-bar input[type="text"]::placeholder {
  color: #CCC;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.12px;
}



.ordertable{
margin-top:12px;
}

.ordertable Table{
--bs-table-bg : transparent !important;
border-radius: 5px;
border: 1px solid #D6CECE;
}
.ordertable thead{
border-radius: 5px 5px 0px 0px;
background: #D3EDFC;
} 
.ordertable th{
color: #000;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.ordertable td{
color: #808080;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.ordertable tr{
border: 1px solid #D6CECE;
}
.ordertable .action-report{
text-align: center;
}
.orderTable .actions {
  display: flex;
  align-items: center;
}
.ordertable .actions{
text-align:center;
}
.ordertable .icon-space{
margin:0 8px;
}

// Appontment-leftsection
  .appoint-left {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.10);
    margin-right: 12px;
    padding: 8px;

  }
  .filtersec {
    border-radius: 8px 8px 0px 0px;
    background: #D3EDFC;
    padding: 12px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
  .filtersec label {
    margin-right: 50px; 
    color: #000;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
  }
  select {
    // max-width: 200px;
    flex: 1;
    border:none;
    padding:2px;
  }

   .appointdet {
    display: flex;
    align-items: flex-start;
    padding: 12px;
    margin-bottom: 6px;
    border-radius: 10px;
background: #FFF;
box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.10);
cursor: pointer;
  }
  .appointdet img {
    width: 80px; 
    height: 80px; 
    border-radius: 50%; 
    margin-right: 20px; 
        cursor: pointer;
  }
  .appoint-info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .name
   {
    color: #000;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
opacity: 0.7;
  }
.name2{
color: #000;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.time{
color: #000;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 150.472%; /* 18.057px */
opacity: 0.8;
}
 .datesection {
    display: flex;
     align-items: center;
    justify-content: space-between; 
    margin-bottom:16px;
  }
  .dateinside {
    flex: 1;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.10);
    text-align:center;
    margin:0 6px;
    padding:4px 0;
    cursor:pointer;
  }
    .active-date{
    border-radius: 10px;
background: #9747FF;
box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.10);
flex-shrink: 0;
    }
.active-date p{
color:#fff !important;
}
    .dateinside p{
    margin:0;
    }
    .dateinside .week{
    color: #072549;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.12px;
opacity:0.5;
    }
.dateinside .date{
color: #000;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.14px;
opacity:0.9;
}
.lefticon, .righticon{
border-radius: 4px;
border: 1px solid rgba(0, 0, 0, 0.50);
padding:0 6px;
flex-shrink: 0;
 align-items: center; 
    justify-content: center;
    cursor:pointer;
}
.view-allbtn{
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
margin-top:12px;
}
.view-allbtn button{
border-radius: 8px;
border: 1px solid rgba(0, 0, 0, 0.20);
background: #FFF;
width:100%;
padding:10px;
color: #000;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
}








@media (max-width: 768px) {
.maindash {
      flex-direction: column;
      gap: 12px;
    }

    .dashboardnav {
      width: 100%;
      height: auto;
      margin-bottom: 12px;
    }

    .leftsec,
    .rightsec {
      width: 100%;
    }

  .overview {
    flex-direction: column;
    gap: 12px;
  }

  .overview-left,
  .overview-right {
    width: 100%;
  }

  .Totalconsult,
  .upcomingconsut {
    width: 100%;
  }
    .ordertable .icon-space{
     margin :0 0;
    }
}

`;
