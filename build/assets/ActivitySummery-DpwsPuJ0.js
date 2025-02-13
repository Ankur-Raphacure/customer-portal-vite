import{d,j as e,r as o}from"./index-f4owDEOR.js";import{g as c,B as n,X as p,Y as x,f as g,R as A,L as h}from"./generateCategoricalChart-CwC5W0kI.js";const r=d.div`
  /* Modal Content */
  .modal-content {
    /* padding: 20px; */
    margin-top: 0px !important;
  }
  .period-modal {
    height: 300px;
    overflow-y: scroll;
  }

  /* Period Section */
  .period-section h5,
  .spotting-section h5,
  .pain-section h5,
  .feelings-section h5 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .period-options,
  .spotting-options,
  .pain-options {
    gap: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
  }

  .feelins-section {
    display: flex;
    gap: 10px;
  }

  /* Option Buttons */
  .period-option,
  .spotting-option,
  .pain-option {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f8f8f8;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    color: #000;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /* Selected Option */
  .selected,
  .period-option:hover,
  .spotting-option:hover,
  .pain-option:hover {
    background-color: #e0e0e0;
  }

  /* Feelings Section */
  .feelings-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    resize: none;
    height: 80px;
  }

  /* Responsive */
  @media (max-width: 576px) {
    .period-options,
    .spotting-options,
    .pain-options {
      flex-direction: column;
    }
  }

  .activity-modal-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .activity-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .activity-card.add-new {
    border: 2px solid #c6c2c2;
    color: #7c4dff;
    border-radius: 5px;
  }

  .activity-card h3 {
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
  }

  .bmi-display {
    display: flex;
    align-items: center;
  }

  .bmi-display {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bmi-result {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .bmi-icon {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }

  .bmi-value {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .btn-calculate-bmi {
    margin-bottom: 15px;
    float: right;
    margin-top: 10px;
  }

  label {
    color: #4f4f4f;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .modal-footer {
    display: flex;
    justify-content: end;
    margin-top: 1.5rem;
  }
  .send-Invitation-btn {
  }
  .send-btn {
    border-radius: 3px;
    background: #9747ff;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid #9747ff;
    height: 2.5rem;
    width: 8rem;
  }
  .next-modal-footer {
    display: flex;
    justify-content: end;
  }
  .cancel-btn {
    border-radius: 3px;
    border: 1px solid #9e9e9e;
    color: #9e9e9e;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 2.5rem;
    width: 5rem;
  }
  .challenge-modal .ant-modal-header {
    padding: 0; /* Removes padding */
    background-color: red; /* Sets the red background */
  }
  .modal-content h3 {
    color: #313131;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .modal-content h5 {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .modal-content .pain-option {
    color: #000;
    text-align: center;
    font-size: 10px !important;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .date {
    display: inline-block;
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 5px;
    margin: 0 5px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  .date.highlight {
    background-color: #e33382 !important; /* Matching pink background */
    color: #fff !important; /* White text */
    border: 2px solid #e33382; /* Border color matching the background */
  }
  .cards-div {
    background: #d9d9d9 !important;
    padding: 5px;
    box-sizing: border-box;
    width: 190px;
    /* height: 254px; */
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;
  }

  .cards-div:hover {
    border: 1px solid #7c4dff;
    transform: scale(1.05);
  }
  .habit-select-item-div h5 {
    font-size: 12px;
    font-weight: 500;
    color: #9c9c9c;
  }
  .cards-div:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }

  .Header-div {
    background: #cef0ff;
  }
  .new-activity-modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-btn-div {
    height: 2.5rem;
    border-radius: 4px;
    border: 1px solid #c6c2c2;
    width: 6rem;
  }
  .options-error-text {
    color: #bd1414;
    font-size: 12px;
    margin-top: -1rem;
  }
  .cycle-info {
    text-align: center;
    margin-top: 20px;
  }

  .cycle-label {
    display: block;
    color: #b0b0b0; /* light grey color */
    margin-bottom: 5px;
  }

  .cycle-line {
    border: none;
    border-top: 1px solid #ccc;
    margin: 10px 0;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  .cycle-value {
    font-weight: bold;
    font-size: 24px;
  }
  .activity-header-text h3 {
    text-align: center;
  }
  .goal-head {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .goal-title {
    color: #3f3d3d;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 12px;
  }
  .goal-head-steps p {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #636161;
    font-size: 14px;
    font-weight: 400;
  }
  .StepContainer {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    width: 25rem;
    height: 3rem;
    font-family: Arial, sans-serif;
  }
  .StepTitle {
    font-size: 16px;
    margin-right: 10px;
  }

  .StepContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    width: fit-content;
    margin: auto;
  }
  .StepTitle {
    font-size: 16px;
    margin-right: 10px;
  }
  .StepButton {
    border: 1px solid #ccc;
    background-color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;

    &:hover {
      background-color: #f0f0f0;
    }
  }
  .StepInput {
    font-size: 16px;
    width: 150px;
    border: none;
    outline: none;
  }
  .count-steps-div p {
    padding: 0.5rem;
    margin-top: 15px;
  }
  .clear {
    clear: both;
  }

  .checkBox {
    display: block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0);
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 0px 0px 1px #565454;
  }

  .checkBox div {
    width: 60px;
    height: 60px;
    background-color: #7c4dff;
    top: -52px;
    left: -52px;
    position: absolute;
    transform: rotateZ(45deg);
    z-index: 100;
  }

  .checkBox input[type="checkbox"]:checked + div {
    left: -10px;
    top: -10px;
  }

  .checkBox input[type="checkbox"] {
    position: absolute;
    left: 50px;
    visibility: hidden;
  }

  .transition {
    transition: 300ms ease;
  }
  .check-box-content-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .row-box-div {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 11rem;
  }
  .main-row-box-div {
    display: flex;
    justify-content: center;
  }
  .feel-icon-div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .feel-icon-text-div {
    text-align: center;
  }

  .hr1-line-div hr {
    width: 23rem;
    margin-top: -0.5rem;
  }
  .hr2-line-div hr {
    width: 27rem;
    margin-top: -0.5rem;
  }
  .conform-image-div {
    display: flex;
    justify-content: center;
  }
  .conform-image-div img {
    width: 6.5rem;
    height: 6rem;
  }
  .conform-goal-title h3 {
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #9747ff;
  }
  .set-goal-warning-msg-div {
    margin-top: 3rem;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .set-goal-warning-msg-div h4 {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #434343;
  }
  .conform-text-div h6 {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }
  .conform-mood-goal-title h3 {
    width: 100%;
    font-size: 25px;
    font-weight: 600;
    color: #656565;
    height: 26px;
  }
  .conform-mood-goal-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .conform-mood-goal-bottom h4 {
    font-size: 14px;
    font-weight: 600;
    color: #656565;
  }
  .container {
    --color: #a5a5b0;
    --size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: var(--size);
    user-select: none;
    fill: var(--color);
  }

  .container .thumbs-up-regular {
    position: absolute;
    animation: keyframes-fill 0.5s;
  }

  .container .thumbs-up-solid {
    position: absolute;
    display: none;
    animation: keyframes-fill 0.5s;
  }

  .container input:checked ~ .thumbs-up-regular {
    display: none;
  }

  .container input:checked ~ .thumbs-up-solid {
    display: block;
  }
  .check-box-select-div h5 {
    font-size: 14px;
    font-weight: 500;
    color: #9c9c9c;
  }
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  @keyframes keyframes-fill {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    50% {
      transform: scale(1.2);
    }
  }
  .modal-title {
    display: flex;
  }
  .ActivitySummery-card-div {
    height: 100%;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
  .card-title {
    font-size: 14px;
    color: #959595;
    height: 18px;
  }
  .tracker-heading-div {
    display: flex;
    justify-content: space-between;
  }
  .tracker-heading-div h5 {
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }
  .tracker-heading-selector-div {
    border-radius: 5px;
    width: 6rem;
  }
  .grph-card-div {
    margin-top: 2rem;
    height: 100%;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    padding: 1rem;
  }
`;var m=c({chartName:"BarChart",GraphicalChild:n,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:p},{axisType:"yAxis",AxisComp:x}],formatAxisMap:g});const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAYAAABM8m7ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKdSURBVHgBrVXLceJAEB0JAQcOSwjjCBZHgIgAEwHSkV8tisA4ApbicwVHAI4ANgJEBKuNwNoj/30Pz2xNUabAsrtq6NHMdL/+Y4kr1O12ZTqdXlqWlTeOo81mcx8EQSwSkm0C9Pv9Drn5wHEcD6DP2M72+73faDSs4/H4K5PJtMUnyNaAUDQHgCQ/f3Q4HGJ6jBXxG/wI9gOyeZGQbALZtk0FstlseuTvPYSXhd1uFw6Hw0cAu1jhZ7xmqCXy1THOIigv/H9g29+xygRC2AvgDH0JyxdvXkuRgGyE8QmWv2IfKs96YFOGfzQaTbF/wBlD7cOAGPtKrVaLIFfFWZzNZsciAVn8gYdjKFnV6/Wf/AboAxi9I1DYarUWphDu3VQqRZkS7gkcQjYQHyBLK4Hg3a1COhVIUYRosdX4Ga7Xa3RYEN2iw8Fy0SbP4gOElgqVAR7YC4xuIy1zGPEbZxNEYcVIsRgv9bpzSTkULMF0kd1rsDMDJsanRN5LqIOpGjZlGFKAHu5Dpk28RaXHqDgXQD0DdEbQa4boVOFdcGbQKTWIKudAAcU4x3eFOe4gx0VY4tMStocaIpJC8OAOnrjYjg1DKrdE5D0aDAZttqeDnyoUs0hoyQJ3eQ3KSYU8eXxjyMbsAgM0RJFdndmccpgDLnQVkX+XoZYAqLBHFYinQVl0ClSqswWEuPW0QvY4KxvGsNfpNeX+8g6R/MZ8q4jlWXC4WxFL53hJr3EgDIVPMGQBpY/aU5yx+ouGIxOMWU4wnUc6IVXUOOP/YK1gQI9g2+3Whddl6JlZEHjVD5MQPYZSehqryjXv6GWBXP+tMpIcPA49w6YrEhIVMmcK6NIbzSOOXHRAdDpRlV3FoRRfTwSLwF9yudzE9/1TVP4Buw2HQELO8CMAAAAASUVORK5CYII=",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKrSURBVHgBpVZtbtpAEJ1dO/xL4p6gzgnCEcgJSk/QcAJsVZWiiPARojRSmxpOkHCCtCcAbgA3MDcw+RUpsNM3i4mAQGXTJ63A++HZ92b2rYly4nuz6UdB4FFOqDyTo6urB9KayBgPvx69vobh7e0oy1pNGRFdXhZJqRIxFxEkYeYxuW4/6/rMgahQiBEoxj/PGDNEIGGSWUI360R6efHYdces9VAr9YCeBK2VdXnmQFwoBIr5FEkVCTto3bDZjLOufxfoR61Wwss8ZzYbhXd38bIffZ+QmwFyVIJ0k6/tdkw5sJajqNGIXK37jtZPyEk/urjwpf9nrVZOp9hn7Ti/KSf0KhPsNlgZ8yFXR/4gcISxWNhAskEeyd4F2gal1PGver1Kknil/LSzQntAb7x5TRLDPERuAlqUso/xx33YCGwxRLAVnPZ+Ks9ADiSe/wgLJpqA2TmmxSiCMe2JNwuCvZzjxQ27c+ZH2EvLHByUcWaqdgN2trI5oun0c9jpJJQDa14nzNiYJjq/WAbMXRsorbYVxDNjKt9ubga0T6CVgEVI95QGGEG+cRp8EyMwHGFuYpSa2h5mYZro+Xy0arg73fseUoJNREs/EznFsZnLlBXGnIUp650WpCVfzCE5jriBeNu55ArSdpXjnO58ObNPS6kXsg92MkrZNMLr65Nl30qxkCHq6e1SLsckgCiR0PPziRSO/gebNWcO222R7gxyVLTkQa6MLU3GkNNeuswzR0fBGyPxuA3tfbSY9gGC4bz10qtEkECZD0oM03qZMSEt7pj/g+NUeT6f2DyKNwpQFC5OvSe7QHXkduRtuK/XS3D3jzSfdyF1KQ3e0GKciOzt82WzDcjRsf14cd0BLRUCM40kyVVQNIeH2c/HDljPVCpAK9NsVkwLSg5t6y+1QzC6cTKl7AAAAABJRU5ErkJggg==",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgBpVXLjRpBEO0Zhp/EYRzBjiMwIRACzgAkLiAheyJYZ8ABIS5IOAPjDHAGZOAmgm2EhIT4+b2majys7N1htySmqz/16lV1VRMYkdFoFJdKpXYURZ8wTS6XSxO/OAiC2NyKxZrF6M7n86/D4bBI05RzE/AzmUy+wPBbztBirkY3gvUEA500dQ36Yr/fdwMyqlQqT+Kp22g0lt1u15kCMh6PW2EYjqAyilSZXcSrw+YK6grAa7Kjk5x9LKEnSMcDzrSYErFNIznkcrmglxZ00v8vKwA5nFvROcY25xkYDN1gMPjMyXw+j3e7XYIDsbKR3FgYk73r9/tWQm1j3uZepOHRSL1KzlamgKgjSug/8JQHu0eYP471ev13KPGv3wqmdtvtdhMK1fcw83YoXBfKmr/+2Wz2YO4UpIg21uvCzE9QxR/M28RlYCpSCncJ24tlRd2XhvYgN9he5XK5I5XuC3M4HC5fwGMdbjIwtIYFK8YfQ/+hHSCO2G50tsSZnzjjC/d4PDbhZGGuF2czsBzlmGXyjzZK8OsApCPpoGMznU4/Umcrcd3nTFtDbqaoWM2x5ix/AU7Y2SJIzLOC3TBTMG2NIiJJzx4AjlFu03dBUWbm+mQlntG1t/8yE/TCdUan+mJUq9Wn58w29HQ6nZb4Y/n+GhjOLFAeX6n3er31czDmzNRqtUdTTB4RXiu/kIHJ28+b6Zj7JHtE/wD6xTDKcyvcdQAAAABJRU5ErkJggg==",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAYCAYAAABnRtT+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATcSURBVHgBtZdbTiJdFIUPiBovyY8jEEfQOAJhBOIIpBJfvMsIgBHQxNuLCTgCYQTiCJoewV+OQEx88E6vD/fpQAVtqpPeCamqc9l7nbVvh4T7h1Kr1dLT09PFZDK59v7+nkskEmk9N/b391tx9CTdP5RUKnUkYJm3t7f61NTUqoZC/XoupiTiLD49PR2wMmYq3N7ern619+TkBMC53d3dgospKRdPynJXJjoo46EeX4J8eXlpzszMlN1fSCx3C+BlZKiusfzc3Nzqn/aWSqVev98Pj4+Pcy6mxHI3ghEZy4i9rFzfk/sqk+xTqBzqUdG+zs7OzoaLIalh4zJaEzO47cvgPjg4aMpoQwa/uckAlrW2qAQKZKNB1sOsm1ASEWVFKdvUa0ZsdUYWKkv9OG5Xtjb0HcpwVSWl474GWNC6EgD13mP/3t7ed/c3IBFjFGVdAcpaUnDqtL4v5V5Y/F+GAo2x1n3mcg9Q+1h7pV9V+0I8hi4ddOAJvROvP5+fn1vjGB5JnPPz87IBJElu9J7X5pJYuNQzpyVl3KxnG/ZUB5t635wUoEB0BIwMJ6a/vb6+tvW7lK0lfZeV/T/A8ClIjAvMyvz8/Ko21XGval8olrq2pG3sERJ9BpiH6WjGnp2dwdRKBGBXIK6lo61x4v6ezsNhpeM/i1dIyRoRoyA5NZsUJ8UgCHrUNG1cJ8AHi5LJdT1asGyJVfDAMKrxAZusxwDMSEdlmEEB5H2DWIzql+TEaJdDk/naf89Bf4PUQqgvisGKHyQudLI2fdeGCpbJHZ284rOUCQzCrsD1BYRYvQUgrAGQGKaIi6G698qwfg5L/A/HonTfaf2RJyKFAi1qwqAbFZgjBnsoASjuYAIX6aShfkcCxZBfg47OMEBIYK8YDMbpF1guHW0GAEXMms6SxW8noZ76w4ygrKPfDe7RyQBxTeF2H4FO7IRSkLVino4apcDb+qrPeMoakeAPACBci37NwRjljU62bJeREiQQCnhGepYSuEkviUajkX54eIB6GFujLGgjQDLuz9LUweoAIUP1pFQdGTt0mZ5YaXFdo0qYfhfRXY2WMkrd7Oxs7nfHMXdzz2vpFFkZa0wIELlVOcrIeDhuUuB6cjdzTfu5IS95WZdXqZdd3xyMqEFbDC8uLpa3trZuoVjIiYOClYkaLNgGWE1/ArIMU2Y07UsUwn6Bz/rv4bjjUBY6HTqXpvFkWWCvNNdhDlxJYuTx8XGDCwCu0uJ7bjV0Bm26IZM5EbGhCrCkMeZIoK5nxlolB8BoicyUoTviEWaoDL480U4BJGbzMIw+Zx6jcjC+sLCwojU/LRkHTBLwZGOT7BWY0E7M5bQ1nMkKCfptl4wV42nVtOATZkf6svYOugk9e3FxcZXQQofsoaMrW4HPZNYzrwMt0zr5TgLCOkyPYjrkpjUot/eSHoewgXIrMSU3oZgrnbL6uy910pHzlxgfg0bM4Fpnt/jmwL5XJPfA5N3T0xNZ6sTUtU654ufJUs0v6zXnPrK34mKI7d9UFchb+aEztf2fMn0Tt8Qi4UPrzXvSEuMUWSyQAIExkLXWSOcJBD7Wvz0vdhU8JE7dxw1qAAQPqTpg44o5uT4Y8WpUkW4hFFRoX7cCj3Btu1FAj+tMsQT9Vi8hI2fDITYIu3F3019gXHGi5tYcMgAAAABJRU5ErkJggg==",v=[{name:"A",uv:4e3,pv:2400,amt:2400},{name:"B",uv:3e3,pv:1398,amt:2210},{name:"C",uv:2e3,pv:9800,amt:2290},{name:"D",uv:2780,pv:3908,amt:2e3},{name:"E",uv:1890,pv:4800,amt:2181},{name:"F",uv:2390,pv:3800,amt:2500}],w=()=>e.jsx(r,{children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-12 col-md-12",children:e.jsx("div",{style:{height:"250px"},className:"grph-card-div",children:e.jsx(A,{width:"100%",height:"100%",children:e.jsxs(m,{width:500,height:300,data:v,barCategoryGap:"35%",barGap:5,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#9747ff",stopOpacity:1}),e.jsx("stop",{offset:"100%",stopColor:"#560dff",stopOpacity:1})]})}),e.jsx(n,{dataKey:"uv",fill:"url(#colorUv)",children:e.jsx(h,{dataKey:"name",position:"bottom"})})]})})})})})}),j=[{name:"Daily Steps",icon:f},{name:"Cycling",icon:b},{name:"Water",icon:y},{name:"Workout",icon:u}],k=({handleBookNow:C})=>{const[t,a]=o.useState(""),s=i=>{a(i)};return o.useEffect(()=>{console.log("selectedActivity : ",t)},[t]),e.jsx(r,{children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"row mt-4",children:j.map((i,l)=>e.jsx("div",{className:"col-md-3 col-sm-6 mb-4",children:e.jsxs("div",{className:"card h-100 text-center CardsStyled",onClick:()=>s(i.name),style:{border:`1px solid ${t===i.name?"#9747FF":"#959595"}`,cursor:"pointer"},children:[e.jsx("img",{src:i.icon,alt:i.name,className:"card-img-top mt-4",style:{filter:t===i.name?"brightness(0) saturate(100%) invert(50%) sepia(88%) saturate(714%) hue-rotate(230deg) brightness(85%) contrast(92%)":"grayscale(100%)",cursor:"pointer",maxHeight:"25px",objectFit:"contain"}}),e.jsx("div",{className:"card-body",children:e.jsx("h5",{className:"card-title",style:{color:` ${t===i.name?"#9747FF":"#959595"}`,cursor:"pointer"},children:i.name})})]})},l))}),t&&e.jsxs("div",{children:[t==="Daily Steps"&&e.jsxs("div",{children:[e.jsxs("div",{className:"tracker-heading-div",children:[e.jsx("h5",{children:"Last week "}),e.jsxs("select",{name:"",id:"",className:"tracker-heading-selector-div shadow-none",children:[e.jsx("option",{value:"",children:"Weekly"}),e.jsx("option",{value:"",children:"Monthly"})]})]}),e.jsx("div",{children:e.jsx(w,{})}),e.jsx("div",{})]}),t==="Cycling"&&e.jsx("div",{children:"Cycling Details"}),t==="Water"&&e.jsx("div",{children:"Water Intake Details"}),t==="Workout"&&e.jsx("div",{children:"Workout Details"})]})]})})},S=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{k as A,r as C,f as S,y as W,b as a,u as b,S as c};
