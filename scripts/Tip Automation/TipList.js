
import { useTip } from "./TipDataProvider.js"
import Tip from "./Tip.js"



const tipList = () => {

    const contentElement = document.querySelector(".index__fishcleanitemlist")
    //get fish data from frishdataprovider
    const tipsArray = useTip()

        //iterate the array
    for (const tipObject of tipsArray) {
        contentElement.innerHTML += Tip(tipObject)
    }
}



export default tipList