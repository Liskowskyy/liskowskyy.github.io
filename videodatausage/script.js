function getjson()
{
	$.getJSON('templates.json?ver=XD', function(data) 
	{
	group = document.getElementById("usertemplategroup").value;
	template = document.getElementById("templateyt").value;
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
	}
});