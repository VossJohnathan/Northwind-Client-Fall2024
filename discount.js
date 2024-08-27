document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
      if (e.target.classList.contains('discount')) {
        e.preventDefault();
        document.getElementById('product').innerHTML = e.target.dataset['product'];
        document.getElementById('code').innerHTML = e.target.dataset['code'];
        bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
      }
    });

    window.onkeydown = function( event ) {
      if ( event.keyCode == 27 ) {
          console.log( 'escape pressed' );
          bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
      }
  };
  });

  