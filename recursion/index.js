//print spelling

var str = ["zero","one", "two","three","four","five","six","seven","eight","nine"];

function printSpelling(n, str) {
 if(n==0)
 return;
 printSpelling(Math.floor(n/10), str);
    console.log(str[n%10] + " ");
}

console.log(printSpelling(786, str));
//time complexity: O(n)
//space complexity: O(n)
