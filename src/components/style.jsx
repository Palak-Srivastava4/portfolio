import styled from 'styled-components'

export const ArrowBtn = styled.div`
margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  /* background-color: black; */
  --border-right: 6px;
  --text-stroke-color: rgba(255, 255, 255, 0.701);
  --animation-color: #ffffff;
  --fs-size: 38px;
  letter-spacing: 2px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  /* text-transform: uppercase; */
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
@media (max-width: 660px){
  --fs-size: 12px;
}

.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}

&:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
}
`;