/* 
Falsy:
1.false
2.ZERO [0]
3.Empth string
4.Undefined
5.Null
6.NaN{Not a Number}

// everything is true except these falsy!!

Truthy:
1.true
2.Any numbers except ZERO [0]
3.Any string even with single white space except empty string
4.Empthy Array and objects

everything is true except these 6 falsy

*/

const x = null;
if (x) {
    console.log("Veriable is truthy");
}
else {
    console.log("Veriable is falsy")
};