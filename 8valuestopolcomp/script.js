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
	check = document.getElementById("chart");
	if (check == null)
	{
		img = document.createElement('img'); 
		document.getElementById('body').appendChild(img); 
		img.id = "chart";
	}
	
	check = document.getElementById("ideologieschart");
	if (check == null)
	{
		ideo = document.createElement('img'); 
		document.getElementById('body').appendChild(ideo); 
		ideo.id = "ideologieschart";
		ideo.src = "img/ideologies_v2.png";
		ideo.style.height = "400px";
		ideo.style.width = "480px";
		document.getElementById("notice").innerHTML ="The image on the right isn't low quality, you need to zoom in. Optionally, you can click "+"<a href='"+"img/ideologies_v2.png"+'"'+" target="+'"_blank'+"'>here</a>"+" to view the full image alone.";
	}

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
	img.src="https://www.politicalcompass.org/chart?ec="+axisx;
	 x = img.src;
	img.src=x+"&amp;soc="+axisy;
	
	if(axisx <= 3 && axisy <= 3 && axisx >= -3 && axisy >= -3)
	{
		document.getElementById("easteregg").innerHTML = "How is it to be in the center? Are you even interested in politics? Or you're just to afraid to accidentally offend someone? Or maybe you're a far-centrist? Or... whatever.";
	}
	else if(axisx >= 7.5 && axisy <= -5.5)
	{
		document.getElementById("easteregg").innerHTML = "Tell me, how will it be in AnCap?";
	}
	else if(axisx <= 7.5 && axisx >= -6 && axisy >= 9)
	{
		document.getElementById("easteregg").innerHTML = "Well, there was once this Austrian painter who was rejected from an art school...";
	}
	else
	{
		document.getElementById("easteregg").innerHTML = "";
	}
	document.getElementById("coordinates").innerHTML = "X Axis: "+axisx+" Y Axis: "+axisy;
}