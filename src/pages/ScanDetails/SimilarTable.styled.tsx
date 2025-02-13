import styled from "styled-components";

export const SimilarTableStyled = styled.div`
  /* SimilarPackageTable.css */
  .similar-package-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
  }

  .table-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #333;
  }

  .comparison-table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
  }
  .similar-package-add-btn {
    background: #252b61;
    border-radius: 25px;
    border: none;
    color: #fff;
    gap: 0.5rem;
    text-transform: capitalize;
  }
  .comparison-table th,
  .comparison-table td {
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
    text-align: left;
    vertical-align: top;
  }

  .comparison-table th {
    font-weight: 600;
    color: #333;
    background-color: #f8f9fa;
  }

  .package-image {
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }

  .no-image {
    width: 120px;
    height: 120px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #666;
  }

  .package-title {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    margin-bottom: 8px;
  }

  .price-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .badge-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .discount-badge {
    background-color: #e8f5e9 !important;
    color: #2e7d32 !important;
    padding: 4px 8px;
    font-weight: 500;
    width: fit-content;
  }

  .current-price {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }

  .original-price {
    text-decoration: none;
    color: #666;
    font-size: 14px;
    span {
      text-decoration: line-through;
    }
  }

  .tests-accordion {
    max-height: 400px;
    overflow: scroll;
  }

  .tests-accordion .accordion-button {
    padding: 12px;
    font-weight: 500;
  }

  .tests-accordion .accordion-button:not(.collapsed) {
    background-color: #f8f9fa;
  }

  .tests-table th,
  .tests-table td {
    padding: 12px;
    vertical-align: middle;
  }

  .check-icon {
    color: #2e7d32;
    font-size: 20px;
  }

  .cross-icon {
    color: #d32f2f;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    .comparison-table {
      font-size: 14px;
    }

    .package-image,
    .no-image {
      width: 80px;
      height: 80px;
    }

    .current-price {
      font-size: 16px;
    }
  }
`;
