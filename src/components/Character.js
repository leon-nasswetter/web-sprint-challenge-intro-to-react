// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {
    const { data } = props;


    return (
        <StyledContainer>
        {data.map(char => { 
            return <StyledCharacter>
                        {char.name}
                        <StyledStats>
                            Height: {char.height},
                            Born: {char.birth_year}
                        </StyledStats>
                    </StyledCharacter>})}
        </StyledContainer>
  )  
}



export default Character;

const StyledContainer = styled.div ` 
    border: 3px solid grey;
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: #C3AF97;
    
    
`

const StyledCharacter = styled.div `
    border: 2px solid black;
    font-size: 1.2rem;
    padding: 2%;
    
`

const StyledStats = styled.div ` 
    font-size: 1rem;
    border: 2px solid red;
`
