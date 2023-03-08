import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
} from "./style";
import logo from '../../assets/artzLogo.png';

const Header = () => {
  return (
    <Container>
      <Wrapper>
            <Left>
              <Logo src={logo}/>
            </Left>
            <Right>
            </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
