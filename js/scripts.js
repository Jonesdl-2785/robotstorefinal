//Using on(), mouseenter(), mouseleave(), mouseup()
$(function(){
  $('#robots').on('mouseenter', function(){
    //mouseenter
    $('article label img').addClass('.DarkHighlight');
    });
  //mouseleave
  $('#robots').on('mouseleave', function(){
    $('article label img').css('background-color', '');
  });
});

$(function(){
  $('#hardware').on('mouseenter mouseleave mouseup', function(){
    //mouse events
    $('this').toggleClass('.DarkHighlight');
    $('this').css('cursor', 'pointer');
    });
  //mouseleave
  $('#hardware').on('mouseleave', function(){
    $('label input').css('background-color', '');
  });
});
$(function(){
  $('.searchbox').keyup(function() {
    let label, div, ul, li, a, i;
    let inputText = document.getElementById('inputText');
    let searchText = document.getElementsByTagName('label');
    //filter = inputText.value.toUpperCase();
    let robs = document.getElementsByClassName('robs');
    let string = $(this).text();

     for (i = 0; i < robs.length; i++) {
       console.log(robs[i]);
       if(string.indexOf(searchText) == 1) {
         robs[i].style.display = '';
       } else {
         robs[i].style.display = 'none';
       }
      /*   $(this).show('');
       } else {
         $(this).hide('');
       } */
    /*if(a.innerHTML.toUpperCase().indexOf(searchText) > -1){
        robs[i].style.display = '';
      } else {
        robs[i].style.display = 'none';
      }*/

    }
  });
   //console.log(inputText);
  /* $('.list-group-item label article').each(function() {
      console.log($(this).text());
      var string = $(this).text();
      if(string.indexOf(searchText) == 1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })*/
   });
