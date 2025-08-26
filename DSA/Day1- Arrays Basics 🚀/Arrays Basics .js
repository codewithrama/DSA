"use strict";

"use strict";

// 1 📝 Problem 1: Find Min & Max in an Array
// Question:
// Given an array of integers, find the smallest (min) and largest (max) element.

function findMinMax(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length + 1; i++) {
    min = min >= array[i] ? (min = array[i]) : min;
    max = max <= array[i] ? (max = array[i]) : max;
  }
  console.log(`min Element `, min);
  console.log(`max Element `, max);
}

// findMinMax([3, 1, 7, 0, -2, 9]);

// 📝 Day 1 – Challenge 2: Reverse an Array

// Question:
// Given an array of integers, return the array in reverse order without using reverse() method.

// Example:
// Input:  [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

function reverseArray(array) {
  let revesearr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revesearr.push(array[i]);
  }
  console.log("Reversed Array ", revesearr);
}

reverseArray([3, 1, 7, 0, -2, 9]);

// 📝 Problem 3: Check if Array is Sorted

// Question:
// Given an array of integers, check if the array is sorted in non-decreasing order (each element is less than or equal to the next).

// If sorted → print "Array is sorted"

// If not → print "Array is not sorted"



function checkSorted(array) {
  let i = 0;

  while (i < array.length - 1) {
    if (array[i] > array[i + 1]) {
      console.log("Array is not sorted");
      return;
    }
    i++;
  }

  console.log("Array is sorted");
}

checkSorted([1, 2, 3, 4, 5]); // ✅ sorted
checkSorted([5, 3, 4, 2]); // ❌ not sorted
checkSorted([3, 1, 7, 0, -2, 9]);

