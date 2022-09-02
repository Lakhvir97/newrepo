import React from 'react'
import {ClientDiv, ClientPeraHead,ClientHeading,BorderDiv,SmallHeading,NextPera,FirstImgs,
    HerbalLife,
    ImgDiv,
    SecondImgs,
    Earn,
    Trepp,
    Farms,
    Affinidi,
    Bcg,
    Hermes,
    Designwork,
    Moonverse,
    Payu,} from './FifthStyle'
function FifthSection() {
  return (
    <ClientDiv>
      <ClientPeraHead>See who's winning with us</ClientPeraHead>
      <ClientHeading>Our Clients</ClientHeading>
      <BorderDiv></BorderDiv>
      <SmallHeading>
        These powerhouses are already winning business with us.
        <NextPera>
          We love what we do, and we hope you'll let us help you too.
        </NextPera>
      </SmallHeading>
      <ImgDiv>
      <FirstImgs>
        <HerbalLife src="./images/nutrition.png" alt="nutri" />
        <Trepp src="./images/trepp.png" alt="nutri" />
        <Farms src="./images/farms.png" alt="nutri" />
        <Affinidi src="./images/affinidi.png" alt="nutri" />
        <Bcg src="./images/bcg.png" alt="nutri" />
      </FirstImgs>
      <SecondImgs>
        <Earn src="./images/earn.png" alt="nutri" />
        <Hermes src="./images/hermes.png" alt="nutri" />
        <Designwork src="./images/designwork.png" alt="nutri" />
        <Moonverse src="./images/moonverse.png" alt="nutri" />
        <Payu src="./images/payu.png" alt="nutri" />
      </SecondImgs>
    </ImgDiv>
    </ClientDiv>
  )
}

export default FifthSection
