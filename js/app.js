$(function() {

	if(navigator.userAgent.match(/AppleWebKit.*Mobile.*/)){ 
	 	$('body').addClass('mobile');
	 	$('.friend').on('click',function(event){
	 		$('.friend .update').hide();
			$(this).find('.update').show();
			event.stopPropagation();
			event.preventDefault();
			return false;
		})
	 	$('.listbutton').on('click',function(){
			$(this).hide();
			$('.list').show();
		})
		$('.list').on('click',function(){
			$(this).hide();
			$('.friend .update').hide();
			$('.listbutton').show();
		})
	}

})