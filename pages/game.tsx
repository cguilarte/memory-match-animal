import Winning from "../components/Winning/Winning";
import { imagesService } from '../services/imagenService';
import NavBar from "../components/NavBar/NavBar";
import { DataProvider } from "../lib/GameContext";
import GameBoard from "../components/GameBoard/GameBoard";
import LayoutGame from "../components/UI/LayoutGame/LayoutGame";

function Game({ images }) {
    return (
        <DataProvider images={images}>
            <LayoutGame>
                <NavBar />
                <GameBoard />
            </LayoutGame>
            <Winning />
        </DataProvider>
    )
}

export async function getServerSideProps() {
    const images = await imagesService()
    return { props: { images } }
}

export default Game
