import Image from 'next/legacy/image'
import React, { useContext } from 'react'
import GameContext from '../../../lib/GameContext'

const Card = ({ item, index, isInclude }) => {
    const { opened, selected, handleClickCard } = useContext(GameContext)
    return (
        <div key={index} onClick={() => handleClickCard(index)} className=" w-[90px] h-[90px] transition-all sm:hover:scale-110  xs:w-[100px] xs:h-[130px] smx:w-[80px] smx:h-[110px]  sm:w-[110px] sm:h-[130px] relative  cursor-pointer">
            {isInclude = selected.includes(index) || opened.includes(index)}
            <div className={`card__back overflow-hidden ${isInclude ? 'card__flip-back' : ''} text-black ring-2 rounded-lg border-2 border-dashed  border-white text-6xl font-Lilita bg-primary-yellow w-full h-full flex justify-center items-center`}>?</div>
            <div className={`card__front relative rounded-lg  ${isInclude ? 'card__flip-front  ring-primary-purple overflow-hidden  ring-2' : ''}`}>
                <Image src={`${item}`} objectFit='cover' layout='fill' alt={`Card ${index + 1}`} />
            </div>
        </div>
    )
}

export default Card