/* 
1. variable value not assigned
2. function but didn't write return anything
3. just wrote return but didn't return anything
4. parameter isn't passed
5. property that doesn't exist in object
5. accessing arry element out of range
6. accessing deleted element in arry
7. explicitly set value undefined

*/
let first;
// console.log(first);
function second(x, y) {
    const sum = x + y;
};
const result = second(3, 91);
// console.log(result);

function add(x, y) {
    const add = x + y;
    return
    return add;
};
console.log(add(3, 5));