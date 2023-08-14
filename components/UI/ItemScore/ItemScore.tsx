import React from 'react'

const COLOR_ITEM_SCORE = {
    green: 'ring-green-500',
    red: 'ring-red-500'
}

const ItemScore = ({ label, total, color }) => {

    return (
        <div className={`${COLOR_ITEM_SCORE[color]} ring-2 flex items-center space-x-2  text-white rounded-lg py-1 px-4 text-base tracking-wide`}>
            {label}
            <strong className="text-base ml-2">{total}</strong>
        </div>
    )
}

export default ItemScore
