import styled from 'styled-components';
import { device } from '../device';

export const LiWrapper = styled.li`
  position: relative;
  border-radius: 24px;
  padding: 24px;
  background: #fff;

  @media ${device.tablet} {
    display: flex;
  }

  .buttonIcon {
    position: absolute;
    top: 24px;
    right: 24px;
    padding: 0;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }

  .avatar {
    position: relative;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    border: 3px solid #fbe9ba;
    border-radius: 30px;
    width: 120px;
    height: 120px;
  }

  @media ${device.tablet} {
    .avatar {
      border: 2px solid rgba(52, 112, 255, 0.2);
      border-radius: 30px;
      margin: 0;
      margin-right: 24px;
      margin-bottom: 0;
    }
  }

  .avatarUrl {
    border-radius: 15px;
    width: 96px;
    height: 96px;
  }

  .avatarEllipse {
    position: absolute;
    top: 12px;
    right: 9px;
    transform: translate(-50%, -50%);
  }

  .avatarEllipseOutline {
    position: absolute;
    top: 14px;
    right: 6px;
    transform: translate(-50%, -50%);
  }

  .containerInfo {
    flex: 1;
  }

  .listInfo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 8px;
  }

  .itemInfo {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
  }

  .itemInfo:first-child {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #8a8a89;
    margin-right: 16px;
  }
  @media ${device.tablet} {
    .itemInfo:first-child {
      margin-right: auto;
    }
    .itemInfo:last-child {
      margin-right: 54px;
    }
  }
  @media ${device.desktop} {
    .itemInfo:first-child {
    }
  }

  .itemInfo:not(:first-child):not(:last-child)::after {
    content: '|';
    width: 1px;
    color: rgba(18, 20, 23, 0.2);
    margin-left: 16px;
    margin-right: 16px;
  }

  .starIcon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .price {
    color: #38cd3e;
  }

  .titleName {
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    color: #191a15;
    margin-bottom: 24px;
  }

  .listExperience {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 4px;
    row-gap: 8px;
    margin-bottom: 24px;
  }

  .buttonExperience {
    border-radius: 24px;
    border: transparent;
    padding: 8px 16px;
    background-color: #f3f3f3;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #8a8a89;
  }

  .experience {
    color: #191a15;
  }

  .buttonReadMore {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #191a15;
    border: transparent;
    background: inherit;
    outline: none;
  }

  .aboutText {
    line-height: 1.25;
    color: rgba(25, 26, 21, 0.5);
    margin-bottom: 14px;
  }

  .containerReviews {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
  }

  .containerRating {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .avatarReviews {
    background: rgba(52, 112, 255, 0.2);
    border-radius: 100px;
    width: 44px;
    height: 44px;
  }

  .itemReviews {
    margin-bottom: 25px;
  }

  .itemReviews:last-child {
    margin-bottom: 40px;
  }

  .buttonReception {
    border-radius: 30px;
    padding: 14px 32px;
    background-color: #3470ff;
    border: transparent;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #fbfbfb;
    transition: background-color 300ms linear, box-shadow 300ms linear;
    &:focus,
    &:hover {
      background-color: #255ee8;
    }
  }
`;
