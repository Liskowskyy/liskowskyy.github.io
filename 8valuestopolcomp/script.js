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
	img.src="https://www.politicalcompass.org/chart?ec="+axisx;
	 x = img.src;
	img.src=x+"&amp;soc="+axisy;
	
	if(axisx <= 1 && axisy <= 1 && axisx >= -1 && axisy >= 1)
	{
		document.getElementById("easteregg").innerHTML = "How is it to be in the center? Are you even interested in politics? Or you're just to afraid to accidentally offend someone? Or maybe you're a far-centrist? Or... whatever.";
	}
	else if(axisx >= 8 && axisy <= -8)
	{
		document.getElementById("easteregg").innerHTML = "Tell me, how will it be in AnCap?";
	}
	else
	{
		document.getElementById("easteregg").innerHTML = "";
	}
}