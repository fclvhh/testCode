{
  function createButton(text: string, container: HTMLDivElement, className: string) {
    let button: HTMLButtonElement = document.createElement('button')
    button.textContent = text
    button.className = className
    container.appendChild(button)
    return button
  }

  let wrapper: HTMLDivElement = document.createElement('div')
  wrapper.className = "wrap"
  document.body.appendChild(wrapper)

  // 添加事件监听
  let n1: number
  let n2: number
  let oprate: string
  wrapper.addEventListener('click', function (e) {
    // 完成计算功能
    if (e.target instanceof HTMLButtonElement) { //判断是 button， 而不是 span,排除 output span的影响
      let button: HTMLButtonElement = e.target;
      let text = button.textContent
      console.log(text);
      if ('0123456789'.indexOf(text) >= 0) { // 判断输入 如果是数字

        if (oprate) { //有操作符，就到n2了
          if (n2) { // 确保有n2 , 否则会 NaN
            n2 = Number((String(n2) + text))
            console.log(n2);
          } else {
            n2 = Number(text)
          }
          span.textContent = n2.toString()
        } else { // 没有操作符，到 n1
          if (n1) { // 确保有n1 , 否则会 NaN
            n1 = Number((String(n1) + text))
            console.log(n1);
          } else {
            n1 = Number(text)
          }
          span.textContent = n1.toString()
        }
      } else if ('+-*÷'.indexOf(text) >= 0) {
        oprate = text
      } else if ('='.indexOf(text) >= 0) {
        let result
        if (oprate === "+") {
          result = n1 + n2
        } else if (oprate === "-") {
          result = n1 - n2
        } else if (oprate === "*") {
          result = n1 * n2
        } else if (oprate === "÷") {
          result = n1 / n2
        }
        console.log(result);

        span.textContent = result

      }else if("clear".indexOf(text)>=0) {
        span.textContent = '0'
        n1=null
        n2 = null
      }



      
    }
  })



let output: HTMLDivElement = document.createElement('div')
output.classList.add('output')
wrapper.appendChild(output)

let span = document.createElement('span')
span.textContent = "0"
output.appendChild(span)
// 每个函数都会创建一个自己的作用域,所以 button 不会有同名问题

// ['0','1','2','3','4','5','6','7','8','9'] 写起来很不爽

let keys: Array<Array<string>> = [['clear', '÷',], ['7', '8', '9', '*',], ['4', '5', '6', '-',], ['1', '2', '3', '+',], ['0', '.', '=']]

keys.forEach((keyList: Array<string>) => {
  let div: HTMLDivElement = document.createElement('div')
  div.classList.add('row')
  keyList.forEach((string: string) => {
    createButton(string, div, `button text-${string}`)
  });
  wrapper.appendChild(div)
})



}
