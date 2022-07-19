import { useRef, useState } from "react";
import "./Header.css";
import Login_Register from '../../User/Login_Register'

const Header = () => {
  const Cities = [
    "Delhi",
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Gurgaon",
    "Hydrabad",
    "Noida",
  ];

  const [cityactive, setcityactive] = useState("");
  const [primeactive, setprimeactive] = useState("");
  const [loginactive, setloginactive] = useState("");
  const [buyactive, setbuyactive] = useState("");
  const [rentactive, setrentactive] = useState("");
  const [sellactive, setsellactive] = useState("");
  const [homeloansactive, sethomeloansactive] = useState("");
  const [propertyservicesactive, setpropertyservicesactive] = useState("");
  const [ptadviceactive, setptadviceactive] = useState("");
  const [helpactive, sethelpactive] = useState("");
  const [loginopen, setloginopen] = useState(false);

  const showHeaderSub = () => document.getElementsByClassName("header_sub")[0].classList.add("show"),
    hideHeaderSub = () => document.getElementsByClassName("header_sub")[0].classList.remove("show");

  return (
    <>
    {loginopen && <Login_Register/>}
      <header className="header">
        <section className="header_main">
          <div className="header_container_div">
            <div className="header_menu_btn" aria-roledescription="button" tabIndex={0} onClick={showHeaderSub}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          
            <div className="header_logo">
              <a href="/"></a>
            </div>
            <div className="header_city">
              <a
                href="/"
                className={`header_main_link ${cityactive}`}
                onMouseOver={() => setcityactive("active")}
                onMouseOut={() => setcityactive("")}
              >
                City
              </a>
              <div
                className={`header_city_dropdown ${cityactive}`}
                onMouseOver={() => setcityactive("active")}
                onMouseOut={() => setcityactive("")}
              >
                <div className="city_drop_left">
                  <div className="city_drop_row">
                    <div className="cell">
                      <a href="/" className="city_drop_heading_main">
                        INDIA
                      </a>
                    </div>
                    <div className="cell text_right pos_rel"></div>
                  </div>
                  <div className="city_drop_heading">Nearby Cities</div>
                  <ul className="city_drop_link_group">
                    <li>
                      <a href="/">Gurgaon</a>
                    </li>
                    <li>
                      <a href="/">Greater Noida</a>
                    </li>
                    <li>
                      <a href="/">Ghaziabad</a>
                    </li>
                    <li>
                      <a href="/">Noida</a>
                    </li>
                  </ul>
                  <div className="city_drop_heading">Popular Cities</div>
                  <ul className="city_drop_link_group">
                    {Cities.map((city, index) => {
                      return (
                        <li key={index}>
                          <a href="/">{city}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="header_prime margin_left_auto">
              <a
                href="/prime"
                className={`header_main_link ${primeactive}`}
                onMouseOver={() => setprimeactive("active")}
                onMouseOut={() => setprimeactive("")}
              >
                PT Prime
              </a>
              <div
                className={`header_prime_dropdown ${primeactive}`}
                onMouseOver={() => setprimeactive("active")}
                onMouseOut={() => setprimeactive("")}
              >
                <div className="prime_drop_block">
                  <div>
                    <span className="prime_drop_block_icon"></span>
                  </div>
                  <div className="prime_drop_block_heading">
                    {`Introducing `}
                    <span className="bold">PT</span>
                    <span className="c_gold_900 bold">Prime</span>
                  </div>
                  <div className="prime_drop_block_text">
                    One membership, many exclusive privileges
                  </div>
                </div>
                <ul className="prime_drop_features">
                  <li>Handpicked Agent to assist you</li>
                  <li>First access to owner properties</li>
                  <li>Exclusive partner discounts</li>
                </ul>
                <div>
                  {" "}
                  <a href="/" className="prime_drop_join">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
            <div className="header_login">
              <a
                className={`header_main_link ${loginactive}`}
                onMouseOver={() => setloginactive("active")}
                onMouseOut={() => setloginactive("")}
              >
                Login
              </a>
              <div
                className={`header_login_dropdown ${loginactive}`}
                onMouseOver={() => setloginactive("active")}
                onMouseOut={() => setloginactive("")}
              >
                <div className="login_drop_up">
                  <div className="login_drop_divider">
                    <span className="login_drop_divider_label">
                      My Activity
                    </span>
                  </div>
                  <ul className="login_drop_links">
                    <li id="contactedId">
                      <a href="">Contacted Properties</a>
                    </li>
                    <li id="viewedId">
                      <a href="">Viewed Properties</a>
                    </li>
                    <li>
                      <a href="">Shortlisted Properties</a>
                    </li>
                    <li id="searchedId">
                      <a href="">Searches</a>
                    </li>
                  </ul>
                  <div className="login_drop_divider"></div>
                  <ul className="login_drop_links">
                    <li>
                      <a href="">Recommendations</a>
                    </li>
                    <li>
                      <a href="">My Profile</a>
                    </li>
                  </ul>
                </div>
                <div className="login_drop_down">
                  <a className="login_drop_loginbtn" onClick={(e)=> {e.preventDefault();setloginopen(true)}}>
                    Login
                  </a>
                  <div className="login_drop_text">
                    New to Magicbricks?{" "}
                    <a className="login_drop_signupbtn">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="header_postproperty">
              <a href="/property/new/basic" target='_blank'>
                {`Post Property `}
                <span className="badge">Free</span>
              </a>
            </div>
          </div>
        </section>
        <section className="header_sub">
          <div className="header_container_div">
            <ul className="header_sub_tasks">
              <li className={buyactive}>
                <a
                  href="/"
                  className={`header_sub_tabs_link ${buyactive}`}
                  onMouseOver={() => setbuyactive("active")}
                  onMouseOut={() => setbuyactive("")}
                >
                  Buy
                </a>
                <div
                  id="buyDrop"
                  className={`header_sub_tabs_dropdown ${buyactive}`}
                  onMouseOver={() => setbuyactive("active")}
                  onMouseOut={() => setbuyactive("")}
                >
                  <div className="swiper_container swiper_container_initialized swiper_container_horizontal">
                    <div
                      className="swiper_wrapper"
                      id="swiper_wrapper_e3367b446a954411"
                      aria-live="polite"
                      style={{
                        "transitionDuration": "0ms",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="drop_row swiper_slide swiper_slide_active"
                        style={{ width: "998px", "marginRight": "1px" }}
                        role="group"
                        aria-label="1 / 3"
                      >
                        <div className="drop_call">
                          <div className="drop_heading">Popular Choices</div>
                          <ul className="drop_links">
                            <li>
                              <a href="" target="_blank">
                                Ready to Move
                              </a>
                            </li>
                            <li>
                              <a href="">Owner Properties</a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                Budget Homes
                              </a>
                            </li>
                            <li>
                              <a href="">Premium Homes</a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">Property Types</div>
                          <div id="propTypesBuy1">
                            <ul className="drop_links">
                              <li>
                                <a href="" target="_blank">
                                  Flats in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a href="" target="_blank">
                                  House for sale in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a href="" target="_blank">
                                  Villa in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a href="" target="_blank">
                                  Plot in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a href="" target="_blank">
                                  Office Space in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a href="" target="_blank">
                                  Commercial Space in New-Delhi
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">Budget</div>
                          <ul className="drop_links">
                            <li>
                              <a href="">Under ₹ 50 Lac</a>
                            </li>
                            <li>
                              <a href="">₹ 50 Lac - ₹ 1 Cr</a>
                            </li>
                            <li>
                              <a href="">₹ 1 Cr - ₹ 1.5 Cr</a>
                            </li>
                            <li>
                              <a href="">Above ₹ 1.5 Cr</a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">Explore</div>
                          <ul className="drop_links">
                            <li>
                              <a href="" target="_blank">
                                Builders in New-Delhi
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                Localities in New-Delhi
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                Projects in New-Delhi
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                Investment Hotspot
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                Find an Agent
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">Buying Tools</div>
                          <ul className="drop_links">
                            <li>
                              <a href="" target="_blank">
                                Propworth
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                Rates &amp; Trends
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                Buy vs Rent
                              </a>
                            </li>
                            <li>
                              <a href="" target="_blank">
                                Tips and Guides
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="drop_row swiper_slide show_view_more swiper_slide_next"
                        style={{ width: "998px", "marginRight": "1px" }}
                        role="group"
                        aria-label="2 / 3"
                      >
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Residential Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Property in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">Flats in New Delhi</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats in Delhi NCR"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">Flats in Delhi NCR</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property in Delhi NCR"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in Delhi NCR
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House in Delhi NCR"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">House in Delhi NCR</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Farm House in Delhi NCR"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Farm House in Delhi NCR
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="House for Sale in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in New Delhi
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Plots in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">Plots in New Delhi</span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Villa in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">Villa in New Delhi</span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Penthouse in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Penthouse in New Delhi
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Resale Flats in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Resale Flats in New Delhi
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular BHK Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="1 BHK Flats in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  1 BHK Flats in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="2 BHK Flats in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  2 BHK Flats in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="3 BHK Flats in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  3 BHK Flats in New Delhi
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Locality Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Property in Aashirwaad Chowk"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in Aashirwaad Chowk
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property in Sector 6 Pocket 1 Dwarka , New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in Sector 6 Pocket 1 Dwarka , New
                                  Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property in Sant Nagar Burari"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in Sant Nagar Burari
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property in Janakpuri Block B1"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in Janakpuri Block B1
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property in Freedom Fighters Enclave"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in Freedom Fighters Enclave
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property in Vikaspuri Block H"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in Vikaspuri Block H
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Property in Paschim Vihar Block B3"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in Paschim Vihar Block B3
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Property in Janakpuri Block A3"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in Janakpuri Block A3
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Property in Sarita Vihar Pocket F"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in Sarita Vihar Pocket F
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Property in New Uttam Nagar"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property in New Uttam Nagar
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Commercial Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Commercial Property for Sale in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Sale in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Office Space in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Office Space in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Shops in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">Shops in New Delhi</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Apartment Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Flats in Uttam Nagar West"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats in Uttam Nagar West
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats in GK I"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">Flats in GK I</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats in GK II"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">Flats in GK II</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats in Safdarjung Enclave"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats in Safdarjung Enclave
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats in Dwarka Mor"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">Flats in Dwarka Mor</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats in Uttam Nagar East"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats in Uttam Nagar East
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Flats in Chittaranjan Park"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats in Chittaranjan Park
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Flats in Sector 24 Rohini , New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats in Sector 24 Rohini , New Delhi
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Flats in Chhattarpur"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats in Chhattarpur
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Flats in Panchsheel Park"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats in Panchsheel Park
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="drop_row swiper_slide show_view_more"
                        role="group"
                        aria-label="3 / 3"
                        style={{ width: "998px", "marginRight": "1px" }}
                      >
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular House Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="House for Sale in New Rajendra Nagar"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in New Rajendra Nagar
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for Sale in Safdarjung Development Area"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in Safdarjung Development Area
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for Sale in Sector 1 Rohini , New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in Sector 1 Rohini , New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for Sale in Sector 6 Rohini , New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in Sector 6 Rohini , New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for Sale in South Extension 1"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in South Extension 1
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for Sale in GK I"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in GK I
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="House for Sale in Safdarjung Enclave"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in Safdarjung Enclave
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="House for Sale in Rama Vihar"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in Rama Vihar
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="House for Sale in Rajouri Garden"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in Rajouri Garden
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="House for Sale in Chhattarpur"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Sale in Chhattarpur
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Plot Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Plot in Krishna Nagar"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Plot in Krishna Nagar
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Plot in Sector 37 Rohini , New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Plot in Sector 37 Rohini , New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Plot in Najafgarh"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">Plot in Najafgarh</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Plot in Preet Vihar"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">Plot in Preet Vihar</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Plot in Sector 28 Rohini , New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Plot in Sector 28 Rohini , New Delhi
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Commercial Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Commercial Property in Karol Bagh"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property in Karol Bagh
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Commercial Property in Connaught Place"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property in Connaught Place
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Commercial Property in Netaji Subhash Place"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property in Netaji Subhash Place
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Commercial Property in Lajpat Nagar 2"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property in Lajpat Nagar 2
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Commercial Property in Jasola"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property in Jasola
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Commercial Property in Sector 12 Dwarka, New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property in Sector 12 Dwarka, New
                                  Delhi
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Commercial Property in Bhikaji Cama Place"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property in Bhikaji Cama Place
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Commercial Property in Pitampura"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property in Pitampura
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Commercial Property in Chandni Chowk"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property in Chandni Chowk
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Commercial Property in GK I"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property in GK I
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Luxury Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Luxury Apartments in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Luxury Apartments in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Luxury Houses in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Luxury Houses in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Luxury Villas in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Luxury Villas in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Luxury Bungalows in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Luxury Bungalows in New Delhi
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <span
                      className="swiper_notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                  <div
                    className="swiper_button_prev swiper_button_disabled"
                    id="buyDrop_swiper_prev"
                    itemProp="-1"
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="swiper_wrapper_e3367b446a954411"
                    aria-disabled="true"
                  ></div>
                  <div
                    className="swiper_button_next"
                    id="buyDrop_swiper_next"
                    itemProp="0"
                    role="button"
                    aria-label="Next slide"
                    aria-controls="swiper_wrapper_e3367b446a954411"
                    aria-disabled="false"
                  ></div>
                  <div
                    className="header_sub_tabs_dropdown_view_more"
                    id="buyDrop_view_more"
                  >
                    View more
                  </div>
                </div>
              </li>
              <li className={rentactive}>
                <a
                  href="/"
                  className={`header_sub_tabs_link ${rentactive}`}
                  onMouseOver={() => setrentactive("active")}
                  onMouseOut={() => setrentactive("")}
                >
                  Rent
                </a>
                <div
                  id="rentDrop"
                  className={`header_sub_tabs_dropdown ${rentactive}`}
                  onMouseOver={() => setrentactive("active")}
                  onMouseOut={() => setrentactive("")}
                >
                  <div className="swiper_container swiper_container_initialized swiper_container_horizontal">
                    <div
                      className="swiper_wrapper"
                      id="swiper_wrapper_d23aa7c333958839"
                      aria-live="polite"
                    >
                      <div
                        className="drop_row swiper_slide swiper_slide_active"
                        id="staticSwiperSliderRent"
                        style={{ width: "792px", "marginRight": "1px" }}
                        role="group"
                        aria-label="1 / 3"
                      >
                        <div className="drop_call">
                          <div className="drop_heading">Popular Choices</div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                              >
                                Owner Properties
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                              >
                                Verified Properties
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/furnished-flats-for-rent-in-new-delhi-pppfr"
                                target="_blank"
                              >
                                Furnished Homes
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                              >
                                Bachelor Friendly Homes
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                              >
                                Immediately Available
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">Property Type</div>
                          <div id="propTypesRent1">
                            <ul className="drop_links">
                              <li>
                                <a
                                  href=""
                                  target="_blank"
                                >
                                  Flat for rent in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  target="_blank"
                                >
                                  House for rent in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  target="_blank"
                                >
                                  Villa for rent in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  target="_blank"
                                >
                                  PG in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  target="_blank"
                                >
                                  Office Space in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a
                                  href="r"
                                  target="_blank"
                                >
                                  Commercial Space in New-Delhi
                                </a>
                              </li>
                              <li>
                                <a
                                  href=""
                                  target="_blank"
                                >
                                  Coworking Space in New-Delhi
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">Budget</div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                              >
                                Under ₹ 10,000
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                              >
                                ₹ 10,000 - ₹ 15,000
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                              >
                                ₹ 15,000 - ₹ 25,000
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                              >
                                Above ₹ 25,000
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">Explore</div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                              >
                                Localities
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                              >
                                Buy Vs Rent
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                              >
                                Find an Agent
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                target="_blank"
                              >
                                Share Requirement
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                target="_blank"
                              >
                                Property Services
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                target="_blank"
                              >
                                Rent Agreement
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                target="_blank"
                              >
                                Pay Rent{" "}
                                <span className="offer">Upto ₹ 3k Off</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="drop_row swiper_slide show_view_more swiper_slide_next"
                        style={{ width: "792px", "marginRight": "1px" }}
                        role="group"
                        aria-label="2 / 3"
                      >
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Searches for Rent
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Property for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flat for rent in Delhi NCR"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flat for rent in Delhi NCR
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property for rent in Delhi NCR"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for rent in Delhi NCR
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for rent in Delhi NCR"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for rent in Delhi NCR
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Farm House for rent in Delhi NCR"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Farm House for rent in Delhi NCR
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Coworking space in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Coworking space in New Delhi
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Hostels in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Hostels in New Delhi
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="House for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Studio Apartment for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Studio Apartment for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Villa for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Villa for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="PG in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">PG in New Delhi</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular BHK Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="1 BHK Flats for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  1 BHK Flats for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="2 BHK Flats for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  2 BHK Flats for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="3 BHK Flats for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  3 BHK Flats for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Locality Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Flats for Rent in Commonwealth Games Village 2010"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in Commonwealth Games Village
                                  2010
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats for Rent in Aashirwaad Chowk"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in Aashirwaad Chowk
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats for Rent in Sarita Vihar Pocket A"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in Sarita Vihar Pocket A
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats for Rent in Sector 18A Dwarka, New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in Sector 18A Dwarka, New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats for Rent in Sector A Vasant Kunj , New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in Sector A Vasant Kunj , New
                                  Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Flats for Rent in Uttari Pitampura"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in Uttari Pitampura
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Flats for Rent in Vikaspuri Block D"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in Vikaspuri Block D
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Flats for Rent in Paschim Vihar Block A3"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in Paschim Vihar Block A3
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Flats for Rent in Dakshini Pitampura"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in Dakshini Pitampura
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Flats for Rent in Sarita Vihar"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Flats for Rent in Sarita Vihar
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Commercial Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Commercial Property for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Office Space for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Office Space for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Shops for Rent in New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Shops for Rent in New Delhi
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="drop_row swiper_slide show_view_more"
                        role="group"
                        aria-label="3 / 3"
                        style={{ width: "792px", "marginRight": "1px" }}
                      >
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Property Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Property for Rent in GK I"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in GK I
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property for Rent in GK II"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in GK II
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property for Rent in Safdarjung Enclave"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in Safdarjung Enclave
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property for Rent in Chhattarpur"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in Chhattarpur
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property for Rent in Gulmohar Park"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in Gulmohar Park
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Property for Rent in Panchsheel Park"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in Panchsheel Park
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Property for Rent in East Of Kailash"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in East Of Kailash
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Property for Rent in New Friends Colony"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in New Friends Colony
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Property for Rent in Chittaranjan Park"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in Chittaranjan Park
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Property for Rent in Lajpat Nagar 1"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Property for Rent in Lajpat Nagar 1
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular House Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="House for Rent in Sector C Vasant Kunj , New Delhi"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in Sector C Vasant Kunj , New
                                  Delhi
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for Rent in Chittaranjan Park"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in Chittaranjan Park
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for Rent in Anand Niketan"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in Anand Niketan
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for Rent in Panchsheel Park"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in Panchsheel Park
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for Rent in New Friends Colony"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in New Friends Colony
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="House for Rent in Gulmohar Park"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in Gulmohar Park
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="House for Rent in GK II"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in GK II
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="House for Rent in Golf Links"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in Golf Links
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="House for Rent in Mayur Vihar 3"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in Mayur Vihar 3
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="House for Rent in Jangpura Extension"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  House for Rent in Jangpura Extension
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">
                            Popular Commercial Searches
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href=""
                                title="Commercial Property for Rent in Nehru Place"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in Nehru Place
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Commercial Property for Rent in Kirti Nagar"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in Kirti Nagar
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Commercial Property for Rent in Lajpat Nagar 2"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in Lajpat Nagar 2
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Commercial Property for Rent in Netaji Subhash Place"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in Netaji Subhash
                                  Place
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://"
                                title="Commercial Property for Rent in Okhla Phase 3"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in Okhla Phase 3
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href=""
                                title="Commercial Property for Rent in Rajouri Garden"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in Rajouri Garden
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href="https://www.magicbricks.com/commercial-property-for-rent-in-jasola-new-delhi-pppfr"
                                title="Commercial Property for Rent in Jasola"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in Jasola
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Commercial Property for Rent in Okhla Phase 1"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in Okhla Phase 1
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Commercial Property for Rent in Patparganj Industrial Area"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in Patparganj
                                  Industrial Area
                                </span>
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href=""
                                title="Commercial Property for Rent in Hauz Khas"
                                itemProp="url"
                                className="text_ellipsis"
                                target="_blank"
                              >
                                <span itemProp="name">
                                  Commercial Property for Rent in Hauz Khas
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <span
                      className="swiper_notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                  <div
                    className="swiper_button_prev swiper_button_disabled"
                    itemProp="-1"
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="swiper_wrapper-d23aa7c333958839"
                    aria-disabled="true"
                  ></div>
                  <div
                    className="swiper_button_next"
                    itemProp="0"
                    role="button"
                    aria-label="Next slide"
                    aria-controls="swiper_wrapper-d23aa7c333958839"
                    aria-disabled="false"
                  ></div>
                  <div
                    className="header_sub_tabs_dropdown_view_more"
                    id="rentDrop_view_more"
                  >
                    View more
                  </div>
                </div>
              </li>
              <li className={sellactive}>
                <a
                  href="/"
                  className={`header_sub_tabs_link ${sellactive}`}
                  onMouseOver={() => setsellactive("active")}
                  onMouseOut={() => setsellactive("")}
                >
                  Sell
                </a>
                <div
                  id="selldrop"
                  className={`header_sub_tabs_dropdown ${sellactive}`}
                  onMouseOver={() => setsellactive("active")}
                  onMouseOut={() => setsellactive("")}
                >
                  <div className="drop_row">
                    <div className="drop_call">
                      <div className="drop_heading">For Owner</div>
                      <ul className="drop_links">
                        <li>
                          <a href="/property/new/basic" target="_blank">
                            {`Post Property `}
                            <span className="badge">Free</span>
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            My Dashboard
                          </a>
                        </li>
                        <li className="divider">
                          <a href="" target="_blank">
                            Sell / Rent Ad Packages
                          </a>
                        </li>
                      </ul>
                      <div className="drop_label_text">
                        {`+91 9870 260 930 / `}
                        <a href="" target="_blank" className="email_link">
                          <span>Email Us</span>
                        </a>
                      </div>
                    </div>
                    <div className="drop_call">
                      <div className="drop_heading">
                        For Agent &amp; Builder
                      </div>
                      <ul className="drop_links">
                        <li>
                          <a href="" target="_blank">
                            My Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Ad Packages
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            iAdvantage
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Developer Lounge
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Sales Enquiry
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop_call">
                      <div className="drop_heading">Selling Tools</div>
                      <ul className="drop_links">
                        <li>
                          <a href="" target="_blank">
                            Property Valuation
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Find an Agent
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Rates and Trends
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className={homeloansactive}>
                <a
                  href="/"
                  className={`header_sub_tabs_link ${homeloansactive}`}
                  onMouseOver={() => sethomeloansactive("active")}
                  onMouseOut={() => sethomeloansactive("")}
                >
                  Home Loans
                </a>
                <div
                  id="homeloansdrop"
                  className={`header_sub_tabs_dropdown ${homeloansactive}`}
                  onMouseOver={() => sethomeloansactive("active")}
                  onMouseOut={() => sethomeloansactive("")}
                >
                  <div className="swiper_container swiper_container-initialized swiper_container_horizontal">
                    <div
                      className="swiper_wrapper"
                      id="swiper_wrapper-9d71d07292461066"
                      aria-live="polite"
                    >
                      <div
                        className="drop_row swiper_slide show_view_more swiper_slide_active"
                        role="group"
                        aria-label="1 / 2"
                        style={{ width: "1014px", "marginRight": "1px" }}
                      >
                        <div className="drop_call">
                          <div className="drop_heading">Apply Now</div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/home?inc=desktop_homeloan_menu_linkage"
                                target="_blank"
                                className=""
                              >
                                Home Loans
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/balance-transfer?inc=desktop_bt_menu_linkage"
                                target="_blank"
                              >
                                Balance Transfer
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/home?inc=desktop_lap_menu_linkage"
                                target="_blank"
                              >
                                Loan Against Property
                              </a>
                            </li>
                            <li>
                              <a
                                className="showAll"
                                href="https://www.magicbricks.com/homeloan/assistedpropertysearchandpreapprovedhomeloan?inc=desktop_homeloan_menu_linkage"
                                target="_blank"
                              >
                                Pre-approved Home Loan Pack
                                <span className="offer offer_inline">
                                  Upto ₹ 90K Cashback
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">Bank Partners</div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/sbi/"
                                target="_blank"
                              >
                                SBI Home Loan
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/hdfc-bank/"
                                target="_blank"
                              >
                                HDFC Ltd Home Loan
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/punjab-national-bank/"
                                target="_blank"
                              >
                                PNB HFL Home Loan
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/icici-home-loan/"
                                target="_blank"
                              >
                                ICICI Home Loan
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/bajaj-housing-finance-limited/"
                                target="_blank"
                              >
                                Bajaj Housing
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/bank-of-baroda/"
                                target="_blank"
                              >
                                Bank of Baroda
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href="https://www.magicbricks.com/homeloan/indian-bank/"
                                target="_blank"
                              >
                                Indian Bank Home Loan
                              </a>
                            </li>
                            <li className="hide">
                              <a
                                href="https://www.magicbricks.com/homeloan/cholamandalam/"
                                target="_blank"
                              >
                                Cholamandalam HFL Home Loan
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">PMAY</div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/pmay-emi-calculator/"
                                target="_blank"
                              >
                                PMAY EMI Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/pmay-subsidy-calculator"
                                target="_blank"
                              >
                                PMAY Subsidy Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/pmay-eligibility-calculator"
                                target="_blank"
                              >
                                PMAY Eligibility Calculator
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">EMI Calculators</div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/emi-calculator"
                                target="_blank"
                              >
                                Home Loan EMI Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/hdfc-home-loan-emi-calculator"
                                target="_blank"
                              >
                                HDFC Home Loan Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/sbi-home-loan-emi-calculator"
                                target="_blank"
                              >
                                SBI Home Loan Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/icici-home-loan-emi-calculator"
                                target="_blank"
                              >
                                ICICI Home Loan Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/pnb-home-loan-emi-calculator"
                                target="_blank"
                              >
                                PNB HFL Home Loan Calculator
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="drop_row swiper_slide swiper_slide-next"
                        role="group"
                        aria-label="2 / 2"
                        style={{ width: "1014px", "marginRight": "1px" }}
                      >
                        <div className="drop_call">
                          <div className="drop_heading">
                            Eligibility Calculator
                          </div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/eligibility-calculator"
                                target="_blank"
                              >
                                Home Loan Eligibility Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/hdfc-home-loan-eligibility-calculator"
                                target="_blank"
                              >
                                HDFC Home Loan Eligibility Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/sbi-home-loan-eligibility-calculator"
                                target="_blank"
                              >
                                SBI Home Loan Eligibility Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/icici-home-loan-eligibility-calculator"
                                target="_blank"
                              >
                                ICICI Home Loan Eligibility Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/pnb-home-loan-eligibility-calculator"
                                target="_blank"
                              >
                                PNB HFL Home Loan Eligibility Calculator
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="drop_call">
                          <div className="drop_heading">Useful Links</div>
                          <ul className="drop_links">
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/home-loan-documents"
                                target="_blank"
                              >
                                Home Loan Documents Required
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/interest-rate"
                                target="_blank"
                              >
                                Home Loan Interest Rate
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/prepayment-calculator"
                                target="_blank"
                              >
                                Home Loan Prepayment Calculator
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/balance-transfer"
                                target="_blank"
                              >
                                Home Loan Balance Transfer
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.magicbricks.com/homeloan/tax-benefits"
                                target="_blank"
                              >
                                Home Loan Tax Benefits
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <span
                      className="swiper_notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                  <div
                    className="swiper_button_prev swiper_button_disabled"
                    id="homeloanDrop_swiper_prev"
                    itemProp="-1"
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="swiper_wrapper-9d71d07292461066"
                    aria-disabled="true"
                  ></div>
                  <div
                    className="swiper_button_next"
                    id="homeloanDrop_swiper_next"
                    itemProp="0"
                    role="button"
                    aria-label="Next slide"
                    aria-controls="swiper_wrapper-9d71d07292461066"
                    aria-disabled="false"
                  ></div>
                  <div
                    className="header_sub_tabs_dropdown_view_more active"
                    id="homeloanDrop_view_more"
                  >
                    View more
                  </div>
                </div>
              </li>
              <li className={propertyservicesactive}>
                <a
                  href="/"
                  className={`header_sub_tabs_link ${propertyservicesactive}`}
                  onMouseOver={() => setpropertyservicesactive("active")}
                  onMouseOut={() => setpropertyservicesactive("")}
                >
                  Property Services
                </a>
                <div
                  id="propservdrop"
                  className={`header_sub_tabs_dropdown ${propertyservicesactive}`}
                  onMouseOver={() => setpropertyservicesactive("active")}
                  onMouseOut={() => setpropertyservicesactive("")}
                >
                  <div className="drop_row">
                    <div className="drop_call">
                      <div className="drop_heading">Rent Services</div>
                      <ul className="drop_links">
                        <li>
                          <a href="" target="_blank">
                            Pay Rent with Credit Card
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Rent Agreement <span className="badge">FREE</span>
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Generate Rent Receipt
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Tenant Verification
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Office leasing assistance
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop_call">
                      <div className="drop_heading">Buy / Sell Services</div>
                      <ul className="drop_links">
                        <li>
                          <a href="" target="_blank">
                            Property Valuation{" "}
                            <span className="badge">NEW</span>
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Legal Title Check <span className="badge">NEW</span>
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Property Lawyers
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Home Inspection
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Vastu
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Design &amp; Decor
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop_call">
                      <div className="drop_heading">Home Services</div>
                      <ul className="drop_links">
                        <li>
                          <a href="" target="_blank">
                            Packers &amp; Movers
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Home Cleaning
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Pest Control
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Sanitization
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank" className="see_all">
                            {`View All Services `}
                            <span className="see_all_arrow"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className={ptadviceactive}>
                <a
                  href="/"
                  className={`header_sub_tabs_link ${ptadviceactive}`}
                  onMouseOver={() => setptadviceactive("active")}
                  onMouseOut={() => setptadviceactive("")}
                >
                  {`PT Advice `}
                  <span className="badge">NEW</span>
                </a>
                <div
                  id="ptadvicedrop"
                  className={`header_sub_tabs_dropdown ${ptadviceactive}`}
                  onMouseOver={() => setptadviceactive("active")}
                  onMouseOut={() => setptadviceactive("")}
                >
                  <div className="drop_row">
                    <div className="drop_call">
                      <div className="drop_heading">MB Research</div>
                      <ul className="drop_links">
                        <li>
                          <a href="" target="_blank">
                            Insights
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Research
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Prop Index
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Find Pincode
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop_call">
                      <div className="drop_heading">Services &amp; Tools</div>
                      <ul className="drop_links">
                        <li>
                          <a href="" target="_blank">
                            Property Valuation{" "}
                            <span className="badge">NEW</span>
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Legal Title Check <span className="badge">NEW</span>
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Rates &amp; Trends
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Area Converter
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Prop Worth
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Buy v/s Rent
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop_call">
                      <div className="drop_heading">
                        Localities &amp; Projects
                      </div>
                      <ul className="drop_links">
                        <li>
                          <a href="" target="_blank">
                            Localities in New-Delhi
                          </a>
                        </li>
                        <li>
                          <a href="" rel="nofollow" target="_blank">
                            Locality Review Videos
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Compare Localities
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            New Projects in New-Delhi
                          </a>
                        </li>
                        <li>
                          <a href="" rel="nofollow" target="_blank">
                            Project Review Videos
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank" rel="nofollow">
                            MBTV Videos
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="drop_call">
                      <div className="drop_heading">News &amp; Blogs</div>
                      <ul className="drop_links">
                        <li>
                          <a href="" target="_blank">
                            Blog Collection
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Policies
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Finance &amp; Legal{" "}
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            City News
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className={helpactive}>
                <a
                  href="/"
                  className={`header_sub_tabs_link ${helpactive}`}
                  onMouseOver={() => sethelpactive("active")}
                  onMouseOut={() => sethelpactive("")}
                >
                  Help
                </a>
                <div
                  className={`header_sub_tabs_dropdown ${helpactive}`}
                  onMouseOver={() => sethelpactive("active")}
                  onMouseOut={() => sethelpactive("")}
                >
                  <div className="drop_row">
                    <div className="drop_call">
                      <ul className="drop_links">
                        <li>
                          <a href="" target="_blank">
                            Help Center
                          </a>
                        </li>
                        <li>
                          <a href="" target="_blank">
                            Sales Enquiry
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="header_sub_tasks_rent">
              <a href="/">
                <span className="pay_your_rent_icon"></span>
                Pay your Rent
              </a>
            </div>
          </div>

          <div className="header_sub_btn" tabIndex={0} role="button" onClick={hideHeaderSub}>
            <div></div><div></div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
