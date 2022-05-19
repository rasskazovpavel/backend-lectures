#!/usr/bin/env node
const readline = require("readline");
const input = readline.createInterface(process.stdin);

const answer = Math.floor(Math.random() * 100);

input.on("line", (data) => {
    if (Number(data) < answer) console.log("Больше");
    if (Number(data) > answer) console.log("Меньше");
    if (Number(data) == answer) {
        input.close();
    }
});

input.on("close", () => {
    console.log("Правильно!");
})

console.log("Загадано число в диапазоне от 0 до 100");

// console.log(answer);
