//given A NUMBER N, count the number till 0;
//input: 5;
//output: 1,2,3,4,5

function  count(n) {
    if (n == 0) {
        return;
    }
    console.log(n + " ");
    count(n - 1);
   
}
count(5);
//time complexity: O(n)
//space complexity: O(n)