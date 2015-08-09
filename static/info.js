jQuery(document).ready(function(){
	getData('/jobinfo/BYR');
		
	jQuery("#byr").click(function(){
		getData("/jobinfo/BYR", "ns_xz");
	});

	jQuery("#ns_xz").click(function(){
		getData("/jobinfo/NS_XZ", "ns_xz");
	});

	jQuery("#ns_sz").click(function(){
		getData("/jobinfo/NS_SZ", "ns_sz");
	});

	jQuery("#ns_lt").click(function(){
		getData("/jobinfo/NS_LT", "ns_lt");
	});
});

function getData(url){
	jQuery('#tb').empty();
	jQuery.get(url,function(data){
		//alert(data);
		var data0 = eval("("+data+")");
		var data1=data0.arts_with_keyword;
		jQuery.each(data1,function(idx,item){
			//alert(item);
			var infoTime = item.pub_time;
			var infoTitle = item.title;
			var infoUrl = item.url;
			var infoHtml = "<tr><td>"+infoTime+"</td><td><a href="+infoUrl+">"+infoTitle+"</a></td><tr>";
			//alert(infoHtml);
			jQuery('#tb').append(infoHtml);
		})
		//alert(data1.length);
		
	});

}