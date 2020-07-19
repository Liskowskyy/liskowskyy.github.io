setInterval(function perc(){
mm = document.getElementById("markets").value;
eqpt = 100-mm;
mkpt = 100-eqpt;
document.getElementById("eqmt").innerHTML = eqpt+"%";
document.getElementById("mkmt").innerHTML = mkpt+"%";

 aa = document.getElementById("nation").value;
 ntpt = 100-aa;
 wdpt = 100-ntpt;
document.getElementById("ntmt").innerHTML = ntpt+"%";
document.getElementById("wdmt").innerHTML = wdpt+"%";

 uu = document.getElementById("liberty").value;
 lbpt = 100-uu;
 atpt = 100-lbpt;
document.getElementById("lbmt").innerHTML = lbpt+"%";
document.getElementById("atmt").innerHTML = atpt+"%";

 ee = document.getElementById("progress").value;
 tdpt = 100-ee;
 pgpt = 100-tdpt;
document.getElementById("tdmt").innerHTML = tdpt+"%";
document.getElementById("pgmt").innerHTML = pgpt+"%";
}, 1);

function doit()
{
	axisx = (mm-50)/5;
	
	var e = document.getElementById("mode");
	var mode = e.options[e.selectedIndex].value;
	if(mode == "standard")
	{
		axisy = ((50-aa)/5+(uu-50)/5+(50-ee)/5)/3;
	}
	else if(mode == "classic")
	{
		axisy = (uu-50)/5;
	}
	else if(mode == "balance")
	{
		axisy = ((50-aa)/5+(uu-50)/5*5+(50-ee)/5)/7;
	}
	axisx=Math.round((axisx + Number.EPSILON) * 100) / 100
	axisy=Math.round((axisy + Number.EPSILON) * 100) / 100
	
	axisxpoint = (axisx*5+50)*4;
	axisypoint = (-axisy*5+50)*4;
	
	var canvas = document.getElementById("point");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, 400, 400);
	ctx.drawImage(source, 0, 0);
	
	if(axisx == 2 && axisy == 1.37)
	{
		var thumbImg = document.createElement('img');

		thumbImg.src = 'img/papiez.png';
		thumbImg.onload = function() 
		{
		ctx.save();
		ctx.beginPath();
		ctx.arc(axisxpoint, axisypoint, 16, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.clip();

		ctx.drawImage(thumbImg, axisxpoint-16, axisypoint-16, 32, 32);

		ctx.beginPath();
		ctx.arc(axisxpoint, axisypoint, 16, 0, Math.PI * 2, true);
		ctx.clip();
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
		pope = Math.floor(Math.random() * 2) + 1;
		var audio = new Audio('papiez'+pope+'.mp3');
		audio.play();
		document.getElementById("easteregg").innerHTML = "After school exams we were going for creampies - John Paul II";
		};
	}
	else
	{
		ctx.beginPath();
		ctx.arc(axisxpoint,axisypoint,8,0,2*Math.PI);
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.stroke();
	}
	
	if(axisx <= 3 && axisy <= 3 && axisx >= -3 && axisy >= -3 && randomizeegg==0)
	{
		document.getElementById("easteregg").innerHTML = "How is it to be in the center? Are you even interested in politics? Or you're just to afraid to accidentally offend someone? Or maybe you're a far-centrist? Or... whatever.";
	}
	else if(axisx <= 3 && axisy <= 3 && axisx >= -3 && axisy >= -3 && randomizeegg==1)
	{
		document.getElementById("easteregg").innerHTML = 'All the media says is "RACISM, SHOOTINGS, SOCIALISM, KKK"'+"<br/>"+"I just wanna grill for God\'s sake";
	}
	else if(axisx >= 7.5 && axisy <= -5.5)
	{
		document.getElementById("easteregg").innerHTML = "Tell me, how will it be in AnCap?";
	}
	else if(axisx <= 7.5 && axisx >= -6 && axisy >= 9)
	{
		document.getElementById("easteregg").innerHTML = "Well, there was once this Austrian painter who was rejected from an art school...";
	}
	else if(axisx <= 3 && axisx >= 0 && axisy <= -8.5)
	{
		document.getElementById("easteregg").innerHTML = "Fun fact: Your result is similar to the author's"+"<br/>"+"(2.4, -8.94) 7/18/2020";
	}
	else
	{
		document.getElementById("easteregg").innerHTML = "";
	}
	document.getElementById("coordinates").innerHTML = "X Axis: "+axisx+ "<br/>" +"Y Axis: "+axisy;
	   

	
    economicsArray = ["Communist","Socialist","Social","Centrist","Market","Capitalist","Laissez-Faire"]
    peaceArray = ["Cosmopolitan","Internationalist","Peaceful","Balanced","Patriotic","Nationalist","Chauvinist"]
    authorityArray = ["Anarchist","Libertarian","Liberal","Moderate","Statist","Authoritarian","Totalitarian"]
    progressArray = ["Revolutionary","Very Progressive","Progressive","Neutral","Traditional","Very Traditional","Reactionary"]
	
        if (eqpt > 100) { eqlabel = "" } else
        if (eqpt > 90) { eqlabel = economicsArray[0] } else
        if (eqpt > 75) { eqlabel = economicsArray[1] } else
        if (eqpt > 60) { eqlabel = economicsArray[2] } else
        if (eqpt >= 40) { eqlabel = economicsArray[3] } else
        if (eqpt >= 25) { eqlabel = economicsArray[4] } else
        if (eqpt >= 10) { eqlabel = economicsArray[5] } else
        if (eqpt >= 0) { eqlabel = economicsArray[6] } else
        	{}
			
		if (wdpt > 100) { wdlabel = "" } else
        if (wdpt > 90) { wdlabel = peaceArray[0] } else
        if (wdpt > 75) { wdlabel = peaceArray[1] } else
        if (wdpt > 60) { wdlabel = peaceArray[2] } else
        if (wdpt >= 40) { wdlabel = peaceArray[3] } else
        if (wdpt >= 25) { wdlabel = peaceArray[4] } else
        if (wdpt >= 10) { wdlabel = peaceArray[5] } else
        if (wdpt >= 0) { wdlabel = peaceArray[6] } else
        	{}
			
		if (lbpt > 100) { lblabel = "" } else
        if (lbpt > 90) { lblabel = authorityArray[0] } else
        if (lbpt > 75) { lblabel = authorityArray[1] } else
        if (lbpt > 60) { lblabel = authorityArray[2] } else
        if (lbpt >= 40) { lblabel = authorityArray[3] } else
        if (lbpt >= 25) { lblabel = authorityArray[4] } else
        if (lbpt >= 10) { lblabel = authorityArray[5] } else
        if (lbpt >= 0) { lblabel = authorityArray[6] } else
        	{}
			
		if (pgpt > 100) { pglabel = "" } else
        if (pgpt > 90) { pglabel = progressArray[0] } else
        if (pgpt > 75) { pglabel = progressArray[1] } else
        if (pgpt > 60) { pglabel = progressArray[2] } else
        if (pgpt >= 40) { pglabel = progressArray[3] } else
        if (pgpt >= 25) { pglabel = progressArray[4] } else
        if (pgpt >= 10) { pglabel = progressArray[5] } else
        if (pgpt >= 0) { pglabel = progressArray[6] } else
        	{}
			
			document.getElementById("economics").innerHTML = eqlabel;
			document.getElementById("peace").innerHTML = wdlabel;
			document.getElementById("authority").innerHTML = lblabel;
			document.getElementById("tradition").innerHTML = pglabel;

}