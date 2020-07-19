var canvas = document.getElementById("point");
var ctx = canvas.getContext("2d");
var autonumber = 1;

function reset()
{
	ctx.clearRect(0, 0, 400, 400);
	ctx.drawImage(source, 0, 0);
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
	
	ctx.beginPath();
	ctx.arc(userx,usery,userradius,0,2*Math.PI);
	ctx.fillStyle = usercolor;
	ctx.fill();
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.font = userradius+"px Arial";
	ctx.textAlign = "center";
	halfr = userradius/2;
	ctx.fillText(autonumber, userx, usery+halfr);
	autonumber++;
}