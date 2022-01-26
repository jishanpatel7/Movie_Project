//gievn a input n, find the factorial of n;
//input: 5;
//output: 120
//time complexity: O(n)
//space complexity: O(n)
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));