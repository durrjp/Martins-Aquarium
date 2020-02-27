const fishCollection = [
    {
        name: "Marvin",
        species: "Catfish",
        location: "Mississippi River",
        length: "18 inches",
        food: ["small fish","aquatic plants"],
        image: "/images/catfish.jpg"
        
    },
    {
        name: "Jimmy",
        species: "Goldfish",
        location: "Pet Store",
        length: "1in",
        food: ["Fish food"],
        image: "/images/jimmyfixed.jpg"
        
    },
    {
        name: "Flip",
        species: "Sea Turtle",
        location: "Pacific Ocean",
        length: "3 feet",
        food: ["crill"],
        image: "/images/flip.jpg"
        
    },
    {
        name: "Slithers",
        species: "Moray Eel",
        location: "Coral Reef",
        length: "15 feet",
        food: ["fish","crabs","mullusks"],
        image: "/images/eelfixed.jpg"
        
    },
    {
        name: "Chubbers",
        species: "Pufferfish",
        location: "Tropical Rainforest",
        length: "4 inches",
        food: ["algae","invertebrates"],
        image: "/images/chubbers.webp"
        
    },
    {
        name: "Chad",
        species: "Fying Fish",
        location: "Indian Ocean",
        length: "12 inches",
        food: ["plankton"],
        image: "/images/flyfish.jpg"
        
    },
    {
        name: "Susan",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: "0.5 inches",
        food: ["algae","crustaceans"],
        image: "/images/fish1.jpeg"
        
    },
    {
        name: "Alfredo",
        species: "Beta Fish",
        location: "Pet Store",
        length: "1 inch",
        food: ["Fish foods"],
        image: "/images/alfredo.jpg"
        
    },
]
//exporting the VALUE of fishCollection which = an array
export const useFish = () => {
    return fishCollection.slice()
}
