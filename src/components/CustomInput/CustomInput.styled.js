import styled from 'styled-components';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 40px;
  background: #fbfbfb;

  .lebel {
    width: 100%;
    height: 100%;
  }

  .containerLabel {
    position: relative;
  }

  .spanLabel {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    line-height: 1.25;
    color: #191a15;
  }

  .input {
    border: 1px solid rgba(25, 26, 21, 0.1);
    background-color: inherit;
    border-radius: 12px;
    padding: 16px 18px 16px 18px;
    width: 100%;
    height: 52px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.25;
    color: #191a15;
    &:focus {
      outline: none;
      border: 1px solid rgba(18, 20, 23, 0.05);
    }
  }

  .inputName {
    padding-left: 70px;
  }

  .inputEmail {
    padding-left: 64px;
  }

  .inputNumber {
    padding-left: 60px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    .inputNumber {
      margin-bottom: 0;
    }
  }

  .inputTime {
    padding: 16px;
  }

  @media screen and (min-width: 768px) {
    .containerNumber {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .spanTime {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    line-height: 1.25;
    color: #191a15;
  }

  .textarea {
    width: 100%;
    height: 116px;
    padding: 16px 18px;
    border: 1px solid rgba(25, 26, 21, 0.1);
    background-color: inherit;
    border-radius: 12px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.25;
    color: #191a15;
    outline: none;
    resize: none;
    &::placeholder {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.25;
      color: #191a15;
    }
  }
`;
