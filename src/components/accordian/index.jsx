import { useState } from "react"
import data from "./data";
import "../accordian/Styles.css"
export default function Accordian(){
    const [selected,setSelected]=useState(null);
    const [multiple,setMultiple]=useState([]);
    const [enableMultipleSelection, setEnableMultipleSelection]=useState(false);
    function handleSingleSelection(getCurrentId){
setSelected(getCurrentId==selected ? null:getCurrentId);

    }
    function handleMultipleSelection(getCurrentId){
        let cypMultiple=[...multiple];
        const findIndexOfCurrentId=cypMultiple.indexOf(getCurrentId);
        if (findIndexOfCurrentId==-1){
            cypMultiple.push(getCurrentId);
        }
        else{
            cypMultiple.splice(findIndexOfCurrentId,1);
        }
        setMultiple(cypMultiple);
    
    }
        console.log(selected,multiple);
return(
<div className="wrapper">
    <button onClick={()=>{setEnableMultipleSelection(!enableMultipleSelection)}}>Enable Multi Selection</button>
    <div className="accordian">
        {data && data.length > 0 ? 
        (data.map((dataItem)=>(
            <div className="item">
                <div onClick={enableMultipleSelection ? ()=>handleMultipleSelection(dataItem.id): ()=>handleSingleSelection(dataItem.id)} className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                    
                </div>
                {enableMultipleSelection ? 
                multiple.indexOf(dataItem.id)!== -1 && (
                    <div className="content">{dataItem.answer}</div>
                )
                : selected===dataItem.id &&
                    
                    <div className="content">{dataItem.answer}</div>
                    }
            </div>
        )))
        :(<div>No data found!</div>)}
    </div>
</div>
)}