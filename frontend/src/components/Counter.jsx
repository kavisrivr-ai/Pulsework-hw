import { useState,useEffect } from "react";
import{ Button } from "./ui/button"
function Counter() {
    const[count,setcount]=useState(0);
    function increase(){
        setcount(count + 1);
    }
    function decrease(){
        setcount(count - 1);
    }
    useEffect(()=>{
        console.log("count updated");
    },[count]);
    return(
        <div>
        <h3>Counter app</h3>
        <p>{count}</p>
        <Button onClick={increase}>Increase</Button>
        <Button onClick={decrease}>Decrease</Button>

        </div>
    )
}
export default Counter