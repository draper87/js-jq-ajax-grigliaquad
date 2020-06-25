// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato

$(document).ready(function() {

  // mi creo una funzione che automatizzi la creazione della griglia 6x6
  function creaBox() {
    numeroBox = 36;
    for (var i = 0; i < numeroBox ; i++) {
      var template = $('.template .box').clone();
      $('.container').append(template);
    }
  }

  // richiamo la funzione
  creaBox();

  // quando clicco su un riquadro voglio che venga effettuata una chiamata ajax che restituisca un numero da 1 a 9
  $('.box').click(function() {
    var clicked = this;

    $.ajax({

      url: 'https://flynn.boolean.careers/exercises/api/random/int',
      method: 'GET',
      success: function(data) {
        var numeroRandom = data.response;
        if (numeroRandom > 5) {
          // in caso di numero superiore a 5 il riquadro diventa verde
          $(clicked).removeClass('green yellow');
          $(clicked).text(numeroRandom).addClass('green');
        }
        else {
          // in caso di numero inferiore o uguale a 5 il riquadro diventa giallo
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
