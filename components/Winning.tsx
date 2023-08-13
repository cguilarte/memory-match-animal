import React from 'react'
import Lottie from "lottie-react";
import confetti from '../public/images/confetti.json'
import { getUserToken } from '../helpers';
import ButtonAction from './ButtonAction';

const Winning = ({ reset }) => {

    const userName = getUserToken();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 bg-black/60 backdrop-blur-sm h-[calc(100%-1rem)] max-h-full">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[400px] p-8 bg-[#341873] border-2 border-primary-pink rounded-lg h-auto flex items-center justify-center flex-col">
                    <Lottie className="absolute" animationData={confetti} />
                    <h1 className="text-[#FDC632] text-4xl sm:text-5xl font-Lilita">¡Felicitaciones!</h1>
                    <p className="text-white text-2xl py-2">{userName}</p>
                    <ButtonAction title=' Jugar de nuevo' onClick={reset} />
                </div>
            </div>
        </div>

    )
}

export default Winning