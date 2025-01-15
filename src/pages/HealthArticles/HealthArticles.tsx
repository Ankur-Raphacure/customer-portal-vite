import React from "react";
import { ArticleStyled } from "./Articles.styled";
import HArticle_3 from "../../assets/images/healtharticle/HArticle_3.png";
import HealthCard from "./HealthCard";
import MainHelthCard from "./MainHelthCard";
import HealthArticleBlogs from "./HealthArticleBlogs";
import SimilarBlogs from "./SimilarBlogs";

const HealthArticles = () => {
  return (
    <ArticleStyled>
      <div className="container">
        <div className="health-article">
          <div className="column">
            <MainHelthCard />
            <SimilarBlogs />
          </div>
          <div className="column">
            <HealthCard />
            <HealthArticleBlogs />
            <HealthArticleBlogs />
            <HealthArticleBlogs />
            <HealthArticleBlogs />
            <HealthArticleBlogs />
          </div>
        </div>
        <div className="chat-health-article">
          <h3>Conversations</h3>
          <p>10 Comments</p>
          <div className="Container">
            <input
              type="text"
              placeholder="What do you think ?"
              className="form-control"
            />
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="mt-4">
            Sorted By : <span className="fontBold">Best</span>
          </p>

          <div className="chat-div">
            <div className="img-tag">
              <img src={HArticle_3} alt="Profile" />
            </div>
            <div className="name-tag">
              <h6>Syam Varghese</h6>
              <p>10 Hours ago</p>
              <p>
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit ess aute irure dolor
              </p>
              <div className="select">
                <p className="fontBold">Reply</p>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M22 9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H13.68L14.64 2.43C14.66 2.33 14.67 2.22 14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.58C6.22 6.95 6 7.45 6 8V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9ZM0 20H4V8H0V20Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M22 10.45C22 10.9539 21.7893 11.4372 21.4142 11.7935C21.0391 12.1498 20.5304 12.35 20 12.35H13.68L14.64 16.6915C14.66 16.7865 14.67 16.891 14.67 16.9955C14.67 17.385 14.5 17.746 14.23 18.0025L13.17 19L6.59 12.749C6.22 12.3975 6 11.9225 6 11.4V1.9C6 1.39609 6.21071 0.912817 6.58579 0.556498C6.96086 0.200178 7.46957 0 8 0H17C17.83 0 18.54 0.475 18.84 1.159L21.86 7.8565C21.95 8.075 22 8.303 22 8.55V10.45ZM0 0H4V11.4H0V0Z"
                    fill="black"
                  />
                </svg>

                <p className="fontBold">share</p>
              </div>
              <p>1 Reply</p>
            </div>
          </div>
          <hr />
          {/* Additional chat divs can be added here */}
        </div>
      </div>
    </ArticleStyled>
  );
};

export default HealthArticles;
