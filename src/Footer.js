import React from "react";
import {
  LastSection,
  FooterLeft,
  FooterLogotextdiv,
  FooterLogodiv,
  FooterLogo,
  FooterText,
  Text,
  FooterLeftDiv,
  AboutUs,
  Au,
  AboutDrop,
  General,
  Gn,
  BlankDiv,
  Drop,
  GeneralDrop,
  Cont,
  Co,
  EmptyDiv,
  CoDrop,
  ContactUsDrop,
  ContDiv,
  RightFooter,
  Iconss,
  FollowUsR,
  FooterIcon,
  Icons,
  Sub,
  Subs,
  InputDiv,
  EmailLogo,
  Email,
  Subscribe,
  Lastbar,
  LeftDiv,
  Listt,
  RightDiv,
  MainFooter
} from "./Footerstyle";

function Footer() {
  return (
    <MainFooter>
      <LastSection>
        <FooterLeft>
          
          <FooterLogotextdiv>
            <FooterLogodiv>
              <FooterLogo
                src="./images/logo.svg"
                alt="wits-footer-logo"
              />
            </FooterLogodiv>

            <FooterText>
              <Text>
                Wits Innovation Lab is where creativity and innovation flourish.
                We provide the tools you need to come up with innovative
                solutions for today's businesses, big or small.
              </Text>
            </FooterText>
          </FooterLogotextdiv>

          <FooterLeftDiv>
            <AboutUs>
              <Au>About Us</Au>
              <AboutDrop>Services</AboutDrop>
              <AboutDrop>Case Studies</AboutDrop>
              <AboutDrop>Our Process</AboutDrop>
              <AboutDrop>Industries</AboutDrop>
            </AboutUs>
            <General>
              <Gn>General</Gn>
              <BlankDiv></BlankDiv>
              <Drop>
                <GeneralDrop>Company</GeneralDrop>
                <GeneralDrop>Career</GeneralDrop>
                <GeneralDrop>Blogs</GeneralDrop>
                <GeneralDrop>Contact Us</GeneralDrop>
              </Drop>
            </General>
            <Cont>
              <Co>Contact Us</Co>
              <EmptyDiv></EmptyDiv>
              <CoDrop>
                <ContactUsDrop>SCO 40-41 D, 3rd floor,</ContactUsDrop>
                <ContactUsDrop>City Heart, Kharar, Punjab-140301</ContactUsDrop>
                <ContDiv>
                  <ContactUsDrop>Unit 37 Tileyard Road, N7 9AH</ContactUsDrop>
                  <ContactUsDrop>California, United States</ContactUsDrop>
                </ContDiv>
              </CoDrop>
            </Cont>
          </FooterLeftDiv>
        </FooterLeft>

        <RightFooter>
          <Iconss>
            <FollowUsR>Follow Us</FollowUsR>
            <FooterIcon>
              <Icons src="./images/vector.svg" alt="linkedin" />
              <Icons src="./images/fb.svg" alt="fb" />
              <Icons src="./images/twitter.svg" alt="twitter" />
              <Icons src="./images/youtube.svg" alt="youtube" />
            </FooterIcon>
          </Iconss>

          <Sub>
            <Subs>Subscribe to Our Newsletter</Subs>
          </Sub>

          <InputDiv>
            <EmailLogo src="./images/mail.svg" alt="mail" />
            <Email type="text" placeholder="Enter Your Email" />
            <Subscribe>Subscribe</Subscribe>
          </InputDiv>
        </RightFooter>

      </LastSection>

      
      <Lastbar>

        <LeftDiv>
          <Listt>Terms & Conditions</Listt>
          <Listt>Privacy Policy</Listt>
          <Listt>Legal</Listt>
        </LeftDiv>


        <RightDiv>
          <Listt>
            Copyright © 2020. witsinnovationlab. All rights reserved.
          </Listt>
        </RightDiv>

      </Lastbar>
    </MainFooter>
  );
}

export default Footer;
