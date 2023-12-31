window.onload = function() {
    var aria_main = document.querySelector("main");
    var aria1 = document.querySelector(".aria1");
    for(var _i_ = 1;i++;i>0){
        let date1 = new Date();
        let date2 = new Date('2024/1/1 0:00:00');
        let date3 = date2.getTime() - date1.getTime();
        console.log(date3);
        if(date3 == 0||date3 > 0){
            aria1.remove();
            _i_ = 0;
            aria_main.innerHTML = `<h1>明けましておめでとう🎍</h1><h2>Happy new year</h2>`;
            console.log("happy new year");
        }
        let sec = Math.floor(date3 / 1000 % 60);
        let min = Math.floor(date3 / 1000 / 60 % 60);
        let hour = Math.floor(date3 / 1000 / 60 / 60 % 24);
        let day = Math.floor(date3 / 1000 / 60 / 60 / 24);
        console.log(day);
        console.log(hour);
        console.log(min);
        console.log(sec);
    };
};

