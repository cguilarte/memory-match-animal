import React from 'react'
import { COLOR_ITEM_SCORE } from '../../../constants'

const ItemScore = ({ label, total, color }) => {
    return (
        <div className={`flex items-center space-x-2  text-white rounded-lg py-1 px-4 text-base tracking-wide ring-2 ${COLOR_ITEM_SCORE[color]}`}>
            {label}
            <strong className="text-base ml-2">{total}</strong>
        </div>
    )
}

export default ItemScore
