function convertirTemperatura() {
    let tempCelsius = document.getElementById("tempCelsius").value;
    
    tempCelsius = parseFloat(tempCelsius);

    if (isNaN(tempCelsius)) {
        alert("Error: Por favor, ingrese un número válido.");
        console.error("Entrada inválida. Se esperaba un número.");
        return;
    }

    let tempKelvin = tempCelsius + 273.15;
    let tempFahrenheit = (tempCelsius * 9/5) + 32;

    document.getElementById("resultado").innerHTML = 
        `Grados Kelvin: ${tempKelvin.toFixed(2)}<br>Grados Fahrenheit: ${tempFahrenheit.toFixed(2)}`;

    console.log(`Grados Kelvin: ${tempKelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${tempFahrenheit.toFixed(2)}`);
}
