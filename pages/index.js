import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { setUserToken, verifyAuth } from '../helpers'
import ButtonAction from "../components/ButtonAction";

function Home() {
  const router = useRouter();
  const nameUser = useRef(null);
  const [error, setError] = useState(false);

  const handleInitPlay = () => {
    if (nameUser.current.value === '') {
      setError(true)
      return false;
    }
    setUserToken(nameUser.current.value);
    router.push('/game');
  }

  useEffect(() => {
    if (verifyAuth()) router.push('/game');
  }, []);


  return (
    <div className="w-full h-[100vh] bg-[url('/images/bg.webp')]  bg-cover bg-center">
      <div className="flex justify-center items-center backdrop-opacity-10 backdrop-invert bg-black/30 h-full">
        <div className="flex flex-col items-center">
          <div className=" w-60 -ml-8 h-48 relative">
            <Image layout="fill" objectFit="contain" src="./images/logo.svg" alt="Logo" />
          </div>
          <h1 className="text__gradient_primary m-0 text-6xl sm:text-8xl font-bold font-Lilita">Memory</h1>
          <h2 className="text__gradient_secundary text-2xl sm:text-5xl font-semibold font-Lilita">Match Animal</h2>
          <div className="mt-6">
            <div className="mb-6 flex justify-center flex-col items-center space-y-4">
              <input onKeyUpCapture={() => setError(false)} ref={nameUser} type="text" placeholder="Ingrese su nombre" className=" block font-Lilita w-80 placeholder:text-center text-center p-4 text-gray-900 border-none rounded-lg bg-white sm:text-md focus:outline focus:ring-4 focus:ring-[#FDC632] focus:border-[#FDC632] " />

              {error && <p className="mt-0 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> Ingrese su nombre para iniciar el juego!</p>}
              <ButtonAction title='Empezar juego' onClick={handleInitPlay} />

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home