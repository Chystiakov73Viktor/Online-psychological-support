import styled from "styled-components";

export const LiWrapper = styled.li`
  position: relative;
  border-radius: 30px;
  padding: 20px;
  background: #fbfbfb;

  @media screen and (min-width: 768px) {
    padding: 64px;
    width: 599px;
  }

  .buttonIcon {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }

  .titleReception {
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #191a15;
    margin-bottom: 20px;
  }

  .textReception {
    line-height: 1.25;
    color: rgba(25, 26, 21, 0.5);
    margin-bottom: 40px;
  }

  .containerAvatar {
    display: flex;
    gap: 14px;
    margin-bottom: 40px;
  }

  .backgroundDiv {
    width: 44px;
    height: 44px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px;
  }

  .textYour {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33333;
    color: #8a8a89;
    margin-bottom: 4px;
  }

  .textName {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #191a15;
  }
`;
