console.log("hello world")
function anmol(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello anmol")
        }, 2000);
    })
}


