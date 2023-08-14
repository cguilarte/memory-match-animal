import React from 'react'

const LayoutGame = ({ children }) => {
    return (
        <div className="w-full h-full md:h-[100vh] bg-[url('/images/bg.webp')] bg-cover bg-center">
            <div className="backdrop-opacity-10 backdrop-invert bg-black/30 h-full">
                <div className="px-4 pt-0 md:px-0 sm:mx-auto sm:max-w-3xl">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutGame