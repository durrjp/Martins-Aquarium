const fishCollection = [
    {
        name: "Marvin",
        species: "Catfish",
        location: "Mississippi River",
        length: 18,
        food: ["small fish","aquatic plants"],
        image: "/images/catfish.jpg"
        
    },
    {
        name: "Jimmy",
        species: "Goldfish",
        location: "Pet Store",
        length: 1,
        food: ["Fish food"],
        image: "/images/jimmyfixed.jpg"
        
    },
    {
        name: "Flip",
        species: "Sea Turtle",
        location: "Pacific Ocean",
        length: 36,
        food: ["crill"],
        image: "/images/flip.jpg"
        
    },
    {
        name: "Slithers",
        species: "Moray Eel",
        location: "Coral Reef",
        length: 170,
        food: ["fish","crabs","mullusks"],
        image: "/images/eelfixed.jpg"
        
    },
    {
        name: "Chubbers",
        species: "Pufferfish",
        location: "Tropical Rainforest",
        length: 4,
        food: ["algae","invertebrates"],
        image: "/images/chubbers.webp"
        
    },
    {
        name: "Chad",
        species: "Fying Fish",
        location: "Indian Ocean",
        length: 12,
        food: ["plankton"],
        image: "/images/flyfish.jpg"
        
    },
    {
        name: "Susan",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: 0.5,
        food: ["algae","crustaceans"],
        image: "/images/fish1.jpeg"
        
    },
    {
        name: "Alfredo",
        species: "Beta Fish",
        location: "Pet Store",
        length: 1,
        food: ["Fish foods"],
        image: "/images/alfredo.jpg"
        
    },
]
//exporting the VALUE of fishCollection which = an array
export const useFish = () => {
    return fishCollection.slice()
}
    
export const mostHolyFish = () => {
    const holyFish = []
    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
        
    // 3, 6, 9, 12, etc... fish
    }
    return holyFish
}

    
export const soldierFish = () => {
    const soldiers = []
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldiers.push(fish)
        }
        // 5, 10, 15, 20, 25, etc... fish
        }
        return soldiers
    }

    
export const nonHolyFish = () => {
    const regularFish = []
    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
        // Any fish not a multiple of 3 or 5
            regularFish.push(fish)
        }
        
    }
    return regularFish
}


