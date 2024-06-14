import { NavLink } from "react-router-dom";
import { WrapperDiv } from "./Logo.styled";

export const Logo = () => {
  return (
    <WrapperDiv>
      <NavLink className="titleLogo" to="/">
        psychologists<span className="point">.</span>
        <span className="services">services</span>
      </NavLink>
    </WrapperDiv>
  );
};
