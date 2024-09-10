document.addEventListener("DOMContentLoaded", function() {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
      // options
      autohide: true,
      format: 'MM-dd'
    });
  
    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function(e){
      if (e.target.classList.contains('form-check-input')) {
        const elem = document.getElementById(e.target.id + 'Img');
        elem.style.visibility = "visible";
        elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
        e.target.checked ?
          elem.classList.add("animate__animated", "animate__bounceInDown") :
          elem.classList.add("animate__animated", "animate__bounceOutUp");
      }
    });

    // Start Assignment 3 Changes
    
    // I could not for the life of me figure out how to do this without using JQuery 


    //Assignment 03 Things below
    //Choose random attention getter.
    $(document).ready(function(){
      var animations = [
          'animate__animated animate__bounce',
          'animate__animated animate__flash',
          'animate__animated animate__rubberBand',
          'animate__animated animate__wobble',
          'animate__animated animate__heartBeat'
      ]
  
      $("#happyBirthday").each(function(){
          $(this).addClass(animations[~~(Math.random()*animations.length)]);
      });
  });

  // Event Listener for mouse over/out to change the H1 tag color
  $('.form-check-label').on('mouseover', function(){
      $('#happyBirthday').css('color', $(this).data('color'));
  });
  $('.form-check-label').on('mouseout', function(){
      $('#happyBirthday').css('color', 'slategray');
  });

  //Check all Checkboxes on click
  $("#checkAll").click( function() {
     $('.form-check-input').prop('checked', true);
     // make the image visible
     $('#' + this.id + 'Img').css('visibility', 'visible');
     $('.form-check-input').each(function () {
          $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown');
      });
  });

  //Uncheck all checkboxes
  $("#uncheckAll").click( function() {
      $('.form-check-input').prop('checked', false);
      // make the image visible
     $('#' + this.id + 'Img').css('visibility', 'visible');
     $('.form-check-input').each(function () {
      $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
      });
   });

   //Create toast only if NO checks are ticked
   $('#submit').click(function(){
      //Create Toast
      if (!$('.form-check-input:checked').length > 0) {
          //alert('Please Select One Balloon')
          var x = document.getElementById("noSelected");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
   })


  });