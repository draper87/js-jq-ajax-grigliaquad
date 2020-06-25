// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato

$(document).ready(function() {

  function creaBox() {
    numeroBox = 36;
    for (var i = 0; i < numeroBox ; i++) {
      var template = $('.template .box').clone();
      $('.container').append(template);
    }
  }

  creaBox();

  $('.box').click(function() {
    var clicked = this;

    $.ajax({

      url: 'https://flynn.boolean.careers/exercises/api/random/int',
      method: 'GET',
      success: function(data) {
        var numeroRandom = data.response;
        if (numeroRandom > 5) {
          $(clicked).removeClass('green yellow');
          $(clicked).text(numeroRandom).addClass('green');
        }
        else {
          $(clicked).removeClass('green yellow');
          $(clicked).text(numeroRandom).addClass('yellow');
        }
      },
      error: function() {
        alert('errore');
      }
    })

  })

})
