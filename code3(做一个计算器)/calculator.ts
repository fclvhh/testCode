{
  function createButton(text: string, container: HTMLDivElement,className: string) {
    let button: HTMLButtonElement = document.createElement('button')
    button.textContent = text
    button.className = className
    container.appendChild(button)
  }

  let wrapper: HTMLDivElement = document.createElement('div')
  wrapper.className = "wrap"
  document.body.appendChild(wrapper)

  let output: HTMLDivElement = document.createElement('div')
  output.classList.add('output')
  wrapper.appendChild(output)

  let span = document.createElement('span')
  span.textContent = "0"
  output.appendChild(span)
  // 每个函数都会创建一个自己的作用域,所以 button 不会有同名问题

  // ['0','1','2','3','4','5','6','7','8','9'] 写起来很不爽

  let keys: Array<Array<string>> = [['clear', '÷',], ['7', '8', '9', '*',], ['4', '5', '6', '-',], ['1', '2', '3', '+',], ['0', '.', '=']]

  keys.forEach((keyList: Array < string > )=> {
    let div: HTMLDivElement = document.createElement('div')
    div.classList.add('row')
    keyList.forEach((string: string) => {
      createButton(string, div,`button text-${string}`)
    });
    wrapper.appendChild(div)
  })
 
}
