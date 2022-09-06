import React from "react";
import { Div, Logo, List, Ul, Li, Button,Services } from "./styled";

function Header() {
  return (
    <Div>
      <Logo>
        <img src="/images/witslogo.png" alt="logo"></img>
      </Logo>
      <List>
        <Ul>
    <Li>
            About Us<i class="fa-solid fa-angle-down"></i></Li>
        
          <Li>Industry</Li>
          <Services>
          Services<i class="fa-solid fa-angle-down"></i>

          </Services>
          <Li>Career</Li>
        </Ul>
      </List>
      <Button>Let's Connect</Button>
    </Div>
  );
}

export default Header;

