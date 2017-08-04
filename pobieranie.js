

//3. jeśli znajdzie - pobranie stanu portfela
//4. wyświetlenie go

const wartoscPortfela = document.getElementById('wartoscPortfela'); 
const wartoscPortfelaLiczba = wartoscPortfela.value;
const adressXEM = "http://88.99.192.82:7890/account/get?address=";
var adresPortfela;

//1. pobranie wpisanego adresu
const nasluchPortfel = document.getElementById('buttonPortfel'); //nasłuch na button (a wartość wprowadzana w okienku, chciałem by był tylko jak się naciśnie button)
nasluchPortfel.addEventListener('click', function(){

json();
});

nasluchPortfel.addEventListener('touchstart', function(){
//    console.log(wartoscPortfela);

json();
});

//2. przeszukanie na stronie richlist

//    console.log(adress);


var portfelWartosc;

function json() {
    const adresPortfela = adressXEM+wartoscPortfela.value;
    const adresPortfela2 = adresPortfela.replace(/-/g, '');
    data3 = loadJSON(adresPortfela2, gotData3);
    setTimeout(setup, 5000);
}


function gotData3(data3) { //funkcja pobierająca z JSON konkretny kurs konkretnej waluty i podmieniająca w HTML
    portfelWartoscrsXem = data3.account.balance/1000000;
    portfelImportance = data3.account.importance*100;
    portfelWydobycie = data3.meta.remoteStatus;
            // console.log('bla2!');
            //  setTimeout(gotData, 5000);
document.getElementById("portfel").innerHTML = portfelWartoscrsXem;
document.getElementById("importance").innerHTML = portfelImportance.toFixed(4) + ' %';
document.getElementById("wydobycie").innerHTML = portfelWydobycie;
pobranie()
};



//NC4GTK2WZMO4ZQJQKCQ5C5GDRVT7TEDG76KNSHMN


// function pobraniePortfel(){
//     przeliczenieXemPortfel();
//     function przeliczenieXemPortfel(){ // funkcja przeliczająca wprowadzoną wartość XEM względem kursu BTC
//         const xemBtcPortfel = portfelWartoscrsXem * kursXem;
//         const kursXemBtcPortfel = document.getElementById("kursXemBtc");
//         kursXemBtc.innerHTML = xemBtcPortfel;
//                                  setTimeout(przeliczenieXemPortfel, 5000);
//         przeliczenieDolaryPortfel();
//         function przeliczenieDolaryPortfel(){
//             const btcUsdPortfel = xemBtcPortfel * kursUSD;
//             const btcUsd2Portfel = btcUsdPortfel.toFixed(2);
//             const kursBtcUsdPortfel = document.getElementById("kursBtcUsd");
//             kursBtcUsd.innerHTML = btcUsd2Portfel + ' USDT';
//             przeliczeniePlnPortfel();
//             function przeliczeniePlnPortfel(){
//                 const usdPlnPortfel = btcUsd2Portfel * JsonKursDolara;
//                 const usdPln2Portfel = usdPlnPortfel.toFixed(2);
//                 const kursBtcUsdPortfel = document.getElementById("wartoscPLN");
//                 kursBtcUsd.innerHTML = usdPln2Portfel + ' pln';
//             }
//         }
//     }
// }