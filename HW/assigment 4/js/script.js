$(function(){
  //hid stuff
$('#getStarted,#finish,#previous, .hide, #survey').hide();
  //alert("hello");
  $('#title').on('mouseover',function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
    $('#getStarted').show();
  });

  $('#title').on('mouseleave',function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
  });
//show our slides when clicked
  $('#getStarted').on('click', function(){
    $('.hide').show();
    $('#getStarted').hide();
  });
  $('#finish').on('click', function(){
    $('.hide,#next,#previous,#finish').hide();
    $('#survey').show();
    //to do more
  });

//survey
$('#yes').on('click', function(){
  $('#surveytitle').css("background-color","green");
  $('#survey').css({
    "border": "1px solid green",
  });
});

$('#no').on('click', function(){
  $('#surveytitle').css("background-color","red");
  $('#survey').css({
    "border": "1px solid red",
  });
});

  $('#next').on('click',function () {
    var currentItem = $('li.active');
    var nextItem = $('li.active').next();

    currentItem.toggleClass('active');
    nextItem.toggleClass('active');

//conditional eval.
  if ($('li').last().hasClass('active')){
    $('#next').hide();
    $('#finish').show();
  }else{
    $('#next').show();
  }
    //conditional eval.
  if ($('li').first().hasClass('active')){
    $('#previous').hide();
  }else{
    $('#previous').show();
  }
  });

    $('#previous').on('click',function () {
      var currentItem = $('li.active');
      var previousItem = $('li.active').prev();

      currentItem.toggleClass('active');
      previousItem.toggleClass('active');

  //conditional eval.
    if ($('li').first().hasClass('active')){
      $('#previous').hide();
    }else{
      $('#previous').show();
    }
    if ($('li').last().hasClass('active')){
      $('#next').hide();
      $('#finish').show();
    }else{
      $('#next').show();
    }
    });


});

//id have # in front
//class has . in front
