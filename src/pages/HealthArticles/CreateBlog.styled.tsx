import styled from "styled-components";

export const CreatBlogStyled = styled.div`
  min-width: 70%;
  margin-top: 1rem;
  margin-bottom: 4rem;
  .CreatBlogStyled {
    max-width: 50rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
  }
  .back-btn {
    margin-bottom: -1rem;
  }
  .ItemWrapper {
    background-color: #f2f8fa;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .Header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
  .StyleMenu {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .ItemWrapper {
    /* background-color: #f2f8fa; */
    background-color: #e2f4ee;
    padding: 20px;
    border-radius: 10px;
  }
  .UploadArea {
    border: 2px dashed #ccc;
    border-radius: 10px;
    text-align: center;
    padding: 40px;
    margin: 20px 0;
    background-color: #fff;
  }
  .custome-Upload-btn {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    color: #0b9a44;
    margin: 10px;
  }
  .SummaryInput {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 150px;
  }
  .ButtonGroup {
    display: flex;
    justify-content: end;
    margin-top: 20px;
  }
  .cusome_edit_btn {
    position: relative;
    box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: 1px solid #000;
    box-sizing: border-box;
    height: 39px;
    opacity: 0.4;
  }
  .cusome_edit_btn_1 {
    position: relative;
    box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #9474ff;
    height: 39px;
    color: #fff;
  }
  .alert {
    display: flex;
    justify-content: end;
    padding-top: 0;
  }
  .img-div {
    width: 9rem;
    display: inline-block;
    position: relative;
    border-radius: 10px;
    background-color: #d9d9d9;
    height: 82px;
  }
  .ButtonGroup_1 {
    padding: 8px;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #f6f9fd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .cutome-style-btn {
    font-weight: 600;
  }
  .custom-bc-btn {
    cursor: pointer;
  }
`;
