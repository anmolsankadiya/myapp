import React from 'react'
import changethenumber from './Reducer/r';
import addwork from './Reducer/addwork';
import { useState,useRef,useEffect } from 'react'
import { increment,decrement ,add} from './Action';
import { UseSelector , useDispatch, useSelector} from 'react-redux';
import Work from './workcomponent';

const  App = () => {
  const myworks=useSelector((state)=>state.addwork);
  const mystate=useSelector((state)=>state.changethenumber)
  const dispatch=useDispatch();
  const [val,setval]=useState("hii aman anmol");
  const getvalue=(e)=>{
    setval(e.target.value);
  }

const click=()=>{
  console.log(val);
}

  
  return (
    <>
    <div className='container'>
      
<h1> Increment / Decrement counter</h1>
<h4> using React and redux</h4>
<div className='quantity'>
  <button onClick={()=>dispatch(increment())}> increment</button>
  <input type="text" value={mystate} onChange={()=>{}} /> 
  <button onClick={()=> dispatch(decrement())}>Decrement</button>
  <input type="text" onChange={getvalue} placeholder="write_here" value={val} />
  <button onClick={()=>dispatch(add({work:val}))}> To add works</button>
  <br />
  <br />
  <h2>Work to do</h2>
  {console.log(mystate)}
  {console.log(myworks)}
  <ul>
    {myworks.map((item)=>{
      return <li>
        <Work  workss={item}/>
      </li>
    })}
  </ul>
</div>

    </div>
    
    </>
  )
}
export default App

