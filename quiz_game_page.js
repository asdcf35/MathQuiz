function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actAns = parseInt(number1) * parseInt(number2)
    questionNum = `<h4> ${number1} x ${number2} </h4>`
    inputBox = '<br>Answer: <input type="text" id="input_check_box">';
    checkButton = '<br><br><button class="btn btn-info" onclick="check()">Check</button>';
    row = questionNum + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check(){}