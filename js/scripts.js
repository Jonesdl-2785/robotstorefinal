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
    let inputText = document.getElementById('inputText').value;
    let searchText = document.getElementsByTagName('label');
    //filter = inputText.value.toUpperCase();
    h4 = document.getElementsByTagName('label');
    ul = document.getElementById('roboUL');
    li = document.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      a = li [i].getElementsByTagName('li')[0];
      if(a.innerHTML.toUpperCase().indexOf(searchText) == 1){
        li [i].style.display = '';
      } else {
        li [i].style.display = 'none';
      }
    }
  })
   //console.log(inputText);
   $('.list-group-item label article').each(function() {
      console.log($(this).text());
      var string = $(this).text();
      if(string.indexOf(searchText) == 1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })
   });
