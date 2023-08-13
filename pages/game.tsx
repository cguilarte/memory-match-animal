import { useEffect, useState } from "react";
import Lottie from "lottie-react";

import Winning from "../components/Winning";
import { imagesService, verifyAuth } from '../helpers'
import Card from "../components/Card";
import { useRouter } from "next/router";
import HeaderScore from "../components/HeaderScore";
import hits from '../public/images/hits.json'

function Game({ images }) {
    let include = false;
    const router = useRouter();
    const [listImages, setListImages] = useState(images);
    const [selected, setSelected] = useState([])
    const [opened, setOpened] = useState([])
    const [totalHits, settotalHits] = useState(0);
    const [totalErrors, settotalErrors] = useState(0);
    const [hitsSuccess, setHitSuccess] = useState(false);


    const handleClickCard = (index) => {
        if (opened.includes(index)) return false
        if (selected.length < 2) {
            setSelected(selected => selected.concat(index))
        }
    }

    const resetGame = async () => {
        setSelected([]);
        setOpened([]);
        settotalHits(0);
        settotalErrors(0);
        setListImages(await imagesService());
        include = false
    }


    useEffect(() => {
        if (selected.length === 2) {
            if (listImages[selected[0]] === listImages[selected[1]]) {
                setOpened(opened => opened.concat(selected))
                settotalHits((item) => item + 1)
                setHitSuccess(true);

                setTimeout(() => {
                    setHitSuccess(false);
                }, 1500);

            } else {
                settotalErrors((item) => item + 1)

            }
            setTimeout(() => setSelected([]), 500)
        }
    }, [selected])

    useEffect(() => {
        if (!verifyAuth()) router.push('/');
    }, []);


    return (
        <>
            <div className="w-full h-full md:h-[100vh] bg-[url('/images/bg.webp')] bg-cover bg-center">
                <div className="backdrop-opacity-10 backdrop-invert bg-black/30 h-full">
                    <div className="px-4 pt-0 md:px-0 sm:mx-auto sm:max-w-3xl">
                        <HeaderScore totalHits={totalHits} totalErrors={totalErrors} />
                        <div className="grid grid-cols-3 smx:grid-cols-5 md:grid-cols-6 gap-4 md:gap-6 mt-10 pb-10">
                            {listImages.map((item, index) => (
                                <Card
                                    key={index}
                                    index={index}
                                    item={item}
                                    opened={opened}
                                    selected={selected}
                                    handleClickCard={handleClickCard}
                                    include={include}
                                />
                            ))}
                            {hitsSuccess && <Lottie loop={false} className="absolute bottom-0 w-full sm:w-2/4 mx-auto left-0 right-0" animationData={hits} />}
                        </div>

                    </div>
                </div>
            </div>
            {opened.length === images.length && <Winning reset={resetGame} />}
        </>
    )
}


export async function getServerSideProps() {
    const images = await imagesService()
    return { props: { images } }
}

export default Game
