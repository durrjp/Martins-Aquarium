import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './fishDataProvider.js'
import FishList from './FishList.js'






//used as backdoor to access data on other module file
const arrayOfTheFish = useFish()
FishList()

initializeDetailButtonEvents()
