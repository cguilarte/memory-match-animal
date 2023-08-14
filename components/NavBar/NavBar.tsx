import React, { useContext } from 'react'
import ItemScore from '../UI/ItemScore/ItemScore'
import GameContext from '../../lib/GameContext'

const NavBar = () => {
    const { totalHits, totalErrors } = useContext(GameContext)
    return (
        <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center py-4 border-b border-primary-purple ">
            <div className="flex flex-col">
                <span className="text__gradient_primary  m-0 text-6xl sm:text-3xl font-bold font-Lilita">Memory</span>
                <span className="text__gradient_secundary -mt-1 m-0 text-2xl sm:text-2xl font-semibold font-Lilita">Match Animal</span>
            </div>

            <div className="flex space-x-4 mt-4 sm:mt-0">
                <ItemScore label="Aciertos" total={totalHits} color='green' />
                <ItemScore label="Errores" total={totalErrors} color='red' />
            </div>
        </div>
    )
}

export default NavBar