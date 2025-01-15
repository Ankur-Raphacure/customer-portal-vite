import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArticleSliderStyled } from "./ArticleSlider.styled";
import HArticle_2 from "../../assets/images/healtharticle/Article-1.png";
import HArticle_3 from "../../assets/images/healtharticle/HArticle_3.png";
import Msg from "../../assets/images/healtharticle/notification.png";
import { useHistory } from "react-router-dom";

const articles = [
  {
    id: 1,
    img_1: HArticle_3,
    img: HArticle_2,
    title: "Navigating the Path to Wellness",
    date: "20 Aug 2024",
    comments: 10,
    content:
      "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse aute irure dolor in reprehenderit in voluptate velit esse veniam, quis nostrud",
  },
  {
    id: 2,
    img_1: HArticle_3,
    img: HArticle_2,
    title: "Exploring Healthy Living",
    date: "18 Aug 2024",
    comments: 5,
    content:
      "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse aute irure dolor in reprehenderit in voluptate velit esse veniam, quis nostrud",
  },
  {
    id: 3,
    img_1: HArticle_3,
    img: HArticle_2,
    title: "The Road to Fitness",
    date: "15 Aug 2024",
    comments: 8,
    content:
      "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse aute irure dolor in reprehenderit in voluptate velit esse veniam, quis nostrud",
  },
  {
    id: 4,
    img_1: HArticle_3,
    img: HArticle_2,
    title: "Healthy Eating Tips",
    date: "10 Aug 2024",
    comments: 12,
    content:
      "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse aute irure dolor in reprehenderit in voluptate velit esse veniam, quis nostrud",
  },
];

function ArticleSlider() {
  const history = useHistory();
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className="slick-arrow slick-next custom-arrow">Next</div>,
    prevArrow: (
      <div className="slick-arrow slick-prev custom-arrow">Previous</div>
    ),
  };

  const handleNavigate = () => {
    history.push("/health-articles");
  };

  return (
    <ArticleSliderStyled>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {articles.map((article) => (
            <div key={article.id}>
              <div className="hospital_item flex_center W-100 ">
                <div className="hospital_img">
                  <img src={article.img} alt={article.title} />
                </div>
                <div className="hospital_datalist flex-col inlineflex_start">
                  <div className="hospital_data flex-col flex_start">
                    <div className="fs-4 fw-bold poppins-medium">
                      {article.title}
                    </div>
                    <div className="mt-2">
                      <div className="bottom-name">
                        <div className="d-flex">
                          <div>
                            <p className="me-3">{article.date}</p>
                          </div>
                          <p className="d-flex">
                            <img src={Msg} alt="" className="me-1" />
                            {article.comments} comments
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="inlineflex_center hospital_address">
                      <div className="opacity-60 text-sm poppins-medium content-div">
                        {article.content}
                      </div>
                    </div>
                    <div className="bottom-name mt-4 w-100">
                      <div className="row">
                        <div className="col-auto d-flex align-items-center">
                          <img
                            src={article.img_1}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col d-flex align-items-center">
                          <p className="text-sm mb-0">Syam Varghese</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button
                            className="btn btn-outline custome-btn"
                            onClick={() => handleNavigate()}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </ArticleSliderStyled>
  );
}

export default ArticleSlider;
