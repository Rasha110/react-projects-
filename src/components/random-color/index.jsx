import { useEffect, useState } from "react"

export default function RandomColor(){
    /* One will store type other will store */
    const [typeofColor,setTypeofColor]=useState('hex')    /* hex will be our default color */
    const [color,setColor]=useState('#000000')
    function createRandomUtility(length){
        return Math.floor(Math.random()*length)
    }
    function handleCreateRandomHexcolor(){
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let hexColor="#";
for(let i=0;i<6;i++)
    {
    hexColor +=hex[createRandomUtility(hex.length)]
}
setColor(hexColor);
    }
   
    function handleCreateRandomRGBcolor(){
const r=createRandomUtility(256);
const g=createRandomUtility(256);
const b=createRandomUtility(256);
setColor(`rgb(${r},${g},${b})`)
    } 
    useEffect(() => {
  if (typeofColor === "rgb") {
    handleCreateRandomRGBcolor();
  } else {
    handleCreateRandomHexcolor();
  }
}, [typeofColor]);

    return (
    <div style={{
        width: '100vw',
        height:'100vh',
        background: color,
    }}>
        <button onClick={()=>setTypeofColor('hex')}>Create Hex Color</button>
        <button onClick={()=>setTypeofColor('rgb')}>Create RGB color</button>
        <button onClick={typeofColor == 'hex' ? handleCreateRandomHexcolor :handleCreateRandomRGBcolor}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            color:'#fff',
        marginTop:'50px',
        fontSize:'60px',
      
        }}>
              <h5>{typeofColor === 'rgb' ? 'RGB': 'Hex'}  </h5>
            <h4>{color}</h4>
          
        </div>
    </div>
)
}