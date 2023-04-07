import styled from 'styled-components'

const Button = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.colors.adviceDiceColor};
    transform: translateY(50%);
    &:hover{
        color: #53ffab;
        cursor: pointer;
        box-shadow: 0 5px 15px ${props => props.theme.colors.adviceDiceColor};
    }
    
    img {
        transform: translateY(1px);
    }
`

export { Button }