var canvas = document.getElementById("point");
var ctx = canvas.getContext("2d");
fromx = 0;
fromy = 0;
lastposx = 0;
lastposy = 0;

function reset()
{
	ctx.clearRect(0, 0, 400, 400);
	ctx.drawImage(source, 0, 0);
	autonumber = 1;
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
	userx = (userx*5+50)*4;
	usery = document.getElementById("usery").value;
	usery = (-usery*5+50)*4;
	if(userx>400 || userx<0 || usery>400 || usery<0)
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
  var link = document.createElement('a');
  link.download = 'compasspath.png';
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
	mousex = (event.offsetX/4-50)/5
	mousey = (event.offsetY/4-50)/5
	if (mousex < -10) mousex = -10;
	if (mousey < -10) mousey = -10;
	if (mousex > 10) mousex = 10;
	if (mousey > 10) mousey = 10;
	mousex = (Math.round(mousex * 100) / 100).toFixed(2);
	mousey = -(Math.round(mousey * 100) / 100).toFixed(2);
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