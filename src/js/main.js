
function raschitat() {
/* получить данные */
var Wtut  = document.getElementById('W_tut').value;
var Qtut  = document.getElementById('Q_tut').value;
var Btut  = document.getElementById('B_tut').value;

/* Проверка на пустое поле */
if (Wtut == ""){
    alert("Вы не указали расход электроэнергии");
    }
    else if (Qtut == ""){
    alert("Вы не указали расход тепловой энергии");
    }
    else if (Btut == ""){
        alert("Вы не указали расход топлива");
        }
    /* Расчет */
    else {
        TUT = ((Wtut * 0.123) + (Qtut * 0.143) + (Btut * 1));
        document.getElementById('tut').innerHTML = " Годовое потребление ТЭР равно  " + TUT.toFixed(1) + " т у.т.";
    }
}



            