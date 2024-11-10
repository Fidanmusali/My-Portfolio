import { useEffect, useState } from 'react'
import './style.css'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
const Modes = () => {
    const[modes, setModes] =useState("");

const modesChanger =()=>{
    if(modes=== "light"){
        document.body.classList.add("light")
        document.body.classList.remove("dark")

    }else if(modes==="dark"){
        document.body.classList.add("dark")
        document.body.classList.remove("light")

    }
}

    useEffect(() =>{
        const currentMode = localStorage.getItem("modes") || "dark";
        setModes(currentMode);
        modesChanger();
    },[]);

    useEffect(() =>{
        modesChanger();
    },[modes]); 

    const changeMode =()=>{
        if(modes === "light"){
            setModes("dark")
        }else if(modes ==="dark"){
            setModes("light")
        }
        localStorage.getItem("modes", modes)
    }
  return (
    <div className='mode-btn'>
      <button className='m1' onClick={changeMode}>
        { modes === "light" ? "Dark" : "Light"
 }
      </button>
    </div>
  )
}

export default Modes