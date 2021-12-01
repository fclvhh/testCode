// 强制类型
function findMin(a: number,b: number): number {
  if(a>b) {
    return b
  }else {
    return a
  }
}

let c = findMin(1,2)
console.log(c);

