//Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.
//input: 5;
//output: 15
//time complexity: O(n)
//space complexity: O(n)
function sum(n) {
    if (n == 0) {
        return 0;
    }
    return n + sum(n - 1);
}
console.log(sum(100));
