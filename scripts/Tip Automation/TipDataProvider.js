const tipCollection = [
    {
        tip: "Don't abuse your fish when removing.",
    },
    {
        tip: "Make sure that tank sparkles.",
    },
    {
        tip: "Use cleaners that are safe for the fishies.",
       
    }
]
//exporting the VALUE of tipCollection which = an array
export const useTip = () => {
    return tipCollection.slice()
}
