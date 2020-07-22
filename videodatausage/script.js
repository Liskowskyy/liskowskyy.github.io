function getjson()
{
	$.getJSON('templates.json', function(data) 
	{
	group = "yt";
	template = "2160p60";
    bitratemin = data.group.template.bitratemin;
	bitratemax = data.group.template.bitratemax;
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
		template
	}
});