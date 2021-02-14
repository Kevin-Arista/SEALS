function calc(){
    var input1 = parseInt(document.getElementById('input-1').value);
    var input2 = parseInt(document.getElementById('input-2').value);
    var operator = document.getElementById('operators').value;

    if (operator === '+'){

        document.getElementById('output').value = input1 + input2;
    }
    if (operator === '-'){

        document.getElementById('output').value = input1 - input2;
    }
    if (operator === '/'){

        document.getElementById('output').value = input1 / input2;
    }
    if (operator === '*'){

        document.getElementById('output').value = input1 * input2;
    }
}

function display() {
    var selectcolor = document.getElementById('colorselect').value;

    document.body.style.backgroundColor = selectcolor;
 }