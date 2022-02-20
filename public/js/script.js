var Webflow = Webflow || [];
Webflow.push(function () {
  // DOMready has fired
  // May now use jQuery and Webflow API
  var iframe = document.querySelector('.iframe');
  var player = new Vimeo.Player(iframe);
  $('#btnPlay').click(function() {
  	player.play();
	});
  $('#btnPause').click(function() {
  	player.pause();
	});
});

Webflow.push(function() {
   $('.modal-button').click(function(e) {
      e.preventDefault();
   $('body').css('overflow', 'hidden');
 });  $('.close').click(function(e) {
      e.preventDefault();
    $('body').css('overflow', 'auto');
 });
});


var rnd2=Math.floor(Math.random()*(3000-2001))+3000;function startTimer(){timerInterval=setInterval(updateTime,rnd2);};function stopTimer(){clearInterval(timerInterval);}

window.onbeforeunload=function(event){localStorage.setItem('dfdx',time);}

window.addEventListener('load',()=>{time=parseInt(localStorage.getItem('dfdx'));if(isNaN(time))time=122
startTimer()},false);var el=0;$('#plus').on('click',function(e){var t=parseInt($('#pricex').text(),10);t+=1;if(t>20){t=20;}

$('#pricex').text(t);var total=(t*0.24).toFixed(2);$('#price').text(total);});$('#minus').on('click',function(e){var t=parseInt($('#pricex').text(),10);t-=1;if(t<1){t=1;}

$('#pricex').text(t);var total=(t*0.24).toFixed(2);$('#price').text(total);});$('#ape-max').click(function(){$('.eth_input').val($('.eth_input').attr('max'));$('#pricex').text($('.eth_input').attr('max'));$('#price').text(($('.eth_input').attr('max')*0.24).toFixed(2));});