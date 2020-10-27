function getgay()
{
	$.getJSON('https://e621.net/posts.json?tags='+postype+username+'+'+'male/male'+auth, function(data) 
	{
		gaynum = Object.keys(data.posts).length;
		fetch++;
		checkdone();
	})
	 .fail(function() {document.getElementById("resultext").innerHTML = "Request failed! Are your username and API key correct?";
	 });
}

function getstraight()
{
	$.getJSON('https://e621.net/posts.json?tags='+postype+username+'+'+'male/female'+auth, function(data) 
	{
		straightnum = Object.keys(data.posts).length;
		fetch++;
		checkdone();
	});
}

function getlesbian()
{
	$.getJSON('https://e621.net/posts.json?tags='+postype+username+'+'+'female/female'+auth, function(data) 
	{
		lesbianum = Object.keys(data.posts).length;
		fetch++;
		checkdone();
	});
}

function calc()
{
	username = document.getElementById("username").value;
	apikey = document.getElementById("key").value;
	method = document.getElementById("method").value;
	
	if(method == "fav")
	{
		auth = "";
		postype = "favoritedby:";
	}
	else if(method=="voteup")
	{
		auth = "&login="+username+"&api_key="+apikey;
		postype = "votedup:";
	}
	gender = document.getElementById("gender").value;
	fetch = 0;
	checkdone();
	getgay();
	getstraight();
	getlesbian();
}

function checkdone()
{
	if(fetch==3)
	{
		document.getElementById("resultext").innerHTML = "";
		posts = gaynum+straightnum+lesbianum;
		if(gaynum==75&&gaynum==75&&lesbianum==75)
		{
			document.getElementById("resultext").innerHTML = "Output like that (75/75/75) almost always means that the username is incorrect because then e621 shows all posts for whatever reason (limit is 75 posts per query)."  + "<br />";
		}
			if(gaynum==0&&gaynum==0&&lesbianum==0)
		{
			document.getElementById("resultext").innerHTML = "No posts found. It either means no activity or no username input." + "<br />";
		}
		document.getElementById("resultext").innerHTML = document.getElementById("resultext").innerHTML + "Male/male: "+gaynum+ "<br />" +"Male/female: "+straightnum+ "<br />" +"Female/female: "+lesbianum+ "<br />" +"Total: "+posts;
		if(gender=="male") {malecalc();}
		if(gender=="female") {femalecalc();}
		if(gender=="enby") {enbycalc();}
	}
	else
	{
		document.getElementById("resultext").innerHTML = "Fetching...";
	}
	
}

function malecalc()
{
	hetero = straightnum+lesbianum;
	hetero = hetero/posts*100;
	hetero = Math.round((hetero + Number.EPSILON) * 100) / 100
	document.getElementById("resultext").innerHTML = document.getElementById("resultext").innerHTML + "<br />" + "<br />" + "You are "+hetero+"% straight";
}

function femalecalc()
{
	hetero = straightnum+gaynum;
	hetero=hetero/posts*100;
	hetero = Math.round((hetero + Number.EPSILON) * 100) / 100
	document.getElementById("resultext").innerHTML = document.getElementById("resultext").innerHTML + "<br />" + "<br />" + "You are "+hetero+"% straight";
}

function enbycalc()
{
	andro = gaynum/posts*100;
	andro = Math.round((andro + Number.EPSILON) * 100) / 100
	gyno = lesbianum/posts*100;
	gyno = Math.round((gyno + Number.EPSILON) * 100) / 100
	ambi = straightnum/posts*100;
	ambi = Math.round((ambi + Number.EPSILON) * 100) / 100
	document.getElementById("resultext").innerHTML = document.getElementById("resultext").innerHTML + "<br />" + "<br />" + "You are "+andro+"% androsexual, "+gyno+"% gynosexual and "+ambi+"% ambiguous";
}

$('#method').on('input', function() {
    method = document.getElementById("method").value;
	if(method == "fav")
	{
		$('#keyinput').hide();
	}
	else if(method=="voteup")
	{
		$('#keyinput').show();
	}
});

function hider() 
{
	$('#keyinput').hide();	
}

function howtoapi()
{
	logged = confirm("If you are already logged in click "+'"OK".');
	if(logged==true)
	{
		alert('On the page that will open up: \n1. Click "Manage API Access"\n2. Type in your password\n3. Copy one of your keys\n4. Head back onto this page and paste the key into the "API Key" input box');
		window.open('https://e621.net/users/home');
	}
	if(logged==false)
	{
		alert('On the page that will open up: \n1. Log in into your account\n2. Head back onto this page and click the [Get] text again');
		window.open('https://e621.net/session/new');
	}
	
}