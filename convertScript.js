function convertToMinutes() {
    const hours = document.getElementById("hoursInput").value;
    const result = hours * 60;
    document.getElementById("minutesResult").textContent = `${hours} stundas ir ${result} minūtes.`;
  }
  
  function convertToHours() {
    const minutes = document.getElementById("minutesInput").value;
    const result = (minutes / 60).toFixed(2);
    document.getElementById("hoursResult").textContent = `${minutes} minūtes ir ${result} stundas.`;
  }
  