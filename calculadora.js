
function outcome(){
    let num1 = Number(document.getElementById('numOne').value)
    let num2 = Number(document.getElementById('numTwo').value)
    let total = 0

    if (document.getElementById('soma').checked){
        total = num1 + num2
    } else if (document.getElementById('sub').checked){
        total = num1 - num2
    } else if (document.getElementById('div').checked){
        total = num1 /num2
    }else{
        total = num1 * num2
    }
    document.getElementById('resultArea').innerHTML = total
}