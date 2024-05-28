import styled from "styled-components";

export const Form = styled.form`
  .buttonSubmit {
    border-radius: 30px;
    padding: 16px;
    width: 100%;
    background-color: #3470ff;
    border: transparent;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #fbfbfb;
    transition: background-color 300ms linear, box-shadow 300ms linear;
    &:focus,
    &:hover {
      background-color:  #255ee8;
    }
  }
`;
