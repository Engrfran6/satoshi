import {styled} from 'styled-components';
import {images} from '../helpers/ImgCarosel';
import {MdOutlineArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import {useState, useRef, useEffect} from 'react';

export const Header = () => {
  const [currImg, setCurrImg] = useState(0);
  const timeoutRef = useRef(null);
  const imgSlideFuncLeft = () => {
    if (currImg > 0) {
      setCurrImg(currImg - 1);
    }
  };
  const imgSlideFuncRight = () => {
    if (currImg < images.length - 1) {
      setCurrImg(currImg + 1);
    }
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrImg((prevCurrImg) => (prevCurrImg === images.length - 1 ? 0 : prevCurrImg + 1)),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [currImg]);

  const CarouselStyle = styled.div`
    /* padding: 0 6rem; */

    .header {
      display: flex;
      background-image: url(${images[currImg].img});
      /* width: 100%; */
      height: 93.5vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      color: #aae551;

      .left {
        flex: 5%;
        /* height: 100%; */
        /* background-color: black; */
        opacity: 0.6;
        display: grid;
        place-items: center;
        color: white;
        font-size: 5rem;
        cursor: pointer;
      }
      .center {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        padding-left: 5rem;
        flex: 70%;
        height: 100%;
        color: white;
        h1 {
          font-size: 3.2rem;
          padding-right: 50%;
          line-height: 3.6rem;
          color: white;
        }
        h2 {
          font-size: 2.3rem;
          margin: 1.4rem 0 0.9rem 0;
          color: white;
        }
        .btn_action {
          display: flex;
          gap: 2rem;

          button {
            background-color: ${currImg === 0 ? ' #242121' : '#de2c2c'};
            border-radius: 2rem;
            padding: 0.7rem 2.3rem;
            font-weight: bold;
          }
          button:hover {
            background-color: white;
            color: ${currImg === 0 ? 'rgb(218,114,67)' : '#de2c2c'};
          }
        }
      }
      .right {
        flex: 5%;
        /* height: 100%; */
        /* background-color: #242121; */
        opacity: 0.6;
        display: grid;
        place-items: center;
        color: white;
        font-size: 5rem;
        cursor: pointer;
      }

      @media screen and (max-width: 1024px) {
        padding: 0 rem;
        height: 30rem;
      }
    }
  `;

  return (
    <CarouselStyle>
      <div className="header">
        <div className="left" onClick={imgSlideFuncLeft}>
          <MdOutlineArrowBackIosNew />
        </div>
        <div className="center">
          <h1>{images[currImg].imgTitle}</h1>
          <h2>{images[currImg].imgText}</h2>
        </div>
        <div className="right" onClick={imgSlideFuncRight}>
          <MdArrowForwardIos />
        </div>
      </div>
    </CarouselStyle>
  );
};
