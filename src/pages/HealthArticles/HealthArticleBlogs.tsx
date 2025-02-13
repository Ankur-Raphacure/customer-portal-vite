import React from "react";
import { HealthArticleBlogsStyle } from "./HealthArticleBlogs.styled";
import blog_1 from "../../assets/images/healtharticle/Blog-1.png";

const HealthArticleBlogs = () => {
  return (
    <HealthArticleBlogsStyle>
      <div className="hospital_listitem round-shadow">
        <div className="hospital_topdata flex_center inline-flex">
          <div className="hospital_itemimg">
            <img src={blog_1} />
          </div>
          <div className="hospital_itemvalue inlineflex_start flexdirection_col">
            <div className="flex_start flexdirection_col">
              <div className="hospital_name poppins-medium">
                Lorem ipsum dolor sit ame consectetur adipiscing elit Sed
              </div>
            </div>
          </div>
        </div>
      </div>
    </HealthArticleBlogsStyle>
  );
};

export default HealthArticleBlogs;
