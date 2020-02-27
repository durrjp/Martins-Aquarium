/**
 *  Fish which renders individual fish objects as HTML
 */
const Fish = (fish) => {
    return `
    <section class="index__fish">
            <p class="index__fishname">${fish.name}</p>
            <img width = "200px" src="${fish.image}" class="fishImg">
            <div>
                <button id="button--${fish.name}" class="detailsButton">About Me</button>
            </div>
        
            <dialog class="dialog--fish" id="details--${fish.name}">
                <div class="aboutHeader">About ${fish.name}:</div>
                <div>Species: ${fish.species}</div>
                <div>Location Harvested: ${fish.location}</div>
                <div>Length: ${fish.length}</div>
                <div>Food: ${fish.food.join(",")}</div><br>
        
                <button class="button--close" id="close--${fish.name}">Close Dialog</button>
            </dialog>
        </section>
    `
}

export default Fish