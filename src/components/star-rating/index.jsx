import { useState } from "react";
import {FaStar} from "react-icons/fa";
import "./styles.css";
export default function StarRating({noOfStars=5}){
const [rating,setRating]=useState(0);
const [hover,setHover]=useState(0);
function handleClick(getCurrentIndex){
    setRating(getCurrentIndex);
}
function handleMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex);
}
function handleMouseLeave(){
    setHover(rating);
}
    return( <div className="star-rating">
{
    [...Array(noOfStars)].map((_,index)=>{
        const getCurrentIndex= index + 1;

        return(
<FaStar
key={getCurrentIndex} /*a unique key when rendering lists (like stars) using .map(). It helps React track which item changed to improve performance. In your case: each star gets a number like 1, 2, 3, etc. as its key. */
className={getCurrentIndex <= (hover || rating)? "active" : "inactive"}
onClick={()=>handleClick(getCurrentIndex)}
onMouseMove={()=>handleMouseEnter(getCurrentIndex)}
onMouseLeave={()=>handleMouseLeave()}
size={40}
/>
        );
    }
)
}
    </div>
);
}