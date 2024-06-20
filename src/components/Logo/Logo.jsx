import { WrapperDiv } from './Logo.styled';

export const Logo = () => {
  return (
    <WrapperDiv>
      <p className="titleLogo">
        psychologists<span className="point">.</span>
        <span className="services">services</span>
      </p>
    </WrapperDiv>
  );
};
