import styled from "styled-components";
// import { device } from '../device';

export const FormWrapper = styled.form`
margin-bottom: 32px;

  .labelText {
    display: block;
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: #8a8a89;
  }

  .filtersWidth {
    width: 226px;
  }
`;

export const CustomStyles = {
  control: (provided) => ({
    ...provided,
    padding: "16px",
    cursor: "pointer",
    fontFamily: ["Roboto", "sans-serif"],
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: 1.11111,
    color: "#fbfbfb",
    boxShadow: "none",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    borderRadius: "14px",
    backgroundColor: "#3470ff",
    outline: "none",
    borderColor: "transparent",
    "&:hover": {
      borderColor: "rgba(18, 20, 23, 0.05)",
    },
    // height: 'auto',
    // [`@media ${device.tablet}`]: {
    //   width: '199px',
    //   fontSize: '17px',
    //   lineHeight: '1.56',
    // },
  }),
  singleValue: (provided) => ({
    ...provided,
    backgroundColor: "#3470ff",
    color: "#fbfbfb",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  placeholder: (provided) => ({
    ...provided,
    padding: 0,
    width: "100%",
    backgroundColor: "#f7f7fb",
    fontFamily: ["Inter", "sans-serif"],
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "1.11111",
    color: "#fbfbfb",
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
    fontFamily: ["Inter", "sans-serif"],
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: 1.25,
    color: "rgba(25, 26, 21, 0.3);",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    borderRadius: "14px",
    backgroundColor: "#f7f7fb",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
    color: "#fbfbfb",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: 0,
    color: "#fbfbfb",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  Input2: (provided) => ({
    ...provided,
    color: "#fbfbfb",
  }),
};
