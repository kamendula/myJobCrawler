jQuery(document).ready(function(){
	jQuery.get('/jobinfo/BYR',function(data){
		var data0 = eval("("+data+")");
		var data1=data0.arts_with_keyword;
		jQuery.each(data1,function(idx,item){
			alert(item);
			var infoTime = item.pub_time;
			var infoTitle = item.title;
			var infoHtml = "<tr><td>"+infoTime+"</td><td>"+infoTitle+"</td><tr>";
			jQuery('#tb').append(infoHtml);
		})
		//alert(data1.length);
		
	})
})