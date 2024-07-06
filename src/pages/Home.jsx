import React from 'react';
import workingGirl from '../assets/workingGirl.png';
import backgroundPic from '../assets/backgroundPic.png'
import * as Styled from './style';
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import * as Style from '../components/style.jsx';
import { BiConversation } from "react-icons/bi";

const Home = () => {
    const navigate = useNavigate();
    const collabSectionRef = useRef(null);

    const handleDropdownClick = () => {
      if (collabSectionRef.current) {
          collabSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  };

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
};
  return (
    <>
     <Styled.Intro>
        <Styled.Head>Frontend Developer</Styled.Head>
        <Styled.Para><ul>
          <li>I craft elegantly simple designs and code with a passion that fuels my creativity.</li> 
          <li> Each project is <span onClick={()=>handleNavigate('about')}>ABOUT</span> blending artistry and technical skill, reflecting my love for what I do.</li>
          </ul></Styled.Para>
         <Styled.HomePic><img src={workingGirl} alt="" className="img" /> </Styled.HomePic>
         {/* <Styled.HomeLink>
         <Styled.SBtn><SocialButton/></Styled.SBtn> */}
         <Styled.Para> <h6>I spend my days (and often nights) painting the Internet canvas with <span onClick={()=>handleNavigate("projects")}>PROJECTS</span > and lines of code, turning zeroes and ones into immersive, interactive experiences.Anyways you can <span onClick={()=>handleNavigate('contact')}>CONTACT ME</span> for inquiries or collaborations</h6></Styled.Para>
         {/* </Styled.HomeLink> */}
<Styled.Dropdown onClick={handleDropdownClick}>
<svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
</Styled.Dropdown>
</Styled.Intro> 
        <Styled.Background $background={backgroundPic} ref={collabSectionRef}>
            <Styled.Finger >
              <div className="lives">
              Hi, I’m Palak Srivastava.
              </div>
              <Styled.Para>
              <p>I'm a passionate software developer with a knack for creating beautifully simple and responsive web applications. 
              A design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.
                Leveraging modern technologies like React, Next.js, and Styled Components, I thrive on enhancing user experiences through intuitive design and seamless functionality.</p>
              </Styled.Para>

<Styled.Btns>
              <Style.ArrowBtn onClick={() =>handleNavigate("about")}>
              <span className="actual-text">&nbsp;Know more about me&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;Know more about me &nbsp;</span>
                </Style.ArrowBtn>
              <Style.ArrowBtn onClick={() =>handleNavigate("projects")}>
              <span className="actual-text">&nbsp;Crafted Projects &nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;Crafted Projects&nbsp;</span>
                </Style.ArrowBtn>
 </Styled.Btns>
            </Styled.Finger>
           
          </Styled.Background>
          <Styled.Collab>
            <Styled.Head className='CollabHead'>Interested in collaborating with me?</Styled.Head>
            <Styled.Para className='ColllabPara'>I’m always open to discussing product design work or partnership opportunities.</Styled.Para>
            <Styled.Button>
              <button class="cta" onClick={() => handleNavigate("contact")}>
              <svg  viewBox="0 0 13 10">              
              <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
  <span> Start a Conversation</span>
</button></Styled.Button>
          </Styled.Collab>
    </>
  )
}
export default Home
