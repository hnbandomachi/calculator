function isNumber(btn) {
    return /[0-9]+/.test(btn);
}

export default function calculate(stateObj, btn) {
    if(btn === 'AC') {
        return {value: 0}
    }
    else if (isNumber(btn)) {
        console.log('A number is clicked');
        
    }
};
