import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
width: 100%;
padding: 50px 9.7vw;

/* background: url(./images/group.png); */
background-repeat: no-repeat;
background-position: right;
`
export const Left = styled.div`
display: flex;
flex-direction: column;
max-width: 553px;
gap: 20px;

`;
export const Pera = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
line-height: 30px;
font-size: clamp(1.2rem,1vw ,2.5rem);
`;

export const Heading = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: clamp(3.2rem , 5vw , 3.5rem);
line-height: 71px;

`;
export const Span = styled.span`

color: rgba( 249 , 197 , 28 ,1);
`;
export const Image = styled.div`
display: flex;
position: absolute;
top: 2vw;
right: 0;
`;


export const Img = styled.img`
width: clamp(30rem, 45vw, 80rem);
height: clamp(53rem, 60vw, 80rem);
`

export const Button = styled.div`
display: flex;
padding: 8vh 0;

`;
export const Btn = styled.button`
display: flex;
color: #FFFFFF;
align-items: flex-start;
padding: 16px 20px;
background: #1D2E88; 
border: none;
font-family: 'Inter';
font-style: normal;
font-size: 14px;
line-height: 22px;
`
;


export const Btns = styled.button`
background: #F9C51C;
border: none;
display: flex;
justify-content: center;
align-items: center;
padding: 15px 12px;
color: #1D2E88;
font-size: 20px;

`;
export const Icons = styled.div`
display: flex;
align-items: center;
`;
export const Para = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;

`;
export const Line = styled.div`
border-bottom: 2px solid grey;
width: 6vh;
margin: 0 0 0 1.5vw;
padding: 0 0 0 5vw;

`;
export const Icon = styled.div `
display: flex;
justify-content: space-between;
margin: 0 0 0 2vw;

`;
export const Li = styled.i`
display: flex;
gap: 0 5vh;
font-size: 3.5vh;

`;