// 1 --------

function spliceArray(array){
let arr  = array.splice(2, 4)

return arr
}

let array1 = spliceArray(["I", "study", "JavaScript", "right", "now"])

console.log(array1)


// 2 ------------

function sliceArray(array){
    let arrSlise  = array.slice(0, 2)
    
    return arrSlise
    }
    
    let array2 = sliceArray(["I", "study", "JavaScript", "right", "now"])
    
    console.log(array2)
    

// 3 ----------
function concatArray(array , array){
    let newArray = array1.concat(array2)
    return newArray
}

 let h = concatArray(array1 , array2)
console.log(h)




