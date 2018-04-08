$(document).ready(() =>{
	






 $('#performaction').on('click',function(){

 	$('#second-paragraph').toggle();

 });



 
$('.menu-toggle').on('click',function(){

 	$('.nav-bar').toggle();

 });



$("input").focus(function(){
	
	 $(this).addClass("colored-border");
});

$("input").focusout(function(){
	
	 $(this).removeClass("colored-border");
});



 


});
