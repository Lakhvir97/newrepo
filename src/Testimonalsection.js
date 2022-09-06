
import React from "react";

import {
  Testimonial,
  ImgLeft,
  SideImg,
  Content,
  Head1,
  Head2,
  SpanText,
  Textthird,
  ArrowIcon,
  LeftArrow,
  RightArrow,
  LongText,
  ImagesCard,
  Contentdiv,
  First,
  Girl,
  Second,
  Janediv,
  JaneP,
  Janepara,
  ImgStar,
  Star,
  Null,
  Contentdiv2,
  ContextLong,
} from "./Testimonalstyle";

const Testimonalsection = () => {
  return (

    <Testimonial>
      <ImgLeft>
        <SideImg src="./images/sliderSideImg.png" alt="sideImg" />
      </ImgLeft>

      <Content>
        <Head1>See our success in</Head1>
        <Head2>Testimonials</Head2>

        <SpanText>We Are The Best, And Our Customers Say It.</SpanText>

        <LongText>
          <Textthird>
            We've never been ones to brag, but we can't help but share some of
            the feedback we've gotten from our clients. Take a look at what they
            have to say about us:
          </Textthird>

          <ArrowIcon>
            <LeftArrow src="./images/leftarrow.png" alt="left" />
            <RightArrow src="./images/rightarrow.png" alt="right" />
          </ArrowIcon>
        </LongText>

        <ImagesCard>
          <Contentdiv>
            <First>
              <Girl src="./images/profile.png" alt="profile" />
            </First>
            <Second>
              <Janediv>
                <JaneP>Jane Cooper</JaneP>
                <Janepara>Manager at Google</Janepara>
                <ImgStar>
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Star src="./images/fillstar.png" alt="fill" />
                  <Null src="./images/nullstar.png" alt="null" />
                </ImgStar>
              </Janediv>
            </Second>
          </Contentdiv>
          <Contentdiv2>
            <ContextLong>
              "Thanks guys, keep up the good work! I wish I would have thought
              of it first. It's incredible. I don't always clop, but when I do,
              it's because of Wits Innovation Lab."
            </ContextLong>
          </Contentdiv2>
        </ImagesCard>
      </Content>
    </Testimonial>
  );
}

export default Testimonalsection;