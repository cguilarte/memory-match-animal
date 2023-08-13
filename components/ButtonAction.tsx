import React from 'react'

const ButtonAction = ({ title = '', ...other }) => {
    return (
        <button {...other} className="relative inline-flex items-center justify-center p-0.5 mt-4 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-primary-pink to-primary-orange group-hover:from-primary-pink group-hover:to-primary-orange hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 ">
            <span className="relative px-5 py-2.5 transition-all font-Lilita ease-in duration-75 bg-white text-black uppercase dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 hover:text-white">
                {title}
            </span>
        </button>
    )
}

export default ButtonAction