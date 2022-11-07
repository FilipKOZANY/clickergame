
let clicks = 0;
let clickMultiple = 1;
let price = 100;
let cps1 = 0;
let cps2 = 0;
let cps3 = 0;
let cps4 = 0;
let cps5 = 0;
let cps6 = 0;
let cps7 = 0;
let cps8 = 0;
let cps9 = 0;
let cps10 = 0;
let cps11 = 0;
let cpsPrice1 = 50;
let cpsPrice2 = 200;
let cpsPrice3 = 1000;
let cpsPrice4 = 2500;
let cpsPrice5 = 10000;
let cpsPrice6 = 50000;
let cpsPrice7 = 100000;
let cpsPrice8 = 250000;
let cpsPrice9 = 500000;
let cpsPrice10 = 1000000;
let cpsPrice11 = 5000000;
let moneyPerSecond = 0;



document.getElementById("click").addEventListener("click", function(){
clicks = clicks + clickMultiple;
document.getElementById("money").innerText = "Money: " + clicks +"$";
});


document.getElementById("buy").addEventListener("click", function(){
    if(clicks >= price){
        document.getElementById("buy").innerHTML = "Buy clicks: " + price * 5 + "$";
    clickMultiple = clickMultiple * 2;
    clicks = clicks - price ;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
    price = price * 5;
}
    });


    document.getElementById("aut1").addEventListener("click", function(){
        if(clicks >= cpsPrice1){
            document.getElementById("aut1").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice1 * 1.2) + "$";
cps1 = cps1 + 1;
clicks = clicks - cpsPrice1;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice1 = Math.floor( cpsPrice1 * 1.2);
moneyPerSecond = moneyPerSecond + 1;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
    });


    function autoclicker(){
        clicks = clicks + cps1;
        document.getElementById("money").innerText = "Money: " + clicks +"$";
    };
   setInterval(autoclicker, 1000)


   document.getElementById("aut2").addEventListener("click", function(){
    if(clicks >= cpsPrice2){
        document.getElementById("aut2").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice2 * 1.2) + "$";
cps2 = cps2 + 1;
clicks = clicks - cpsPrice2;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice2 = Math.floor( cpsPrice2 * 1.2);
moneyPerSecond = moneyPerSecond + 2;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
});
function autoclicker1(){
    clicks = clicks + cps2;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
};
setInterval(autoclicker1, 500)

document.getElementById("aut3").addEventListener("click", function(){
    if(clicks >= cpsPrice3){
        document.getElementById("aut3").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice3 * 1.2) + "$";
cps3 = cps3 + 1;
clicks = clicks - cpsPrice3;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice3 = Math.floor( cpsPrice3 * 1.2);
moneyPerSecond = moneyPerSecond + 4;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
});
function autoclicker2(){
    clicks = clicks + cps3;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
};
setInterval(autoclicker2, 250)



document.getElementById("aut4").addEventListener("click", function(){
    if(clicks >= cpsPrice4){
        document.getElementById("aut4").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice4 * 1.2) + "$";
cps4 = cps4 + 1;
clicks = clicks - cpsPrice4;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice4 = Math.floor( cpsPrice4 * 1.2);
moneyPerSecond = moneyPerSecond + 8;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
});
function autoclicker3(){
    clicks = clicks + cps4;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
};
setInterval(autoclicker3, 125)



document.getElementById("aut5").addEventListener("click", function(){
    if(clicks >= cpsPrice5){
        document.getElementById("aut5").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice5 * 1.2) + "$";
cps5 = cps5 + 1;
clicks = clicks - cpsPrice5;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice5 = Math.floor( cpsPrice5 * 1.2);
moneyPerSecond = moneyPerSecond + 16;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
});
function autoclicker4(){
    clicks = clicks + cps5;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
};
setInterval(autoclicker4, 60)



document.getElementById("aut6").addEventListener("click", function(){
    if(clicks >= cpsPrice6){
        document.getElementById("aut6").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice6 * 1.2) + "$";
cps6 = cps6 + 1;
clicks = clicks - cpsPrice6;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice6 = Math.floor( cpsPrice6 * 1.2);
moneyPerSecond = moneyPerSecond + 32;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
});
function autoclicker5(){
    clicks = clicks + cps6;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
};
setInterval(autoclicker5, 30)



document.getElementById("aut7").addEventListener("click", function(){
    if(clicks >= cpsPrice7){
        document.getElementById("aut7").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice7 * 1.2) + "$";
cps7 = cps7 + 1;
clicks = clicks - cpsPrice7;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice7 = Math.floor( cpsPrice7 * 1.2);
moneyPerSecond = moneyPerSecond + 64;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
});
function autoclicker6(){
    clicks = clicks + cps7;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
};
setInterval(autoclicker6, 15)



document.getElementById("aut8").addEventListener("click", function(){
    if(clicks >= cpsPrice8){
        document.getElementById("aut8").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice8 * 1.2) + "$";
cps8 = cps8 + 1;
clicks = clicks - cpsPrice8;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice8 = Math.floor( cpsPrice8 * 1.2);
moneyPerSecond = moneyPerSecond + 128;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
});
function autoclicker7(){
    clicks = clicks + cps8;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
};
setInterval(autoclicker7, 7)



document.getElementById("aut9").addEventListener("click", function(){
    if(clicks >= cpsPrice9){
        document.getElementById("aut9").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice9 * 1.2) + "$";
cps9 = cps9 + 1;
clicks = clicks - cpsPrice2;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice9 = Math.floor( cpsPrice9 * 1.2);
moneyPerSecond = moneyPerSecond + 256;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
});
function autoclicker8(){
    clicks = clicks + cps9;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
};
setInterval(autoclicker8, 3)



document.getElementById("aut10").addEventListener("click", function(){
    if(clicks >= cpsPrice10){
        document.getElementById("aut10").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice10 * 1.2) + "$";
cps10 = cps10 + 1;
clicks = clicks - cpsPrice10;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice10 = Math.floor( cpsPrice10 * 1.2);
moneyPerSecond = moneyPerSecond + 512;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
});
function autoclicker9(){
    clicks = clicks + cps10;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
};
setInterval(autoclicker9, 1)



document.getElementById("aut11").addEventListener("click", function(){
    if(clicks >= cpsPrice11){
        document.getElementById("aut11").innerHTML = "Buy autoclicker: " + Math.floor(cpsPrice11 * 1.2) + "$";
cps11 = cps11 + 2;
clicks = clicks - cpsPrice11;
document.getElementById("money").innerText = "Money: " + clicks +"$";
cpsPrice11 = Math.floor( cpsPrice11 * 1.2);
moneyPerSecond = moneyPerSecond + 1024;
document.getElementById("mps").innerText = "Money per second: " + moneyPerSecond + "$" 
}
});
function autoclicker10(){
    clicks = clicks + cps11;
    document.getElementById("money").innerText = "Money: " + clicks +"$";
};
setInterval(autoclicker10, 1)

const dark = document.querySelector('#dark');
const white = document.querySelector('#white')
const change = document.querySelector('#change');
dark.addEventListener('click', () => {
change.style.backgroundColor = "black";
});
white.addEventListener('click', () => {
    change.style.backgroundColor = "white";
    });
    
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
      }
      rcolor.addEventListener('click', () => {
    change.style.backgroundColor = randomColor();
      });
      rfcolor.addEventListener('click', () => {
        front1.style.backgroundColor = randomColor();
        front2.style.backgroundColor = randomColor();
        front3.style.backgroundColor = randomColor();
          });
const darkf = document.querySelector('#darkf');
const whitef = document.querySelector('#whitef')
const front1 = document.querySelector('#front1');
const front2 = document.querySelector('#front2');
const front3 = document.querySelector('#front3');
darkf.addEventListener('click', () => {
    front1.style.backgroundColor = "gray";
    front2.style.backgroundColor = "gray";
    front3.style.backgroundColor = "gray";
    });
    whitef.addEventListener('click', () => {
        front1.style.backgroundColor = "white";
        front2.style.backgroundColor = "white";
        front3.style.backgroundColor = "white";
        });
        const cPicture = ['img/Picture1', 'img/Picture2', 'img/Picture3'];
        p1.addEventListener('click', ()=> {
            document.getElementById('picture').scr = cPicture[0];
        });
        p2.addEventListener('click', ()=> {
            document.getElementById('picture').scr = cPicture[1];
        });
        p3.addEventListener('click', ()=> {
            document.getElementById('picture').scr = cPicture[2];
        });
