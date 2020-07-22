function getjson()
{
	$.getJSON('templates.json', function(data) 
	{
		alert(data);
	});
}

$( "#usertemplategroup" ).change(function() 
{
	templategroup = document.getElementById("usertemplategroup").value;
	$('div[id^="div-template"]').hide();
	if(templategroup == "yt")
	{
		$('div[id="div-templateyt"]').show();
	}
	if(templategroup == "ytlive")
	{
		$('div[id="div-templateytlive"]').show();
	}
	if(templategroup == "custom")
	{
	}
});