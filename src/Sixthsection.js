
import React from "react";

import {
  Testimonial,
  ImgLeft,
  SideImg,
  Content,
  Pera4,
  Head,
  Span4,
  Pera5,
  ArrowImg,
  LeftArrow,
  RightArrow,
  Div,
  Profile,
  // Cot,
  Child,
  First,
  Girl,
  Second,
  Jane,
  JaneP,
  JanePost,
  ImgStar,
  Star,
  Null,
  Child2,
  Des,
} from "./SixthStyle";

function Sixthsection() {
  return (
    <Testimonial>
      <ImgLeft>
        <SideImg src="./images/sliderSideImg.png" alt="sideImg" />
      </ImgLeft>
      <Content>
        <Pera4>See our success in</Pera4>
        <Head>Testimonials</Head>

        <Span4>We Are The Best, And Our Customers Say It.</Span4>
        <Div>
          <Pera5>
            We've never been ones to brag, but we can't help but share some of
            the feedback we've gotten from our clients. Take a look at what they
            have to say about us:
          </Pera5>

          <ArrowImg>
            <LeftArrow src="./images/leftarrow.png" alt="left" />
            <RightArrow src="./images/rightarrow.png" alt="right" />
          </ArrowImg>
        </Div>
        <Profile>
          {/* <Cot src="./images/comas.png" alt="comas" /> */}
          <Child>
            <First>
              <Girl src="./images/profile.png" alt="profile" />
            </First>
            <Second>
              <Jane>
                <JaneP>Jane Cooper</JaneP>
                <JanePost>Manager at Google</JanePost>
                <ImgStar>
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Null src="./images/nullstar.png" alt="null" />
                </ImgStar>
              </Jane>
            </Second>
          </Child>
          <Child2>
            <Des>
              "Thanks guys, keep up the good work! I wish I would have thought
              of it first. It's incredible. I don't always clop, but when I do,
              it's because of Wits Innovation Lab."
            </Des>
          </Child2>
        </Profile>
      </Content>
    </Testimonial>
  );
}

export default Sixthsection;