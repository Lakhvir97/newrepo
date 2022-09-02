import React from 'react'
import {Table,THead,SolutionHeadings,SolutionP,SolutionH, HalfBorder, BorderText, Column,ColHeading,ColHead1,BigButton,SecTable,} from './Fourthstyle'
import data from './data.json'


function Fourthsection() {
  return (
    <>

      <SolutionHeadings>
      <SolutionP>We have got</SolutionP>
      <SolutionH>Solutions to Your Problems</SolutionH>
      {/* <Image><Img src="./images/Right1.png" alt="img"/></Image> */}
    </SolutionHeadings>
        <Table>
          
      <THead>What are you looking for?</THead>
      <HalfBorder></HalfBorder>
      <BorderText>Question 1 of 2</BorderText>
      <SecTable>
      {data.map((data) => {
        return (
          <Column key={data.id}>
            <ColHeading>
              <ColHead1>{data.body}</ColHead1>
            </ColHeading>
            <BigButton><i class="fa-solid fa-chevron-right"></i></BigButton>
          </Column>
        );
      })}
    </SecTable>
      

    </Table> 
     

    </>
  )
}

export default Fourthsection
