import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"
import "./styles.css";
export default function ImageSlider({url,limit=5,page=1}){
    const [images,setImages]=useState([]);
const [error,setError]=useState(null);
const [loading,setLoading]=useState(false);
    
    const [currentSlide,setCurrentSlide]=useState(0);
async function fetchImages(getUrl) {
    try{
        setLoading(true);
const response=await fetch(`${getUrl}?page=${page}&limit=${limit}`);
 const data=await response.json();
 if(data){
    setImages(data);
    setLoading(false);
 }
    }
    catch(e){
        setError(e.message);
        setLoading(false);
    }
}
function handlePrevious(){
    setCurrentSlide(currentSlide ===0 ?images.length-1 :currentSlide-1)

}
function handleNext(){
    setCurrentSlide(currentSlide===images.length-1 ?0 :currentSlide+1)
}
    useEffect(()=>{
if (url !=="") fetchImages(url)
    },[url]);
console.log(images);
if(loading){
    return <div>Loading data plz wait</div>
}
if(error!==null){
    return <div>Error occured {error}</div>
}
return(
    <div className="container">
        {/* Render left arrow */}
<BsArrowLeftCircleFill 
onClick={handlePrevious}
className="arrow arrow-left"/>
{
    images && images.length ? 
    images.map((imageItem ,index)=>(
        <img
        key={imageItem.id}
        alt={imageItem.download_url}
        src={imageItem.download_url}
        className={currentSlide === index ? "current-image" :"current-image hide-current-image"}
        />
    ))
    :null
}
<BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>
<span className="circle-indicators">{
images && images.length ?
images.map((_,index)=><button
key={index}
className={
    currentSlide === index? "current-indicator" :"current-indicator inactive-indicator"
}
onClick={()=>setCurrentSlide(index)}
></button>)
:null
}</span>
    </div> );
}