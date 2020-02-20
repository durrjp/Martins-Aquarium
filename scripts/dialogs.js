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
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--jimmy").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--jimmy")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--flip").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--flip")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--slithers").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--slithers")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--chubbers").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--chubbers")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--chad").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--chad")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--susan").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--susan")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--alfredo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--alfredo")
            theDialog.showModal()
        }
    )
}
export default initializeDetailButtonEvents