import React from 'react'

import {BurgerWrapper} from './burgerstyled'


export default function Index({text, onClick, cost, bg, ...props}) {
    return (
        <BurgerWrapper onClick={onClick}  style={{backgroundColor: `${bg ? bg : ''}`}}>
            <span>{text}</span>
            <span style={{fontSize:15}}>{cost ? cost + " грн." : ''}</span>
        </BurgerWrapper>
    )
}
