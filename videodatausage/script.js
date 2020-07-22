includeminimum=false;

function getjson()
{
	$.getJSON('templates.json?ver=XD', function(data) 
	{
	group = document.getElementById("usertemplategroup").value;
	datagroup = bitratemin = data[group];
	datagroup2 = datagroup[template]
	bitratemin = datagroup2.bitratemin;
	bitratemax = datagroup2.bitratemax;
	calcresult();
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
	getjson();
});

$( "#templateytlive" ).change(function() 
{
	template = document.getElementById("templateytlive").value;
	getjson();
});

function calcresult()
{
	MBperminutemax = bitratemax/8000;
	MBperhourmax = MBperminutemax*60;
	if(bitratemin!==bitratemax)
	{
	MBperminutemin = bitratemin/8000;
	MBperhourmin = MBperminutemin*60;
	includeminimum = true;
	}
	
	if(includeminimum==true)
	{
		alert("Minimum data used per minute: "+MBperminutemin+"MB"+"\nMaximum data used per hour: "+MBperminutemax+"MB"+"\nMinimum data used per hour: "+MBperhourmin+"MB"+"\nMaximum data used per hour: "+MBperhourmax+"MB");
	}
	else
	{
		alert("Maximum data used per hour: "+MBperminutemax+"MB"+"\nMaximum data used per hour: "+MBperhourmax+"MB");
	}
}