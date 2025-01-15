import styled from "styled-components";

export const DomiciliaryCareStyled = styled.div`
  width: 100%;
  .domiciliarycare {
    width: 100%;
    padding-bottom: 100px;
  }
  .view-all {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    button {
      color: #9747ff;
      background: #fff;
      height: 40px;
      border: 1px solid #9747ff;
      padding: 0px 50px;
      border-radius: 4px;
    }
    text-align: center;
  }
  .header {
    background: linear-gradient(101deg, #eef0ff 33.53%, #6774e8 100%);
    color: white;
    text-align: left;
    padding-left: 2rem;
    padding-top: 3rem;
    position: relative;
    margin-bottom: 3rem;
  }

  .header-content h1 {
    width: 664px;
    position: relative;
    color: #000;
    font-size: 38px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  .header-content h1 span {
    color: #fec426;
  }

  .header-content p {
    width: 340px;
    position: relative;
    font-size: 18px;
    line-height: 34px;
    font-weight: 500;
    color: #fff;
    height: 96px;
    margin-top: 2.5rem;
  }
  .domiciliary-list {
    list-style: none;
    padding: 0;
    margin-top: 2rem;
  }
  .domiciliary-list li {
    display: flex;
    color: #696565;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    /* line-height: 28px; */
    margin-bottom: 1rem;
  }
  .container {
    margin-top: 40px;
  }
  .category {
    padding: 0px 40px;
  }

  .category-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: left;
  }

  .d-flex.flex-wrap {
    gap: 10px;
  }

  .category-card {
    flex: 1;
    max-width: 160px;
    /* border: 2px solid #00ff00; */
    background: linear-gradient(white, white) padding-box,
      linear-gradient(180deg, #16a9fc, #fff) border-box;
    border: 2px solid transparent;
    border-radius: 15px;
    transition: transform 0.3s ease, border-color 0.3s ease;
    overflow: hidden;
    cursor: pointer;
  }

  .category-card:hover {
    transform: translateY(-10px);
    background: linear-gradient(white, white) padding-box,
      linear-gradient(180deg, #16a9fc, #fff) border-box;
  }

  .category-card img {
    /* height: 120px;
  object-fit: cover; */
    padding: 2px;
  }
  .card-body {
    padding: 0 !important;
  }
  .card-title {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .equipment-rent {
    padding: 40px;
  }
  @media (max-width: 987px) {
    .image-container {
      margin-top: 4rem;
    }
  }
  .equipment-rent h2 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px; /* 141.667% */
  }
  .equipment-rent p {
    color: #6c6a6a;
    text-align: justify;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px; /* 221.429% */
  }
  .viewmore {
    background-color: transparent;
    border: none;
    color: #9747ff;
    text-align: justify;
    float: inline-end;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 31px; /* 221.429% */
  }
  .ExperiencedNurses {
    padding: 40px;
  }
  .nurse-card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* justify-content: center; */
  }

  .nurse-card {
    flex: 1 1 calc(25% - 40px); /* Adjust the card width */
    max-width: 280px;
    /* margin: 10px; */
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 12px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .nurse-image-container {
    border-radius: 3px 3px 0px 0px;
    background: #eff0ff;
    padding: 10px;
    display: inline-block;
    margin-bottom: 15px;
    width: -webkit-fill-available;
    text-align: center;
  }

  .nurse-image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  .nurse-card h2 {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .certification {
    color: #004b1e;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .experience,
  .languages {
    color: #000;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 5px 0;
  }

  .book-now {
    background-color: #7b5cfc;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: -webkit-fill-available;
  }

  .book-now:hover {
    background-color: #5a3be1;
  }
  /* .domciliary-form {
    background-color: #F0F4FF;
    padding: 20px;
    border-radius: 12px;
    width: 400px;
    margin: auto;
} */

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #333;
  }

  .form-group input[type="text"],
  .form-group select {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
    background-color: #fff;
  }

  .form-group input[type="text"]::placeholder {
    color: #999; /* Grey placeholder text */
  }

  .form-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .form-buttons .clear {
    background-color: transparent;
    border: none;
    color: #666;
    font-size: 14px;
    cursor: pointer;
  }

  .form-buttons .clear:hover {
    color: #333;
  }

  .form-buttons .request-callback {
    background-color: #7c4dff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  .form-buttons .request-callback:hover {
    background-color: #6a42cc;
  }
  .form-book {
    border-radius: 10px;
    background: #eff0ff;
    padding: 30px;
    margin: 0px 30px;
  }
  .ExperiencedNurses .viewmore {
    text-align: end;
  }
  .equipment-rent img {
    width: -webkit-fill-available;
  }
  @media (max-width: 768px) {
    .header-content h1 {
      width: 98%;
      font-size: 34px;
    }
    .form-book {
      margin: 0;
    }
    .domiciliary-list {
      width: 90%;
    }
    .header .dom-img img {
      width: 90%;
    }
    .category-card {
      flex: auto;
      max-width: 190px;
    }
    .labs-search-section {
      display: block !important;
    }
    .labs-search-section-links {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      margin-top: 1rem;
    }
  }
  .domciliary-form img {
    width: -webkit-fill-available;
  }
  .domciliary-form {
    padding: 0px 40px;
  }
  .domciliary-form h2 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .back-btn {
    background-color: transparent;
    border: none;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .equipments {
    width: 100%;
    margin: auto;
    padding: 40px;
  }
  .button-row {
    display: flex;
    gap: 20px;
  }
  .button-row button {
    color: #464343;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 5px;
    background: #eff0ff;
    padding: 12px 70px;
    border: none;
  }
  .equipment-card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .equipment-card {
    flex: 1 1 calc(25% - 40px);
    max-width: 280px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 12px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  /* .equipment-card:hover {
    transform: translateY(-10px);
    border-color: #00ff00;
  } */

  .equipment-image-container {
    border-radius: 3px 3px 0px 0px;
    background: #eff0ff;
    padding: 10px;
    display: inline-block;
    margin-bottom: 15px;
    width: 100%;
    text-align: center;
  }

  .equipment-image {
    width: 100px;
    height: 100px;
  }

  .equipment-card h3 {
    color: #3e3e3e;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 10px;
  }

  .size {
    color: #797171;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 5px 0;
  }

  .price {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 10px 0;
  }

  .quick-view {
    background-color: #7b5cfc;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
  }

  .quick-view:hover {
    background-color: #5a3be1;
  }
  .labs-search-section {
    display: flex;
    padding: 0 20px;
    gap: 20px;
  }
  .labs-search-section button {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid #000;
    background: #fff;
    padding: 10px 20px;
  }
  .labs-search-section-links {
    gap: 12px;
    display: flex;
  }
  .search-bar {
    display: flex;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .search-bar input {
    border: none;
    padding: 6px 30px;
    width: 100%;
    font-size: 16px;
    color: #8e8e8e;
  }

  .search-bar input::placeholder {
    color: #8e8e8e;
  }

  .search-bar button {
    background-color: #4b8b3b;
    border: none;
    color: white;
    padding: 0;
    cursor: pointer;
    font-size: 16px;
    padding: 6px;
  }

  .search-bar button:hover {
    background-color: #39712d;
  }
  .btn-container {
    display: flex;
    gap: 6px;
  }
  .view {
    color: #9747ff;
    text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 3px;
    border: 1px solid #9747ff;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
  }
  .view:hover {
    color: #fff;
  }
  .image {
    padding: 0;
  }
  .vaccine {
    padding: 20px;
  }
  .equipment-detail {
    padding: 20px;
  }

  .equipment-info {
    padding-left: 30px;
  }

  .equipment-info h2 {
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .quantity-section {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .quantity-label {
    margin-right: 10px;
    color: #897373;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .decrement-btn,
  .increment-btn {
    padding: 5px 10px;
    border: none;
    background-color: #e0e0e0;
    cursor: pointer;
    font-size: 18px;
  }

  .quantity-value {
    padding: 0 10px;
    font-size: 16px;
  }

  .pricing p {
    font-size: 18px;
    font-weight: bold;
    color: #494949;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .pricing p span {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description-section h3 {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 20px;
  }

  .description-section p {
    color: #404040;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 208.333% */
    margin: 5px 0;
  }
  .description-section .desc-text {
    color: #908484;
    text-align: justify;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
  }
  .action-buttons {
    display: flex;
    margin-top: 3rem;
    margin-right: 2.9rem;
  }

  .buy-now,
  .rent-now {
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    width: 86%;
  }

  .buy-now {
    background-color: #6b43cb;
    color: white;
    margin-right: 10px;
    border: 2px solid #6b43cb;
    border-radius: 5px;
  }

  .rent-now {
    background-color: transparent;
    color: #6b43cb;
    border: 2px solid #6b43cb;
  }
  .slick-prev,
  .slick-next {
    color: black;
    border-radius: 50%;
    padding: 10px;
    width: 35px;
    height: 35px;
    z-index: 2;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    color: black;
  }

  .slick-prev {
    left: -40px;
  }

  .slick-next {
    right: -40px;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #6b43cb;
  }

  .slick-dots li.slick-active button:before {
    color: #6b43cb;
  }
  .similar h2 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .icu-home {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }

  .banner-icu {
    width: 100%;
    height: 500px;
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736424691862.png");
    background-size: cover;
    background-position: center;
  }

  .form-icu {
    border-radius: 8px;
    border: 1px solid #fff;
    opacity: 0.8;
    background: linear-gradient(113deg, #fff 4.35%, #c3c7ff 101.65%);
    padding: 30px;
    margin: 40px;
  }

  .form-icu h2 {
    color: #373636;
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .form-icu label {
    font-size: 12px;
    color: #000;
  }

  .form-icu input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: #a8a8a8;
  }

  .btn-submit {
    width: 100%;
    padding: 12px;
    background-color: #7d3bf2;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-submit:hover {
    background-color: #6a32d9;
  }

  /* Essential Features Section */
  .essential-feature {
    background: linear-gradient(180deg, #bfd9ff 0%, #fff 100%);
  }
  .essential-feature img {
    margin-top: -80px;
  }
  .why-icu {
    padding: 40px 40px 0 40px;
  }

  .why-icu .wellbeing-card {
    display: flex;
    align-items: center;
    background-color: #e0f7fa;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .why-icu .wellbeing-card .icon {
    margin-right: 15px;
  }

  .why-icu .wellbeing-card .icon img {
    width: 50px;
    height: 50px;
  }

  .why-icu .wellbeing-card .content h4 {
    margin: 0;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 159.5%; /* 22.33px */
  }

  .why-icu .wellbeing-card .content p {
    margin: 0;
    color: #777;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 159.5%; /* 19.14px */
  }
  .why-icu h2 {
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px; /* 154.545% */
    margin-bottom: 20px;
  }
  .contact-support {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .contact-support .support-icon {
    margin-right: 15px;
  }

  .contact-support .support-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(180deg, #13739c 0.01%, #39b4e9 100.01%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .contact-support .support-text {
    display: flex;
    gap: 12px;
  }
  .contact-support .support-text h4 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  .contact-support .support-numbers a {
    color: #13739c;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 10px;
    text-decoration: none;
  }

  .contact-support .support-numbers a:hover {
    text-decoration: underline;
  }
  .nurse-list-div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
  .cnf-text {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    font-size: 14px;
    font-weight: 600;
    color: #9747ff;
  }
  .custom-accordion-header {
    color: #6c757d; /* Default color for header */
    box-shadow: none;
  }

  .custom-accordion-header.active {
    color: #fff;
  }
  .doc-main-div {
    display: flex;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 700px) {
    .doc-main-div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .doc-img-div {
      margin-top: 6rem;
    }
  }
  .doc-content-div {
    width: 70%;
  }
  .accordion-button {
    background: #f6f7ff;
    box-shadow: none;
  }
  .accordion-body {
    background: #f6f7ff;
    box-shadow: none;
  }
  .doc-img-div img {
    height: 30rem;
    margin-top: -6rem;
  }
  .doc-content-div h5 {
    font-size: 24px;
    line-height: 34px;
    font-weight: 600;
    color: #000;
    height: 33px;
    margin-bottom: 3rem;
  }
  .horizental-div {
    background: #f6f7ff;
    box-shadow: none;
  }
  .all-back-btn-div {
    width: 1rem;
    margin-bottom: 1rem;
  }
  .Popup-module-div {
    padding: 1rem;
  }
  .Popup-module-btn-div {
    display: flex;
    justify-content: end;
  }
  .Popup-module-add-btn-div {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .Popup-module-add-btn-div button {
    border-radius: 4px;
    background-color: #9747ff;
    font-size: 14px;
    width: 25%;
    color: #fff;
  }
  .Popup-module-price-div {
    line-height: 0px;
    align-items: center;
  }
  .Popup-module-price-div p {
    margin-top: 0.6rem;
    font-size: 14px;
    font-weight: 500;
    color: #5f5b5b;
  }
  .Popup-module-price-div h5 {
    font-size: 14px;
    font-weight: 500;
    color: #000;
  }
`;
