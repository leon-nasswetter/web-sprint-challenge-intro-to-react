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
                            Height: {char.height} |
                            Mass: {char.mass} |
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
    border-radius: 10%;
    padding-bottom: 2%;
    opacity: 0.8;
    
`

const StyledCharacter = styled.div `
    font-size: 1.2rem;
    padding: 2%;
    font-weight: bold;
    font-family: sans-serif;
    
`

const StyledStats = styled.div ` 
    font-size: 1rem;
    font-weight: normal;
    border-bottom: 2px dotted black;
    padding-bottom: 2%;
    padding-top: 1%;

`
