import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
  position: absolute;
  top: 108%;
  right: 0px;
  outline: none;
  border: transparent;
  box-shadow: 0 20px 69px 0 rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  background-color: #fff;
  padding: 16px 16px 8px 16px;
  width: 150px;
  height: 179px;
  border: 1px solid #ccc;
  z-index: 999;
`;

export const FixedHeader = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 8px;
  background-color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #191a15;
  z-index: 1;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  min-width: 0;
  padding: 8px;
  cursor: pointer;
  margin-right: 12px;
  color: ${props => (props.selected ? '#191a15' : ' rgba(25, 26, 21, 0.3)')};

  &:hover {
    color: ${props => (props.selected ? '#191a15' : ' rgba(25, 26, 21, 0.3)')};
  }
`;

export const StyledSwiper = styled(Swiper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 72%;
`;
