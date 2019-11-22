function deepClone(obj) {
   
    if (typeof(obj) === "object") {
        const obje = {};
        const a = Object.keys(obj)
        a.forEach(key => {
            obje[key] = deepClone(obj[key]);
        });
        return obje;
    }

    else {
    return obj; 
    }

    
}
const obj1 = {
    n: 5, 
    s: "mystring",
    a: [0, 1, 2, 3, "4"],
    b: true,
    o: {
        ch: 7,
        stroka: "mystroka",
        mass:[5, 6, 7, "8"],
        boolka: false,
        obj: {
            stroka: "bool'ka",
            massiv: [11, 12, 13, "14"]
        }

    }
}
const obj2 = deepClone(obj1);

console.log(`compare n: ${obj1.n === obj2.n}`);
console.log(`compare s: ${obj1.s === obj2.s}`);
console.log(`compare a: ${obj1.a === obj2.a}`);
console.log(`compare b: ${obj1.b === obj2.b}`);
console.log(`compare o: ${obj1.o === obj2.o}`);

obj2.o.stroka = "novaya boolka";
console.log(`compare obj: ${obj2.o.stroka === obj1.o.stroka}`)

