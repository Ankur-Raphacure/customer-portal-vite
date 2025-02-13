import styled from "styled-components";

export const FitnessProductPageStyled = styled.div`
.container {
    margin: 0 auto;
    padding: 1rem;
  }
  
  .breadcrumb {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1rem;
  }
  
  .breadcrumb-link {
    color:black;
    text-decoration:none;
    cursor: pointer;
  }
  
  .breadcrumb-link:hover {
    color: #2563eb;
  }
  
  .breadcrumb-separator {
    margin: 0 0.5rem;
  }
  
  .listing-container {
    display: grid;
    grid-template-columns: 65% 35%;
    grid-template-rows: auto auto auto auto;
    column-gap: 30px;
    row-gap:10px;
  }
  
  .gallery-section {
    grid-column: 1;
    grid-row: 1;
    min-width:0;
  }

  .main-image-container-parent{
    position: relative;
  }
  
  .main-image-container {
    width:100%;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    min-height:400px;
    border:2px solid #eaeaea;
  }
    @media (max-width: 1100px) {
  .main-image-container {
    width: 100%;
  }
}
  
  .main-image {
    width: 100%;
    height: 400px;
    object-fit: contain;
  }
  
  .rating-badge {
    position: absolute;
    top: 10px;
    left: -21px;
    z-index:2;
  }
  
  .card-rating-div{
      position:absolute;
      top:20px;
      left:-12px
  }
  .card-rating-svg{
      position:absolute;
      top:0px;
      left:0px
  }
  .card-rating-p{
      position:absolute;
      top:-2px;
      left:20px;
  }
  
  .star-icon {
    width: 1rem;
    height: 1rem;
    fill: #fbbf24;
    color: #fbbf24;
  }
  
  .assured-badge {
    position: absolute;
    top: 3px;
    right: 7px;
    z-index:2;
  }
  
  .assured-icon {
    width: 1.5rem;
    height: 1.5rem;
    background: #2563eb;
    border-radius: 9999px;
  }
  
  .thumbnail-container {
    display: flex;
    gap: 0.7rem;
    margin-top: 25px;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .thumbnail {
    height: 5rem;
    object-fit: cover;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    flex-basis: 150px;
    flex-shrink: 0;
    flex-grow: 0;
    object-fit: contain;
    border:2px solid #eaeaea;
  }
  
  .thumbnail.selected {
    border: 2px solid #2563eb;
  }
  
  .more-photos {
    width: 6rem;
    height: 5rem;
    background: #f3f4f6;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.875rem;
    color: #666;
  }
  
  .booking-section {
    flex:1;
    margin: 10px 0 0 0;
  }
  
  .booking-card {
    background: #fff7ed;
    border-radius: 30px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .recent-orders {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .dot {
    width: 0.5rem;
    height: 0.5rem;
    background: #2563eb;
    border-radius: 9999px;
  }
  
  .dropdown {
    margin-bottom: 1rem;
  }
  
  .dropdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 0.75rem;
    background: white;
    cursor: pointer;
  }
  
  .chevron-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: #666;
  }
  
  .description {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1.5rem;
    overflow-y:scroll;
    height:100px
  }
  
  .price-container {
    margin-bottom: 1.5rem;
  }
  
  .price-label {
    font-size: 0.875rem;
  }
  
  .price {
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .book-button {
    width: 100%;
    background: #2563eb;
    color: white;
    padding: 0.75rem;
    border-radius: 23px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .book-button:hover {
    background: #1d4ed8;
  }
  .book-button:disabled{
    background:rgb(121, 156, 255);
    cursor:not-allowed;
  }
  .breadcrumb1-row{
    display:block !important;
  }
  
  @media (max-width: 1024px) {
    .booking-section {
      width: 100%;
    }
    .listing-container{
      grid-template-columns: 100%;
      grid-template-rows: auto auto auto auto auto;
      column-gap:15px;
    }
    .booking-side{
      grid-column: 1 !important;
      grid-row: 2 !important;
    }
    .package-details-section{
      grid-column: 1 !important;
      grid-row: 3 !important;
    }
    .service-section{
      grid-column: 1 !important;
      grid-row: 4 !important;
    }
    .trainers-section{
      grid-column: 1 !important;
      grid-row: 5 !important;
    }
  }

  @media (max-width: 777px) {
    .location-container{
      flex-direction: column;
      gap:10px !important;
    }
    .map-button{
      flex-basis:45px !important;
      max-width:150px;
    }
  }


  .services-section {
    padding: 20px;
  }
  
  .services-title {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 16px;
  }
  
  .services-container {
    position: relative;
    width: 100%;
  }
  
  .services-scroll {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 4px;
    scroll-behavior: smooth;
  }
  
  .services-scroll::-webkit-scrollbar {
    display: none;
  }
  
  .service-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 100px;
  }
  
  .service-image-container {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
    background: #f5f7fb;
  }
  
  .service-image-placeholder {
    width: 100%;
    height: 100%;
    background: #f5f7fb;
  }
  
  .service-name {
    font-size: 14px;
    color: #1a1a1a;
    text-align: center;
  }
  
  .scroll-button {
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: white;
    border: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.2s;
  }
  
  .scroll-button:hover {
    background: #f5f7fb;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 640px) {
    .services-container {
      margin-right: -16px;
    }
    
    .scroll-button {
      display: none;
    }
  }
  .address p{
    margin:0;
    width:auto;
  }
  .location-container{
    width:100%;
    display:flex;
    justify-content:space-between;
    gap:40px;
  }
  .map-button{
    border:none;
    background-color:rgb(163, 218, 194);
    border-radius:25px;
    padding:0 20px 0 20px;
    height:45px;
    flex-basis: 150px;
    flex-shrink: 0;
    flex-grow:0;
  }
  .btn-map-icon{
    margin-right:5px;
    margin-bottom:3px;
  }
  .timing-container{
    margin-top:10px;
  }
  .timing-label{
    color:rgb(133, 117, 117);
    margin-right:10px;
  }
  .package-div{
    background-color: white;
    padding: 5px 10px 5px 10px;
    border-radius: 20px;
    cursor: pointer;
    width:250px;
    flex-shrink: 0;
  }
  .package-div-selected{
    box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.1);
    border:solid 2px #00adff;
  }
  .gym-name{
    margin-top:10px;
  }
  .booking-side{
    grid-column: 2;
    padding:2px;
    position:relative;
    grid-row: span 4;
  }
  .booking-card-mobile{
    margin:20px 0 20px 0;
    padding:0 5% 0 5%;
  }
  .service-section{
    grid-column: 1;
    grid-row: 3;
  }
  .trainers-section{
    grid-column: 1;
    grid-row: 4;
  }
  .package-details-section{
    margin:20px 0;
    grid-column: 1;
    grid-row: 2;
  }
  .package-details-section-deck{
    display: flex;
    flex-direction: row;
    gap: 10px;
    overflow-X: auto;
  }
`;

export const FitnessProductPageTrainersCardStyled = styled.div`
.trainer-img-bg{
  background-color: #eaeaf0;
}
.trainers-container {
  width: 100%;
  max-width: 1200px;
  // margin: 0 auto;
  text-align: left;
  padding: 20px 0 20px 0;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
}

.trainers-scroll {
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 20px;
  padding: 10px;
  position: relative;
}

.trainer-card {
  min-width: 200px;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
  flex-shrink: 0;
  height:220px;
  overflow:hidden;
}

.trainer-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.trainer-text-content{
  padding:0 10px 0 10px;
  text-align:left
}

.trainer-name {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px;
}

.trainer-role {
  font-size: 14px;
  color: #555;
}
.service-card{
  display:flex;
  min-width:200px;
}

.image-container{
  height:150px;
  width:200px;
}
.image-container-service{
  height:150px;
  width:200px;
  overflow:hidden;
  border-radius:12px;
}

.scroll-button {
  position: absolute;
  right: 0;
  background: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-50%);
}

.service-banner{
  background-color:#f1f5ff;
  height:150px;
  width:200px;
  overflow:hidden;
  border-radius:12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}
`;
