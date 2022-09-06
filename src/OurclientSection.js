import React from 'react'
import {OurClientDiv, ClientHeading1,ClientHeading2,Borderline,Heading3,ParaText2,FirstImagesdiv,
    HerbalLife,
    ImagesDiv,
    SecondImagesdiv,
    Earn,
    Trepp,
    Farms,
    Affinidi,
    Bcg,
    Hermes,
    Designwork,
    Moonverse,
    Payu,} from './Ourclientstyle'
function OurclientSection() {
  return (
    <OurClientDiv>

      <ClientHeading1>See who's winning with us</ClientHeading1>
      <ClientHeading2>Our Clients</ClientHeading2>

      <Borderline></Borderline>

      <Heading3>
        These powerhouses are already winning business with us.
        <ParaText2>
          We love what we do, and we hope you'll let us help you too.
        </ParaText2>
      </Heading3>

      <ImagesDiv>
      <FirstImagesdiv>
        <HerbalLife src="./images/nutrition.png" alt="nutri" />
        <Trepp src="./images/trepp.png" alt="nutri" />
        <Farms src="./images/farms.png" alt="nutri" />
        <Affinidi src="./images/affinidi.png" alt="nutri" />
        <Bcg src="./images/bcg.png" alt="nutri" />
      </FirstImagesdiv>

      <SecondImagesdiv>
        <Earn src="./images/earn.png" alt="nutri" />
        <Hermes src="./images/hermes.png" alt="nutri" />
        <Designwork src="./images/designwork.png" alt="nutri" />
        <Moonverse src="./images/moonverse.png" alt="nutri" />
        <Payu src="./images/payu.png" alt="nutri" />
      </SecondImagesdiv>
    </ImagesDiv>
    </OurClientDiv>
  )
}

export default OurclientSection;
