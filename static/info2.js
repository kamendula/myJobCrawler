
jQuery().ready(function() {
	getData('/jobinfo/BYR','byr')
	getData('/jobinfo/NS_XZ','nsxz')
	getData('/jobinfo/NS_SZ','nssz')
	getData('/jobinfo/NS_LT','nslt')
	});
function getData(url,id){
    jQuery.ajax({
        url		:  url,
        type 	: 'get',
        dataType: 'html',
        cache: false,
        success : function(data) {
        jQuery('div#'+id).append(data)
            },
        error: function(data){
        jQuery('div#'+id).append('没有数据')
        }
    })
		
}
