function pogaLaiks() {
  const ievadeLogaVertibaLaiks = document.getElementById("ievadeLaiks").value;
  const izvadeLaiksId = document.getElementById("izvadeLaiks");
  const izveleSekunde = document.getElementById("sekunde");
  const izveleSekunde1 = document.getElementById("sekunde1");
  const izveleMinute = document.getElementById("minute");
  const izveleMinute1 = document.getElementById("minute1");
  const izveleStunda = document.getElementById("stunda");
  

  if(izveleSekunde.checked) {
    izvadeLaiksId.innerHTML = `${ievadeLogaVertibaLaiks/60} minūte/es!`
  }
  else if(izveleSekunde1.checked){
    izvadeLaiksId.innerHTML = `${ievadeLogaVertibaLaiks/3600} stunda/as!`
  }
  else if(izveleMinute.checked){
    izvadeLaiksId.innerHTML = `${ievadeLogaVertibaLaiks/60} stunda/as!`
  }
  else if(izveleMinute1.checked){
    izvadeLaiksId.innerHTML = `${ievadeLogaVertibaLaiks*60} sekundes!`
  }
  else if(izveleStunda.checked){
    izvadeLaiksId.innerHTML = `${ievadeLogaVertibaLaiks*3600} sekundes!`
  }
  else{
    izvadeLaiksId.innerHTML = `${ievadeLogaVertibaLaiks*60} minūte/es!`
  }
}


function pogaTemperatura(){
  const ievadeLogaVertibaTemperatura = document.getElementById("ievadeTemperatura").value;
  const izvadeTemperaturaId = document.getElementById("izvadeTemperatura");
  const izveleCelsijs = document.getElementById("celsijs");
  const izveleCelsijs1 = document.getElementById("celsijs1");
  const izveleFarenheits = document.getElementById("farenheits");
  const izveleFarenheits1 = document.getElementById("farenheits1");
  const izveleKelvins = document.getElementById("kelvins");

  if(izveleCelsijs.checked){
    izvadeTemperaturaId.innerHTML = `${(ievadeLogaVertibaTemperatura*1.8)+32} grādi pēc Fārenheita skalas!`
  }
  else if(izveleCelsijs1.checked){
    izvadeTemperaturaId.innerHTML = `${ievadeLogaVertibaTemperatura + 273.15} grādi pēc Kelvina skalas!`
  }
  else if(izveleFarenheits.checked){
    izvadeTemperaturaId.innerHTML = `${(ievadeLogaVertibaTemperatura + 459.67) / 1.8} grādi pēc Kelvina skalas!`
  }
  else if(izveleFarenheits1.checked){
    izvadeTemperaturaId.innerHTML = `${(ievadeLogaVertibaTemperatura - 32) / 1.8} grādi pēc Celsija skalas!`
  }
  else if(izveleKelvins.checked){
    izvadeTemperaturaId.innerHTML = `${ievadeLogaVertibaTemperatura - 273.15} grādi pēc Celsija skalas!`
  }
  else{
    izvadeTemperaturaId.innerHTML = `${(ievadeLogaVertibaTemperatura * 1.8) - 459.67} grādi pēc Fārenheita skalas!`
  }
}

function plkst(){
  const tagad = new Date();

  const datums = tagad.toLocaleDateString("lv-LV",{
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const laiks = tagad.toLocaleTimeString("lv-LV",{
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

  document.getElementById("plkst").textContent = `${datums}, ${laiks}`;

}
plkst();
setInterval(plkst, 1000);
