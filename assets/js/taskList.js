$('ul').on('click','li',function(){

	$(this).toggleClass('completed'); //One line instead of all above by using toggleClass
});
$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();// this refering to li NOT span because i mention .parent()
	})
	event.stopPropagation(); //  Prevents the event from bubbling up the DOM tree.
});
$('input[type=text]').keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val(); 
		$(this).val('');
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText+ '</li>');
	}
});
$('.fa-plus').click(function(){
	$('input[type=text]').fadeToggle();
})
