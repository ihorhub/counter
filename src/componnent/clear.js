import React from 'react'
const test = ()=>{console.log('mount');
const interval = setInterval(() => console.log("from interval"),1000 );
return()=>{
    console.log("unmount");
    clearInterval(interval);
},[]
}
return <h2> Start to see something</h2>

export default function clear() { 
    const [isVisible, setIsVisible] = useState(initialState)
    return (
        <div>
            <h1>hello</h1>
            <button onClick=()=>setIsVisible(!isVisible ) ></button>
            
        </div>
    )
}
