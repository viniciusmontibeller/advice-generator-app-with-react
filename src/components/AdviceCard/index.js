import { Card } from './Card/style.js'
import { Divider } from '../Divider'
import { Button } from './Button/style.js'
import { useEffect, useState } from "react"
import { getAdvice } from '../../services/getAdvice.js'
import dice from '../../assets/icon-dice.svg'

const AdviceCard = () => {

    const [advice, setAdvice] = useState({})
    
    const newAdvice = async () => {
        const data = await getAdvice()
        setAdvice({
            text: data.advice,
            id: data.id
        })
    }

    useEffect(() => {
        newAdvice()
    }, [])

    const handleClick = () => {
        newAdvice()
    }

    return (
        <Card>
            <h2>{`Advice #${advice.id}`}</h2>
            <p>{`"${advice.text}"`}</p>
            <Divider/>
            <Button onClick={handleClick}>
                <img src={dice} alt='dice'/>
            </Button>
        </Card>
    )
}

export { AdviceCard }