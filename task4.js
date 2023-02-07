// how to compare two objects have same property  without order

// let obj1={name:"person1",age:5}
// let obj2={age:5,name:"person1"}
// JSON.stringify(obj1) === JSON.stringify(obj2); 
//  (_.isEqual(obj1, obj2));

// //  by using lodash we can do that

// or we can do
// var flag=true;

// if(Object.keys(obj1).length==Object.keys(obj2).length){
//     for(key in obj1) { 
//         if(obj1[key] == obj2[key]) {
//             continue;
//         }
//         else {
//             flag=false;
//             break;
//         }
//     }
// }
// else {
//     flag=false;
// }
// console.log("is object equal"+flag);




// 2)api data fetching


fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>{
    data.map((el)=>{
        console.log(el.flag)

    })
})

// 3 data fetching
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>{
    data.map((el)=>{
        console.log(el.name)
        console.log(el.region)
        console.log(el.subregion)
        console.log(el.population)

    })
})
