import { useEffect, useState } from "react";

function ScrollProgress(){

const [width,setWidth]=useState(0);

useEffect(()=>{

const progress=()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

setWidth(current);

};

window.addEventListener("scroll",progress);

return()=>window.removeEventListener("scroll",progress);

},[]);

return(

<div

className="scroll-progress"

style={{width:`${width}%`}}

>

</div>

);

}

export default ScrollProgress;