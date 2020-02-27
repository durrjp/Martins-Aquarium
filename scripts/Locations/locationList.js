

import { useLocation } from "./locationDataProvider.js"
import Local from "./location.js"



const LocationList = () => {

    const contentElement = document.querySelector(".location__locations")
    //get fish data from frishdataprovider
    const locals = useLocation()

        //iterate the array
    for (const localObject of locals) {
        contentElement.innerHTML += Local(localObject)
    }
}



export default LocationList