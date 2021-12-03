{
    function createButton(text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        container.appendChild(button);
        return button;
    }
    var wrapper_1 = document.createElement('div');
    wrapper_1.className = "wrap";
    document.body.appendChild(wrapper_1);
    // 添加事件监听
    var n1_1;
    var n2_1;
    var oprate_1;
    wrapper_1.addEventListener('click', function (e) {
        // 完成计算功能
        if (e.target instanceof HTMLButtonElement) { //判断是 button， 而不是 span,排除 output span的影响
            var button = e.target;
            var text = button.textContent;
            console.log(text);
            if ('0123456789'.indexOf(text) >= 0) { // 判断输入 如果是数字
                if (oprate_1) { //有操作符，就到n2了
                    if (n2_1) { // 确保有n2 , 否则会 NaN
                        n2_1 = Number((String(n2_1) + text));
                        console.log(n2_1);
                    }
                    else {
                        n2_1 = Number(text);
                    }
                    span_1.textContent = n2_1.toString();
                }
                else { // 没有操作符，到 n1
                    if (n1_1) { // 确保有n1 , 否则会 NaN
                        n1_1 = Number((String(n1_1) + text));
                        console.log(n1_1);
                    }
                    else {
                        n1_1 = Number(text);
                    }
                    span_1.textContent = n1_1.toString();
                }
            }
            else if ('+-*÷'.indexOf(text) >= 0) {
                oprate_1 = text;
            }
            else if ('='.indexOf(text) >= 0) {
                var result = void 0;
                if (oprate_1 === "+") {
                    result = n1_1 + n2_1;
                }
                else if (oprate_1 === "-") {
                    result = n1_1 - n2_1;
                }
                else if (oprate_1 === "*") {
                    result = n1_1 * n2_1;
                }
                else if (oprate_1 === "÷") {
                    result = n1_1 / n2_1;
                }
                console.log(result);
                span_1.textContent = result;
            }
            else if ("clear".indexOf(text) >= 0) {
                span_1.textContent = '0';
                n1_1 = null;
                n2_1 = null;
            }
        }
    });
    var output = document.createElement('div');
    output.classList.add('output');
    wrapper_1.appendChild(output);
    var span_1 = document.createElement('span');
    span_1.textContent = "0";
    output.appendChild(span_1);
    // 每个函数都会创建一个自己的作用域,所以 button 不会有同名问题
    // ['0','1','2','3','4','5','6','7','8','9'] 写起来很不爽
    var keys = [['clear', '÷',], ['7', '8', '9', '*',], ['4', '5', '6', '-',], ['1', '2', '3', '+',], ['0', '.', '=']];
    keys.forEach(function (keyList) {
        var div = document.createElement('div');
        div.classList.add('row');
        keyList.forEach(function (string) {
            createButton(string, div, "button text-" + string);
        });
        wrapper_1.appendChild(div);
    });
}
