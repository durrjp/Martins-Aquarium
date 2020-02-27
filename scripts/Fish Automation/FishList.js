import { useFish } from "./fishDataProvider.js"
import Fish from "./fish.js"



const FishList = () => {

    const contentElement = document.querySelector(".index__fishlist")
    //get fish data from frishdataprovider
    const fishes = useFish()

        //iterate the array
    for (const fishObject of fishes) {
        contentElement.innerHTML += Fish(fishObject)
    }
}



export default FishList