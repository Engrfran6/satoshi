import {css, styled} from 'styled-components';
import {images} from '../helpers/ImgCarosel';
import {MdOutlineArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import {useState, useRef, useEffect} from 'react';

const CarouselStyle = styled.div`
  /* padding: 0 6rem; */

  .header {
    display: flex;
    background-image: url(${(props) => images[props.currimg].img});
    /* width: 100%; */
    height: 93.5vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #aae551;

    .left {
      flex: 1%;
      height: 100%;
      background-color: #242121;
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
      flex: 78%;
      height: 100%;
      color: white;
      h1 {
        font-size: 3.2rem;
        font-weight: bold;
        padding-right: 50%;
        line-height: 3.6rem;
        color: white;
      }
      h2 {
        font-size: 2.3rem;
        margin: 1.4rem 0 0.9rem 0;
        color: green;
        background-color: white;
        padding: 1rem 6rem;
        border-radius: 3rem 0.5rem 7rem 0;
      }
    }
    .right {
      flex: 1%;
      height: 100%;
      background-color: #242121;
      opacity: 0.6;
      display: grid;
      place-items: center;
      color: white;
      font-size: 5rem;
      cursor: pointer;
    }

    @media screen and (min-width: 725px) {
      .center {
        align-items: start;
        padding: 7rem 0 0 0;

        h1 {
          font-size: 2.4rem;
          font-weight: bold;
          padding-right: 40%;
          line-height: 3rem;
          color: white;
        }
        h2 {
          font-size: 1.6rem;
          margin: 7rem 0 0.1rem 0;
          color: green;
          background-color: white;
          padding: 0.3rem 4rem;
        }
      }
    }
    @media screen and (max-width: 724px) {
      padding: 5% rem;
      height: 93vh;

      .center {
        h1 {
          font-size: 2rem;
          font-weight: bold;
          padding-right: 5%;
          line-height: 2rem;
        }
        h2 {
          font-size: 1rem;
          margin: 7rem 0 0.1rem 0;
          padding: 0.3rem 4rem;
        }
      }
      .center {
        flex: 100%;
        padding: 25% 2% 0 2%;
      }
    }
  }
`;

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

  return (
    <CarouselStyle currimg={currImg}>
      <div className="header">
        <div className="left" onClick={imgSlideFuncLeft}>
          <MdOutlineArrowBackIosNew />
        </div>

        <div className="center">
          <h1>{images[currImg].imgTitle}</h1>
          <br />
          <br />

          <h2>{images[currImg].imgText}</h2>
        </div>

        <div className="right" onClick={imgSlideFuncRight}>
          <MdArrowForwardIos />
        </div>
      </div>
    </CarouselStyle>
  );
};
