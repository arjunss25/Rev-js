// object.assign(target,source)

let obj1 = {
    name:"arjun",
    place:"tvm"
}

let obj2 = {
    name : "kiran",
    age:"30"
}

Object.assign(obj1,obj2)
console.log(obj1);

// object.entries(Object)

let obj1 = {
    name:"arjun",
    place:"tvm"
}

let obj2 = {
    name : "kiran",
    place:"kollam"
}


let newArray = Object.entries(obj2)
console.log(newArray);


// object.fromEntries(Object)

let obj1 = {
    name:"arjun",
    place:"tvm"
}

let obj2 = {
    name : "kiran",
    place:"kollam"
}


let newArray = [ [ 'name', 'kiran' ], [ 'place', 'kollam' ] ]

console.log(Object.fromEntries(newArray));


// object.values(Object)

let obj1 = {
    name:"arjun",
    place:"tvm"
}

let obj2 = {
    name : "kiran",
    place:"kollam"
}


let newArr = Object.values(obj2)
console.log(newArr);