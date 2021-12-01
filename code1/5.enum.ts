//  需求: 限定gender 属性只能是 male or female


/* 
  枚举
    创造一个集合,从而对取值范围进行一个特殊的限定
    每个值,都是一个枚举数字
    枚举从0开始
*/
enum Gender{
  male,
  female
}


interface Person {
  gender: Gender,
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
let x = {gender:Gender.male,name:"zhangfei"}
let y = {gender:Gender.female,name:"jane"}
console.log(x.gender,y.gender);
console.log(marry(x,y));



