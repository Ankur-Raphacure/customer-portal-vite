import{d as o}from"./index-BHf3qlKB.js";const t=o.div`
  width: 100%;
  .filter {
    background: #fff;
    /* height: 600px; */
  }
  .filter-sec {
    padding: 20px;
  }

  .filter-category {
    margin-bottom: 20px;
  }

  .filter-category h5 {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
  }

  .checkbox-group label {
    display: block;
    margin-bottom: 8px;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.54;
  }

  .checkbox-group input {
    margin-right: 8px;
  }

  .frame-type,
  .frame-shape {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .frame-type {
    display: flex;
    gap: 10px;
  }

  .frame-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 60px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;
    color: #8d8d8d;
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .frame-option:hover {
    background-color: #f0f0f0;
  }

  .frame-image {
    width: 40px;
    height: auto;
    margin-bottom: 8px;
  }
  .spectacles {
    margin-top: 30px;
  }
  .spectacles .card {
    overflow: hidden;
    text-align: left;
    margin-bottom: 20px;
    border-radius: 2px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    background: #fff;
  }

  .spectacles .card-header {
    position: relative;
    border-bottom: none;
    padding: 10px;
    background-color: #fff;
  }

  .spectacles .card-img-top {
    width: 100%;
    height: auto;
    background-color: #fff4ec; /* Matches the background from the image */
    cursor: pointer;
  }

  .spectacles .wishlist-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5em;
    color: #ccc;
    cursor: pointer;
  }

  .spectacles .card-title {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 10px 0 5px 0;
    padding: 0px 18px;
  }
  .spectacles .card-body {
    padding: 0;
  }
  .spectacles .card-text {
    color: #8d8d8d;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 18px;
  }

  .spectacles .color-options {
    display: flex;
    gap: 5px;
  }

  .spectacles .color-dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    margin: 5px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }
  .color-dot.selected {
    box-shadow: 0 0 0 2px green;
  }

  .spectacles .card-price {
    color: #000;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 10px 0;
    padding: 0px 18px;
  }

  .spectacles .free-lenses {
    background: linear-gradient(
      270deg,
      rgba(217, 217, 217, 0) 0.03%,
      rgba(253, 97, 13, 0.2) 99.79%
    );
    color: #fd610d;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 8px 12px;
    margin-top: 10px;
  }
  .spectacles .wishlist-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  .span-text {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .span-text p {
    margin: 0;
  }

  /* Specs detail */
  .specs-detail .images .image {
    width: 100%;
    height: auto;
    object-fit: cover;
    padding: 10px;
  }

  .specs-detail .images .image-row {
    display: flex;
    justify-content: space-between;
  }

  .specs-detail .images .image-col {
    padding: 10px;
  }
  .specs-details-right {
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 10px;
  }

  .product-info {
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 10px;
  }

  .product-info h4 {
    color: #000;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 5px;
  }

  .product-info p.product-size {
    color: #8d8d8d;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }

  .product-info h3.product-price {
    color: #9747ff;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
  }

  .color-options p {
    margin-bottom: 5px;
    color: #8d8d8d;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .color-options .colors {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  .color-circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #ccc;
    display: inline-block;
  }

  .color-circle.white {
    background-color: white;
  }

  .color-circle.black {
    background-color: black;
  }

  .color-circle.purple {
    background-color: purple;
  }

  .color-circle.red {
    background-color: red;
  }

  .color-circle.blue {
    background-color: blue;
  }

  .color-circle.green {
    background-color: green;
  }

  .bill-details {
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 10px;
  }

  .bill-details .row p {
    margin: 5px 0;
    color: #8d8d8d;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .bill-details .text-right {
    text-align: right;
  }

  .bill-details .discount {
    color: #28a745;
  }

  .coupon-info {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .coupon-info p {
    margin: 0;
  }
  .coupon-info .single {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .coupon-info p {
    color: #8d8d8d;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .coupon-info .remove-coupon {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .book-now,
  .add-to-cart {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;
  }

  .book-now {
    border-radius: 2px;
    background: #9747ff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
  }

  .add-to-cart {
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    color: #000;
  }

  .technical-info {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .technical-info h5 {
    margin-bottom: 10px;
  }

  .technical-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .technical-info table td {
    padding: 5px 0;
    color: #8d8d8d;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h5 {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .back-btn {
    background-color: transparent;
    border: none;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;export{t as S};
