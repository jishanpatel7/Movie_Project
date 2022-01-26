//given a n number, print fibonacci series till n;
//input: 5;
//output:5

function fib(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(5));

//time complexity: O(n)
//space complexity: O(n)