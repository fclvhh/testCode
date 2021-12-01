{
    function createButton(text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        container.appendChild(button);
    }
    var wrapper_1 = document.createElement('div');
    wrapper_1.className = "wrap";
    document.body.appendChild(wrapper_1);
    var output = document.createElement('div');
    output.classList.add('output');
    wrapper_1.appendChild(output);
    var span = document.createElement('span');
    span.textContent = "0";
    output.appendChild(span);
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
