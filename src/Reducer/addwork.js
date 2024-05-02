const initialstate=[];

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


function addwork(state=initialstate,action){
    switch(action.type){
        case "add": {
            const id = guidGenerator()
            return [...state,{id:id,todo:action.payload}]
        } ;
        case "delete":{
            const newState = state.filter((item)=>item.id!=action.payload)
            return newState;
        }
        default: return state;
    }
}
export default addwork;