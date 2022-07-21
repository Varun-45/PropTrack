import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="footer_main">
          <div className="container footer_main_section">
            <div className="footer_main_left">
              <div className="footer_main_title">About PropTrack</div>
              <div className="footer_main_content">
                Launched in 2022, PropTrack is India's No.1 online Property
                marketplace to buy, sell, and rent residential and commercial
                properties. Adjudged as the most preferred real estate portal in
                India by various independent surveys.
              </div>
              <ul className="footer_main_download">
                <li><a href="" className="google_play"></a></li>
                <li><a href="" className="apple_store"></a></li>
              </ul>
              <ul className="footer_main_social_links">
                <li>
                  <a
                    href=""
                    target="_blank"
                    title="Facebook"
                    rel="nofollow"
                    className="facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    title="Twitter"
                    rel="nofollow"
                    className="twitter"
                  ></a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    title="Linkedin"
                    rel="nofollow"
                    className="linkedin"
                  ></a>
                </li>
                <li>
                  <a
                    href=""
                    target="_blank"
                    title="youtube MBTV"
                    className="youtube"
                  ></a>
                </li>
              </ul>
            </div>
            <div className="footer_main_right">
              <div className="footer_main_title">Properties in India</div>
              <div className="footer_main_right_content_1">
                <a href="" className="footer_main_right_link">
                  Property in New Delhi
                </a>
                <a href="" className="footer_main_right_link">
                  Property in Mumbai
                </a>
                <a href="" className="footer_main_right_link">
                  Property in Chennai
                </a>
                <a href="" className="footer_main_right_link">
                  Property in Pune
                </a>
                <a href="" className="footer_main_right_link">
                  Property in Noida
                </a>
                <a href="" className="footer_main_right_link">
                  Property in Gurgaon
                </a>
                <a href="" className="footer_main_right_link">
                  Property in Bangalore
                </a>
                <a href="" className="footer_main_right_link">
                  Property in Ahmedabad
                </a>
              </div>
              <div className="footer_main_title">New Projects in India</div>
              <div className="">
                <a href="" className="footer_main_right_link">
                  New Projects in New Delhi
                </a>
                <a href="" className="footer_main_right_link">
                  New Projects in Mumbai
                </a>
                <a href="" className="footer_main_right_link">
                  New Projects in Chennai
                </a>
                <a href="" className="footer_main_right_link">
                  New Projects in Pune
                </a>
                <a href="" className="footer_main_right_link">
                  New Projects in Noida
                </a>
                <a href="" className="footer_main_right_link">
                  New Projects in Gurgaon
                </a>
                <a href="h" className="footer_main_right_link">
                  New Projects in Bangalore
                </a>
                <a href="" className="footer_main_right_link">
                  New Projects in Ahmedabad
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="footer_secondary">
          <div className="container">
            <ul className="footer_secondary_links">
              <li>
                <a href="" target="_blank">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="nofollow">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="nofollow">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Blog
                </a>
              </li>
              <li>
                <a href="" rel="nofollow" target="_blank">
                  Careers
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="">Feedback</a>
              </li>
              <li>
                <a href="" rel="nofollow">
                  Unsubscribe
                </a>
              </li>
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
              <li>
                <a href="" target="_blank">
                  Buy Our Services
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="footer_disclaimer">
          <div className="container">
            Disclaimer: PropTrack Realty Services Limited is only an
            intermediary offering its platform to advertise properties of Seller
            for a Customer/Buyer/User coming on its Website and is not and
            cannot be a party to or privy to or control in any manner any
            transactions between the Seller and the Customer/Buyer/User. All the
            offers and discounts on this Website have been extended by{" "}
            <span className="footer_disclaimer_more">Read more</span>{" "}
            <span style={{ display: "none" }} id="dec-ftr-more-content">
              various Builder(s)/Developer(s) who have advertised their
              products. PropTrack is only communicating the offers and not
              selling or rendering any of those products or services. It neither
              warrants nor is it making any representations with respect to
              offer(s) made on the site. PropTrack Realty Services Limited
              shall neither be responsible nor liable to mediate or resolve any
              disputes or disagreements between the Customer/Buyer/User and the
              Seller and both Seller and Customer/Buyer/User shall settle all
              such disputes without involving PropTrack Realty Services
              Limited in any manner.
            </span>
          </div>
        </section>
        <section className="footer_copyright">
          <div className="container">
            All trademarks, logos and names are properties of their respective
            owners. All Rights Reserved. © Copyright 2022 PropTrack Realty
            Services Limited.
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
