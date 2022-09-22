# Calculator programming in ReactJS

`This project is developed by Huy Le. The references are mentioned in the Reference category`

## Structure Components
<img src="img/calculator_reactjs-components.jpg" >
<br>
<img src="img/calculator_reactjs-sequence-diagram.jpg" >


## Expression Parsing with Stack

### Infix to Postfix transformation

When we meet the `'+' or '-'` operators
```javascript
if (char === "+" || char === "-") {
    postfix.push(number);
    number = "";
    let indexPop =
        stack.indexOf('sin') >= 0 ? stack.indexOf('sin') + 1 :
            stack.indexOf('cos') >= 0 ? stack.indexOf('cos') + 1 :
                stack.indexOf('tan') >= 0 ? stack.indexOf('tan') + 1 :
                    stack.indexOf('+') >= 0 ? stack.indexOf('+') :
                        stack.indexOf('-') >= 0 ? stack.indexOf('-') : stack.length;

    for (let i = stack.length; i > indexPop; i--) {
        postfix.push(stack.pop());
    }
    stack.push(char);
}
```

When we meet the `'x' or '÷'` operators
```javascript
else if (char === "x" || char === "÷") {
    postfix.push(number);
    number = "";
    stack.push(char);
}
```

When we meet the `'sin' or 'cos' or 'tan'` operators
```javascript
else if (char === "s" || char === "c" || char === "t") {
    index += 3;
    number = "";
    stack.push(char === "s" ? "sin" : char === "c" ? "cos" : "tan");
}
```

When we meet the `'(' or ')'` operators
```javascript
else if (char === "(" || char === ")") {
    if (char === "(") {
        stack.push("(");
    } else {
        for (let i = stack.length; i > index_open; i--) {
            postfix.push(stack[i] === "(" ? "" : stack.pop());
        }
    }
}
```

When we meet the `number`
```javascript
else {
    number += char;
}
```

### Priority of operators

### Process function
```javascript
function computePostfix(expression) {
    let stack = [];
    for (let element of expression) {
        if (isNaN(element)) {
            switch (element) {
                case '+':
                    stack.push(stack.pop() + stack.pop());
                    break;
                case '-':
                    stack.push(-stack.pop() + stack.pop());
                    break;
                case 'x':
                    stack.push(stack.pop() * stack.pop());
                    break;
                case '÷':
                    stack.push(1/stack.pop() * stack.pop());
                    break;
                case 'sin':
                    stack.push(Math.sin(stack.pop()));
                    break;
                case 'cos':
                    stack.push(Math.cos(stack.pop()));
                    break;
                case 'tan':
                    stack.push(Math.tan(stack.pop()));
                    break;
                default:
                    break;
            }
        } else {
            stack.push(Number(element));
        }
    }
    return stack[0];
}
```
## References
[1]

[2]

[3]

[4]

