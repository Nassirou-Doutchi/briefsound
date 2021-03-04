
import sound from './functions';

// recuperation de la touche
    document.addEventListener('keypress', function(event){
      console.log(event);
      var touche = document.getElementById('btn__sound-'+event.key);
      console.log(touche);
      if (touche) {
        sound(touche, event.key);
      }
    });
