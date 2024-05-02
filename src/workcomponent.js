import { workDone } from "./Action"
import { UseDispatch, useDispatch } from "react-redux"

export default function Work(props){
const dispatch = useDispatch()
    return(
    <div>
         <span>
        {props.workss.todo} </span><button onClick={()=>{dispatch(workDone(props.workss.id))}} > done </button>
        <br /><br />
        
    </div>
    )
}