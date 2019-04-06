import styled, {css} from 'styled-components';

const Container = styled.div`
    border: 1px solid lightgray; 
    border-radius: 8px;
    width: fit-content;
    padding: 10px;
    margin: 5px auto;
`;

const Form = styled.form`
    margin: 5px 0;
`;

const Input = styled.input`
    display: block;
    width: 300px; 
    margin: 5px 0;  
    border-radius: 5px; 
    border: 1px solid lightgray;
    padding: .5em;
`;

const Button = styled.button`
    display: block;
    background: gray;
    border-radius: 5px;
    border: 1px solid gray;
    color: #fff;
    padding: .5em;
    margin: 5px 0;
    
    &:hover {
        opacity: .9;
    }
    ${ props => props.primary && css`
        background: dodgerblue;
        border-color: dodgerblue;
        color: #fff;
    `}
    ${ props => props.expand && css`
        width: 100%;
    `}
`;

const H1 = styled.h1`
    font-family: 'Oleo Script', cursive;
    text-align: center;
    `;

export {Container, Form, Input, Button, H1};