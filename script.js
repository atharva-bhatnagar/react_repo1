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
