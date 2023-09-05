var gethours = document.getElementById("inputHour").value;
var num = Number(gethours);
const sbmtBtn = document.getElementById("getMinutes");
const form = document.querySelector("form");
let result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

sbmtBtn.addEventListener('click', () => {
     hoursToMinutes(Number(document.getElementById("inputHour").value));
})

function hoursToMinutes(value){
    const hours = Math.floor(value / 60);
    console.log("H: "+hours);
    const minutes = value % 60;
    console.log("M: "+minutes);
    result.innerText = `${hours}h ${minutes < 10 ? `0${minutes}` : minutes}m`;
    setTimeout(() => {
        result.innerText = " ";
        document.getElementById("inputHour").value = " ";
      }, 6000);
} 