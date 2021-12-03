enum Gender {
  man,
  woman
}

// 期望 a1 + a2 = [1,2,3,4,5,6]
let a1: any = [1,2,3]
let a2: any = [4,5,6]

console.log(a1+a2); // 打印出来的结果是很 sb

// js 后面发明的语法来解决这个需求
//  ... 展开运算符
// 更多的 用来出来  数组和对象的 "加减运算" 是对js语言的一种纠正

let a3 = [...a1,...a2]

console.log(a3);

// 据此类推

let o1 = {"name":"sun","age":18}
let o2 = {"nation":"china"}
let o3 = {...o1,...o2}
console.log(o3);

