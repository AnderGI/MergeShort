function divide(array){
    if(array.length === 1){
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = array.splice(0, middle);
    let right = array;

    return order(divide(left), divide(right));
}

function order(l,r){
    let orderedArray = [];
    while(l.length && r.length){
        //if it has a length value
        if(l[0]<r[0]){
            orderedArray.push(l.shift())
        }else{
            orderedArray.push(r.shift())
        }
    }
    return [...orderedArray, ...l,...r]
}