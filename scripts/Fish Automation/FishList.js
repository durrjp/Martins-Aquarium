import {mostHolyFish, soldierFish, nonHolyFish } from "./fishDataProvider.js"
import Fish from "./fish.js"

const contentElement = document.querySelector(".index__fishlist")

const FishList = () => {

    //get fish data from frishdataprovider
    let fishes = mostHolyFish()
        //iterate the array
    for (const fishObject of fishes) {
        contentElement.innerHTML += Fish(fishObject)
    }

    fishes = soldierFish()
    for (const fishObject of fishes) {
        contentElement.innerHTML += Fish(fishObject)
    }
    fishes = nonHolyFish()
    for (const fishObject of fishes) {
        contentElement.innerHTML += Fish(fishObject)
    }
// const renderFish = collection => {
//     for (const fishObject of collection) {
//         contentElement.innerHTML += Fish(fishObject)
//     }
// }
// const FishList = () => {
//     const holyFish = mostHolyFish()
//     renderFish(holyFish)

//     const soldiers = soldierFish()
//     renderFish(soldiers)

//     const plebs = nonHolyFish()
//     renderFish(plebs)
}


export default FishList