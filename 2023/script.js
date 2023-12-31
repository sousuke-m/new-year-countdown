var aria_main = document.querySelector(".main");
var aria1 = document.querySelector(".aria1");
setInterval(() => {
    let date1 = new Date();
    let date2 = new Date(2024,0,1);
    let date3 = date2.getTime() - date1.getTime();
    let date4 = new Date(date3);
    if(date3 == 0){
        aria1.remove();
        i = 0;
        aria_main.innerHTML = `<h1>明けましておめでとう</h1><h2>Happy new year</h2>`;
        console.log("happy new year");
        document.body.style.backgroundColor = "#fff";
        document.body.style.backgroundImage = `url("90463.png")`;
        document.querySelector("h1").style.color = "#000";
        document.querySelector("h2").style.color = "#000";
    }
    aria1.innerHTML = `2024年まで、<br>あと${date4.getHours()}時間${date4.getMinutes()}分${date4.getSeconds()}秒`;
}, 500);