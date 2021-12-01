//  接口 : key固定的 obj

interface Person {
  gender: string,
  name: string
}

function marry(a: Person,b: Person) :Person[] {
  if(a.gender == b.gender) {
    throw new Error('性别相同不能结婚')
  }else {
    console.log(a.name,b.name); 
    return [a,b]
  }
}
let x = {gender:'男',name:"zhangfei"}
let y = {gender:'女',name:"jane"}
console.log(marry(x,y));
