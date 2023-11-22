// import { React,useState } from 'react';

// const About = () => {
//   const [isSent, setIsSent] = useState(false);
//   const [msg, setMsg] = useState('Hey!');
//   if(isSent){
//     return <h1> Your msg on its Way!  </h1>
//   }  
//   return (
//     <div>
//       <form onSubmit={(e) => { e.preventDefault();
//         setIsSent(true);
//       }}>
//         <textarea value={msg} placeholder='Message' 
//         onChange={(e) => { setMsg(e.target.value) }} >
//         </textarea>

//         <button type='submit' > Submit </button>
//       </form>
//     </div>
//   )
// }
// export default About;

// import {React , useState} from 'react';
// const About = () => {
//   const [num,setNum] = useState(0);

//   return(
//     <>
//     <h1> {num} </h1>
//     <button onClick={() => {
//       setNum ( num + 3 )
//       setTimeout(() => {
//         alert(num);
//       }, 1000);
//       // alert(num)
//      }} 
//       >
//       Count  

//     </button>

//     </>
//   )
// }
import { useState } from 'react';

function About() {
  const [walk,setWalk] = useState(true);
  const handleClick = () => setWalk(!walk)

  return (
    <>
      <button onClick={handleClick}>
        Change to { walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{ color: walk ? 'darkgreen' : 'darkorange' }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

export default About;