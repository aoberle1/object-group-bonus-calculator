// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {
    let bonusPercentage = 0 ; 
    let maxBonus = .13
      if ( employee.reviewRating === 3){
      bonusPercentage = bonusPercentage + .04;
      }
        else if( employee.reviewRating === 4){
          bonusPercentage = bonusPercentage + .06;
        }
        else if( employee.reviewRating === 5){
          bonusPercentage = bonusPercentage + .10;
        }
        else {
          bonusPercentage = bonusPercentage
        }
      if ( employee.employeeNumber.length < 5){
        bonusPercentage = bonusPercentage + .05;
      }
      if ( employee.annualSalary > '65000' ) {
      bonusPercentage = bonusPercentage - .01
      }
      if ( bonusPercentage > maxBonus) {
        bonusPercentage = maxBonus
      }
      if ( bonusPercentage < 0 ){
        bonusPercentage = 0
      }
  // your logic here
    
  
  return bonusPercentage;
  // return new object with bonus results

}
console.log( calculateIndividualEmployeeBonus( employees[0] ));

  for ( let i = 0; i < employees.length; i++ ){
    console.log( 'This is:', employees[i]);
  }
  for (let i = 0; i < employees.length; i++) {
    console.log(declareEmployee( employees[i] )); 
  }

  

function declareEmployee( employee ) {

let newEeData = {
  name: employee.name,
  bonusPercentage: calculateIndividualEmployeeBonus(employee),
  totalBonus: employee.annualSalary * calculateIndividualEmployeeBonus(employee),
  totalCompensation: employee.annualSalary += employee.annualSalary * calculateIndividualEmployeeBonus(employee)
};
  return newEeData
}
