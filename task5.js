// odd numbers in an array
//   (function(){
// let arr=[1,2,3,4,5,6,7,8,9]
// let ans=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         ans.push(arr[i])

//     }
// }
// console.log(ans)
//   }

// )()



// 2 print title in upper case as a anonymous function




// let ans=function () {
//     let string="ajay is a good boy"
//     let str= string.toLowerCase().split(" ");
//     for(let i = 0; i< str.length; i++){
//        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//     }
    
//  return(str.join(' '));
//  }
//  console.log(ans())
 




//3. sum of all numbers in an array as iife

// (function(){
//     let arr=[1,2,3,4,5,6,7,8,9]
// let sum=0
// for(let i=0;i<arr.length;i++){
//    sum+=arr[i]
// }
// console.log(sum)
// })()



// 4.return all prime numbers in an array as anonymous

// let prime=function(){
//     let arr=[1,8,3,4,5,6,117,8,29]
// let count=0;
// let ans=[];

// for(let i=1;i<arr.length;i++){
// count=0
//     for(let j=2;j<=arr[i];j++){

//         if(arr[i]%j==0){
//             count++
//         }
//     }
//     if(count==1){
//         ans.push(arr[i])
//     }
// }
// return ans
// }
// console.log(prime())




// 5.return all the pallindromes in an array as iife





// (function(){
//     let arr=["ajay","malayalam","121","coc","12321"]
// let ans=[];
// for(let i=0;i<arr.length;i++){
  
// if(isPalindrome(arr[i])){
//     ans.push(arr[i])

// }
// }
// console.log(ans)
// function isPalindrome(s)
// {
//     // Copy string s char into string a
//     let a = s;
//     s = s.split('').reverse().join('');
 
//     // Check if two string are equal or not
//     return s == a;
// }


// })()







// 6 return median of two sorted arrays of same size


// let median=function(){
//     let  arr1 = [1,12,15,26,38];
// let arr2 = [2,13,17,30,45];

// let res=[]
// let i=0;
// let j=0;
// while(i<arr1.length&&j<arr2.length){

//     if(arr1[i]<arr2[j]){

//         res.push(arr1[i])
        
//         i++;
//     }
//     else{
//         res.push(arr2[j])
//         j++;

//     }

// }

// while(i<arr1.length){
//     res.push(arr1[i])
//     i++;
// }
// while(j<arr2.length){
//     res.push(arr2[j])
//     j++;
// }
// let len=res.length/2;
// let mid1=res[len]
// let mid2=res[len-1]
// return((mid1+mid2)/2)

// }

// console.log(median())



//7 remove duplicates from an array
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
      
//   let removeDuplicates=  function removeDuplicates(arr) {
//         return([...new Set(arr)]);
//     }
//     console.log(removeDuplicates(arr))
    





// do the below programs in arrow functions

// a.Print odd numbers in an array

// let arr=[1,2,3,4,5,6,7,8,9]

// let value=arr.filter(item=>{
//     return item%2!==0
// })
// console.log(value)

//  b.sum of all numbers in an array

// let arr=[1,2,3,4,5,6,7,8,9]

// let sum=arr.reduce((acc,num)=>{
//    return  acc+num


// },0)
// console.log(sum)


// c.prime mumbers in an array

// var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// numArray = numArray.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });

// console.log(numArray);



//  d.return all pallindromes

// let arr=["ajay","malayalam","121","coc","12321"]
// let ans=[];
// let palindromes=arr.filter(item=>{
//     if(isPalindrome(item)){
//         return true
    
//     }
//     return false
    
// })
  

// console.log(palindromes)
// function isPalindrome(s)
// {
//     // Copy string s char into string a
//     let a = s;
//     s = s.split('').reverse().join('');
 
//     // Check if two string are equal or not
//     return s == a;
//  }


// 2 print title in upper case as a anonymous function




// let ans=function () {
//     let string="ajay is a good boy"
//     let str= string.toLowerCase().split(" ");
//     for(let i = 0; i< str.length; i++){
//        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//     }
    
//  return(str.join(' '));
//  }
//  console.log(ans())
    

 let string="ajay is a good boy"
    let str= string.toLowerCase().split(" ");
  let strings=  str.map(str=>{
        return str[0].toUpperCase() + str.slice(1);

    })
    console.log(strings.join(' '))