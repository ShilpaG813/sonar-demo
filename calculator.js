// src/calculator.js
// WARNING: This file has intentional code quality issues for lab purposes

var password = 'admin123'; // Bug: hardcoded credential (security hotspot)

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

// Code smell: no proper error handling
function divide(a, b) {
  if (b === 0) {
    console.log('Error'); // Code smell: use proper error handling
    return null;
  }
  return a / b;
}

// Dead code / unreachable
function unusedFunction() {
  var x = 10;
  return x;
  console.log('never reached'); // Bug: unreachable code
}

module.exports = { add, subtract, multiply, divide };
