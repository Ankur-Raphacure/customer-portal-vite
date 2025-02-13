import{d as c,u as m,q as x,j as e}from"./index-CitTC1Lo.js";const p=c.div`
  .card-container {
    max-width: 600px;
    margin: 20px auto;
    margin-top: 60px;
    padding: 20px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
    font-family: Inter, sans-serif;
    background-color: #fff;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    color: #252b61;
  }

  .line-div {
    width: 40%;
    margin-left: 165px;
    position: relative;
    border-top: 1px solid rgba(0, 0, 0, 0.16);
    box-sizing: border-box;
    height: 1px;
  }

  .message {
    font-size: 18px;
    color: #666;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 550;
  }

  .info-container {
    display: flex;
    justify-content: center;
    gap: 90px;
    align-items: center;
    margin-bottom: 20px;
    text-align: left;
    background-color: #e7c2d433;
    flex-direction: row-reverse;

    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }

  .emails p {
    font-size: 14px;
    color: #000;
    margin: 4px 0;
    font-weight: 550;
  }

  .details {
    display: flex;
    flex-direction: row;
    gap: -0px;
    align-items: center;
    justify-content: center;
  }

  .date {
    margin-right: 0.5rem;
    border-radius: 2px;
    border: 0.4px solid #252b61;
    position: relative;
    padding: 0rem 0.2rem;
    p {
      font-weight: 500;
      color: #333;
      text-align: center;
      margin-bottom: 0px;
    }

    p:first-child {
      font-size: 22px;
    }

    p:last-child {
      font-size: 13px;
    }
  }

  .date > p:first-child {
    font-size: 15px;
    font-weight: 550;
  }

  .date span {
    font-size: 14px;
    color: #666;
  }

  .time p {
    font-size: 14px;
    color: #000;
    margin: 0;
    font-weight: 550;
  }

  .time span {
    font-size: 14px;
    color: #000;
    font-weight: 550;
  }

  .confirmation {
    margin: 20px 0;

    p {
      font-weight: 700;
      width: 100%;
      font-size: 1.5rem;
    }
  }

  .check-icon {
    width: 40%;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .thank-you-message {
    font-size: 14px;
    color: #333;
    margin-bottom: 20px;
  }

  .reschedule-btn {
    padding: 10px 1rem;
    font-size: 0.8rem;
    color: white;
    background-color: #002e66;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 55%;
  }

  .reschedule-btn:hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 480px) {
    .card-container {
      border: unset;
      margin-top: 20px;
    }
    .info-container {
      flex-direction: row-reverse;
      align-items: flex-start;
      text-align: left;
      border: unset;
    }

    .title {
      font-size: 28px;
      font-weight: bold;
      color: #252b61;
      font-family: Inter;
    }

    .message {
      text-align: left;
      font-size: 16px;
      padding: 0 15px;
    }
    .line-div {
      width: 75%;
      position: relative;
      border-top: 1px solid rgba(0, 0, 0, 0.16);
      box-sizing: border-box;
      height: 1px;
      margin-left: 5px;
    }

    .confirmation p {
      font-size: 22px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
    }

    .details {
      flex-direction: row;
      gap: 0.5rem;
    }

    .date {
      margin-right: 0;
    }

    .check-icon {
      width: 60%;
    }

    .reschedule-btn {
      width: 80%;
    }
  }
`,f=()=>{m();const a=x(),{resp:t}=a.state||{},r=o=>{const n={day:"numeric",month:"short"};return new Date(o).toLocaleDateString("en-US",n)},s=o=>{const[n,d]=o.split(":"),i=parseInt(n,10),l=i>=12?"PM":"AM";return`${i>12?i-12:i}:${d} ${l}`};return e.jsx(p,{children:e.jsxs("div",{className:"card-container",children:[e.jsx("h2",{className:"title",children:"Booking Confirmed"}),e.jsx("div",{className:"line-div"}),e.jsx("p",{className:"message",children:'"Thank you! Everything is set for your call. A detailed booking confirmation will be sent to this email address shortly."'}),e.jsxs("div",{className:"info-container",children:[e.jsxs("div",{className:"emails",children:[e.jsx("p",{children:(t==null?void 0:t.email)||"Your email"}),e.jsx("p",{children:(t==null?void 0:t.guestEmail)||"Guest email"})]}),e.jsxs("div",{className:"details",children:[e.jsxs("div",{className:"date",children:[e.jsx("p",{children:r((t==null?void 0:t.date)||new Date().toISOString()).split(" ")[1]}),e.jsx("p",{children:r((t==null?void 0:t.date)||new Date().toISOString()).split(" ")[0]})]}),e.jsxs("div",{className:"time",children:[e.jsx("p",{children:"Let's meet@"}),e.jsx("span",{children:`${s((t==null?void 0:t.time)||"00:00")} - 15 mins`})]})]})]}),e.jsxs("div",{className:"confirmation",children:[e.jsx("img",{className:"check-icon",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1734687128124.png",alt:"Confirmation Icon"}),e.jsxs("p",{children:["Thank you! ",e.jsx("br",{}),"Everything is set for your call."]})]})]})})};export{f as default};
