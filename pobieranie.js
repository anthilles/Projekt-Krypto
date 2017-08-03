

//3. jeśli znajdzie - pobranie stanu portfela
//4. wyświetlenie go



//1. pobranie wpisanego adresu
const nasluchPortfel = document.getElementById('buttonPortfel'); //nasłuch na button (a wartość wprowadzana w okienku, chciałem by był tylko jak się naciśnie button)
nasluchPortfel.addEventListener('click', function(){
   pobranie(); 
   console.log(wartoscPortfela.value);
});

const wartoscPortfela = document.getElementById('wartoscPortfela'); 
//2. przeszukanie na stronie richlist



var portfelWartosc;
function setup() { //funkcja pobierająca dane z poloniex - odwołująca się do JSONa
    data3 = loadJSON("http://88.99.192.82:7890/account/get?address=NC4GTK2WZMO4ZQJQKCQ5C5GDRVT7TEDG76KNSHMN", gotData3);
            console.log(portfelWartosc);
             setTimeout(setup, 5000);
};


function gotData3(data3) { //funkcja pobierająca z JSON konkretny kurs konkretnej waluty i podmieniająca w HTML
    portfelWartoscrsXem = data3.account.balance;
            // console.log('bla2!');
            //  setTimeout(gotData, 5000);
console.log(portfelWartoscrsXem);
};