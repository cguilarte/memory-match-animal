import React, { useContext, useEffect, useState } from 'react'
import ItemScore from '../UI/ItemScore/ItemScore'
import GameContext from '../../lib/GameContext'

const NavBar = () => {
    const { totalHits, totalErrors } = useContext(GameContext)
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 120;
        setSticky(stickyClass);
    };

    return (
        <div className={`flex flex-col items-start sm:flex-row sm:justify-between sm:items-center py-4 border-b border-primary-purple px-4  z-50  ${sticky ? "sticky -top-24 transition-all duration-100 backdrop-blur-md bg-black/80" : ""} `}>
            <div className={`flex flex-col transition-all ${sticky ? 'invisible' : ''}`}>
                <span className={`text__gradient_primary  m-0 text-6xl sm:text-3xl font-bold font-Lilita`}>Memory</span>
                <span className="text__gradient_secundary -mt-1 m-0 text-2xl sm:text-2xl font-semibold font-Lilita">Match Animal</span>
            </div>

            <div className={`flex space-x-4  sm:mt-0 ${sticky ? 'mt-2' : 'mt-4'}`}>
                <ItemScore label="Aciertos" total={totalHits} color="green" />
                <ItemScore label="Errores" total={totalErrors} color="red" />
            </div>
        </div>
    )
}

export default NavBar