import { useEffect, useState,useRef } from "react";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400",
    title: "Golden Retriever"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400",
    title: "Cute Puppy"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400",
    title: "Beagle"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400",
    title: "Fluffy Dog"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400",
    title: "Dog Portrait"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400",
    title: "Happy Dog"
  },
  {
  id: 7,
  url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400",
  title: "Brown Dog"
},
{
  id: 8,
  url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400",
  title: "Cute Dog"
},
{
  id: 9,
  url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400",
  title: "White Dog"
},
{
  id: 10,
  url: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400",
  title: "Fluffy Puppy"
},
{
  id: 11,
  url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400",
  title: "Happy Puppy"
},
{
  id: 12,
  url: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400",
  title: "Playful Dog"
}
];


const Gallery = () => {

    const[imagesNumber,setImagesNumber] = useState(6)
    const [isLoading,setLoading] = useState(false)
    const [loadedImagesNumber, setLoadedImagesNumber] = useState(0)
    const previousCount = useRef(0);

    function handleScroll(){
        let windowHeight= window.innerHeight
        let distanceScrolled = window.scrollY
        let totalHeight = document.documentElement.scrollHeight

        if((windowHeight + distanceScrolled >= totalHeight) && !isLoading ){
            setLoading(true)
            setLoadedImagesNumber(0)
            previousCount.current=imagesNumber
            setImagesNumber((prevState)=> prevState+6)

        }


    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[isLoading,imagesNumber])

    const handleImageLoad = (index)=>{
        if((previousCount.current <= index) && isLoading)
        setLoadedImagesNumber((prev)=>prev+1)
    }

    useEffect(()=>{
        if(loadedImagesNumber===6)
            setLoading(false)
    },[loadedImagesNumber])

  return (
    <div className="w-[90%] mx-auto place-items-center grid mt-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.slice(0,imagesNumber).map((img,index)=>(
            <img onLoad={()=>handleImageLoad(index)} src={img.url} className="w-full h-64 object-cover rounded-lg" key={img.id} alt={`dog-${img.id}`}/>
        ))}
    </div>
  )
}

export default Gallery