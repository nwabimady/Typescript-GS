function sum1(a: number, b: number) {
    const result = a + b;
    console.log(result);
    return result
}

const sum2 = function (a, b) {
    console.log(a, b);
}

const sum3 = (a, b) => {
    console.log(a + b);
}
