import React from 'react'
import {Container,Form, Content, Head, Para,Text,Image,Input, Have, Inputs,Pera,Option,Select,Textp,Input1,Send,Div,Add,Or,Div1,Div2,Text1,If,Paraa,Button,Img2} from "./FormStyle"

function Formsection() {
  return (
   <Container>
    <Content> 
        <Head>Got an idea?</Head>
        <Para>Contact Us</Para>
        <Text>You have questions. We have answers.</Text>
    </Content>
    <Form>
        <Image>

        <Img2 src="/images/ball.png"></Img2>
       
        
        <Have>Have a Project?
We would love to help</Have>
</Image>
        <Input>
        <Pera>I’m interested in....</Pera>


        <Inputs>

    
        <Select value="services">
          <Option for="services">
            <Textp>All Services</Textp>
            

          </Option>
          <Option for="services">
            <Textp>All Services</Textp>
            

          </Option>
        </Select> 
        
        <Input1 type="text" placeholder="Your name"/>
        <Input1 type="text" placeholder="Your email"/>
        <Input1 type="text" placeholder="Tellus about your project"/>
        <Div>
        <img src="./images/icon.svg" alt='logo'></img>
          <Add>Add Attachment(optional)</Add>
        </Div>
        <Send type="submit" value="Send Request" />
        
        </Inputs>
        <Or>
          <Div1></Div1>
          <Text1>Or</Text1>
          <Div2></Div2>
   
        </Or>
        <Paraa>
        <If>If you're ready to make a change, we're ready to help.</If><If>
Just connect with us today!</If></Paraa>
        <Button>
        <img src="./images/Frame 45179.svg" alt='logo'></img>
        <img src="./images/Frame 45180.png" alt='logo'></img>
        </Button>
        
        </Input>
    </Form>
   </Container>
  )
}

export default Formsection;