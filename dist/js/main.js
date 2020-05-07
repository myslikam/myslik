
function raschitat() {
/* получить данные */
Wtut  = document.getElementById('W_tut').value;
Qtut  = document.getElementById('Q_tut').value;
Btut  = document.getElementById('B_tut').value;

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
        TUT = parseFloat((Wtut * 0.123) + (Qtut * 0.143) + Btut * 1);
        document.getElementById('tut').innerHTML = " Годовое потребление ТЭР равно  " + TUT.toFixed(1) + " т у.т.";
    }
}



            