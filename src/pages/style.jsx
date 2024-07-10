import styled from "styled-components";

export const DataNav = styled.div`
background-color: white`;
export const NavigationBar = styled.div`
border-bottom:1px solid gray;
position: sticky;
  top: -1px;
  z-index: 999;
`;
export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 10px 0px; */
  @media (max-width: 600px) {
    justify-content: space-between;
    padding: 10px 10px;
  }
`;
export const Image = styled.div`
  width: 40%;
         @media (max-width: 660px){
          width: auto;
          padding: 0;
          margin: 0;
        }
  .imgLogo {
    display: flex;
    justify-content: space-between;
           @media (max-width: 660px){
          display: block;
        }
    .img{
        width:36%;
        padding: 0 10%;
        cursor: pointer;
        @media (max-width: 660px){
          height: 42px;
          width: 100px;
          padding: 0;
          margin: 0;
        }
    }
  }
`;
export const Nav = styled.ul`
  background: white;
  list-style: none;
  display: flex;
  align-items: center;
  margin:0 6%;
`;
export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  .callIcon {
    font-size: 21px;
    @media only screen and (max-width: 600px) {
      display: block;
    }
    display: none;
  }
  .iconBox {
    display: flex;
    background-color: rgba(35, 35, 35, 0.1);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    @media only screen and (max-width: 600px) {
      display: flex;
    }
    display:none;
  }
`;
export const Icon = styled.div`
  @media only screen and (max-width: 1200px) {
    display: flex;
    background-color: rgba(35, 35, 35, 0.1);
    border-radius: 5px;
    align-items: center;
    text-align: center;
    display: flex;
    width: 35px;
    height: 35px;
    justify-content: center;
    .icon {
      font-size: 21px;
    }
  }
  display: none;
`;
export const NavWidth = styled.div`
  @media only screen and (max-width: 1200px) {
    display: none;
  }
  display: block;
`;
export const NavItem = styled.li`
  position: relative;
  text-decoration: none;
`;
export const IconD = styled.div`
border-radius: 1px;
width: 30px;
  height: 30px;
  transform: translate(-10px, 18px);
  color: black;
  background: linear-gradient(to bottom, rgb(136, 203, 255), rgb(82, 70, 255));
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
  z-index: 2;
  transition-duration: 0.3s;

`;
export const DownloadBtn = styled.div`
/* width: 100px; */
padding: 0 16px;
  height: 40px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.349);
  background-color: rgb(12, 12, 12);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.3s;
  /* overflow: hidden; */

a{
  display: flex;
  font-size: 21px;
  text-decoration: none;
}
p{
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  transition-duration: 0.3s;
  font-size: 1.04em;
}
&:hover{
  padding: 0 4px;
}
&:hover .icon {
  width: 90px;
  /* height: 28px; */
  transition-duration: 0.3s;
  transform: translate(0);
}
&:hover .text {
  transform: translate(10px);
  width: 0;
  font-size: 0;
  transition-duration: 0.3s;
}
&:active {
  transform: scale(0.95);
  transition-duration: 0.3s;
}
`;
export const NavLink = styled.div`
  cursor: pointer;
  text-decoration: none;
  padding: 15px 25px;
  background: white;
  color: black;
  display: block;
  display: flex;
  gap: 40px;
  color: #818181;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 17px;
  cursor: pointer;
  color: #818181;
  text-decoration: none;

  &:hover {
    color: #585858;
    text-decoration-style: none;
    transition: ease-in-out 0.5s;
  }
  &:hover:after{
    text-decoration: underline;
  }
     /* &::after{
    content: '';
    width: 0;
    height: 3px;
    background: rgb(85, 228, 241);
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
}
&:hover:after{
    width: 100%;
} */
`;
export const DropdownMenu = styled.ul`
  padding-left: 5px;
  position: absolute;
  width: 15em;
  display: none;
  list-style: none;
  ${NavItem}:hover & {
    display: block;
    font-size: 16px;
    line-height: 26px;
    color: #818181;
    font-weight: 400;
  }
`;

export const DropdownItem = styled.li``;

export const SubDropdownMenu = styled.ul`
  position: absolute;
  top: 0;
  left: 100%;
  background: #555;
`;
export const MainContainer = styled.div`
  background: black;
  color: white;
  width: 80%;
  z-index: 3;
  left: 20%;
  border-radius: 5px;
  position: fixed;
  overflow-y: scroll;
  height: 100%;
  a{
    color: #ffff;
    text-decoration: none;
  }
  .list {
    text-decoration: none;
    color: #ffff;
    list-style-type: none;
    @media (max-width: 1200px) and (min-width: 500px) {
      font-size: 25px;
    }
  }
  .heading {
    font-size: 25px;
    text-decoration: none;
    color: #ffff;
    padding-left: 13px;
    @media (max-width: 1200px) and (min-width: 500px) {
      font-size: 30px;
    }
  }
`;
export const CrossIcon = styled.div`
  display: flex;
  justify-content: end;
  padding: 20px;
  .cross {
    color: #ffffff;
    font-size: 21px;
  }
`;
export const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  gap: 21px;
  margin-bottom: 23px;
  @media only screen and (max-width: 800px) and (min-width: 458px) {
    gap: 9px;
  }
  @media (max-width: 457px) {
    gap: 18px;
  }
`;
export const Intro = styled.div`
padding-bottom: 140px;
.img{
    display:flex;
}`;
export const Head = styled.div`
display: flex;
justify-content:center;
align-items: center;
text-align: center;
font-size:48px;
font-weight:800;
color: #232323;
padding: 30px 0 0 0;
@media (max-width: 660px){
  font-size: 34px;
  padding-top: 20px;
}
`;
export const SBtn = styled.div`
transform: translate(-80px, -80px);
`;
export const HomeLink = styled.div`
display: flex;
margin-left: 120px;
margin-top: 40px;
`;
export const Para = styled.div`
display: flex;
justify-content:center;
text-align: center;
margin: 0 12%;
font-size:22px;
font-weight:300;
color: #818181;
/* padding: 14px 0 0 0; */
@media (max-width: 660px){
  margin: 2%;
  padding: 0;
  font-size: 14px;
}
ul{
  margin: 1% 2%;
  padding: 0;
}
li{
  list-style: none;

}
p{
  color: #e6e6e6; 
  font-size: 24px;
  line-height: 32px;
  font-weight: 200;
  @media (max-width: 660px){
    font-size: 14px;
    line-height: 22px;
  }
}
h6{
  margin: 0 12%;
font-size:22px;
font-weight:300;
color: #818181;
@media (max-width: 660px){
    font-size: 14px;
    margin: 2%;
    line-height: 22px;
  }
}
span{
  color: #317df9;
  font-weight: 600;
  cursor: pointer;
}
`;
export const HomeBackground = styled.div`
  background-image: url(${props => props.$background});
  /* margin-top: 120px; */
  /* height: 575px; */
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; */
  /* padding-top: 120px;
  padding-bottom: 120px; */
  @media (max-width: 1200px) {
    height: auto;
  }
`;
export const HomePic = styled.div`
display: flex;
justify-content: center;
img{
  @media (max-width: 660px){
   width: 260px;
  }
}
`;
export const Dropdown = styled.div`
cursor: pointer;
background: transparent;
@media (max-width: 660px){
    margin: 0;
    padding: 0;
  }
.arrows {
  width: 60px;
  height: 72px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  margin-top: 20px;
  /* bottom: -90px; */
}

.arrows path {
  stroke: #2994D1;
  fill: transparent;
  stroke-width: 1px;  
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite; 
}

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

@-webkit-keyframes arrow 
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

.arrows path.a1 {
  animation-delay:-1s;
  -webkit-animation-delay:-1s; 
}

.arrows path.a2 {
  animation-delay:-0.5s;
  -webkit-animation-delay:-0.5s; 
}

.arrows path.a3 { 
  animation-delay:0s;
  -webkit-animation-delay:0s; 
}
`;
export const Background = styled.div`
  /* background-image: url(${(props) => props.src}); */
  background-image: url(${props => props.$background});
  /* margin-top: 120px; */
  height: 575px;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* padding-top: 120px;
  padding-bottom: 120px; */
  @media (max-width: 1200px) {
    height: auto;
  }
`;
export const Finger = styled.div`
background-color: #2d2d2da3;
height: 100%;
display: inline-block;
  .lives {
    font-size: 66px;
    margin: 140px 0 20px 0;
    font-weight: 800;
    color: #fff;
    text-align: center;
    @media (max-width: 660px) {
      font-size: 30px;
      line-height: 42px;
      margin: 20% 2% 2% 2%;
    }
  }
`;
export const Collab = styled.div`
.CollabHead{
padding: 120px 0 20px 0;
@media (max-width: 660px){
  padding: 16% 0 0 0;
  font-size: 30px;
}
}
border-bottom: 2px solid #828282;
`;
export const Button = styled.div`
display: flex;
align-items: center;
/* justify-content: center; */
padding:60px 0 120px 0;
@media (max-width: 660px){
  padding: 6% 4%;
}
.cta {
  position: relative;
  margin: auto;
  padding: 12px 24px;
  transition: all 0.2s ease;
  border: 1px solid #373434;
  border-radius: 50px;
  /* border: none; */
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #0e0e0e;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
  @media (max-width: 660px){
    background-color: transparent;
  }
}

.cta span {
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #242424;
  @media (max-width: 660px){
  font-size: 12px;
}
}
.cta svg {
  height:15px ;
  width: 10px;
  position: relative;
  font-size:12px;
  top: 0;
  margin-left: 6px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #a9abad;
  stroke-width: 2;
  transform: translateX(-8px);
  transition: all 0.3s ease;
}
.cta:hover span{
  color: white;
  font-weight: 400;
}
.cta:hover:before {
  width: 100%;
  background: #373434;
}

.cta:hover svg {
  transform: translateX(0);
}
.cta:active {
  transform: scale(0.95);
}
`;


















export const FooterBackground = styled.div`
  background-image: url(${props => props.$background});
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* padding: 30px 0px; */
`;
export const Blur = styled.div`
  background-color: #0000009f;
`;
export const Copy = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 2px solid #555555;
  margin-top: 35px;
  padding-top: 35px;
  padding-bottom: 35px;
   @media (max-width: 660px){
      margin: 6%;
      padding: 2%;
    }
  .copy {
    font-size: 22px;
    color: #ffffff;
     @media (max-width: 660px){
      font-size: 14px;
    }
  }
  a {
    font-size: 22px;
    color: #ffffff;
    text-decoration: none;
    @media (max-width: 660px){
      font-size: 14px;
    }
  }
`;
// export const MainContainer = styled.div`
//   .itemStyle {
//     display: flex;
//     justify-content: center;
//     gap: 20px;
//     @media (max-width: 1200px) {
//       margin-top: 17px;
//       justify-content: center;
//     }
//   }
//   .colorChng {
//     width: 43px;
//     height: 43px;
//     justify-content: center;
//     display: flex;
//     align-items: center;
//     font-size: 22px;
//     color: white;
//     -ms-transform: skewX(-20deg);
//     -webkit-transform: skewX(20deg);
//     transform: skewX(-20deg);
//     cursor: pointer;
//   }

//   .btn {
//     -ms-transform: skewX(20deg);
//     -webkit-transform: skewX(20deg);
//     transform: skewX(20deg);
//     display: inline-block;
//     color: #fff;
//   }

//   .itemIcon {
//     display: flex;
//     gap: 10px;
//     justify-content: end;
//   }
//   .textItem {
//     display: flex;
//     gap: 20px;
//     justify-content: center;
//     margin-top: 31px;
//     @media (max-width: 600px) {
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     }
//   }


//   .BtnDonate:hover {
//     background: #f1ae44;
//     cursor: pointer;
//   }
//   .BtnDonate {
//     background-color: #e36955;
//     font-size: 12px;
//     text-transform: uppercase;
//     text-align: center;
//     color: #fff;
//     font-weight: 600;
//     letter-spacing: 1px;
//     width: 14%;
//     height: 63px;
//     border: none;
//     border-radius: 0;
//     -ms-transform: skewX(-20deg);
//     -webkit-transform: skewX(-20deg);
//     transform: skewX(-20deg);
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .newsStay {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//   }
//   .input {
//     width: 36%;
//     height: 63px;
//     background-color: #343434;
//     color: #bfbfbf;
//     outline: none;
//     border: none;
//     padding: 0px 20px;
//     @media (max-width: 600px) {
//       width: 100%;
//       height: 48px;
//     }
//   }
// `;

export const BtnBg = styled.a`
  font-size: 18px;
  text-transform: uppercase;
  background: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0 10px 0 15px;
  line-height: 49px;
  position: relative;
  z-index: 1;
  display: inline-block;
  -webkit-transition: 0.3s ease-in;
  -moz-transition: 0.3s ease-in;
  -ms-transition: 0.3s ease-in;
  -o-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
  text-decoration: none;
  border: none;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 1px;
    z-index: -1;
    background: ${({ backgroundColor }) => backgroundColor};
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
    -webkit-transform: skew(-12deg, 0deg);
    -moz-transform: skew(-12deg, 0deg);
    -ms-transform: skew(-12deg, 0deg);
    -o-transform: skew(-12deg, 0deg);
    transform: skew(-12deg, 0deg);
    -webkit-transition: 0.3s ease-in;
    -moz-transition: 0.3s ease-in;
    -ms-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;
    transition: 0.3s ease-in;
  }
  &:hover,
  &:hover:after {
    background-color: #f1ae44;
    color: #fff;
  }

`;

export const NewsContainer = styled.div`
  padding-bottom: 45px;
  @media (max-width: 660px){
      padding-bottom: 8%;
    }
  .news {
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    color: #fff;
  }
  .update {
    color: #f1ae44;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 8px;
    display: block;
  }
`;
export const FooterContainer = styled.div`
  .itemStyle {
    display: flex;
    justify-content: center;
    gap: 20px;
    @media (max-width: 1200px) {
      margin-top: 17px;
      justify-content: center;
    }
  }
  .colorChng {
    width: 43px;
    height: 43px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 22px;
    color: white;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(-20deg);
    cursor: pointer;
  }
  .btn {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    display: inline-block;
    color: #fff;
  }
  .itemIcon {
    display: flex;
    gap: 10px;
    justify-content: end;
  }
  .textItem {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 31px;
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .newsStay {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .input {
    width: 36%;
    height: 63px;
    background-color: #343434;
    color: #bfbfbf;
    outline: none;
    border: none;
    padding: 0px 20px;
    @media (max-width: 600px) {
      width: 100%;
      height: 48px;
    }
  }
  img{
    padding-top: 60px;
    height: 80px;
    @media (max-width: 660px){
      height: 54px;
      padding-top: 28px;
    }
  }
`;
export const Text = styled.div`
  color: #ffffff;
  margin: 30px 10px 10px 10px;
  text-align: center;
  font-size: 20px;
  @media (max-width:660px){
    font-size: 12px;
    margin: 2%;
  }
`;
export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
`;
export const Link = styled.div`
cursor: pointer;
border-radius: 50%;
height: 64px;
width: 64px;
align-items: center;
color: #424242;
background-color: white;
text-align: center;
gap: 40px;
margin:  30px 10px 0 10px;
 @media (max-width: 660px){
      height: 42px;
      width: 42px;
      margin-top: 5%;
    }
&:hover{
  background-color: #424242;
  color: white;
  transition: 0.6s;
}
span{
    font-size: 30px;
    line-height: 76px;
     @media (max-width: 660px){
      font-size: 20px;
      line-height: 50px;
    }
}
`;
export const SocButton = styled.div`
@media (max-width: 500px){
  visibility: hidden;
}
position: fixed;
bottom: 20px;
padding-left: 10px;
z-index: 99;
.main {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.up {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}
.down {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}
.card1 {
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 90px 5px 5px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
}
.whatsapp {
  margin-top: 1.5em;
  margin-left: 1.2em;
  fill: #00ff00;
}
.card2 {
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 90px 5px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
}
.linkedin {
  margin-top: 1.5em;
  margin-left: -0.9em;
  fill: #0077b5;
}
.card3 {
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 5px 5px 90px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
}
.github {
  margin-top: -0.6em;
  margin-left: 1.2em;
}
.card4 {
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 5px 90px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: .2s ease-in-out;
}

.gmail {
  margin-top: -.9em;
  margin-left: -1.2em;
  fill: #f14336;
}

.card1:hover {
  cursor: pointer;
  scale: 1.1;
  background-color: #00ff00;
}
.card1:hover .whatsapp {
  fill: white;
}
.card2:hover {
  cursor: pointer;
  scale: 1.1;
  background-color: #0077b5;
}
.card2:hover .linkedin {
  fill: white;
}
.card3:hover {
  cursor: pointer;
  scale: 1.1;
  background-color: black;
}
.card3:hover .github {
  fill: white;
}
.card4:hover {
  cursor: pointer;
  scale: 1.1;
  background-color: #FF0004;
}

.card4:hover .gmail {
  fill: white;
}
`;
export const ContainerPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardContainer = styled.div`
width:80%;
transform: translateY( -160px);
position: relative;
z-index: 98;
margin-bottom: -80px;
border-radius: 12px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
    color: #141c3a;
    padding: 30px;
       @media (max-width: 500px) {
      transform: translateY(0px);
      margin: 10px 0;
    }
`;
export const Cards = styled.div`
display: flex;
    justify-content: space-between;
    gap: 40px;
    padding-top: 30px;
      @media (max-width: 500px) {
      flex-direction: column;
    }

    `;
export const Box = styled.div`
width: 100%;
text-align: center;
.header{
   @media (max-width: 660px){
  display: flex;
  justify-content: center;
  align-items: center;
   }
}
img{
  height:80px;
  width: 80px;
  margin-bottom: 10px;
  @media (max-width: 660px){
      height: 50px;
      width: 50px;
    }
}
h2{
  font-size: 30px;
  margin: 0;
  @media (max-width: 660px){
    font-size: 26px;
    margin-left: 3%;
  }
}
p{
  margin: 10px;
  font-size: 17px;
  color: #828282;
   @media (max-width: 660px){
    font-size: 14px;
    margin: 2%;
  }
}
h5{
  color: #51cea8;
  font-size: 19px;
  margin: 10px;
   @media (max-width: 660px){
    font-size: 16px;
    margin: 2%;
  }
}
li{
  color: #828282;
  font-size: 17px;
  list-style: none;
  line-height: 28px;
  span{
    color: #1e1e1e;
    font-weight:600;
  }
   @media (max-width: 660px){
    font-size: 14px;
    line-height: 22px;
  }
}
`;
export const Btns = styled.div`
display: flex;
justify-content: space-around;
padding-top: 50px;
@media (max-width: 660px){
  padding-top: 3%;
  padding-bottom: 8%;
}
`;
/* export const Card = styled.div`
margin: 120px 40px;
width: 36%;
  height: 320px;
  transition: all 0.4s;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
  font-size: 30px;
  font-weight: 400;
  &:hover{
    border-radius: 15px;
  cursor: pointer;
  transform: scale(1.2);
  box-shadow: 0px 0px 10px 5px  rgba(0, 0, 0, 0.705);
  background: rgb(103, 151, 255);
  }
`; */

/* export const FirstContent = styled.div`
height: 100%;
  width: 100%;
  transition: all 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  border-radius: 10px;
  background-image: url(${props => props.$background});
  &:hover{
  opacity: 0;
  }
`; */

/* export const SecondContent = styled.div`
height: 0%;
  width: 100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transition: all 0.4s;
  font-size: 24px;
  transform: rotate(90deg) scale(-1);
  &:hover{
    opacity: 1;
  height: 100%;
  width: 100%;
  font-size: 32px;
  transform: rotate(0deg);
  }
`; */



//  project page stylling

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;
export const Card = styled.div`
  height: 65vh;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 75px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
  z-index: 10;
  
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  @media (max-width:660px){
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    gap: 10px;
  }
`;
export const FirstContent = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  height: 80%;
  width: 36%;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: all ease 0.6s;
  background-image: url(${props => props.$background});

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 660px) {
    height: 60%;
    width: 90%; /* Adjust width for smaller screens */
    margin-left: 4%;   //Center the card on smaller screens
  }
`;
export const SecondContent = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  /* background-color: #06cecee7; */
  background-color: #4e4e4ee7;
  padding: 30px;
  padding-left: 10px;
  opacity: 0;
  transform: scale(1.2);
  transition: all ease 0.6s;
  transform: rotate(30deg);
  color: white;
  @media (max-width: 660px){
    padding: 2%;
  }

  h3 {
    /* color: black; */
    color: #1a9c9c;
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
    white-space: nowrap;
    margin-bottom: 20px;
    text-align: center;
    @media (max-width: 660px){
    font-size: 24px;
    margin: 3%;
    margin-top: 14%;
  }
  }
  p{
    margin: 0 10%;
    @media (max-width: 660px){
    font-size: 14px;
    margin: 3%;
  }
  }

  &:hover {
    opacity: 1;
    transform: rotate(0deg);
  }
`;
export const ButtonProject = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
export const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  font-size: 50px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.575);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 100;
  @media (max-width: 660px) {
    font-size: 20px; /* Adjust font size for very small screens */
    padding: 1%; /* Adjust padding for very small screens */
  }
  &.left {
    left: 10px;
    @media (max-width: 660px){
      left: 0%;
    }
  }

  &.right {
    right: 10px;
    @media (max-width: 660px){
      right: 0;
    }
  }
`;

//Contact page designing
export const FormSection = styled.div`
  display: flex;
  margin: 70px 0 ;
  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 0%;
    padding: 0;
  }
`;
export const Touch = styled.div`
@media (max-width: 991px){
  h2.touchwith{
    font-size:36px;
    line-height:38px;
    margin: 0;
  }
}
  flex: 0.6;
  .touch {
    padding: 46px 20px 0px 40px;
     @media (max-width: 660px){
    padding:  10% 4%;
    padding-bottom: 0;
  }
}
  
  .touchwith {
    font-size: 50px;
    /* line-height: 60px; */
    font-weight: 700;
    color: #424242;
 @media (max-width: 660px){
    font-size: 28px;
  }
  }
  .message {
    color: #863bae;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    /* margin-top: 8px; */
    display: block;
  }
  .para {
    line-height: 30px;
    /* margin-top: 43px; */
    font-size: 20px;
    line-height: 29px;
    color: #818181;
    font-weight: 400;
     @media (max-width: 660px){
   font-size : 16px;
   line-height: 21px;
  }
  }
  .itemStyle {
    display: flex;
    gap: 20px;
    margin-top: 39px;
  }
  .itemStyle svg{
    margin-bottom: 3px;
  }
  .colorChng {
    width: 43px;
    height: 43px;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 22px;
    color: white;
    cursor: pointer;
  }
`;
export const Form = styled.div`
  flex: 0.6;
  .mainForm {
    padding: 0;
    @media (max-width: 1200px) {
      padding: 0px;
    }
  }
`;
export const MainForm = styled.form`
margin-top: 10px;
  .nameAddress {
    display: flex;
    gap: 27px;
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 0px;
      margin-top: 41px;
    }
  }
`;
export const Input = styled.input`
width: 90%;
  height: 26px;
  margin-top: 20px;
  background-color: #f2f0ec;
  outline: none;
  border: none;
  padding: 16px 20px;
  @media (max-width: 660px){
    padding: 3% 5%;
    margin: 0;
  }

  &::placeholder {
    color: #818181;
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 660px){
      font-size: 14px;
  }
  }
`;
export const InputLocation = styled.input`
  height: 26px;
  margin-top: 20px;
  width: 90%;
  background-color: #f2f0ec;
  outline: none;
  border: none;
  padding: 16px 20px;
  @media (max-width: 660px){
    padding: 3% 5%;
    margin-top: 4%;
  }
  &::placeholder {
    color: #818181;
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 660px){
    font-size: 14px;
  }
  }
`;
export const TextArea = styled.textarea`
  margin-bottom: 10px;
  height: 140px;
  margin-top: 26px;
  width: 90%;
  background-color: #f2f0ec;
  outline: none;
  border: none;
  resize: none;
  padding: 16px 20px;
  @media (max-width: 660px){
    padding: 3% 5%;
    margin-top: 4%;
  }
  &::placeholder {
    color: #818181;
    font-weight: 500;
    font-size: 16px;
           @media (max-width: 660px){
          font-size: 14px;
          padding: 0;
          margin: 0;
        }
  }
`;
export const BtnDark = styled.button`
margin: 20px;
--color: #030303;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s;
  border: none;
  margin-left: 4%;
  background-color: transparent;
  width: 200px;
  height: 60px;
   @media (max-width: 660px){
    /* padding: 3% 5%; */
    margin: 0;
  }
p{
  letter-spacing: 2px;
  font-weight: bold;
  background: var(--color);
  border-radius: 10px;
  color: white;
  padding: 1rem;
}
&::before {
  content: '';
  z-index: -1;
  background-color: var(--color);
  border: 2px solid white;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotate(12deg);
  transition: .5s;
  opacity: 0.2;
   @media (max-width: 660px){
  visibility: hidden;
  }
}
&:hover {
  cursor: pointer;
  filter: brightness(1.2);
  transform: scale(1.1);
}
&:hover::before {
  transform: rotate(0deg);
  opacity: 1;
}
svg {
  transform: translateX(-200%);
  transition: .5s;
  width: 0;
  opacity: 0;
}
&:hover svg {
  width: 25px;
  transform: translateX(0%);
  opacity: 1;
}
&:active {
  filter: brightness(1.4);
}

`;

export const Btn = styled.div`
align-items: center;
justify-content: center;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  text-transform: uppercase;
  outline: 0;
  border: 0;
  padding: 1rem;
  @media (max-width: 660px){
    font-size: 14px;
    padding: 0;
  }
a{
  color: #fff;
  text-decoration: none;
}
&:before {
  background-color: #fff;
  content: "";
  display: inline-block;
  height: 1px;
  margin-right: 10px;
  transition: all .42s cubic-bezier(.25,.8,.25,1);
  width: 0;
}

&:hover:before {
  background-color: #fff;
  width: 3rem;
}
`;