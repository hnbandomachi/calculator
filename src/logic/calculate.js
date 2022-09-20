function Infix2Postfix(expression) {
    // num . + - x ÷ ( ) sin( cos( tan(
    // 5.2 + 4 x 6 - 3 x sin(3 + 4 x 5) + 3 x 7.14
    for (let index = 0; index < expression.length; index++) {
        let element = null;
        let char = expression[index]; 
        if (char === '.') {

        }
        else if (char === '+' || char === '-') {

        }
        else if (char === 'x' || char === '÷') {

        }
        else if (char === 's' || char === 'c' || char === 't') {
            index += 2;
        } 
        else {
            
        }
    }

    // 5.2 4 6 x + 3 3 4 5 x + sin x - 3 7.14 x +
}

function computePostfix(expression) {

}

export default function calculate(stateObj, btn) {
    if(btn === 'AC') {
        stateObj.expression = '0';
    }
    else if (btn === '=') {
        console.log('Button = is clicked');
        let postfixExpression = Infix2Postfix(stateObj.expression);   
        let result = computePostfix(postfixExpression);
        stateObj.expression = result; 
    }
    else {
        stateObj.expression += btn;
    }
    return stateObj;
};
