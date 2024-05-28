import styled from 'styled-components';

export const WrapperDiv = styled.div`
  .containerButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .button {
    display: block;
    padding: 12px 20px;
    border-radius: 12px;
    background-color: #3470ff;
    border: transparent;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #fbfbfb;
    transition: background-color 300ms linear, box-shadow 300ms linear;
    &:hover {
      background-color: #255ee8;
      outline: 1px solid #f3f3f3;
    }
  }
`;
