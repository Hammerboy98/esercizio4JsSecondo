let numbers = [];
for (let i = 1; i <= 90; i++) {
    numbers.push(i);
}
const numbersContainer = document.getElementById('numbersContainer');
for (let i = 0; i < 9; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    for (let j = 0; j < 10; j++) {
        const num = numbers[i * 10 + j];
        const div = document.createElement('div');
        div.classList.add('number');
        div.textContent = num;
        div.id = 'num' + num; 
        column.appendChild(div);
    }

    numbersContainer.appendChild(column);
}
function drawNumber() {
    const randomIndex = Math.floor(Math.random() * 90); 
    const drawnNumber = numbers[randomIndex];  

    const numberElement = document.getElementById('num' + drawnNumber);
    if (numberElement && !numberElement.classList.contains('drawn')) {
        numberElement.classList.add('drawn'); 
        alert("Numero estratto: " + drawnNumber);
    } else {
        alert("Numero già estratto o tutti i numeri sono stati estratti");
    }
}
document.getElementById('drawButton').addEventListener('click', drawNumber);