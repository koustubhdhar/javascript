let A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = "";

for (let i = 0; i < A.length; i++) {
    result += A[i];
    
    // Add a space if it's not the last element
    if (i < A.length - 1) {
        result += " ";
    }
}

console.log(result);
