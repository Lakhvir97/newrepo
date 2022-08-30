import React from "react";
import { MainContainer, Left , Heading ,Pera , Span , Image , Img ,Button ,Btn , Btns , Icons ,Para , Line , Icon  ,Li} from "./secondstyle";
// import { Div } from "./styled";

function Secondsection() {
  return (
    <MainContainer> 
    <Left>
      <Heading>
      We're not just IT. We're a <Span>Business Transformation Company.</Span>
      </Heading>
      <Pera>
      We are more than just a business. We're a community of like-minded individuals who share our love for <br></br>connecting people with the best in their area.
      </Pera>
      
      <Button><Btn>Tell Us About your Project</Btn>
      <Btns><i class="fa-solid fa-angle-right"></i></Btns></Button>
      <Icons>
        <Para>Follow US</Para>
        <Line></Line>
        <Icon>
          <Li>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-twitter"></i>
        <i class="fa-brands fa-square-youtube"></i></Li>
        </Icon>
      </Icons>
      
    </Left>
    
    <Image><Img src="./images/group.png" alt="img"/></Image>
    

    </MainContainer>


  );
}

export default Secondsection;
