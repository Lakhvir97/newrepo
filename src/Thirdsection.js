import React from 'react'
import {Div , Line , Image , Img , Text ,Para ,  Heading ,Content, Text2 , Heading1, Para2, BlueLine, RatingSection, Text3, Paraa, Code,First, Text4, Paraa1, Code1, Second,Last, Paraa2, Code2} from "./Thirdstyle"

function Thirdsection() {
  return (
    <Div>
        <Line></Line>
        <Image><Img src="./images/secondimg.png" alt="img"/></Image>
        <Text>
        <Para>Let us tell a story of</Para>
        <Heading>Our Numbers</Heading>
        </Text>
        <Content>
            <Text2>
                <Heading1>When you see our numbers, you'll know why we're the best.</Heading1>
                 <Para2> We're a fastest growing community working hard to make things happen. We've got a lot of hands-on cumulative experience
                  and a good amount of fire under our tails, though we are young.</Para2></Text2>
                  <BlueLine></BlueLine>
                  <RatingSection>
                    <Text3>
                        <Paraa>500k +
                        </Paraa>
                        <Code> Lines of Code</Code>
                    </Text3>
                    <First></First>
                    <Text4>
                        <Paraa1>140+
                        </Paraa1>
                        <Code1> Team Members</Code1>
                    </Text4>
                    <Second></Second>
                    <Last>
                        <Paraa2>65+
                        </Paraa2>
                        <Code2> Completed Projects</Code2>
                    </Last>
                    {/* <Third></Third> */}
                  </RatingSection>
        </Content>
    </Div>
  )
}

export default Thirdsection
