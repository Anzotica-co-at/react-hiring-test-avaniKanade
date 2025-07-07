import React from 'react';
import logo from '../assets/images/ritz-logo.png';
import { FaGlobe } from 'react-icons/fa';

import {
  Header,
  Container,
  TopRow,
  Brand,
  LogoImage,
  RightControls,
  TopActions,
  Language,
  SignInButton,
  NavRow,
  NavLinks,
  ReserveButton
} from './HeaderStyles';

const HeaderComponent = () => (
  <Header>
    <Container>
      <TopRow>
        <Brand>
          <LogoImage src={logo} alt="The Ritz-Carlton" />
        </Brand>
        <RightControls>
          <TopActions>
            <Language><FaGlobe /> English</Language>
            <SignInButton>Sign in or Join</SignInButton>
          </TopActions>
        </RightControls>
      </TopRow>

      <NavRow>
        <NavLinks>
          <a href="#">Hotels & Resorts</a>
          <a href="#">Ritz-Carlton Reserve</a>
          <a href="#">Residences</a>
          <a href="#">Yachts</a>
          <a href="#">About The Ritz-Carlton</a>
          <a href="#">The Journey</a>
        </NavLinks>
        <ReserveButton>Reserve Now</ReserveButton>
      </NavRow>
    </Container>
  </Header>
);

export default HeaderComponent;
