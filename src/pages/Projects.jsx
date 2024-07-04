import React, { useRef, useEffect, useState } from 'react';
import * as Styled from './style';
import { projectsData } from './data';

const scrollAmount = 300;
// const cardWidth = 36; // Adjust according to your card width percentage

export const Projects = () => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle automatic scrolling
  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(() => {
        if (cardRef.current) {
          cardRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
          });
        }
      }, 3000); // Adjust the interval time as needed

      return () => clearInterval(intervalId);
    }
  }, [isHovered]);

  // Function to handle manual scrolling to the left
  const scrollLeft = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Function to handle manual scrolling to the right
  const scrollRight = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Function to handle resetting scroll position on loop
  const handleScrollEnd = () => {
    if (cardRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = cardRef.current;
      if (scrollLeft + clientWidth >= scrollWidth) {
        cardRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <Styled.Container>
      <Styled.ScrollButton className="left" onClick={scrollLeft}>
        {'<'}
      </Styled.ScrollButton>
      <Styled.Card ref={cardRef} onScroll={handleScrollEnd}>
        {projectsData?.map((item, index) => (
          <Styled.FirstContent
            key={index}
            $background={item.src}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Styled.SecondContent>
              <h3>{item.heading}</h3>
              <p>{item.para}</p>
              <Styled.Btn><a href={item.link}>{item.button}</a></Styled.Btn>
            </Styled.SecondContent>
          </Styled.FirstContent>
        ))}
      </Styled.Card>
      <Styled.ScrollButton className="right" onClick={scrollRight}>
        {'>'}
      </Styled.ScrollButton>
    </Styled.Container>

  );
};
