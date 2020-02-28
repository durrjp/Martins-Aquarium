const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",    
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    const allDetailButtons = document.querySelectorAll("button[id^='button--']")

    // Add an event listener to each one
    for (const btn of allDetailButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
                console.log(dialogSiblingSelector)
                const theDialog = document.querySelector(dialogSiblingSelector)

                theDialog.showModal()
            }
        )
    }
    // document.querySelector("#button--Marvin").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Marvin")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--Jimmy").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Jimmy")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--Flip").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Flip")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--Slithers").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Slithers")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--Chubbers").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Chubbers")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--Chad").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Chad")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--Susan").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Susan")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--Alfredo").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Alfredo")
    //         theDialog.showModal()
    //     }
    // )
}
export default initializeDetailButtonEvents