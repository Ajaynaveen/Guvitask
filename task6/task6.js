function square(number) {
    return number * number;
  }
  
  console.log(square(5)); // Example usage: Square of 5 is 25


  //swapping
  let a = 5;
  let b = 10;
  
  [a, b] = [b, a];
  
  console.log("After swapping: a =", a, "b =", b);


  //addthreenumbers

  function addThreeNumbers(a, b, c) {
    return a + b + c;
  }
  
  console.log(addThreeNumbers(5, 10, 15)); // Example usage: Sum of 5, 10, and 15 is 30



  //celciustofahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  console.log(celsiusToFahrenheit(25)); // Example usage: 25°C is 77°F

  
  //metertomiles
  function meterToMiles(meter) {
    return meter * 0.000621371;
  }
  
  console.log(meterToMiles(1000)); 

  
  //pundstokg
  function poundsToKg(pounds) {
  return pounds * 0.453592;
}

console.log(poundsToKg(10)); 
  
    //battingaverage
    function battingAverage(runs, wickets) {
        return runs / wickets;
      }
      
      console.log(battingAverage(500, 10)); // Example usage: Batting average is 50.0

      
      //averagetestscore
      function calculateAverage(scores) {
        const sum = scores.reduce((acc, score) => acc + score, 0);
        return sum / scores.length;
      }
      
      const testScores = [85, 90, 78, 92, 88];
      console.log("Average test score:", calculateAverage(testScores));

      //powerofnumber
      function power(x, y) {
        return Math.pow(x, y);
      }
      
      console.log(power(2, 3)); 

      //simpleinterest
      function simpleInterest(principal, rate, time) {
        return (principal * rate * time) / 100;
      }
      
      console.log(simpleInterest(1000, 5, 2)); 

      //eqilateraltriangle
      function areaOfEquilateralTriangle(sideLength) {
        return (Math.sqrt(3) / 4) * Math.pow(sideLength, 2);
      }
      
      console.log(areaOfEquilateralTriangle(5)); // Example usage: Area is approximately 10.83

      //calculatediscount
      function calculateDiscount(actualCost, soldCost) {
        const discount = actualCost - soldCost;
        const discountPercentage = (discount / actualCost) * 100;
        return { discount, discountPercentage };
      }
      
      console.log(calculateDiscount(100, 80)); // Example usage: Discount is 20, Discount percentage is 20%
      
      

      
//electricitybill
function calculateElectricityBill(units, ratePerUnit) {
    return units * ratePerUnit;
  }
  
  console.log(calculateElectricityBill(100, 10));
  

  //cgpa
  function calculateCGPA(grades) {
    const totalPoints = grades.reduce((acc, grade) => acc + grade, 0);
    const cgpa = totalPoints / grades.length;
    return cgpa;
  }
  
  const grades = [3.5, 4.0, 3.2, 3.8, 3.9]; // Example grades (on a 4.0 scale)
  console.log("CGPA:", calculateCGPA(grades));
  
  let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome, Employee!' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);


let num = 1;

for (let i = 0; i < 10; i++) {
  console.log(num);
  num += 1;
}
//print eben numbers
for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}

//bomb disarmed 
let countdown = 100;
while (countdown > 0) {
  countdown--;
}

console.log("Bomb disarmed");



//greatest
aa = (f, s, t) => {
  console.log(f, s, t);
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
}

aa(1, 2, 3);//

Fix the code to Sum of the digits present in the number

Code:

let n = 123;
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}//
// Fix the code to Sum of all numbers using IIFE function

Code:

const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i <= arr.length; i++);{
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();
//remove semicolon from the for loop


//Fix the code to gen Title caps.

Code:

// var arr = [“guvi”, “geek”, “zen”, “fullstack”];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
// ano(); ans :pass arr as an argument