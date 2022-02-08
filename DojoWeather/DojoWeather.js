//(1°C × 9/5) + 32 = 33.8°F C to F
//(32°F − 32) × 5/9 = 0°C F to C

var temp = document.querySelectorAll(".temperature p");
console.log(temp);
function changeTempCtoF(unit){
    console.log(unit.value);
    for(var i=0; i<temp.length; i++){
        if (unit.value == "fahrenheit"){
            var temp1 = parseInt(temp[i].innerText);
            console.log(temp1);
            var F = (temp1*(9/5))+32;
            console.log("F: "+F);
            var Fround = Math.round(F*10)/10;
            console.log(Fround);
            temp[i].innerText = Fround;
        }
        else {  
            var temp1 = parseInt(temp[i].innerText);
            console.log(temp1);
            var C = ((temp1-32)*5/9);
            console.log("C: "+C);
            var Cround = Math.round(C*10)/10;
            console.log(Cround);
            temp[i].innerText = Cround;
        }
    }
}

function Alert(cityName){
    alert('Loading '+cityName.innerText+' weather report...');
}

function AcceptCookies(clickedButton){
    var item = document.getElementById(clickedButton);
    item.remove();
}

