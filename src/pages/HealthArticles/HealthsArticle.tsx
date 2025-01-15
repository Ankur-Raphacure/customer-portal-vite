import React, { useState } from "react";
import HArticle_2 from "../../assets/images/healtharticle/HArticle-2.png";
import HArticle_3 from "../../assets/images/healtharticle/HArticle_3.png";
import Msg from "../../assets/images/healtharticle/notification.png";
import styled from "styled-components";
import { HealthsArticleStyled } from "./HealthsArticle.styled";
import ArticleSlider from "./ArticleSlider";
import { useHistory } from "react-router-dom";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .pagination {
    display: flex;
    gap: 10px;

    .page-item {
      .page-link {
        padding: 8px 12px;
        border-radius: 5px;
        border: 1px solid #ddd;
        color: #007bff;
        text-decoration: none;

        &:hover {
          background-color: #f8f9fa;
        }
      }

      &.active .page-link {
        background-color: #007bff;
        color: white;
        border-color: #007bff;
      }
    }
  }
`;

const HealthsArticle = () => {
  const history = useHistory();
  const [visibleCards, setVisibleCards] = useState(4);
  const cards = [
    {
      id: 1,
      title: "Complete Health care check up 1",
      description:
        "cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
    },
    {
      id: 2,
      title: "Complete Health care check up 2",
      description:
        "cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis ",
    },
    {
      id: 3,
      title: "Complete Health care check up 2",
      description:
        "cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis ",
    },
    {
      id: 4,
      title: "Complete Health care check up 2",
      description:
        "cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis ",
    },
  ];

  const navigateTO = () => {
    history.push("/createblog");
  };
  return (
    <HealthsArticleStyled>
      <div className="container">
        <div className="health-article">
          <ArticleSlider />
          <div className="mt-4">
            <h4>Blogs</h4>
          </div>
          <div className=" custome-blog-div ">
            <div>
              <p>"Discover the Latest: Dive into Our Blog and News Section"</p>
            </div>
            <div>
              <button
                className="btn custome-create-btn"
                onClick={() => navigateTO()}
              >
                Create Blog
              </button>
            </div>
          </div>
          <div className="ButtonGroup mt-4">
            <div>
              <button
                className="btn custome-ToggleButton"
                // onClick={() => handleTabClick("aadhar")}
                style={
                  {
                    // background: activeTab === "aadhar" ? "#fff" : "#f6f9fd",
                  }
                }
              >
                All
              </button>
              <button
                className="btn custome-ToggleButton"
                // onClick={() => handleTabClick("phone")}
                style={
                  {
                    // background: activeTab === "aadhar" ? "#f6f9fd" : "#fff",
                  }
                }
              >
                Fitness
              </button>
              <button
                className="btn custome-ToggleButton"
                // onClick={() => handleTabClick("phone")}
                style={
                  {
                    // background: activeTab === "aadhar" ? "#f6f9fd" : "#fff",
                  }
                }
              >
                Ayurveda
              </button>
              <button
                className="btn custome-ToggleButton"
                // onClick={() => handleTabClick("phone")}
                style={
                  {
                    // background: activeTab === "aadhar" ? "#f6f9fd" : "#fff",
                  }
                }
              >
                Elder care
              </button>
            </div>
            <div className="searchbar-health">
              <input
                type="text"
                className="form-control me-3"
                placeholder="Search Blogs"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />

              <div className="dropdown">
                <a
                  className="btn btn-outline dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Latest
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Popularity
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Engagement
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main-card">
            {cards.slice(0, visibleCards).map((card) => (
              <div key={card.id} className="card-container">
                <div className="cardstyle px-4 py-2">
                  <div className="relative imgspace">
                    <img
                      src={HArticle_2}
                      alt="Health360"
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="bottom-name">
                      <div className="d-flex">
                        <p className="">20 Aug 2024</p>
                        <p className="name-tag">
                          <img src={Msg} alt="" /> 10 comments
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="title">
                      Prioritizing Quality of Life in Elder Care
                    </h6>
                    <p className="subtitle">
                      veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate quis nostrud exercitation
                    </p>
                  </div>
                  <div className="bottom-name mt-4">
                    <div className="d-flex ">
                      <div className="d-flex ">
                        <img src={HArticle_3} alt="" />
                      </div>
                      <div className="name-tag">
                        <p className="text-sm">Syam varghese</p>
                      </div>
                    </div>

                    <div>
                      <button className="btn btn-outline custome-btn">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <PaginationContainer>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-disabled="true">
                    {"<"}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    {">"}
                  </a>
                </li>
              </ul>
            </nav>
          </PaginationContainer>
        </div>
      </div>
    </HealthsArticleStyled>
  );
};

export default HealthsArticle;
