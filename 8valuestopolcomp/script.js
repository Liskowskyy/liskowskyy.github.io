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
	axisy = ((50-aa)/5+(uu-50)/5+(50-ee)/5)/3;
	img.src="https://www.politicalcompass.org/chart?ec="+axisx;
	 x = img.src;
	img.src=x+"&amp;soc="+axisy;
}