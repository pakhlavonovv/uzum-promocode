let button = document.getElementById('promocode');
let code = '0017047'
button.onclick = function() {
    alert('Sizni console da promocode kutyapti');

    console.log(code);
    confirm(`Siz consoleda ko'rgan code: ${code} to'g'rimi?`)
};
function checkNumber() {
    let inputElement = document.getElementById('inputNumber');
    let inputValue = inputElement.value.trim(); 

    if (!isNaN(parseInt(inputValue))) {
        alert('1');
    } else {
        alert('Please enter a valid number');
    }
}


if(checkPromo == code){
    alert("1")
}