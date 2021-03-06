var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];



var c = [];
for (var i = 0; i < 12; i++) {
	
    (function(i) {
        c[i] = document.getElementById('c' + i);
        c[i].addEventListener("click", function() {
            revealCard(i);
        });
    }(i));
}


var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;

function revealCard(nr) {
    var opacityValue = $('#c' + nr).css('opacity');
    //alert('Opacity: '+opacityValue);
    if (opacityValue != 0 && lock == false) {
        lock = true;

        var obraz = "url(img/" + cards[nr] + ")";

        $('#c' + nr).css('background-image', obraz);
        $('#c' + nr).addClass('cardA');
        $('#c' + nr).removeClass('card');

        if (oneVisible == false) {
            oneVisible = true;
            visible_nr = nr;
            lock = false;
        } else {
            if (cards[visible_nr] == cards[nr]) {
                setTimeout(function() { hide2Cards(nr, visible_nr) }, 750);

            } else {
                setTimeout(function() { restore2Cards(nr, visible_nr) }, 1000);
            }

            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;
        }

    }

}

function hide2Cards(nr1, nr2) {
    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');

    pairsLeft--;

    if (pairsLeft == 0) {
        $('.board').html('<h1>You win!<br>Done in ' + turnCounter + ' turns</h1>');
    }

    lock = false;
}

function restore2Cards(nr1, nr2) {
    $('#c' + nr1).css('background-image', 'url(img/karta.png)');
    $('#c' + nr1).addClass('card');
    $('#c' + nr1).removeClass('cardA');

    $('#c' + nr2).css('background-image', 'url(img/karta.png)');
    $('#c' + nr2).addClass('card');
    $('#c' + nr2).removeClass('cardA');

    lock = false;
}