import styled from "styled-components";

export const PackageSelectionStyled = styled.div`
    .page-heading{
        margin :20px 0 35px 0;
    }
    .package-title-name-div{
        display:flex;
        justify-content:left;
        gap:10px;
        margin:20px 0;
        align-items: center;
    }
    .package-name{
        margin:0;
    }
    .actual-price{
        color:#1c3173;
        font-weight:bold;
    }
    .actual-price-cut{
        text-decoration: line-through;
        color:#818181;
    }
    .discounted-price{
        color:#1c3173;
    }
    .card-price-div{
        display:flex;
        gap:5px;
    }
    .card-book-btn-div{
        display:flex;
        justify-content:center;
    }
    .packages-div{
        display:flex;
        justify-content:center;
        gap:40px;
        margin:20px 0;
        padding: 30px;
        overflow-x: auto;
    }
    .discount-badge{
        position:absolute;
        right:-12px;
        top:35px;
    }
`;

export const PackagesCardButton = styled.button`
    background:${(props: any) => (props?.selected ? "#002366" : "white")};
    color: ${(props: any) => (props?.selected ? "white" : "#002366")};
    padding: 10px 15px;
    border: 1px solid #002366;
    border-radius: 24px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s;
    &:hover {
        background: #001a44;
    }
` as any;
