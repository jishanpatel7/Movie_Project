//Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.
//input: [1,2,3,4,5];
//output: 120
//time complexity: O(n)
//space complexity: O(n)
function product(nums) {
    if (nums.length == 0) {
        return 1;
    }
    return nums[0] * product(nums.slice(1));
}
console.log(product([1, 2 ,3, 4, 5]));
