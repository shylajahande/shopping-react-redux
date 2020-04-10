import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 2px solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 15px; 
    padding: 10px 20px;
    cursor: pointer;
    margin: 10px 15px;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
`