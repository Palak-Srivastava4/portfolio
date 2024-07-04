import React from 'react';
import * as Styled from '../pages/style'
import { useState } from 'react';
import logoLight from "../assets/logoLight.png";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineViewList } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { LiaDownloadSolid } from "react-icons/lia";

const Header = () => {
  const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <Styled.NavigationBar>
        <Styled.DataNav>
          <Styled.NavLinks className="container">
            <Styled.Image >
              <div className="imgLogo" src={logoLight}>
                <img src={logoLight} alt="logo" className="img" onClick={() => navigate("/")} />
      
              </div>
            </Styled.Image>
            <Styled.Nav>
              <Styled.IconBox>
                {" "}
                <div
                  className="iconBox"
                  onClick={() => window.open("tel:9460210771")}
                >
                  <MdCall className="callIcon" />
                </div>
                <Styled.Icon onClick={handleClick}>
                  <HiOutlineViewList className="icon" />
                </Styled.Icon>
              </Styled.IconBox>
              <Styled.NavWidth>
                <Styled.Nav>
                  <Styled.NavItem>
                    <Styled.NavLink onClick={() => navigate("/")}>
                      <AiFillHome />
                    </Styled.NavLink>
  
                  </Styled.NavItem>
                  <Styled.NavLink onClick={() => navigate("about")}>About</Styled.NavLink>
                  <Styled.NavLink  onClick={() => navigate("projects")}>Projects</Styled.NavLink>
                    <Styled.NavLink onClick={() => navigate("contact")}>Contact</Styled.NavLink>
                    <Styled.DownloadBtn >
                      <a href='Resume Palak.pdf' download>
                        <Styled.IconD className='icon'> 
                      <LiaDownloadSolid />
                        </Styled.IconD> <p className='text'>Resume</p> </a>
                      </Styled.DownloadBtn>
                </Styled.Nav>
              </Styled.NavWidth>
            </Styled.Nav>
          </Styled.NavLinks>
        </Styled.DataNav>
        {open ? (
          <>
            {" "}
            <Styled.MainContainer>
              <Styled.CrossIcon>
                <MdOutlineClose className="cross" onClick={handleClose} />
              </Styled.CrossIcon>
              <div className="heading" onClick={() => { navigate("/"); handleClose(); }}>
            <AiFillHome /> Home
          </div>
          <hr />
          <div className="heading" onClick={() => { navigate("/about"); handleClose(); }}>
            About
          </div>
          <hr />
          <div className="heading" onClick={() => { navigate("/projects"); handleClose(); }}>
            Projects
          </div>
          <hr />
          <div className="heading" onClick={() => { navigate("/contact"); handleClose(); }}>
            Contact
          </div>
          <hr />
          <div className="heading" >
           <a href='Resume Palak.pdf' download > Resume <LiaDownloadSolid /> </a> 
          </div>
          <hr />
            </Styled.MainContainer>
          </>
        ) : (
          ""
        )}
      </Styled.NavigationBar>
    
    );
  };  

export default Header;
