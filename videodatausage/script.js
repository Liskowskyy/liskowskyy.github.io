datap = "";
rounding = true;

function dljson()
{
	$.getJSON('templates.json?ver=XD', function(data) 
	{
		datap = data;
	});
}

function getcustom()
{
	bitratemin = document.getElementById("bitratecustom").value;
	bitratemax = document.getElementById("bitratecustom").value;
	calcresult();
}

function getjson()
{
	group = document.getElementById("usertemplategroup").value;
	datagroup = datap[group];
	datagroup2 = datagroup[template]
	bitratemin = datagroup2.bitratemin;
	bitratemax = datagroup2.bitratemax;
	calcresult();
}

$( "#noround" ).change(function()
{
	rounding = !document.getElementById("noround").checked;
	calcresult();
});

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
		$('div[id="div-templatecustom"]').show();
		getcustom();
	}
});

$( "#bitratecustom" ).change(function() 
{
	getcustom();
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
	if(rounding==true)
	{
		MBperminutemax = Math.round((MBperminutemax) * 100) / 100
		MBperhourmax = Math.round((MBperhourmax) * 100) / 100
	}
	if(bitratemin!==bitratemax)
	{
		MBperminutemin = bitratemin/8000*60;
		MBperhourmin = MBperminutemin*60;
		if(rounding==true)
		{
			MBperminutemin = Math.round((MBperminutemin) * 100) / 100
			MBperhourmin = Math.round((MBperhourmin) * 100) / 100
		}
		document.getElementById("result").innerHTML = ("Bitrate: "+bitratemin/1000+"-"+bitratemax/1000+"Mbps"+"</br>"+"Data used per minute: "+MBperminutemin+"MB-"+MBperminutemax+"MB"+"</br>"+"Data used per hour: "+MBperhourmin+"MB-"+MBperhourmax+"MB");	
	}
	else
	{
		document.getElementById("result").innerHTML = ("Bitrate: "+bitratemax/1000+"Mbps"+"</br>"+"Data used per minute: "+MBperminutemax+"MB"+"</br>"+"Data used per hour: "+MBperhourmax+"MB");
	}
	document.getElementById("result").innerHTML = (document.getElementById("result").innerHTML +"</br></br>"+"Note that the upper limit given above can only be reached by videos with a lot of motion, i.e. a 12Mbps video consisting of static text will only be ~6MB in size, while an identical video with strong flashing lights added can reach that upper limit easily.");
}