    $.getJSON('http://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json',
        function(data){
            JsonKursDolara = data.rates[0].bid;
            document.getElementById("kursUsdPln").innerHTML = JsonKursDolara.toFixed(2) + ' pln';
    },function(error){
        console.log(error);
    });


// const nasluch = document.getElementById('buttonWartosc1'); //nasłuch na button (a wartość wprowadzana w okienku, chciałem by był tylko jak się naciśnie button)
// nasluch.addEventListener('click', function(){
//    pobranie(); 
//    JsonUSD();

// });

// nasluch = document.getElementById('buttonWartosc1'); //nasłuch na button (a wartość wprowadzana w okienku, chciałem by był tylko jak się naciśnie button)
// nasluch.addEventListener('touchstart', function(){
//    pobranie(); 
//    JsonUSD();

// });

var kursXem; //var wyciągnięty przed funkcje - tak aby mógł być użyty poza nią
var kursUSD;
var daneUSD;
var JsonKursDolara2;

function setup() { //funkcja pobierająca dane z poloniex - odwołująca się do JSONa
    data = loadJSON("https://poloniex.com/public?command=returnTicker", gotData);
             setTimeout(setup, 5000);
};




function gotData(data) { //funkcja pobierająca z JSON konkretny kurs konkretnej waluty i podmieniająca w HTML
    kursXem = data.BTC_XEM.last;
    const kursXemId = document.getElementById("kurs");
    kursXemId.innerHTML = kursXem;
    kursUSD = data.USDT_BTC.last;
                // console.log(kursXem);
            // console.log('bla2!');
            //  setTimeout(gotData, 5000);

};


const dane = document.getElementById('wartosc1');  //wyświetla wprowadzoną ilość XEM


function pobranie(){
    przeliczenieXem();
    function przeliczenieXem(){ // funkcja przeliczająca wprowadzoną wartość XEM względem kursu BTC

        const xemBtc = portfelWartoscrsXem * kursXem;
        const kursXemBtc = document.getElementById("kursXemBtc");
        kursXemBtc.innerHTML = xemBtc;
                                 setTimeout(przeliczenieXem, 5000);
        przeliczenieDolary();
        function przeliczenieDolary(){
            const btcUsd = xemBtc * kursUSD;
            const btcUsd2 = btcUsd.toFixed(2);
            const kursBtcUsd = document.getElementById("kursBtcUsd");
            kursBtcUsd.innerHTML = btcUsd2 + ' USDT';
            przeliczeniePln();
            function przeliczeniePln(){
                const usdPln = btcUsd2 * JsonKursDolara;
                const usdPln2 = usdPln.toFixed(2);
                const kursBtcUsd = document.getElementById("wartoscPLN");
                kursBtcUsd.innerHTML = usdPln2 + ' pln';
            }
        }
    }
}

// function JsonUSD(){
//     dane = JSON.parse("http://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json");
// }

// var xmlhttp = new XMLHttpRequest();
// var JsonKursDolara;
// xmlhttp.onreadystatechange = function loaddata() {
//     if (this.readyState == 4 && this.status == 200) {
//         myObj = JSON.parse(this.responseText);
//         JsonKursDolara = myObj;

//         // JsonKursDolara2 = JsonKursDolara.toFixed(2);
//         document.getElementById("kursUsdPln").innerHTML = JsonKursDolara + ' pln';
//         setTimeout(loaddata,500);

//     }
            
// };
// xmlhttp.open("GET", "http://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json", true);
// xmlhttp.send();

