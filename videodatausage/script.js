function getjson()
{
	$.getJSON('templates.json', function(data) 
	{
		alert(data);
	});
}