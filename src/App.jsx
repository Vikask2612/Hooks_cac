// useState hooks

// as

// import React,{useState} from 'react'

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const Increment=(e)=>{
//       // console.log(e.target.value);
//       setCounter(counter+1);
//   }

//   return (
//     <>
//     <h2 className='pl-4 py-2 px-3 border-black border-2 rounded-2xl bg-amber-400 text-black'> {counter}</h2>
   
//     <button onClick={Increment} 
//     >Increment</button>
//     </>
//   )
// }

// export default App

// ------------------------------------------------------------------------------------------------------------

// useEffect Hooks

// import React,{useEffect, useState} from 'react'
// import axios from 'axios'

// const App = () => {
//   const[data ,setData]=useState('');

//   useEffect(()=>{
//       axios.get("https://jsonplaceholder.typicode.com/comments")
//         .then((response)=>{
//         setData(response.data[498].email);
//         console.log("API was called");
//     });
//   });
  
//   return (
//     <div className='bg-black text-white text-3xl'>Hello{data}</div>
//   )
// }

// export default App

// ------------------------------------------------------------------------------------------

// useref hook:

//useref hook:

// import React from 'react'
// import { useState,useRef,useEffect } from 'react'
// import './App.css'
// // as
//   const App1 = () => {

//     const [count, setCount] = useState(0)
//     const ref = useRef(0)

//     const Increment = () => {
//       setCount(count+1)
//     }    

//     useEffect(() => {
//       alert('first rendering');
//       ref.current.style.backgroundColor = 'purple'
//     },[]);
    
//     return (
//       <>
//       <button className='py-2 px-4 border-black border-2 text-white text-bold' ref={ref}
//        onClick={Increment}>
//         count is {count}
//       </button>
//       </>
//     )
//   }

//   export default App1
