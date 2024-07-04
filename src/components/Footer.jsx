import React from "react";
import * as Styled from "../pages/style";
import footerBg from "../assets/footerBg.jpg";
import logo1 from "../assets/logo1.png";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <Styled.FooterBackground $background={footerBg}>
        <Styled.Blur>
          <Styled.NewsContainer className="container">
            <Styled.FooterContainer>
              <div className="newsStay">
                <img src={logo1} alt="logo" className="img" />
                <Styled.Text>
                  Living, learning, & leveling up one day at a time.
                </Styled.Text>
              </div>
              <Styled.SocialLinks>
                <Styled.Link
                  as="a"
                  href="mailto:palak.sri.dps@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <IoMdMail />
                  </span>
                </Styled.Link>
                <Styled.Link
                  as="a"
                  href="https://www.linkedin.com/in/srivastava-palak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaLinkedinIn />
                  </span>
                </Styled.Link>
                <Styled.Link
                  as="a"
                  href="https://github.com/Palak-Srivastava4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <IoLogoGithub />
                  </span>
                </Styled.Link>
                <Styled.Link
                  as="a"
                  href="tel:9460210771"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <MdLocalPhone />
                  </span>
                </Styled.Link>
              </Styled.SocialLinks>
            </Styled.FooterContainer>
          </Styled.NewsContainer>
          <Styled.Copy>
            <div>
              <div className="copy">
                Handcrafted by me © <a href="/">Palak Srivastava</a>
              </div>
            </div>
          </Styled.Copy>
        </Styled.Blur>
      </Styled.FooterBackground>
    </div>
  );
};

export default Footer;
