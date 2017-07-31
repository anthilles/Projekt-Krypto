const nasluch = document.getElementById('buttonWartosc1'); //nasłuch na button (a wartość wprowadzana w okienku, chciałem by był tylko jak się naciśnie button)
nasluch.addEventListener('click', function(){
   pobranie(); 
});


function pobranie(){
    const dane = document.getElementById('wartosc1');  //wyświetla wprowadzoną ilość XEM
//    console.log(dane.value);

    przeliczenieXem();
    function przeliczenieXem(){ // funkcja przeliczająca wprowadzoną wartość XEM względem kursu BTC
        const xemBtc = dane.value * 2;
        const kursXemBtc = document.getElementById("kursXemBtc");
        kursXemBtc.innerHTML = xemBtc;
        przeliczenieDolary();
        function przeliczenieDolary(){
            const btcUsd = xemBtc * 2;
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


function setup() {
    data = loadJSON("https://poloniex.com/public?command=returnTicker", gotData);
};

function gotData(data) {
    const kursXem = data.BTC_XEM.last;
    const kursXemId = document.getElementById("kurs");
    kursXemId.innerHTML = kursXem;
};
