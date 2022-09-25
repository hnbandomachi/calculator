function Infix2Postfix(expression) {
    let number = "";
    let postfix = [];
    let stack = [];
    for (let index = 0; index < expression.length; index++) {
        let char = expression[index];
        let index_open =
            stack.indexOf("(") >= 0 ? stack.indexOf("(") :
                stack.indexOf("sin") >= 0 ? stack.indexOf("sin") :
                    stack.indexOf("cos") >= 0 ? stack.indexOf("cos") :
                        stack.indexOf("tan") >= 0 ? stack.indexOf("tan") : stack.length;
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
        } else if (char === "x" || char === "÷") {
            postfix.push(number);
            number = "";
            stack.push(char);
        } else if (char === "s" || char === "c" || char === "t") {
            index += 3;
            number = "";
            stack.push(char === "s" ? "sin" : char === "c" ? "cos" : "tan");
        } else if (char === "(" || char === ")") {
            if (char === "(") {
                stack.push("(");
            } else {
                for (let i = stack.length; i > index_open; i--) {
                    postfix.push(stack[i] === "(" ? "" : stack.pop());
                }
            }
        } else {
            number += char;
        }
    }
    postfix.push(number);
    for (let i = stack.length; i > 0; i--) {
        postfix.push(stack.pop());
    }
    console.log('postfix: ', postfix);
    return postfix;
}

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
    console.log("result: ", stack[0]);
    return stack[0];
}

export default function calculate(stateObj, btn) {
    if (btn === "AC") {
        stateObj.expression = "0";
    } else if (btn === "=") {
        console.log("Button = is clicked");
        let postfixExpression = Infix2Postfix("5.2+4x6-3xsin3+4x5)+3x7.14");
        // let postfixExpression = Infix2Postfix(stateObj.expression);
        let result = computePostfix(postfixExpression);
        stateObj.expression = "=";
    } else {
        stateObj.expression += btn;
    }
    return stateObj;
}
