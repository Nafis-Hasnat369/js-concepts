function add(first, second) {
    const result = first + second;
    if (result > 9) {
        const mood = "happy";
        console.log(mood);
    }
    return result;
};
console.log(add(11, 35));