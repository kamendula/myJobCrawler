
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
            processData(data);
            },
        error: function(data){
        jQuery('div#'+id).append('没有数据')
        }
    })
		
}


function processData(data){
    inHtml="<table class=\"table table-striped\">
    <thead>
        <tr>
            <td>发布时间</td>
            <td>标题</td>
        </tr>
    </thead>
    <tbody>"
    var dataLists = data["arts_with_keyword"]
    for(var ldata in dataLists){
        idata = "<tr><td>"+ldata["pub_time"]+"</td>";
        idata += "<td>" + ldata["title"] + "</td></tr>";
        inHtml += idata
    }
    
    inHtml += "</tbody></table>"

    jQuery("#myTab").after(inHtml);
}
