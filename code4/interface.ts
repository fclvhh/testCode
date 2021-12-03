interface InterfaceA {
  num: number,
  b: boolean,
  str: string,
  optional?: string,
  add(a: number,b: number): number,
  readonly r : number
}
let str1: string = "早上"
let str2: string = "好"
console.log(str1+str2);
console.log(typeof (str1+str2));

