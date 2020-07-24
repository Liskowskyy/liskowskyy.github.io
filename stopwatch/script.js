ms = 0;
sec=0;
min=0;
hr=0;

function getparams()
{
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
sync = urlParams.get('sync');
if(sync==1)
{
hr = urlParams.get('hr');
min = urlParams.get('min');
sec = urlParams.get('sec');
ms = urlParams.get('ms');
start();
}
}

function start()
{
timerinterval=setInterval(timer,10);
$('#start').hide();
$('#stop').show();
$('#reset').hide();
}

function stopinterval()
{
clearInterval(timerinterval);
$('#stop').hide();
$('#start').show();
$('#reset').show();
}

function reset()
{
$('#reset').hide();
ms = 0;
sec=0;
min=0;
hr=0;
set();
}

function timer()
{
	ms++
	if(ms==100)
	{
		ms=0;
		sec++;
	}
	if(sec==60)
	{
		sec=0;
		min++
	}
	if(min==60)
	{
		min=0;
		hr++;
	}
set();
}

function set()
{
	ms = ('0' + ms).slice(-2);
	sec = ('0' + sec).slice(-2);
	hr = ('0' + hr).slice(-2);
	min = ('0' + min).slice(-2);
	
	document.getElementById("time").innerHTML = (hr+":"+min+":"+sec+","+ms);
}

function copysyncone()
{
stopinterval();
urlnoparam = location.protocol + '//' + location.host + location.pathname;
tocopy = (urlnoparam+"?sync=1&hr="+hr+"&min="+min+"&sec="+sec+"&ms="+ms)
navigator.clipboard.writeText(tocopy);
}