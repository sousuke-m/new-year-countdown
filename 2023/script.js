var aria_main = document.querySelector(".main");
var aria1 = document.querySelector(".aria1");
for(let i = 2;i > 1;i++){
    let date1 = new Date();
    let date2 = new Date(2024,1,1);
    let date3 = date2.getTime() - date1.getTime();
    if(date3 == 0){
        aria1.remove();
        i = 0;
        aria_main.innerHTML = `<h1>明けましておめでとう🎍</h1><h2>Happy new year</h2>`;
        console.log("happy new year");
    }
    let sec = date3 / 1000;
    let min = date3 / (24 * 1000);
    let hour = date3 / (24 * 60 * 1000);
    let day = date3 / (24 * 60 * 60 * 1000);
    aria1.innerHTML = `来年まで、あと${day}日${hour}時間${min}分${sec}秒`;
};

