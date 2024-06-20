import styled from 'styled-components';

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  .buttonLogin {
    border: 1px solid rgba(25, 26, 21, 0.2);
    border-radius: 30px;
    padding: 14px 39px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #191a15;
  }

  .buttonRegistration {
    border-radius: 30px;
    padding: 14px 40px;
    background: #3470ff;
    border: transparent;
    cursor: pointer;
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
