function hasTargetSum(array, target) {
  // Write your algorithm here
  let result = false;
  
  for(let i = 0; i < (array.length-1); i++){
    for(let k = (i+1); k < array.length; k++){
      result =  (array[i] + array[k] === target);
      if(result === true) break;
    }
    if(result === true) break;
  }
  return result;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  - Create a for loop to loop through array to second to last element
  - Create a for loop to loop through array from the successive element to last
  - Add element from first loop to every element in second loop
  - Compare the addition result to the target
  - Break both inner and outer loop if the result and target are equal
*/

/*
  Add written explanation of your solution here
  We loop through the first to second last element of the the array in the outer loop.
  We loop through the consecutive element to last element in the inner loop, all while adding the
  value of the outer loop element to the inner loop element. We compare this addition result to the
  target value. If both the target and addition result are equal, then we break both loops. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
