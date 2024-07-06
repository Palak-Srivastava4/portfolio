import React from 'react'
import * as Styled from './style';
import backgroundPic from '../assets/backgroundPic.png';
import { listData } from './data';
import * as Style from '../components/style.jsx';
import { useNavigate } from 'react-router';


export const About = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
};
  return (
    <div>
 <Styled.Background $background={backgroundPic}>
            <Styled.Finger>
              <div className="lives">
              Hi, I’m Palak Srivastava.
              </div>
              <Styled.Para>
              <p>I am a passionate software developer with a knack for creating beautifully simple and responsive web applications. Leveraging modern technologies like React, Next.js, and Styled Components, I thrive on enhancing user experiences through intuitive design and seamless functionality.</p>
              </Styled.Para>
            </Styled.Finger>
          </Styled.Background>
          <Styled.ContainerPosition>
          <Styled.CardContainer>
            <Styled.Cards>
            {listData?.map((item) => {
                return (<Styled.Box>
                  <div className='header'>
                  <img src={item.image} alt=''/>
                  <h2> {item.heading} </h2>
                  </div>
                 
                  <p> {item.intro} </p>
                  <h5> {item.head} </h5>
                  <p> {item.content} </p>
                  <h5> {item.head2} </h5>
                {item.content2.map((content2, index) => (
                  <li key={index}>{content2}</li>
                ))}
                  </Styled.Box>
                );
              })}
            </Styled.Cards>
          </Styled.CardContainer>
          </Styled.ContainerPosition>
       
    </div>
  )
}
