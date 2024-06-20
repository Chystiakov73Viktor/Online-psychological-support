import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { device } from '../device';

export const StyledMenuIcon = styled(MenuIcon)`
  color: black;
`;

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 0;

  .logWrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .mobileMenuIcon {
    display: block;
    cursor: pointer;
  }

  @media ${device.tablet} {
    .mobileMenuIcon {
      display: none;
    }
  }
`;
