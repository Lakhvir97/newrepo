import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  row-gap: 5vw;
  flex-direction: column;
  align-items: center;

  background-color: white;
`;

export const SolutionHeadings = styled.div`
/* background-image: url(./images/Right1.png); */
  width: calc(100% - 20%);
  padding: 2vh 8vw 0 10vw;
`;

export const SolutionP = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 1.3rem);
  color: #828282;
`;

export const SolutionH = styled.h1`
  font-size: clamp(1.5rem, 3.5vw, 4.5rem);
  margin: 0.5vw 0 0 0;
  border-bottom: 1.7vh solid rgba(249, 197, 28, 1);
  height: clamp(2rem, 3.8vw, 4.5rem);
  width: fit-content;
  font-weight: 800;
`;
export const Table = styled.div`
  width: calc(100% - 21%);
  border-radius: 20px;
  background: #1d2e88;
  padding: 1vw 3vw 3vw;
  margin: 10vh 8vw 0 10vw;
`;

export const THead = styled.h1`
  color: white;
  font-size: clamp(2rem, 2.7vw, 3rem);
  line-height: 8vw;
`;

export const HalfBorder = styled.div`
  height: 0.4vw;
  background: linear-gradient(to right, #f9c51c 50%, white 50%);
`;

export const BorderText = styled.p`
  text-align: end;
  color: white;
  font-size: clamp(0.8rem, 1.4vw, 1.5rem);
  font-weight: 500;
  line-height: 4vw;
  padding: 0 0 2vw 0;
`;

export const SecTable = styled.div`
  background: white;
  border-radius: 20px;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 3vw 4vw;
  gap: 2vw;
`;

export const Column = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 10px;
`;

export const ColHeading = styled.div`
  display: flex;
  padding: 3vw 1.5vw 3vw 2vw;
`;

export const ColHead1 = styled.h3`
  /* color: white; */
  font-size: clamp(0.8rem, 1.2vw, 1.5rem);
  font-weight: 600;
  line-height: 2vw;
`;

export const BigButton = styled.button`
  background: #f9c51c;
  border: none;
  border-radius: 0 10px 10px 0;
  i {
    font-size: clamp(1rem, 2.5vw, 3.5rem);
    padding: 0.5vw;
  }
`;
export const Image = styled.div`
border:  1px solid black;

`;
 export const Img = styled.img`
 
 
 `;