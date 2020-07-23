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
		template = document.getElementById("templateyt").value;
		getjson();
	}
	if(templategroup == "ytlive")
	{
		$('div[id="div-templateytlive"]').show();
		template = document.getElementById("templateytlive").value;
		getjson();
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
	MBperminutemax = bitratemax/8000*60;
	MBperhourmax = MBperminutemax*60;
	if(bitratemin!==bitratemax)
	{
		MBperminutemin = bitratemin/8000*60;
		MBperhourmin = MBperminutemin*60;
		document.getElementById("result").innerHTML = ("Data used per minute: "+MBperminutemin+"MB-"+MBperminutemax+"MB"+"\nData used per hour: "+MBperhourmin+"MB-"+MBperhourmax+"MB");	
	}
	else
	{
		document.getElementById("result").innerHTML = ("Data used per minute: "+MBperminutemax+"MB"+"\nData used per hour: "+MBperhourmax+"MB");
	}
}