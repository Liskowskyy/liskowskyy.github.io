ms = 0;
sec=0;
min=0;
hr=0;

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
	hr = urlParams.get('hr');
	min = urlParams.get('min');
	sec = urlParams.get('sec');
	ms = urlParams.get('ms');
	start();
}
if(sync==2)
{
	utcnow = Date.now();
	utcthen = urlParams.get('utc');
	utcdiff = utcnow-utcthen;
	
	hr = Number(urlParams.get('hr')) + Math.floor(utcdiff / 3600000);
	min = Number(urlParams.get('min')) + Math.floor(utcdiff / 60000);
	sec = Number(urlParams.get('sec')) + Math.floor(utcdiff / 1000);
	ms = Number(urlParams.get('ms')) + Math.floor(utcdiff / 10);
	
	
	start();
}
}

function start()
{
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