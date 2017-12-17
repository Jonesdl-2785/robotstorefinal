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
/************************SEARCH FUNCTION-ROBOTS PAGE*****************************************/
function myFunction() {
  let input, filer, ul, li, a, article, label, h4, div;
  input = document.getElementById('inputText');
  filter = input.value.toUpperCase();
  ul = document.getElementById('roboUL');
  li = ul.getElementsByTagName('li');
  let robs = document.getElementsByClassName('robs');
  let robsLI = document.getElementsByClassName('robsLI');
  let robolist = document.getElementById('roboUL');
  for (i = 0; i < li.length; i++) {
    h4 = li[i].getElementsByTagName("h4")[0];
    if (h4.innerHTML.toUpperCase().indexOf(filter) > -1){
      robsLI[i].style.display = "";
    } else {
      robsLI[i].style.display = "none";
    }
  }
}
/* $(function(){
  $('#inputText').keyup(function() {
    let label, div, ul, li, a, i;
    let inputText = document.getElementById('inputText');
    let searchText = document.getElementsByTagName('label');
    //filter = inputText.value.toUpperCase();
    let robs = document.getElementsByClassName('robs');


     for (i = 0; i < robs.length; i++) {
       console.log(robs[i]);
       a = robs[i].getElementsByTagName('a')[0];
       if(a.innerHTML.toUpperCase().indexOf(searchText) > -1) {
         robs[i].style.display = '';
       } else {
         robs[i].style.display = 'none';
       }
      }
    })
  }); */

  /**********************************************************************/

   //console.log(inputText);
  /* $('.list-group-item label article').each(function() {
      console.log($(this).text());
      var string = $(this).text();
      if(string.indexOf(searchText) == 1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })
  });*/
