
function increment(){
    return(
        { type : "increment",
        payload : 1}
    )
}

function decrement(){
    return(
        {
            type :"decrement",
            payload :1
        }
    )
}

const add=(props)=>{
    return ({
        type :"add",
        payload : `${props.work}`
    })
}

const workDone=(props)=>{
    return ({
        type:"delete",
        payload: `${props}`
    })
}

export {increment,decrement,add,workDone};