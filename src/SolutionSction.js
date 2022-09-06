import React from 'react'
import {Table,Heads,SolutionHeadings,SolutionP,SolutionH, HalfBorder, BorderText, Column,ColHeading,ColHead1,BigButton,SecTable,} from './Solutionstyle'
import data from './data.json'


function SolutionSction() {
  return (
    <>

      <SolutionHeadings>
      <SolutionP>We have got</SolutionP>
      <SolutionH>Solutions to Your Problems</SolutionH>
    </SolutionHeadings>
        <Table>
          
      <Heads>What are you looking for?</Heads>
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

export default SolutionSction;
