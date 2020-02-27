import initializeDetailButtonEvents from './Dialogs/dialogs.js'
import { useFish } from './Fish Automation/fishDataProvider.js'
import FishList from './Fish Automation/FishList.js'
import tipList from './Tip Automation/TipList.js'







//used as backdoor to access data on other module file
const arrayOfTheFish = useFish()
FishList()
tipList()

initializeDetailButtonEvents()
