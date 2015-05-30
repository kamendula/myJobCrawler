jQuery(document).ready(function(){
	jQuery.get('/jobinfo/BYR',function(data){

		jQuery('#tb').append(data);
	})
})