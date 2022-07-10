import "./AboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FaceBookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitwebsite = () => {
    window.location = "https://proptrack.herokuapp.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="/PropTrack_Logo.png"
              alt="Founder"
            />
            <Typography>PropTrack</Typography>
            <Button onClick={visitwebsite} color="primary">
              Visit Website
            </Button>
            <span>
            India’s most innovative real estate platform to simplify home search.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.facebook.com/propTrackindia"
              target="blank"
            >
              <FaceBookIcon className="facebookSvgIcon" />
            </a>
            <a
              href="https://www.linkedin.com/company/proptrack-in/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>
            <a
              href="https://twitter.com/PropTrack_india"
              target="blank"
            >
              <TwitterIcon className="twitterSvgIcon" />
            </a>

            <a href="https://www.instagram.com/proptrack.in/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
