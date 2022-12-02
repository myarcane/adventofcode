#!/usr/bin/env node
const { readFileSync } = require("fs");

const inputData = readFileSync("input.txt");

const maxCalories = inputData
  .toString()
  .split(/\r?\n/)
  .reduce(
    (accumulator, currentValue) => {
      currentValue = parseInt(currentValue);
      if (Number.isNaN(currentValue)) {
        accumulator.push(0);
      } else {
        accumulator[accumulator.length - 1] =
          accumulator[accumulator.length - 1] + currentValue;
      }
      return accumulator;
    },
    [0]
  )
  .sort((a, b) => b - a)[0];

console.log("Max calories", maxCalories);
