const Local = (location) => {
    return `
    <section class="location">
            <div class="location__header">${location.name}</div>
            <div class="location__image"><img width = "600px" height="350px" src=${location.image}></div>
            <div class="location__detail"><span class="bold">Temperature:</span> ${location.temperature}</div>
            <div class="location__detail"><span class="bold">Harvesting Technique:</span> ${location.technique}</div>
        </section>
    `
}

export default Local