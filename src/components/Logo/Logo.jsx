import { WrapperDiv } from "./Logo.styled";

export const Logo = () => {
  return (
    <WrapperDiv>
      <h2 className="titleLogo">
        psychologists<span className="point">.</span>
        <span className="services">services</span>
      </h2>
    </WrapperDiv>
  );
};
