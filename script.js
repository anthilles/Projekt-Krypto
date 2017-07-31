const nasluch = document.getElementById('buttonWartosc1'); //nasłuch na button (a wartość wprowadzana w okienku, chciałem by był tylko jak się naciśnie button)
nasluch.addEventListener('click', function(){
   pobranie(); 
});

function setup() { //funkcja pobierająca dane z poloniex - odwołująca się do JSONa
    data = loadJSON("https://poloniex.com/public?command=returnTicker", gotData);
};

var kursXem; //var wyciągnięty przed funkcje - tak aby mógł być użyty poza nią
var kursUSD;

function gotData(data) { //funkcja pobierająca z JSON konkretny kurs konkretnej waluty i podmieniająca w HTML
    kursXem = data.BTC_XEM.last;
    const kursXemId = document.getElementById("kurs");
    kursXemId.innerHTML = kursXem;
    kursUSD = data.USDT_BTC.last;
};

const dane = document.getElementById('wartosc1');  //wyświetla wprowadzoną ilość XEM


function pobranie(){
    przeliczenieXem();
    function przeliczenieXem(){ // funkcja przeliczająca wprowadzoną wartość XEM względem kursu BTC
        const xemBtc = dane.value * kursXem;
        const kursXemBtc = document.getElementById("kursXemBtc");
        kursXemBtc.innerHTML = xemBtc;
        przeliczenieDolary();
        function przeliczenieDolary(){
            const btcUsd = xemBtc * kursUSD;
            const kursBtcUsd = document.getElementById("kursBtcUsd");
            kursBtcUsd.innerHTML = btcUsd;
            przeliczeniePln();
            function przeliczeniePln(){
                const usdPln = btcUsd * 2;
                const kursBtcUsd = document.getElementById("wartoscPLN");
                kursBtcUsd.innerHTML = usdPln;
            }
        }
    }
}



