import React from 'react'
import {Mainfooter,Leftdiv,Div1,FooterLogo,Text,Line,ListContent,Listitem,Ul,Li,Line2,Lis, Listitem2,Lines,LastDiv,AdddressIndia,AddressUsa, 
  ContactUs,AddressP,LineDiv,RightWrapper,RightTop,FollowUS,Icons,IconsImg,RightBottom,Sub, Search,Email,Input,Btn} from "./Footerstyle"


function Footer() {
  return (
    <Mainfooter>
        <Leftdiv>
      <Div1>
      <FooterLogo>
        <img src="/images/logo.svg" alt="logo"></img>
      </FooterLogo>
      <Text>Wits Innovation Lab is where creativity and innovation flourish. We provide the tools 
        you need to <br></br>come up with innovative solutions for today's businesses, big or small.</Text>
        
      </Div1>
      <Line></Line>
      <ListContent>
<Listitem>
<Ul>
          <Li>
            About Us
          </Li>

          <Li>Industry</Li>

          <Li>
            Services
          </Li>

          <Li>Case Studies</Li>
          <Li>Our Process</Li>
          <Li>Industries</Li>
        </Ul>
</Listitem>
<Line2></Line2>
<Listitem2>
<Ul>
          <Li>
          General
          </Li>

          <Lis></Lis>

          <Li>
            Company
          </Li>

          <Li>Career</Li>
          <Li>Blogs</Li>
          <Li>Contact Us</Li>
        </Ul>
</Listitem2>
<Line2></Line2>
<LastDiv>
            <ContactUs>Contact Us</ContactUs>
            <Lines></Lines>
            <AdddressIndia>
              SCO 40-41 D, 3rd floor,
              <AddressP> City Heart, Kharar, Punjab-140301</AddressP>
            </AdddressIndia>
            <AddressUsa>
              Unit 37 Tileyard Road, N7 9AH <p> California, United States</p>
            </AddressUsa>
          </LastDiv>
      </ListContent>
      
      </Leftdiv>
      
      <LineDiv></LineDiv>
      <RightWrapper>
        <RightTop>
          <FollowUS>Follow US</FollowUS>
          <Icons>
            <IconsImg src="../images/linkedin.svg" />
            <IconsImg src="../images/fb.svg" />
            <IconsImg src="../images/twitter.svg" />
            <IconsImg src="../images/youtube.svg" />
          </Icons>
        </RightTop>

        <RightBottom>
          <Sub>Subscribe to Our Newsletter</Sub>
          <Search>
            <Email src="../images/email.svg" />
            <Input type="text" placeholder="Enteryour Email" />
            <Btn value="Submit">Subscribe</Btn>
          </Search>
        </RightBottom>
      </RightWrapper>
    </Mainfooter>
  )
}

export default Footer
