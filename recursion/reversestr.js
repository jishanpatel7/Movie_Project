//Write a recursive function that takes a string and reverse the string.
//input: "hello";
//output: "olleh";
//input: "racecar";
//output: "racecar";
//time complexity: O(n)
//space complexity: O(n)
function reverse(str) {
    if (str.length <= 1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse("hello"));
console.log(reverse("racecar"));
