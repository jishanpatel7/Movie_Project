//Write a function that takes a string and returns if the string is a palindrome.
//input: "racecar";
//output: true
//input: "hello";
//output: false
//time complexity: O(n)
//space complexity: O(n)
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] != str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
