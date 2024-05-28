import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* align-items: center; */
    /* justify-content: center; */
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .containerText {
    width: 100%;
    max-width: 595px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    .containerText {
      margin: 0;
      margin-right: 20px;
    }
  }

  .containerImg {
    width: 100%;
    max-width: 464px;
    position: relative;
    height: auto;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    .containerImg {
      margin: 0;
    }
  }

  .heroTitle {
    width: 100%;
    font-weight: 600;
    font-size: 48px;
    line-height: 1.025;
    letter-spacing: -0.02em;
    color: #191a15;
    margin-bottom: 20px;
  }

  .depths {
    font-style: italic;
    color: #3470ff;
  }

  .heroText {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33333;
    letter-spacing: -0.02em;
    color: #191a15;
    margin-bottom: 40px;
  }

  .heroButton {
    border: transparent;
    border-radius: 30px;
    padding: 18px 50px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #fbfbfb;
    background-color: #3470ff;
    transition: background-color 300ms linear, box-shadow 300ms linear;
    &:focus,
    &:hover {
      background-color: #255ee8;
    }
  }

  .containerCheck {
    /* position: absolute; */
    bottom: 75px;
    left: -101px;
    display: flex;
    align-items: center;
    padding: 32px;
    border-radius: 20px;
    background-color: #3470ff;
  }

  .textCheck {
    font-size: 14px;
    color: rgba(251, 251, 251, 0.5);
    margin-bottom: 8px;
  }

  .textNumber {
    font-weight: 700;
    font-size: 24px;
    color: #fbfbfb;
  }

  .containerFaCheck {
    padding: 14px;
    border-radius: 8px;
    background-color: #fff;
    margin-right: 16px;
  }

  .containerQuestionMark,
  .containerPeople {
    position: absolute;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .containerQuestionMark {
    top: 201px;
    left: -33px;
    background: #54be96;
    transform: rotate(-15deg);
  }

  .containerPeople {
    top: 38px;
    right: -33px;
    background: #fbc75e;
    transform: rotate(15deg);
  }

  @media screen and (max-width: 768px) {
    .heroTitle {
      font-size: 36px;
    }

    .heroText {
      font-size: 16px;
    }

    .heroButton {
      padding: 15px 40px;
      font-size: 18px;
    }

    .containerCheck {
      padding: 15px;
    }

    .containerQuestionMark,
    .containerPeople {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    .containerCheck {
      position: absolute;
    }
  }

  @media screen and (min-width: 1440px) {
    .heroTitle {
      width: 595px;
      font-size: 80px;
    }
  }
`;

// import styled from "styled-components";

// export const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   .heroTitle {
//     width: 595px;
//     font-weight: 600;
//     font-size: 80px;
//     line-height: 1.025;
//     letter-spacing: -0.02em;
//     color: #191a15;
//     margin-bottom: 20px;
//   }

//   .depths {
//     font-style: italic;
//     color: #3470ff;
//   }

//   .heroText {
//     width: 510px;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 1.33333;
//     letter-spacing: -0.02em;
//     color: #191a15;
//     margin-bottom: 40px;
//   }

//   .heroButton {
//     border: transparent;
//     border-radius: 30px;
//     padding: 18px 50px;
//     font-family: "Inter", sans-serif;
//     font-weight: 500;
//     font-size: 20px;
//     line-height: 1.2;
//     letter-spacing: -0.01em;
//     color: #fbfbfb;
//     background-color: #3470ff;
//     transition: background-color 300ms linear, box-shadow 300ms linear;
//     &:focus,
//     &:hover {
//       background-color: #255ee8;
//     }
//   }

//   .containerImg {
//     position: relative;
//     width: 464px;
//     height: 526px;
//   }

//   .psychologistImg {
//     width: 100%;
//     height: auto;
//     border-radius: 10px;
//     object-fit: cover;
//   }

//   .containerCheck {
// position: absolute;
// bottom: 75px;
// left: -101px;
// display: flex;
// align-items: center;
// padding: 32px;
// border-radius: 20px;
// background-color: #3470ff;
//   }

// .containerFaCheck {
//   padding: 14px;
//   border-radius: 8px;
//   background-color: #fff;
//   margin-right: 16px;
// }

// .textCheck {
//   font-size: 14px;
//   color: rgba(251, 251, 251, 0.5);
//   margin-bottom: 8px;
// }

// .textNumber {
//   font-weight: 700;
//   font-size: 24px;
//   color: #fbfbfb;
// }

//   .containerQuestionMark {
//     position: absolute;
// top: 201px;
// left: -33px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// border-radius: 10px;
// width: 40px;
// height: 40px;
// background: #54be96;
// transform: rotate(-15deg);
//   }

//   .containerPeople {
//    position: absolute;
//     top: 38px;
//     right: -33px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 10px;
//     width: 40px;
//     height: 40px;
//     background: #fbc75e;
//     transform: rotate(15deg);
//   }
// `;
