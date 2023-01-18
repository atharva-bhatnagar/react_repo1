console.log("msg1")

setTimeout(()=>{
    console.log("msg3")
},0)
setTimeout(()=>{
    console.log("msg4")
},3000)
console.log("msg2")
const arr3=new Array()
arr3[4]=64
console.log(arr3)
let arr=[1,22,3,2]
console.log(arr)
let obj={
    name:'atharav',
    rollno:30
}
console.log(obj)

/*Petya loves football very much. One day, as he was watching a football match, he was writing the 
players' current positions on a piece of paper. To simplify the situation he depicted it as a string consisting of
 zeroes and ones. A zero corresponds to players of one team; a one corresponds to players of another team. If 
there are at least 7 players of some team standing one after another, then the situation is considered dangerous. 
For example, the situation 00100110111111101 is dangerous and 11110111011101 is not. You are given the current situation. Determine whether it is dangerous or not.

The first input line contains a non-empty string consisting of characters "0"
 and "1", which represents players. The length of the string does not exceed 100 characters. There's at least one player from each team present on the field.

Print "YES" if the situation is dangerous. Otherwise, print "NO".8*/

let playerStr="11010100100000000011"

if(playerStr.includes("1111111")||playerStr.includes("0000000")){
    console.log("yes")
}else{
    console.log("no")
}
/*Being a nonconformist, Volodya is displeased with the current state of things, particularly with the order of
 natural numbers (natural number is positive integer number). He is determined to rearrange them. But there are
  too many natural numbers, so Volodya decided to start with the first n. He writes down the following sequence
   of numbers: firstly all odd integers from 1 to n (in ascending order), then all even integers from 1 to n 
   (also in ascending order). Help our hero to find out which number will stand at the position number k.

The only line of input contains integers n and k (1 ≤ k ≤ n ≤ 10^12).

Print the number that will stand at the position number k after Volodya's manipulations.*/

let n=55
let k=27
let num_odd=-1;
let num_even=0;

//still doesn't satisfy all test cases


if(k===1){
    console.log(1)
}
else{
    if(k<=(n/2)){
        for(let i=1;i<=k;i++){
            num_odd+=2
        }
        console.log(num_odd)
    }else{
        for(let i=Math.floor(n/2);i<=k;i++){
            num_even+=2
        }
        console.log(num_even)
    }
}

/*Theatre Square in the capital city of Berland has a rectangular shape with the size n × m meters.
 On the occasion of the city's anniversary, a decision was taken to pave the Square with square granite 
 flagstones. Each flagstone is of the size a × a.

What is the least number of flagstones needed to pave the Square? It's allowed to cover the surface larger
 than the Theatre Square, but the Square has to be covered. It's not allowed to break the flagstones. The sides
  of flagstones should be parallel to the sides of the Square.

The input contains three positive integer numbers in the first line: n,  m and a (1 ≤  n, m, a ≤ 10^9).

Write the needed number of flagstones.
INPUT=> 6 6 4

let nn=6;
let mm=6;
let aa=4;
console.log(Math.ceil((nn*mm)/(aa*aa)))



*/ 




/*You are given an array a of n integers. Count the number of pairs of indices (i,j) such that i<j and aj−ai=j−I.

The first line contains one integer t (1≤t≤104). Then t test cases follow.

The first line of each test case contains one integer n (1≤n≤2⋅105).

The second line of each test case contains n integers a1,a2,…,an (1≤ai≤n) — array a.

It is guaranteed that the sum of n over all test cases does not exceed 2⋅10^5.*/

//console.log("15"==15)

/*var m=5
while(true){
    let n=9
    if(m>n){
        console.log(true);

    }
    else {
        return false;
    }
}
*/
const numbers = [1, 2, 3, 4];
const ans = numbers.reduce((result, item) => {
  return result + item;
}, 0);
console.log(ans); 