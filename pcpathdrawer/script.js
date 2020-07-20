var canvas = document.getElementById("point");
var ctx = canvas.getContext("2d");
fromx = 0;
fromy = 0;
lastposx = 0;
lastposy = 0;
scriptver = "2020.07.21_00-25-00";

$(document).ready(function() {
  $.ajaxSetup({ cache: false });
});

function latestdatacheck()
{	
	rand = new Date().getTime();
	$.getJSON('latestdata.json?'+rand, function(data) 
	{
    newestverison = data.latestver;
	if(newestverison == scriptver)
	{
		console.log("Using newest version");
		console.log("HTML/CSS/JS: "+scriptver);
		console.log("JSON: "+newestverison);
	}
	else
	{
		alert("You are using an outdated (cached) version of the page.\n"+"Latest version: "+newestverison+"\nUsed version: "+scriptver);
	}
	});
}

function reset()
{
	if(document.getElementById("quality").value == "low")
	{
		canvassize = 400;
	}
	else if(document.getElementById("quality").value == "medium")
	{
		canvassize = 800;
	}	
	else if(document.getElementById("quality").value == "high")
	{
		canvassize = 1200;
	}	
	else if(document.getElementById("quality").value == "ultra")
	{
		canvassize = 2000;
	}
	document.getElementById("point").width = canvassize;
	document.getElementById("point").height = canvassize;
	ctx.clearRect(0, 0, canvassize, canvassize);
	ctx.drawImage(source, 0, 0, canvassize, canvassize);
	autonumber = 1;
	watermarked = 0;
}

function userreset()
{
	if (confirm('Are you sure you want to reset your image?')) 
	{
		reset();
	} 
	else 
	{
	}
}

function drawpoint()
{
	usercolor = document.getElementById("usercolor").value;
	userradius = document.getElementById("userradius").value;
	userradius = userradius*1;
	userx = document.getElementById("userx").value;
	userx = (userx*5+50)*(canvassize/100);
	usery = document.getElementById("usery").value;
	usery = (-usery*5+50)*(canvassize/100);
	if(userx>canvassize || userx<0 || usery>canvassize || usery<0)
	{
		alert("Number must be within the range of -10 and 10");
	}
	else
{
	
	if(autonumber==1)
	{
		ctx.beginPath();
		ctx.arc(userx,usery,userradius,0,2*Math.PI);
		ctx.fillStyle = usercolor;
		ctx.fill();
		ctx.stroke();
		ctx.fillStyle = "black";
		ctx.font = userradius*1.22+"px Roboto Condensed";
		ctx.textAlign = "center";
		halfr = userradius/2;
		ctx.fillText(autonumber, userx, usery+halfr);
	}
	else if(autonumber>=2)
	{
		if(userx>lastposx && usery<lastposy)
		{
			fromx = lastposx+userradius;
			fromy = lastposy;
			tox = userx;
			toy = usery+userradius;
		}
		else if(userx<lastposx && usery<lastposy)
		{
			fromx = lastposx-userradius;
			fromy = lastposy;
			tox = userx+userradius;
			toy = usery;
		}
		else if(userx<lastposx && usery>lastposy)
		{
			fromx = lastposx;
			fromy = lastposy+userradius;
			tox = userx;
			toy = usery+userradius;
		}
		else if(userx>lastposx && usery>lastposy)
		{
			fromx = lastposx+userradius;
			fromy = lastposy;
			tox = userx-userradius;
			toy = usery;
		}
		else if(usery<lastposy)
		{
			fromx = lastposx;
			fromy = lastposy-userradius;
			tox = userx;
			toy = usery+userradius;
		}
		else if(userx<lastposx)
		{
			fromx = lastposx-userradius;
			fromy = lastposy;
			tox = userx+userradius;
			toy = usery;
		}
		else if(usery>lastposy)
		{
			fromx = lastposx;
			fromy = lastposy+userradius;
			tox = userx;
			toy = usery-userradius;
		}
		else if(userx>lastposx)
		{
			fromx = lastposx+userradius;
			fromy = lastposy;
			tox = userx-userradius;
			toy = usery;
		}
		
		if (document.getElementById("userline").checked == true)
		{
		ctx.beginPath();
		ctx.moveTo(fromx, fromy);
		ctx.lineTo(tox, toy);
		userlinewidth = document.getElementById("userlinewidth").value;
		ctx.lineWidth = userlinewidth;
		ctx.stroke();
		}
		ctx.beginPath();
		ctx.arc(userx,usery,userradius,0,2*Math.PI);
		ctx.fillStyle = usercolor;
		ctx.fill();
		ctx.stroke();
		ctx.fillStyle = "black";
		ctx.font = userradius*1.22+"px Roboto Condensed";
		ctx.textAlign = "center";
		halfr = userradius/2;
		ctx.fillText(autonumber, userx, usery+halfr);
	}
	lastposx = userx;
	lastposy = usery;
	autonumber++;
}
}

function downloadcanvas()
{
	userwatermark = document.getElementById("userwatermark").checked;
	if(watermarked == 1)
	{
	}
	else if(userwatermark == true)
	{
		ctx.drawImage(watermark, 0, 0);
		watermarked = 1;
	}
	var link = document.createElement('a');
	var date = new Date();
	filename = "compasspath_"+Date.now();
	name = prompt("Enter the desired filename:", filename)
	if(name != "null") {filename = name};
	link.download = filename;
	link.href = document.getElementById('point').toDataURL()
	link.click();
}

function collapse()
{
	if(document.getElementById('customize').style.display == "none")
	{
		document.getElementById('customize').style.display = "initial";
		document.getElementById('tri').innerHTML = "▲";
	}
	else
	{
		document.getElementById('customize').style.display = "none";
		document.getElementById('tri').innerHTML = "▼";
	}
}

function coordinates()
{
	mousex = (event.offsetX/(canvassize/100)-50)/5
	mousey = (event.offsetY/(canvassize/100)-50)/5
	if (mousex < -10) mousex = -10;
	if (mousey < -10) mousey = -10;
	if (mousex > 10) mousex = 10;
	if (mousey > 10) mousey = 10;
	mousex = (Math.round(mousex * 100) / 100).toFixed(2);
	mousey = (Math.round(-mousey * 100) / 100).toFixed(2);
	document.getElementById("xydisplay").innerHTML = "Coordinates: "+event.offsetX+", "+event.offsetY+"</br>"+"Compass X, Y: "+mousex+", "+mousey;
}

function clickplace()
{
	if(document.getElementById("userclick").checked == true)
	{
		document.getElementById("userx").value = mousex;
		document.getElementById("usery").value = mousey;
	}
	if(document.getElementById("userdraw").checked == true)
	{
		drawpoint();
	}
}