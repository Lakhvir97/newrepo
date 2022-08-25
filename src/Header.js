import React from "react";

import { Div, Logo, List, Ul, Li, Button } from "./styled";

function Header() {
  return (
    <Div>
      <Logo>
        <img src="/images/witslogo.png" alt="logo"></img>
      </Logo>

      {/* <div className="menu-icon">
          <i class="fa-solid fa-bars"></i>
        </div> */}

      <List>
        <Ul>
          <Li>
            About Us<i class="fa-solid fa-angle-down"></i>
          </Li>

          <Li>Industry</Li>

          <Li>
            Services<i class="fa-solid fa-angle-down"></i>
          </Li>

          <Li>Career</Li>
        </Ul>
      </List>
      <Button>Let's Connect</Button>
    </Div>
  );
}

export default Header;
