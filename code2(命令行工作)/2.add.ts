#!/usr/bin/env ts-node
let a: number = Number(process.argv[2])
let b: number = Number(process.argv[3])
if(Number.isNaN(a) || Number.isNaN(b) ) {
  console.log("请输入数字");
}
console.log(a+b);

