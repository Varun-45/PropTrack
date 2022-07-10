import React from "react";

const Post_property_banner = () => {
  return (
    <div className="home_container_fluid">
      <div className="home_container">
        <section className="home_section">
          <a href="" className="home_post_property">
            <div className="home_post_property_title">
              <div className="home_post_property_title_text1">
                Post your Property for <span className="damion">Free</span>
              </div>
              <div className="home_post_property_title_text2">
                List it on PropTrack and get genuine leads
              </div>
            </div>
            <span className="home_post_property_btn">
              Post Property{" "}
              <span className="home_post_property_btn_free">FREE</span>
            </span>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Post_property_banner;
