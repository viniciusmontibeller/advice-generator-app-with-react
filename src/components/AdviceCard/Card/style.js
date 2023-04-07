import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.adviceCardColor};
    border-radius: 10px;
    margin: 20px;
    width: 345px;

    h2{
        color: ${props => props.theme.colors.adviceDiceColor};
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 15px;
        margin-top: 30px;
    }

    p{
        font-size: 21px;
        padding: 23px;
        text-align: center;
        color: ${props => props.theme.colors.textColor};
    }

    @media(min-width:768px){
        padding-inline: 50px;
        width: 386px;
        p{
            font-size: 23px;
            padding: 26px;
        }
    }

`

export { Card }