import styled from "styled-components";

export const RPFooterStyled = styled.div`
  .FooterContainer {
    background: #252b61;
    color: white;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
  }

  .Wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.TopSection {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Adjust alignment for uniformity */
  margin-top: 90px;
}

.Logo {
  height: 50px; /* Ensure logo size consistency */
}

.SocialLinks {
  display: flex;
  gap: 10px; /* Maintain uniform spacing for social icons */
}

.SectionWrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px; /* Add spacing between sections */
}

.Section {
  flex: 1;
  margin: 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: "SF Pro Text";
  color: #ffffff;
  opacity: 0.8;
}

.Section:last-child {
  margin-top: 34px;
}

.SectionTitle {
  font-size: 16px;
  font-weight: 800 !important;
  color: #ffffff;
  margin-bottom: 10px;
}

.Link {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 8px;
}

.Link:hover {
  text-decoration: underline;
}

.BottomBanner {
  text-align: left;
  font-size: 14px;
  color: #e8e8e8;
  margin-top: 20px;
  border-top: 1px solid #ffffff;
  display: flex;
  justify-content: space-between;
}

.BottomBanner p {
  margin-top: 30px;
}

.BottomBanner p:first-child {
  font-size: 14px;
  font-family: Inter;
  color: #e8e8e8;
}

.BottomBanner p:last-child {
  font-size: 14px;
  font-family: Inter;
}


  @media (max-width: 700px) {
    .SectionWrapper {
      flex-direction: column;
    }

    .Section {
      margin: 10px 0;
    }
  }
`;
