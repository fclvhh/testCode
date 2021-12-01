/* 
  重载： 函数 予许 重名
    这个机制是对作用域概念的一个特殊情形，理论上说 是不准同名的
 函数签名 ： 函数名 + 参数

*/

//  参数类型不同的重载
//  默认最后要有 普遍适用的 代码
function add(a: number,b: number) : number
function add(a: string,b: string) : string
function add(a: any,b: any) :any{
    return a+b
}
let d =  add(2,3)
let e =  add("fc","dada")
console.log(d);
console.log(e)
//  参数个数不同的重载
//  最后一个函数是普适的
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}

// 这两个例子也是函数需要重载这个机制的原因