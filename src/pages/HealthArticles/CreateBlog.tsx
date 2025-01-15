import React, { useState } from "react";
import { CreatBlogStyled } from "./CreateBlog.styled";
import ImageUploadModel from "../../components/ImageUploadModel/ImageUploadModel";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { useHistory } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";

const CreateBlog = () => {
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [showFileInput, setShowFileInput] = useState<any>(false);
  const [signUpData, setSignUpData] = useState<any>("");
  const [showImageMoodel, setShowImageMoodel] = useState(false);

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as any);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUploadClick = () => {
    setShowFileInput(true);
  };

  const handleCloseImage = () => {
    setShowImageMoodel(false);
  };
  const handleImageUploadSuccess = (img: any) => {
    console.log("img img img", img);
  };

  const handleOpenImage = () => {
    setShowImageMoodel(true);
  };

  const navigateTo = () => {
    history.push("/healthsarticle");
  };

  return (
    <CreatBlogStyled>
      <div className="CreatBlogStyled">
        <div className="d-flex custom-bc-btn" onClick={navigateTo}>
          <p className=" text-xl cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 ">
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z"
                fill="#444444"
              ></path>
            </svg>{" "}
            &nbsp; Back
          </p>
        </div>
        <div className="ItemWrapper">
          <div className="Header">
            <div className="ButtonGroup_1">
              <div className="StyleMenu ">
                <div className="dropdown me-2">
                  <a
                    className="btn dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Style
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <button className="btn btn-outline cutome-style-btn">B</button>
                <button className="btn btn-outline cutome-style-btn">I</button>
                <button className="btn btn-outline cutome-style-btn">U</button>
                <button className="btn btn-outline cutome-style-btn">A</button>
                <button className="btn btn-outline cutome-style-btn">
                  <u>``</u>
                </button>
                <button className="btn btn-outline cutome-style-btn">
                  <u>U</u>
                </button>
                <button className="btn btn-outline cutome-style-btn">
                  <u>U</u>
                </button>
                <button className="btn btn-outline cutome-style-btn">
                  <u>U</u>
                </button>
              </div>
            </div>
          </div>
        </div>

        <ImageUploadModel
          show={showImageMoodel}
          handleClose={handleCloseImage}
          handleImageUploadSuccess={handleImageUploadSuccess}
          selectedMember={signUpData}
        />

        <div className="ItemWrapper">
          <div className="UploadArea">
            <div>
              <div className="img-div">
                {signUpData.image ? (
                  <img className="mt-1" src={signUpData.image} alt="" />
                ) : (
                  <TbPhotoSquareRounded
                    className="mt-1"
                    size={70}
                    color="white"
                  />
                )}
              </div>
              <p className="mt-4">we recommend to upload 1920 x 1080 pixels</p>
              <button
                className="btn custome-Upload-btn"
                onClick={handleOpenImage}
              >
                <LuUpload className="me-2" />
                Upload from files
              </button>
              <button className="btn custome-Upload-btn">
                <FaRegEdit className="me-2" />
                Create a Design
              </button>
            </div>
          </div>

          <h5>Title</h5>
          <input
            type="text"
            className="form-control"
            placeholder="write here. eg lorem ipsum  vist @mgnft"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <textarea className="SummaryInput" name="" id=""></textarea>
          <p className="alert">5000 words only</p>
          <div className="ButtonGroup">
            <button className="btn me-2 cusome_edit_btn">Cancel</button>
            <button className="btn cusome_edit_btn_1">Submit</button>
          </div>
        </div>
      </div>
    </CreatBlogStyled>
  );
};

export default CreateBlog;
