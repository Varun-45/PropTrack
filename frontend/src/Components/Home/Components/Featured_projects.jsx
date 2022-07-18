import React from 'react'
import { useState, useRef } from "react";

const Featured_projects = () => {
    
  const swiperWrapper = useRef();

  const [nextfeatureddisabled, setnextfeatureddisabled] = useState('');
  const [translatefeatured, settranslatefeatured] = useState("0");

  const nextfeatured = (e) => {
    e.preventDefault();
    setnextfeatureddisabled(true);
    settranslatefeatured((prev) => prev - getWidthToTranslate());
  };
  const previousfeatured = (e) => {
    e.preventDefault();
    setnextfeatureddisabled(false);
    settranslatefeatured((prev) => prev + getWidthToTranslate());
  };

  const getWidthToTranslate = () => {
    const computedStyles = getComputedStyle(swiperWrapper.current.firstElementChild);
    const width = Number(computedStyles.width.slice(0, -2)) + Number(computedStyles.marginRight.slice(0, -2));
    return width
  }

  return (
    <div className="home_container_fluid" id="featured_projects">
        <div className="home_container">
          <section className="home_section has_slider">
            <div className="home_section_title">
              <h4 className="home_section_title_text1 strip_orange">
                Featured Projects
              </h4>
              <div className="home_select_city">
                <div id="featured_projects_drop_down"></div>
              </div>
              <a
                href=""
                className="home_section_title_anchor_see_all push_right"
              >
                See all Projects
              </a>
            </div>
            <div className="home_featured_proj">
              <div className="home_featured_proj_slider">
                <div className="home_swiper" id="swiper_featured_project">
                  <div
                    className={`swiper_button_next ${
                      nextfeatureddisabled ? "swiper_button_disabled" : ''
                    }`}
                    tabIndex="0"
                    role="button"
                    aria-label="Next slide"
                    aria-controls="featured_projects_content"
                    aria-disabled="false"
                    onClick={nextfeatured}
                  >
                    <a href=""></a>
                  </div>
                  <div
                    className={`swiper_button_prev ${
                      !nextfeatureddisabled ? "swiper_button_disabled" : ''
                    }`}
                    tabIndex="-1"
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="featured_projects_content"
                    aria-disabled="true"
                    onClick={previousfeatured}
                  >
                    <a href=""></a>
                  </div>
                  <div className="swiper_container swiper_container_initialized swiper_container_horizontal">
                    <div
                      className="swiper_wrapper"
                      id="featured_projects_content"
                      aria-live="polite"
                      style={{
                        "transition-duration": "300ms",
                        transform: `translate3d(${translatefeatured}px, 0px, 0px)`,
                      }}
                      ref={swiperWrapper}
                    >
                      <div
                        className="swiper_slide"
                        role="group"
                        aria-label="1 / 3"
                      >
                        <div className="home_featured_proj_card card_shadow">
                          <a href="" target="_blank">
                            <div className="home_featured_proj_card_graphic">
                              <img
                                className="swiper_lazy swiper_lazy_loaded"
                                src="https://cdn.staticmb.com/property/microsite/new-banners/project-showcase/mitya-homes-dwarka-mor-newdelhi/show-new.jpg"
                              />

                              <div className="home_featured_proj_card_strip_offer">
                                <span className="home_featured_proj_card_strip_offer_label">
                                  OFFER
                                </span>
                                <span className="home_featured_proj_card_strip_offer_value">
                                  Free Modular Kitchen, Texture Paint and
                                  Wardrobes
                                </span>
                              </div>
                            </div>
                            <div className="home_featured_proj_card_content">
                              <div className="home_featured_proj_card_brand">
                                <img src="https://cdn.staticmb.com/property/microsite/new-banners/project-showcase/mitya-homes-dwarka-mor-newdelhi/logo.jpg" />
                              </div>
                              <div className="home_featured_proj_card_detail">
                                <div className="home_featured_proj_card_name">
                                  Mitya Homes
                                </div>
                                <div className="home_featured_proj_card_by">
                                  by Mitya Infratech
                                </div>
                                <div className="home_featured_proj_card_loc">
                                  Dwarka Mor, New Delhi
                                </div>
                                <div className="home_featured_proj_card_marketed">
                                  Marketed by Mitya Infratech
                                </div>
                              </div>
                              <div className="home_featured_proj_card_info">
                                <div className="home_featured_proj_card_type">
                                  2, 3 BHK Flats
                                </div>
                                <div className="home_featured_proj_card_price">
                                  <span className="rupees">₹</span>24 Lac
                                  <span className="onwards"> onwards</span>
                                </div>
                                <span className="home_featured_proj_card_tag_offer">
                                  OFFER
                                </span>
                              </div>
                              <div className="home_action action_right">
                                <span className="home_action_btn btn_red medium">
                                  View Details
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        className="swiper_slide swiper_slide_next"
                        role="group"
                        aria-label="2 / 3"
                      >
                        <div className="home_featured_proj_card card_shadow">
                          <a href="" target="_blank">
                            <div className="home_featured_proj_card_graphic">
                              <img
                                className="swiper_lazy swiper-lazy_loaded"
                                src="https://cdn.staticmb.com/property/microsite/new-banners/project-showcase/metro-walk-dwarka-mor-newdelhi/img.jpg"
                              />

                              {/* <div className="home_featured_proj_card_strip_offer">
                              <span className="home_featured_proj_card_strip_offer_label">
                                OFFER
                              </span>
                              <span className="home_featured_proj_card_strip_offer_value">
                                Offer Text
                              </span>
                            </div> */}
                            </div>
                            <div className="home_featured_proj_card_content">
                              <div className="home_featured_proj_card_brand">
                                <img src="https://cdn.staticmb.com/property/microsite/new-banners/project-showcase/metro-walk-dwarka-mor-newdelhi/logo.jpg" />
                              </div>
                              <div className="home_featured_proj_card_detail">
                                <div className="home_featured_proj_card_name">
                                  Metro Walk
                                </div>
                                <div className="home_featured_proj_card_by">
                                  by S. Gambhir Buildtech
                                </div>
                                <div className="home_featured_proj_card_loc">
                                  Dwarka Mor, New Delhi
                                </div>
                                <div className="home_featured_proj_card_marketed">
                                  Marketed by S. Gambhir Buildtech
                                </div>
                              </div>
                              <div className="home_featured_proj_card_info">
                                <div className="home_featured_proj_card_type">
                                  2, 3, 4 BHK Flats
                                </div>
                                <div className="home_featured_proj_card_price">
                                  <span className="rupees">₹</span>35 Lac
                                  <span className="onwards"> onwards</span>
                                </div>
                                {/* <span className="home_featured_proj_card_tag_offer">
                                OFFER
                              </span> */}
                              </div>
                              <div className="home_action action_right">
                                <span className="home_action_btn btn_red medium">
                                  View Details
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div
                        className="swiper_slide"
                        role="group"
                        aria-label="3 / 3"
                      >
                        <div className="home_featured_proj_card card_shadow">
                          <a href="" target="_blank">
                            <div className="home_featured_proj_card_graphic">
                              <img
                                className="swiper_lazy swiper_lazy_loaded"
                                src="https://cdn.staticmb.com/property/microsite/new-banners/project-showcase/dlfcapital-greens-moti-nagar-new-delhi/img.jpg"
                              />

                              {/* <div className="home_featured_proj_card_strip_offer">
                                <span className="home_featured_proj_card_strip_offer_label">
                                  OFFER
                                </span>
                                <span className="home_featured_proj_card_strip_offer_value">
                                  Offer Text
                                </span>
                              </div> */}
                            </div>
                            <div className="home_featured_proj_card_content">
                              <div className="home_featured_proj_card_brand">
                                <img src="https://cdn.staticmb.com/property/microsite/new-banners/project-showcase/dlfcapital-greens-moti-nagar-new-delhi/logo.jpg" />
                              </div>
                              <div className="home_featured_proj_card_detail">
                                <div className="home_featured_proj_card_name">
                                  DLF Capital Greens
                                </div>
                                <div className="home_featured_proj_card_by">
                                  by DLF Ltd
                                </div>
                                <div className="home_featured_proj_card_loc">
                                  Moti Nagar, New Delhi
                                </div>
                                <div className="home_featured_proj_card_marketed">
                                  Marketed by Aggarwal Real Estate
                                </div>
                              </div>
                              <div className="home_featured_proj_card_info">
                                <div className="home_featured_proj_card_type">
                                  Studio, Flats
                                </div>
                                <div className="home_featured_proj_card_price">
                                  <span className="rupees">₹</span>23 Lac
                                  <span className="onwards"> onwards</span>
                                </div>
                                {/* <span className="home_featured_proj_card_tag_offer">
                                  OFFER
                                </span> */}
                              </div>
                              <div className="home_action action_right">
                                <span className="home_action_btn btn_red medium">
                                  View Details
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <span
                      className="swiper_notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default Featured_projects