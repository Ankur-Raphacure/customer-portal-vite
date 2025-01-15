import styled from "styled-components";

export const PackageQuantityStyled = styled.div`
  width: 100%;
  .package_qcontainer {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    border: 1px solid #9747FF;
    border-radius: 10px;
    padding: 6.1px 7px;

    .minus-quantity {
      appearance: none;
      border: medium none;
      background: transparent;
      padding: 0;
      height: auto;
      width: auto;

      .minus_icon {
        position: relative;

        .minus {
          position: absolute;
          top: 14px;
          left: 8px;
        }
      }
    }

    .current-quantity {
      font-size: 12px;
      line-height: 18px;
      font-family: Poppins, sans-serif;
      font-style: normal;
      font-weight: 600;
      color: #000;
      padding: 0 32%;
      margin-top: 4px;
    }

    .plus-quantity {
      appearance: none;
      border: medium none;
      background: transparent;
      padding: 0;
      height: auto;
      width: auto;
      pointer-events: none;
      cursor: default;

      .plus_icon {
        position: relative;

        .plus {
          position: absolute;
          top: 10.5px;
          left: 7px;
        }
      }
    }
  }
`;