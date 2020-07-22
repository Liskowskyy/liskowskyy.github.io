function getjson()
{
	$.getJSON('templates.json?ver=XD', function(data) 
	{
	group = document.getElementById("usertemplategroup").value;
	datagroup = bitratemin = data[group];
	datagroup2 = datagroup[template]
	bitratemin = datagroup2.bitratemin;
	bitratemax = datagroup2.bitratemax;
	alert(bitratemin+" "+bitratemax);
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

$( "#templateyt" ).change(function() 
{
	template = document.getElementById("templateyt").value;
});

$( "#templateytlive" ).change(function() 
{
	template = document.getElementById("templateytlive").value;
});