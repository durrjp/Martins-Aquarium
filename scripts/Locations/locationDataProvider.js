const locationCollection = [
    {
        name: "Pacific Ocean",
        temperature: "75 degrees",
        technique: "Deep sea fishing rod and Hugs",
        image: "https://cff2.earth.com/uploads/2017/11/10184942/Why-water-has-been-stuck-in-the-Pacific-Ocean-for-over-1000-years.jpg"
        
    },
    {
        name: "Mississippi River",
        temperature: "95 degrees",
        technique: "Noodling",
        image: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnciowa_mississippiriver_4000x2200.jpg?crop=0,0,4000,2200&wid=4000&hei=2200&scl=1.0"
        
    },
    {
        name: "Pet Store",
        temperature: "70 degrees",
        technique: "A small pet store net",
        image: "https://studybreaks.com/wp-content/uploads/2017/12/image-3-e1512589034578.jpg"
        
    },
    {
        name: "Coral Reef",
        temperature: "40 degrees",
        technique: "Pretending to be a small fish and trapping the prey with a net",
        image: "https://www.azocleantech.com/image.axd?src=%2fimages%2fnews%2fImageForNews_26806_1575299634378640.jpg&ts=20191202101419&ri=1750"
        
    },
    {
        name: "Tropical Rainforest",
        temperature: "120 degrees",
        technique: "A large net",
        image: "https://images-na.ssl-images-amazon.com/images/I/51zMfSUnvWL._AC_.jpg"
        
    },
    {
        name: "Indian Ocean",
        temperature: "95 degrees",
        technique: "Helicopter fishing net trap",
        image: "https://natgeo.imgix.net/factsheets/thumbnails/mauritius-lost-continent-cover-shutterstock.JPG?auto=compress,format&w=1024&h=560&fit=crop"
        
    },
    {
        name: "Caribbean",
        temperature: "100 degrees",
        technique: "Small net",
        image: "https://cdn.britannica.com/62/78162-004-9D742532/landscape-Caribbean-region.jpg"
        
    },
]
//exporting the VALUE of fishCollection which = an array
export const useLocation = () => {
    return locationCollection.slice()
}
