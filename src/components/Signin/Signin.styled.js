import styled from 'styled-components';

export const SigninPageWrapper = styled.div`
  position: relative;
  border-radius: 30px;
  width: 566px;
  padding: 64px;
  background: #fbfbfb;
  .buttonIcon {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }
  .signinTitle {
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #191a15;
    margin-bottom: 20px;
  }
  .signinText {
    line-height: 1.25;
    color: rgba(25, 26, 21, 0.5);
    margin-bottom: 40px;
  }
  .signinForm {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .inputSignin {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    padding: 16px 18px;
    width: 100%;
    height: 54px;
    line-height: 1.25;
    color: #191a15;
    &::placeholder {
      color: #191a15;
    }
    &:focus {
      outline: none;
      border: 1px solid rgba(18, 20, 23, 0.05);
    }
  }
  .buttonSignin {
    border-radius: 30px;
    padding: 16px;
    width: 100%;
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
