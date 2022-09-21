function Infix2Postfix(expression) {
    // num . + - x ÷ ( ) sin( cos( tan(
    // 5.2 + 4 x 6 - 3 x sin(3 + 4 x 5) + 3 x 7.14
    let number = "";
    let postfix = [];
    let stack = [];
    for (let index = 0; index < expression.length; index++) {
        let char = expression[index];
        let index_open =
            stack.indexOf("(") >= 0? stack.indexOf("("):
            stack.indexOf("sin(") >= 0? stack.indexOf("sin("):
            stack.indexOf("cos(") >= 0? stack.indexOf("cos("):
            stack.indexOf("tan(") >= 0? stack.indexOf("tan("): stack.length;
        if (char === "+" || char === "-") {
            postfix.push(number);
            number = "";
            let indexPop =
                stack.indexOf('sin(') >= 0 ? stack.indexOf('sin(') + 1 :
                    stack.indexOf('cos(') >= 0 ? stack.indexOf('cos(') + 1 :
                        stack.indexOf('tan(') >= 0 ? stack.indexOf('tan(') + 1 :
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
            stack.push(char === "s" ? "sin(" : char === "c" ? "cos(" : "tan(");
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
    console.log("postfix: ", postfix);
    return postfix;

    // 5.2 4 6 x + 3 3 4 5 x + sin x - 3 7.14 x +
}

function computePostfix(expression) { }

export default function calculate(stateObj, btn) {
    if (btn === "AC") {
        stateObj.expression = "0";
    } else if (btn === "=") {
        console.log("Button = is clicked");
        let postfixExpression = Infix2Postfix("5.2+4x6-3xsin(3+4x5)+3x7.14");
        // let postfixExpression = Infix2Postfix(stateObj.expression);
        // let result = computePostfix(postfixExpression);
        stateObj.expression = "=";
    } else {
        stateObj.expression += btn;
    }
    return stateObj;
}
