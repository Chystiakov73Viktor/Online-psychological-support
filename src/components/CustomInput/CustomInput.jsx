import { useState } from "react";
import { WrapperDiv } from "./CustomInput.styled";
import { MdOutlineAccessTime } from "react-icons/md";
import TimePicker from "../TimePicker/TimePicker";

const CustomInput = ({ formik }) => {
  const [isTimeSelectOpen, setTimeSelectOpen] = useState(false);
  const { handleChange, handleBlur, values, touched, errors } = formik;

  const toggleTimeSelect = () => {
    setTimeSelectOpen(!isTimeSelectOpen);
  };

  const handleTimeSelect = (time) => {
    formik.setFieldValue('time', time); 
    setTimeSelectOpen(false); 
  };

  return (
    <WrapperDiv>
      <label className="label">
        <div className="containerLabel">
          <span className="spanLabel">Name</span>
          <input
            className="input inputName"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {touched.name && errors.name ? (
          <div className="error">{errors.name}</div>
        ) : null}
      </label>
      <div className="containerNumber">
        <label className="label">
          <div className="containerLabel">
            <span className="spanLabel">+380</span>
            <input
              className="input inputNumber"
              type="tel"
              name="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.number && errors.number ? (
            <div className="error">{errors.number}</div>
          ) : null}
        </label>
        <label className="label">
          <div className="containerLabel">
            <span className="spanTime" onClick={toggleTimeSelect}>
              <MdOutlineAccessTime />
            </span>
            {isTimeSelectOpen && <TimePicker onSelect={handleTimeSelect} />}
            <input
              className="input inputTime"
              placeholder="00:00"
              type="text"
              name="time"
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.number && errors.number ? (
            <div className="error">{errors.number}</div>
          ) : null}
        </label>
      </div>
      <label className="label">
        <div className="containerLabel">
          <span className="spanLabel">Email</span>
          <input
            className="input inputEmail"
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {touched.email && errors.email ? (
          <div className="error">{errors.email}</div>
        ) : null}
      </label>
      <label className="label">
        <textarea
          className="textarea"
          placeholder="Comment"
          name="text"
          value={values.text}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.text && errors.text ? (
          <div className="error">{errors.text}</div>
        ) : null}
      </label>
    </WrapperDiv>
  );
};

export default CustomInput;
