import React, { useContext } from 'react'
import GameContext from '../../lib/GameContext'
import Lottie from "lottie-react";
import hits from '../../public/images/hits.json'
import Card from '../UI/Card/Card';

const GameBoard = () => {
    const { listImages, hitsSuccess } = useContext(GameContext)
    let isInclude = false;
    return (
        <div className="grid grid-cols-3 smx:grid-cols-5 md:grid-cols-6 gap-4 md:gap-6 mt-10 pb-10">
            {listImages.map((item, index) => (
                <Card
                    key={index}
                    index={index}
                    item={item}
                    isInclude={isInclude}
                />
            ))}
            {hitsSuccess && <Lottie loop={false} className="absolute bottom-0 w-full sm:w-1/3 mx-auto left-0 right-0" animationData={hits} />}
        </div>
    )
}

export default GameBoard