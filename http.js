function concat(url,data){
	var i=0;
	Object.keys(data).forEach((key)=>{
		if(i==0)url=url.trim()+"?"+key.trim()+"="+data[key].trim();
		else url=url.trim()+"&"+key.trim()+"="+data[key].trim();
		i++;
	});
	return url;
}
function post(sendData){
            var i=0,body="";
            Object.keys(sendData).forEach((key)=>{
                if(i==0)body=body.trim()+key.trim()+"="+sendData[key].trim();
                else body=body.trim()+"&"+key.trim()+"="+sendData[key].trim();
                i++;
            });
            return body;
}
/*
只提供post,get
 */
function m_request(method, url, success, fail, sendData)
{
    var xmlhttp = null;
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveObject)
    {
        xmlhttp = new ActiveObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp == null)
    {
        alter("error");
        return;
    }

    if (method.trim().toUpperCase() === "GET")
    {
    	var tempUrl=concat(url,sendData);
        xmlhttp.open("GET", tempUrl, false);
        xmlhttp.send(null);
        if(xmlhttp.readyState==4&&xmlhttp.status==200)
        	success(xmlhttp);
        else
        	fail(xmlhttp);
    }
    else if (method.trim().toUpperCase() === "POST")
    {

        xmlhttp.open("POST", url, false);
        xmlhttp.setRequestHeader("Content-Type"
            ,"application/x-www-form-urlencoded");
        var tempdata=post(sendData);
        xmlhttp.send(tempdata);
        if(xmlhttp.readyState==4&&xmlhttp.status==200)
        	success(xmlhttp);
        else
        	fail(xmlhttp);        
    }
    else
    {
        alter("请求方法错误！");
        return;
    }
}

