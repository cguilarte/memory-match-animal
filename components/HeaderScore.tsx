import React from 'react'

const HeaderScore = ({ totalHits, totalErrors }) => {
    return (
        <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center py-4 border-b border-primary-purple ">

            <div className="flex flex-col">
                <span className="text__gradient_primary  m-0 text-6xl sm:text-3xl font-bold font-Lilita">Memory</span>
                <span className="text__gradient_secundary -mt-1 m-0 text-2xl sm:text-2xl font-semibold font-Lilita">Match Animal</span>
            </div>

            <div className="flex space-x-4 mt-4  sm:mt-0">
                <div className="flex items-center space-x-2  text-white rounded-lg py-1 px-4 text-base tracking-wide ring-2 ring-green-500">
                    Aciertos  <strong className="text-base ml-2">{totalHits}</strong>
                </div>

                <div className="flex items-center space-x-2  text-white rounded-lg py-1 px-4 text-base tracking-wide ring-2 ring-red-600">
                    Errores  <strong className="text-base ml-2">{totalErrors}</strong>
                </div>
            </div>

        </div>
    )
}

export default HeaderScore