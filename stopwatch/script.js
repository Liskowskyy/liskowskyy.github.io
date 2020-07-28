ms = 0;
sec=0;
min=0;
hr=0;
utcnow=0;

const startbutton = document.getElementById('start');
const stopbutton = document.getElementById('stop');
const resetbutton = document.getElementById('reset');
const csonebutton = document.getElementById('csone');
const cstwobutton = document.getElementById('cstwo');


function getparams()
{
queryString = window.location.search;
urlParams = new URLSearchParams(queryString);
sync = urlParams.get('sync');
if(sync==1)
{
	hr = Number(urlParams.get('hr'));
	min = Number(urlParams.get('min'));
	sec = Number(urlParams.get('sec'));
	ms = Number(urlParams.get('ms'));
	start();
}
if(sync==2)
{
	$.getJSON('https://worldtimeapi.org/api/timezone/etc/utc', function(data) 
	{
		utcnow = data.unixtime;
	});
	
	utcthen = Number(urlParams.get('utc'));
	utcdiff = utcnow-utcthen;
	
	hr = Number(urlParams.get('hr'));
	min = Number(urlParams.get('min'));
	sec = Number(urlParams.get('sec'));
	ms = Number(urlParams.get('ms')) + Math.floor(utcdiff / 10);
	
	start();
}
}

function start()
{
synconstart();
timerinterval=setInterval(timer,10);
startbutton.disabled = true;
stopbutton.disabled = false;
resetbutton.disabled = true;
csonebutton.disabled = false;
cstwobutton.disabled = false;

}

function stopinterval()
{
clearInterval(timerinterval);
stopbutton.disabled = true;
startbutton.disabled = false;
resetbutton.disabled = false;
cstwobutton.disabled = true;
}

function reset()
{
cstwobutton.disabled = true;
resetbutton.disabled = true;
ms = 0;
sec=0;
min=0;
hr=0;
set();
}

function timer()
{
	ms++;
	if(ms==100)
	{
		sec++;
		ms=0;
	}
	if(ms>=101)
	{
		var x = Math.floor(ms/100);
		ms = ms-(x*100)
		sec = sec+x;
	}
	if(sec==60)
	{
		sec=0;
		min++
	}
	if(sec>=61)
	{
		var x = Math.floor(sec/60);
		sec = sec-(x*60)
		min = min+x;
	}
	if(min==60)
	{
		min=0;
		hr++;
	}
	if(min>=61)
	{
		var x = Math.floor(min/60);
		min = min-(x*60)
		hr = hr+x;	
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

function synconstart()
{
	urlnoparam = location.protocol + '//' + location.host + location.pathname;
	utc = Date.now();
	tocopy = (urlnoparam+"?sync=2&hr="+hr+"&min="+min+"&sec="+sec+"&ms="+ms+"&utc="+utc);
	window.history.pushState('stopwatch', 'Stopwatch', tocopy);
}

function copysyncone()
{
stopinterval();
urlnoparam = location.protocol + '//' + location.host + location.pathname;
tocopy = (urlnoparam+"?sync=1&hr="+hr+"&min="+min+"&sec="+sec+"&ms="+ms);
navigator.clipboard.writeText(tocopy);
document.getElementById('csone').innerText = 'Copied!';
setTimeout(function(){document.getElementById('csone').innerText = 'Copy Link (Resume)';}, 1500);
}

function copysynctwo()
{
urlnoparam = location.protocol + '//' + location.host + location.pathname;
utc = Date.now();
tocopy = (urlnoparam+"?sync=2&hr="+hr+"&min="+min+"&sec="+sec+"&ms="+ms+"&utc="+utc);
navigator.clipboard.writeText(tocopy);
synconstart();
document.getElementById('cstwo').innerText = 'Copied!';
setTimeout(function(){document.getElementById('cstwo').innerText = 'Copy Link (Synchronize)';}, 1500);
}

(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));