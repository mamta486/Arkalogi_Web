import react, { useEffect, useState, useRef, useMemo, useCallback } from 'react';


// -------------------------------useState---------------------------------------------------
// export default function Practice() {
//     const [car, setCar] = useState({
//         brand: "Mercedes",
//         model: "Class",
//         year: "2035",
//         color: "blue"
//     });

//     const changecolor = () => {
//         setCar((prev) => {
//             return { ...prev, color: "red" };
//         })
//     }
//     return (
//         <>
//             <h1>My {car.brand}</h1>
//             <h2>it is a {car.color} {car.Class} from {car.year} </h2>
//             <button onClick={changecolor}>blue</button>
//         </>

//     )

// }


// ---------------------------------------useEffect-----------------------------------------------------
// export default function Practice() {
//     const [count, setCount] = useState(0)

//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count=>count+1);
//         },1000)
//     },[count])

//     return(
//         <>
//         <h1>count is render {count} times</h1>
//         </>
//     )
// }

// ------------------------------useRef Hook--------------------------------------------------------------------------

//  export default function Practice() {
//     const [value, setValue] = useState(0)
//     const count=useRef(0);

//     useEffect(()=>{
//         count.current=count.current+1
//     });

//     return(

//         <>
//         <button onClick={()=>{setValue(prev=>prev-1)}} className='bg-pink-400 text-white '>-1</button>
//         <h1>{value}</h1>
//         <button onClick={()=>{setValue(prev=>prev+1)}} className='bg-black text-white'>+1</button>
//         <h1>Render Count:{count.current}</h1>
//         </>
//     )
//  }

// ---------------------------------------------------------useMemo----------------------------------------------------------------------

// 

// ---------------------------------------------------------------useCallback----------------------------------------------------------------------

export default function Practice(){

    return(
        <>
        </>
    )
}

