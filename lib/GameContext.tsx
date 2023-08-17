import { createContext, useState, useEffect } from "react";
import { imagesService } from "../services/imagenService";
import { verifyAuth } from '../lib/utils'
import { useRouter } from "next/router";

export const GameContext = createContext({
    totalHits: 0,
    totalErrors: 0,
    listImages: [],
    selected: [],
    opened: [],
    hitsSuccess: false,
    handleClickCard: null,
    resetGame: null,
})

export const DataProvider = ({ images, children }) => {
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
        setHitSuccess(false);
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
        <GameContext.Provider value={{
            listImages,
            selected,
            opened,
            totalHits,
            totalErrors,
            hitsSuccess,
            handleClickCard,
            resetGame,
        }}>
            {children}
        </GameContext.Provider>
    )
};

export default GameContext;