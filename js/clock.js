const clock=document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const miniutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText =`${hours}:${miniutes}:${seconds}`;
}

//setInterval(sayHello,5000); //5000ms = 5s

//time out ->setTimeo
getClock();
setInterval(getClock,1000); //1s 지연되니 앞에 함수 1개 호출


//우리는 1 -> 01을 원함

