const nasluch = document.getElementById('buttonWartosc1'); //nasłuch na button (a wartość wprowadzana w okienku, chciałem by był tylko jak się naciśnie button)
nasluch.addEventListener('click', function(){
   pobranie(); 
});

function pobranie(){
    const dane = document.getElementById('wartosc1');  //wyświetla wprowadzoną ilość XEM
    console.log(dane.value);
    przeliczenieXem();
    function przeliczenieXem(){ // funkcja przeliczająca wprowadzoną wartość XEM względem kursu BTC
        const xemBtc = dane.value * 2;
        const kursXemBtc = document.getElementById("kursXemBtc");
        kursXemBtc.innerHTML = xemBtc;
    }
}



