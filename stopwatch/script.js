ms = 0;
sec=0;
min=0;
hr=0;
var t=setInterval(timer,10);

function timer()
{
	ms++;
	if(ms==100)
	{
		ms=0;
		sec++;
	}
	if(sec==61)
	{
		sec=0;
		min++
	}
	if(min==61)
	{
		min=0;
		hr++;
	}
	ms = ('0' + ms).slice(-2);
	sec = ('0' + sec).slice(-2);
	hr = ('0' + hr).slice(-2);
	min = ('0' + min).slice(-2);
	
	document.getElementById("time").innerHTML = (hr+":"+min+":"+sec+","+ms);
}