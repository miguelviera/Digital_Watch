const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
let secCount = 0;
let minCount = 0;
let i;

start.addEventListener("click", function () {
    i = setInterval(function () {
        secCount++;
        if (secCount < 10) {
            sec.innerHTML = `0${secCount}`;
        } else {
            sec.innerHTML = secCount;
        }
        if (secCount === 60) {
            secCount = 0;
            minCount++;
            min.innerHTML = `0${minCount}`;
        }
    }, 1000);

})

stop.addEventListener("click", function () {
    clearInterval(i);
})

reset.addEventListener("click", function () {
    secCount = 0;
    minCount = 0;
    sec.innerHTML = "00";
    min.innerHTML = "00";
})

