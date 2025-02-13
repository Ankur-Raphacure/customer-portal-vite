import{d as t,j as e,r as i}from"./index-CitTC1Lo.js";const g=t.div`
  width: 100%;
  .Container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px;
  }

  .LeftSection,
  .RightSection {
    flex: 1;
    padding: 20px;
  }

  .RightSection {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px;
  }

  .Title {
    width: 457px;
    font-size: 24px;
    font-weight: 500;
    color: #000;
    text-align: left;
    opacity: 0.8;
  }

  .Subtitle {
    width: 477px;
    font-size: 17px;
    color: #000;
    text-align: left;
    opacity: 0.6;
  }

  .ImportantNotes {
    margin-top: 3rem;
    width: 368px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    text-align: left;
    opacity: 0.8;
  }

  .Note {
    margin: 7px 0;
    width: 465px;
    font-size: 15px;
    font-family: Poppins;
    color: #000;
    text-align: left;
    display: list-item;
    opacity: 0.5;
  }

  .FormContainer {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 480px;
    width: 100%;
    height: 33rem;
  }

  .FormTitle {
    margin-top: 1rem;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    text-align: center;
    opacity: 0.8;
  }

  .FormSubtitle {
    width: 100%;
    font-size: 15px;
    line-height: 58.8px;
    font-weight: 500;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      linear-gradient(90deg, #9747ff, #00edff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14px;
  }

  .FormSubtitle1 {
    width: 100%;
    margin-top: 0.5rem;
    font-size: 14px;
    color: #000;
    text-align: center;
    opacity: 0.5;
  }

  .ButtonGroup {
    padding: 8px;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 20px;
    padding: 2px;
    border-radius: 5px;
    background-color: #f6f9fd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .Bottomtitle {
    font-size: 14px;
    color: #000;
    text-align: center;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .Bottomsubtitle {
      margin-left: 10px;
      font-size: 14px;
      font-weight: 500;
      color: #9747ff;
      text-align: center;
    }
  }

  .Bottomtitle1 {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.5;
    color: #000;
    text-align: center;
    display: flex;
    justify-content: center;
    .Bottomsubtitle1 {
      margin-left: 10px;
    }
  }

  .ContentBox {
    display: flex;
    justify-content: space-between;
  }

  .CheckboxLabel {
    margin-top: 15px;
    width: 217px;
    font-size: 14px;
    color: #000;
    text-align: left;
    opacity: 0.6;
  }

  .Buttonbox {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .custom-btn {
    background: #9747ff;
    color: #ffffff;
    width: 50%;
  }

  .custome-input {
    flex: 1;
    padding: 10px;
    background-color: #f7f7f7;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
    width: 4rem;
    height: 3rem;
  }
  .custome-ToggleButton {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background-color: ${a=>a.active?"#fff":"#f6f9fd"};
    box-shadow: ${a=>a.active?"0 4px 8px rgba(0, 0, 0, 0.1)":"none"};
    cursor: pointer;
  }

  // Media Queries for Responsiveness
  @media (max-width: 768px) {
    .Container {
      flex-direction: column;
      padding: 20px;
    }

    .LeftSection,
    .RightSection {
      width: 100%;
      padding: 10px;
    }

    .FormContainer {
      max-width: 100%;
      height: auto;
    }

    .Title,
    .Subtitle,
    .ImportantNotes,
    .Note {
      width: 100%;
      text-align: center;
    }

    .ButtonGroup {
      flex-direction: column;
      align-items: center;
    }

    .custome-input {
      width: 100%;
      margin-bottom: 10px;
    }

    .custom-btn {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .FormTitle {
      font-size: 16px;
    }

    .FormSubtitle {
      font-size: 14px;
    }

    .ButtonGroup {
      flex-direction: column;
    }
  }
`,f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAATCAYAAADvXT9EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS4SURBVHgBzZZpjJ1jFMdPZ9SgU61pqVYt1WlpUGUQQSVaNPaED5Yg9lAkdrEkPoiIREKilqbR+CAakloqKIJK0FhGLcVQrTHaUlVq0I6pKf+f839735m5MzHxpSf55d733vc5z9mfpzYqsos/bxU7iGPFR2Kw6IreUidqxGY/s+ZvUS/eFM+LP0SDOFMsLb23qaQHHduW9qjznn+Jx8Ug8UXPzbfx53R/L4w9QPwirhMtYo141+9eIo6z8p3FFWKmHd9ePGRd99mYxeIkG36Xf2sXs8WNYqPY3e8PE2fYsReiH6n15geJPa2k3obuaEPabdQ3olMc4g0uFkeJ38Q68ZIYK/YSY8QF4nsbcbjYx05c63Xjxd7iLEd1vIO2SPxpB9Y7cFUjvsmbYeR79n6yla0Q24ldI8ugWLPO6zrs6NniLf82uKR/mt9hLSXQ5nd+8D4bbdx6O3uq9bdGpRqqSo0XzRUrbSDR/dYbTrKCh8XvpTW1JR1En7pdamM6rJMyI5OrHAQcO19cLY4XS6rYM1F8HtkX/cogf06ITE2dDaRUdhJDxGhxe2RJIJfbwNtEk/hO7GeHP7Nja8VUB4ByuSiyhvcXe4ivxIH+/7XIjLMXJXJoZKaLMl1le7pJkQ5SSH0yBYjmchtFGXxYMhrZHJVJ0uzPH6O3POXPRnG0GCeeEfNs5GwHC2ktrfs6/oMMKn0nArtFRuvIyNRTBqR0Rem9yyKnD5FlZFESlAARpkRuiGy4YyJreEFkI5MZsvhzZKBOjJxUNOhz4pEYgNSUvpMa5ilThvTW2/jOKusw6Bwbfo2NvFIsE+dFZu36yDRPL617NHLa3OPnJ8Xd4rQYoJQ7tzWys9mUBiEDjMjFVda12SH6YZTXXFVyilpm/HWV9iim0pSSM9T48OgewAEZTknQQDQYdU70x1opk+EBsaEPHZQSdfx25FTg4GIm07yX2mBK8lcxI7Jfhsb/lGKsUYPM3xYr7YpKhIg80f3SzzhLl9PAJ0c26MLIBqTE5kXloHojsj8oQZwvDrlZkWOz2Z+dURmPIyODtTK692A3Kf64M/J+wQb7Rkas2c4QKeb03Crrme+vRE6LsjxmFkVmY444JSpnQX/C9OFus8HvV9t3S8SZnXQ3pUGqf4qMBI5QMhy55clyk7jZm7wfOeffsR5OUaJGwzI5Rtl45ve5kZFEHozMNIdNa2QWyCAZpT+YPpyklBfZayrZPKtoinsjj2EOokk2dqKfPxCvloweYuVMk3YrmuD/Gmwgcr+4Q3wc2TPzI8vhQjv+SeSEOUEcFnnNeDGy8cdZx3wHiN859IY6mI0YMNovLbDxlAg1vsbRCi/idFxoIw4WIyJPur7qkB45IrJeSfsyBwQ9jFxKjDvPcuviUONGOKWHDvpipt/dIhg+w5tzmRpuR0jT05G3ugYb2BGVqA7zJrdEXpoor9MdNQyg1KbZUM6Cph5Ove736R2u0E9Eb0HnVNuzOrKpuU4zAP5NM1+ILqnjeC/uF3jY5ufVfgZOR0baGBvwaWQ5kV7uHUyfZx1Zvr8c2eBLHEGCQjPX2DEOpRYbii4mzFoHZoRtnON9R9qByX2Om61QOOBochxs/Adzry1uhhu8KgAAAABJRU5ErkJggg==",u=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`,b=t.p`
  width: 435px;
  position: relative;
  font-size: 16px;
  color: #000;
  text-align: center;
  display: inline-block;
  opacity: 0.5;
`,j=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`,y=t.input`
  width: 40px;
  height: 40px;
  margin: 0 5px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #9747ff;
  }
`,w=t.button`
  background-color: #9747ff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a189a;
  }
`,I=({onSubmit:a})=>e.jsxs(u,{children:[e.jsx(b,{children:"Enter OTP received on phone number (XXXXXXX428) linked with your Aadhar"}),e.jsx(j,{children:[...Array(6)].map((l,r)=>e.jsx(y,{type:"text"},r))}),e.jsx(w,{onClick:a,children:"Submit OTP"})]}),v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK3SURBVHgBvZhLctNAEIb/Hklhk6K8TBVJMDdwToB9gtg8EnbEa0gFn8DOCQQxe8wShyqcE1icAN8AFUmqWHqLLU0zY0cksSXrYYl/I3keqs/dM3+PRMiokl0vPTQ22kw4AmE8nU5qv1sDFxlFyKAt+1XZtPxvxFRZeFjn13H/FBmUGmS3e3jC4I66LYWPYGfqTZtpoxMJsnN2+AnER8hLBFcSN67fnI/CukVY4073eT1XCC1GWUjYUd2hICBzH4WIqk8+PnuMxCDMdRSkibQaSAKybb+oInIhri9Bcj8WRHsDmeIEhYqqW3a9jCgQ7Q2bljVUt4WlJZBlbvzc7R6077bNtm+8NxSlW8+hbUWmHRE5S/0xh0BjxEVY+YsuDyJ3CMaYIWtXx+e1y+N+Q5WBVsz4smE8qAswucgRwvBZQXx1gibh/+nFTRPErmDmz8hDNxBu676F+zCqcVNV5AYCQjpIIJ1zljhVN25SCL0TYRn26gfzhb6IWRjj0kPc0zm/Oul3DH+yp9bVKAmEZcmhXgNYrcEM5Ibq+6qRUuJfv9sajIU3qc1g1oeAKfzhLYiBp6sGC3G/P4BZF0JrIo2avtIj+2VFmPQjbkKS01daiLnYuVRpFyTUmTPJcAWyaMvrQ2hRRdc4QQYlPntEwWSHmKm0aZoVZWjp6ssizJoQc0lR1bWmo/LfTj+bHV0n1NbXtSRzsVT+NDK9aWNefc8O3zFxG/+5+mqTVBBNV1ffoLGsQuwbKsS0RohTSBK1rt9+eR/8Xnqd2Oke9NTlNQqU4fHeov8snVlVCe+hULGzCBEKYnqeHjRGYRwIrfZLINq+IXGBgmT4UwdJQLRYFJMe5UEjN+KdOBREHw3U1vqAfCnGpsfNqO70XwNiPOeuNyCFMn0fifKcRW8oHCRQUB7mNo1m2LZMqr8L0l/LrqchdAAAAABJRU5ErkJggg==",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJGSURBVHgB7ViLbeMwDH09dIBuUN0Elw2im+C8QZwJDp3g3AkOnaAeoZ2gGiEbRN3AnaA1YapmaesT94ME6AMIKSQl0bL4TAUAnhfIHlM0bHsQuv2S+X/gCHEu+le97DL+dS8bpbvtxbDEcNPLHdKwvfzTQVFArmDgnM4gjZK5TeicR4xW6egpO+QXJvFIL2yVzukxc0FZDK9EwiP/pPcYDjsyQem5t720UnGUB/07qFLMnSnXy2+lS1HFlluLgTjJ9yriuyuZey4oj3QGaTiMQdmMb4d8wrwJalMw6RrL8Ad5LvsVOjKoGp+HiqUIFJTH4fCib5S+i/h9KUIl0OCDcLSUsI/YPKbpG2Aw1k1G2Symn5IUiD7o20pn7n8IymAZzEKbxoVoDXVk9rW9PGJIzYqdmsRk19z+Zd81+18KH6qjSqqLCUIZavl3jcPK4VTJe4ly1GEc7ZRjZSdal5nAi36qhnri1mD6Sp2yGRSw/UeixXQXte01OU6OElLwGOmCqMFE/CyG5AlwGKsKjYr930UJAQaHzeEj+gsWnGF8v9fIf6voa1+x30/WBfoIWGGgCXCwtFMWY/AhI2UdZvRCmhJSaBC/IUMsEqMEaYtirsijp14pHaV9jARXPMZjrBIc2zQlGLwtCqMoIc9gaxAnzyaxRovp/wyn9V/CZwRlMX36TcKfDvyZlJO6YmmC8yjHDnGClMmyFesRLHhHY1esFsvRFY7XPgZ8eZFBVTjgGhSx1UjDY9wZ7buWP54XyBwllMjpUsILpdvgt7PlHJgAAAAASUVORK5CYII=",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAbCAYAAADCifeFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnGSURBVHgBzZh1bFRbEMZn28W1xa24BvfQ4u4QILjTRyiWIMECKQECBCtQEghBglvQhOBuwV2CQ3F37337m+ZsThdo+wp/vJPc3u7dc0e/+WbOukTEEZ/lcrli/e84jl6JXX5+fnqPjo7+6ZktP7E6kMFly/ddAYHB4ve7l/39/SVJkiReY/50IcfIMzJr1KghderU8T5LrNzGjRtLSEhIvDLcRrFRyNW6dWspV66cfPr0Sa/FixfL8+fPvZEz+00QfP/33cM1ePBgadasmdStW1e+fPmie9q1ayeZMmWSXbt2xXLY9+6rz9bFNXr0aHnw4IEcOHAgbmf5A6Ty5MkjVatWldevX0uBAgX0fuvWLSlatKhe7MHIo0ePepWlSpVK2rZtK9evX9d33W63BubJkydSv359jfb79+9l/fr1EhAQoHJ69eol379/l3fv3snBgwcladKketWuXVuqVasmT58+lXXr1qm+evXqyYULF6RRo0Yqc+nSpaoXndj48OFDWb16tSR0edDqH541a1Zp2rSpfPz4UfifaONI5syZ5fPnz1KiRAl5+/at5M2bV4KCguTatWua5XTp0smmTZukefPmkjx5cmnZsqUiAjk4/ejRIwkODpZu3brJvXv39Dvk5MyZU9KmTavBqFKliqRPn15mz54t3759k5o1a0qXLl303cjISKlevbra0rNnT/nw4YNCtl+/fiqvY8eOUqpUKZVF8OJyPEWKIPEDBkYgzvAimUuZMqW8ePFCAgMDNWMNGzaUNGnSqMEZMmSIBaf58+drsDZu3CglS5aUO3fuyIgRIzQT58+fl+zZs2vgXr16JX369JEVK1ZoeaA7WbJk0rdvX9mwYYM6QgllzJhRA4j84cOHK/wvXbokhQsXlp07d8rIkSNly5YtGpDKlSsnmFfcwOXNmzdq7P3797U2cRTDcuTIof/jLFnMnz+/wpIMsEzNEFUWGSXj7Bs1apTCm4CZUjGLgHTo0EEuX76szwkwmeLdZ8+eqQ7QhWzs4DnQxyESQ+Yppx8/fiiRJnT5IWTHjh2ydu1aT6pTaP2gnDufySJKoqKi5OvXrzJt2jQNjlUHyrIoNizeqlUrjToERN2z4AACZqDLZ96hTC5evKjEBSRbtGihaDp9+rQ3oCZr2AR0QVD//v3VHrMMicWZWTahFAcwIHXq1CqE5xAA8OYZ2QR6EIgvZAxL8z2ZgHhoK0AOUqNOIR2c4c4+jAW2oGby5MkyZ84c2bNnj9qycOFC2b59uzqOXpzANi5kAnW4gES9fPlSkQCq4oOy295ATWAsC0E4wUWtso/vMMZe5jMGjR07VsaPH69EglNknAxTlxhDECgNjMbIsmXLqjPoat++vQaGd9kzceJEadKkidY837dp00Z1sZ/v2Ys96EjoQOItpJMnT6oiXkYYDkIqtAwE8Rnm/d2CjTEKGQQIBFB/vEtNYygG0g/5zPOCBQtK6dKltTV17dpViY13gDttiCBhD/BFLu/jLPsIIiWALDLL9/Ett/mHl8gGGcJZFFasWFGWLVumMCbr1BFG22SDYxgGtDBs0qRJcvjwYc0yvRfCI9tnzpyRcePGac1iJIxs1yOZq1Chgv4P86IjLCxM2x5IGDp0qCbkTyY6qCycfxBC9nAyV65c8vjxY+9EApRQwJ1lyACmHjBggGaUuqMNMAAQrAYNGuhkgywGCXgA4oKlCdjAgQPVaQiNYB45ckRmzZqlOskUrefKlSsyb948ZW7aEchKrKPaZ+0HGIRi4AMxQf/FihVTONsMbC+Uw+Qw5IkTJ5TJaQ84wh0IMkTAuBhOEGrVqqWBQpchN6C5e/duOXfunEKZ55AWcu/evatyEzs/m+WFMYKYZGg3sCcwwgCeFSpUSG7evKkwNT3WLPYZMjMZZw8GHzt2TN/Ztm2bMisT1vTp07UdAXOyysV7sDLX1q1bVZfpEvbcHtep5j85W6RIEQkNDVXjGARgT5QxIGTLlk2zS+uYOXNmnEr5bv/+/dpjyR4tgjkW52HPs2fPyqBBg2LtxznaEIv5GUgTxL9x2orlLEKJGn0PRr1x44ZkyZJFeyEDBQwI8+EoGWZMIzMYAuypI2ZlliGPqVOnqhNMOsCf0RE5Y8aM0VHv0KFD6jgIIqiMldQyvXnKlCnaS7HBtEHqmFbFMuSYL18+RRRTn9167BOSL5m5PC87tJfNmzfrME5mIZXcuXPrJMOpA0OBmOmD1N6vjlxkHVbGEPYCUQNv5m6YGmdv376t7+MkczM1HMuoXxjL3WSb59Q3iWGywyYmOxtx9vGQxeHde8SDlGA8IohjQJiXIRpeAIbUL3eWEYxDlADzLn0TJThAwGhBQLlSpUrqPIcJskYgyQokCJrYy2kLhIAESI132Hf16lU5deqU2gaysI+uERERoU6CSD6zB5vINGUHqREI7GJFRWnduxycmzBhggqDDWkdvAjMEIgisoUi+h2wNhHj3MrRCmhTm7zD9EPbQR6O0J/hA9iVrJphAB1lypTRd9BBpmDr8PBw6dSpk55h4Qp0Eizep7w4ISEbWaCSWRsyZS1fvlzRAwHOnTtXx07kh/4TEXPEI8oYx4GAiJINeh1BQBkMjbDevXurAfYis0CI72g9hgPswcM+meA0UKdd4QA1y1DSvXt3KV68uB7nGPaHDBmiPLFgwQIZNmyY95DCEZH6tusTQsRhuIIWZ9cwumPKIVrc1KgxcMmSJcqMDBTAwJxKgJqpPfouxAXJ8Az4d+7cWY+IDCT2Mg4bxUYGWSH7ZJzxEaRwxMMGejtOwdoQIEhjlATy2EKtAnX7pxtk4hRECPegx/6ZxwTFzUgH7SOIjJJy6geHOfWsWrVKfwahLkEAF7WLMeyFcYEwrWbRokU6YhIkAkTNlS9fXhWSRZQCa5iWjPIMJ2xSQS+28EMcaIKhQROw9+21yAPWlABy4QpzKuNnJoYZnhEc7eUYTDZRjCNECMFEHKOpWQRgHBOPiTrPEQAx8DMJJUCQkMMwQa/et2+f1iF7IQvQwPENg5m5cZrJyKAAfeyfMWOGwph+jE3IB0E4xj4uss7wQiapZQ7z+EKN4iS/fjBvY7MyucuDXk9dOtQlL+MkzuAwzlEn5lcIjOIZmTC/ILDYD7RZZICMUgJkFVKjddHCeMZehn2MPH78uO7BcAZ/SgD0wL7wBf/DqvzaAcPyPRmElAgWmcN5ugP6kQXkOXjQAknI3r17tebRHRYWqRF1PM7pBTPzmTsXz+zP9vcS8+P6T+/YF4E033Hn4h3fZ+by1eGrz9yNzb56eeYJqLNy5UrHE0BnzZo1jgdVTo8ePZzAwJC/O47939e/7XgaxCc/ASsAAAAASUVORK5CYII=",S=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,E=t.div`
  color: green;
  font-size: 30px;
  margin-bottom: 20px;
`,N=t.h1`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-align: center;
  display: inline-block;
  opacity: 0.8;
  opacity: 0.8;
`,C=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 20rem;
`,M=t.div`
  background-color: #f0e4ff;
  width: 90%;
  padding: 8px;
  border-radius: 10px;
  text-align: center;
  color: #9747ff;
  font-size: 16px;
  font-weight: 500;
`,Q=t.div`
  margin-top: 2rem;
  background-color: #a259ff;
  width: 20rem;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
`,k=t.div`
  display: flex;
  height: 2rem;
  margin-left: 1.5rem;
`,Y=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 6rem;
`,H=t.button`
  margin-top: 30px;
  background-color: #a259ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 90%;
`,U=t.div`
  margin-top: 1rem;
  width: 435px;
  position: relative;
  font-size: 15px;
  line-height: 58.8px;
  font-weight: 500;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    linear-gradient(90deg, #9747ff, #00edff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14px;
`,T=()=>e.jsxs(S,{children:[e.jsx(E,{children:e.jsx("img",{src:v,alt:"National Health Authority"})}),e.jsx(N,{children:"ABHA Address created Successfully"}),e.jsx(U,{children:"ABHA (Health ID) Card"}),e.jsxs(Q,{children:[e.jsxs(k,{children:[" ",e.jsx("img",{src:R,alt:"National Health Authority"})]})," "]}),e.jsx(C,{children:e.jsxs(Y,{children:[e.jsxs("div",{children:[e.jsx("h5",{className:"mb-1",children:"Ajmal C"}),e.jsx("p",{className:"mb-1",children:"Ajmalc@abdm"}),e.jsx("p",{className:"mb-0",children:"Male"})]}),e.jsx("div",{children:e.jsx("img",{src:B,alt:"QR Code"})})]})}),e.jsx(M,{children:"Your ABHA Card is ready"}),e.jsx(H,{children:"Download Your ABHA Card Now"})]}),D=()=>{const[a,l]=i.useState(""),[r,z]=i.useState(""),[X,Z]=i.useState(!1),[P,F]=i.useState(!1),[n,c]=i.useState("aadhar"),[d,A]=i.useState(!1),[p,h]=i.useState(!1),s=o=>{c(o)},x=o=>{o.preventDefault(),A(!0)},m=()=>{h(!0)};return e.jsx(g,{children:e.jsxs("div",{className:"Container",children:[e.jsxs("div",{className:"LeftSection",children:[e.jsx("div",{className:"Title",children:e.jsx("h3",{children:"ABHA - Ayushman Bharat Health Account or Health ID Card Approved by NDHM.GOV.IN"})}),e.jsx("div",{className:"Subtitle",children:"The ABHA card is managed under the Ayushman Bharat Digital Mission (ABDM), which is a digital healthcare initiative of the National Health Authority (NHA). Under this mission, having this health card, the citizens of India are provided with numerous benefits, such as hassle-free access to medical treatments and healthcare facilities, easy sign-up options for personal health record applications (like ABDM ABHA app), and trustable identity."}),e.jsxs("div",{className:"ImportantNotes",children:["It is crucial to remember that",e.jsx("div",{className:"Note",children:"The health records associated with Health IDs or ABHA numbers can only be accessed with the informed consent of the individual."}),e.jsx("div",{className:"Note",children:'People have the option to create an alias, referred to as an "ABHA address" (similar to the email ID xyz@ndhm with a password).'})]})]}),e.jsx("div",{className:"RightSection",children:e.jsx("div",{className:"FormContainer",children:p?e.jsx(T,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"FormTitle",children:e.jsx("h4",{children:"Create Ayushman Bharat Health Account"})}),e.jsx("div",{className:"FormSubtitle",children:"ABHA (Health ID) Card"}),d?e.jsx(e.Fragment,{children:e.jsx(I,{onSubmit:m})}):e.jsxs("div",{className:"create-abha",children:[e.jsx("div",{className:"FormSubtitle1",children:"Using"}),e.jsxs("div",{className:"ButtonGroup",children:[e.jsx("button",{className:"btn custome-ToggleButton",onClick:()=>s("aadhar"),style:{background:n==="aadhar"?"#fff":"#f6f9fd"},children:"Aadhar Number"}),e.jsx("button",{className:"btn custome-ToggleButton",onClick:()=>s("phone"),style:{background:n==="aadhar"?"#f6f9fd":"#fff"},children:"Phone Number"})]}),n==="aadhar"&&e.jsxs("div",{className:"ContentBox",children:[e.jsx("input",{type:"text",className:"form-control w-25 custome-input",placeholder:"XXX","aria-label":"Username","aria-describedby":"basic-addon1"}),e.jsx("input",{type:"text",className:"form-control w-25 custome-input",placeholder:"XXX","aria-label":"Username","aria-describedby":"basic-addon1"}),e.jsx("input",{type:"text",className:"form-control w-25 custome-input",placeholder:"XXX","aria-label":"Username","aria-describedby":"basic-addon1"})]}),n==="phone"&&e.jsx("div",{className:"ContentBox",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"+91","aria-label":"Username","aria-describedby":"basic-addon1"})}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"CheckboxLabel",children:[e.jsx("input",{type:"checkbox",className:"me-2"}),"Send ABHA Card on Whatsapp"]}),e.jsxs("div",{className:"CheckboxLabel",children:[e.jsx("input",{type:"checkbox",className:"me-2"}),"I agree to give the necessary permission to RaphaCure to set up my ABHA Health Locker"]}),e.jsx("div",{className:"Buttonbox",children:e.jsx("button",{type:"submit",className:"btn custom-btn",children:"Create ABHA"})})]})]}),e.jsxs("p",{className:"Bottomtitle",children:["Don't have Aadhaar?"," ",e.jsx("span",{className:"Bottomsubtitle",children:"Use Phone Number"})]}),e.jsxs("p",{className:"Bottomtitle1",children:["Approved by NHA"," ",e.jsx("img",{className:"Bottomsubtitle1",src:f,alt:""})]})]})})})]})})};export{D as default};
