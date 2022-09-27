function Infix2Postfix(expression) {
    let number = "";
    let postfix = [];
    let stack = [];
    let openIndex = 0;
    for (let index = 0; index < expression.length; index++) {
        let char = expression[index];
        if (char === "+" || char === "-") {
            postfix.push(number);
            number = "";
            let indexPop =
                stack.indexOf('sin') >= 0 ? stack.indexOf('sin') + 1 :
                stack.indexOf('cos') >= 0 ? stack.indexOf('cos') + 1 :
                stack.indexOf('+') >= 0 ? stack.indexOf('+') :
                stack.indexOf('-') >= 0 ? stack.indexOf('-') : 
                stack.indexOf('x') >= 0 ? stack.indexOf('x') :
                stack.indexOf('÷') >= 0 ? stack.indexOf('÷') :stack.length;

            for (let i = stack.length; i > indexPop; i--) {
                postfix.push(stack.pop());
            }
            stack.push(char);
        } else if (char === "x" || char === "÷") {
            postfix.push(number);
            number = "";
            stack.push(char);
        } else if (char === "s" || char === "c") {
            index += 3;
            number = "";
            stack.push(char === "s" ? "sin" :"cos");
            openIndex = stack.length - 1;
        } else if (char === "(" || char === ")") {
            if (char === "(") {
                stack.push("(");
                openIndex = stack.length - 1;
            } else {
                postfix.push(number);
                number = "";
                for (let i = stack.length; i > openIndex; i--) {
                    postfix.push(stack[i] === "(" ? "" : stack.pop());
                }
            }
        } else {
            number += char;
        }
    }
    postfix.push(number);
    postfix = postfix.filter(Boolean);
    for (let i = stack.length; i > 0; i--) {
        postfix.push(stack.pop());
    }
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
                default:
                    break;
            }
        } else {
            stack.push(Number(element));
        }
    }
    return stack[0];
}

export default function calculate(stateObj, btn) {
    if (btn === "AC") {
        stateObj.expression = "0";
    } else if (btn === "=") {
        // let postfixExpression = Infix2Postfix("5.2+4x6-3xsin(3+4x5)+3x7.14");
        let postfixExpression = Infix2Postfix(stateObj.expression);
        let result = computePostfix(postfixExpression);
        stateObj.expression = result;
    } else {
        if (stateObj.expression == "0") {
            stateObj.expression = "";
        }
        stateObj.expression += btn;
    }
    return stateObj;
}
