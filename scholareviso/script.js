formatted = "";
var synth = window.speechSynthesis;

function before() {
    $('#game').hide();
    $('#endstat').hide();
}

document.getElementById('autoloadbtn').onclick = function() {
	var result = $.getJSON('newest.agq', function(data) {
    console.log(data);
	console.log("works");
})
}

document.getElementById('loadbtn').onclick = function() {
    var files = document.getElementById('loader').files;
    console.log(files);
    if (files.length <= 0) {
        return false;
    }

    var fr = new FileReader();

    fr.onload = function(e) {
        console.log(e);
        var result = JSON.parse(e.target.result);
        formatted = result;
        console.log(formatted);
        $('#loadfile').hide();
        loaded = true;
        startgame();
    }

    fr.readAsText(files.item(0));
};

function startgame() {
    StartTime = performance.now();
    totalcorrect = 0;
    usedquestions = 0;
    $('#infoans').hide();
    $('#game').show();
    questions = formatted.settings.NumberOfQuestions;
    NotAsked = Array.from(Array(questions + 1).keys());
    NotAsked.shift();
    shuffleArray(NotAsked);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        getquestion();
    }
}

function getquestion() {
    document.getElementById("correctanswers").innerHTML = "";


    $('#infoans').hide();
    $('#answerpart').show();

    document.getElementById("TextToDisplay").innerHTML = formatted.settings.TextToDisplay;

    if (NotAsked === undefined || NotAsked.length == 0) {
        gameend();
    } else {
        question = NotAsked[0];
        document.getElementById("expression").innerHTML = formatted.questions[question].expression;
        document.getElementById("questnum").innerHTML = "Pytanie " + (usedquestions + 1) + "/" + questions;
    }


}

function answering() {
    correct = 0;
    useranswer = document.getElementById("useranswer").value;

    answers = formatted.questions[question].answers;

    for (i = 1; i < answers + 1; i++) {
        answer = formatted.questions[question][i];
        console.log(answer);
        if (answer == useranswer) {
            correct++
        }
    }

    if (correct < 1) {
        $('#answerpart').hide();
        $('#infoans').show();
        document.getElementById("isCorrect").innerHTML = "Odpowiedź niepoprawna!";
        document.getElementById("isCorrect").style['-webkit-text-stroke-color'] = "red";
        synth.cancel();
        msg = new SpeechSynthesisUtterance("Deine Antwort ist falsch");
        msg.lang = 'de';
        synth.speak(msg);
    } else {
        $('#answerpart').hide();
        $('#infoans').show();
        totalcorrect++;
        document.getElementById("isCorrect").innerHTML = "Odpowiedź poprawna!";
        document.getElementById("isCorrect").style['-webkit-text-stroke-color'] = "green";
        synth.cancel();
        msg = new SpeechSynthesisUtterance(useranswer);
        msg.lang = 'de';
        synth.speak(msg);
    }
    for (i = 1; i < answers + 1; i++) {
        answer = formatted.questions[question][i];
        var h = document.createElement("H3");
        var t = document.createTextNode(answer);
        h.appendChild(t);
        correctanswers.appendChild(h);
    }
    document.getElementById("useranswer").value = "";
    NotAsked.shift();
    usedquestions++;
}

function gameend() {
    EndTime = performance.now();
    totaltime = ((EndTime - StartTime) / 1000).toFixed(2);
    document.getElementById("useranswer").value = "";
    $('#game').hide();
    document.getElementById("statcorrect").innerHTML = "Liczba poprawnych pytań: " + totalcorrect + "/" + questions;
    document.getElementById("statcorrectperc").innerHTML = "Poprawność: " + ((totalcorrect / questions * 100).toFixed(2)) + "%";
    document.getElementById("TimeElapsed").innerHTML = "Czas: " + totaltime + " sekund";

    $('#endstat').show();
}

function confirmstat() {
    $('#endstat').hide();
    $('#loadfile').show();
}

document.addEventListener("keydown", event => {
    document.getElementById('useranswer').focus();
    if (event.key === 'Shift') {
        console.log("Uppercase");
        document.getElementById("ae").value = "Ä";
        document.getElementById("oe").value = "Ö";
        document.getElementById("ue").value = "Ü";
    }
});

document.addEventListener("keyup", event => {
    document.getElementById('useranswer').focus();
    if (event.key === 'Shift') {
        console.log("Lowercase");
        document.getElementById("ae").value = "ä";
        document.getElementById("oe").value = "ö";
        document.getElementById("ue").value = "ü";
    }
});

function ae() {
    document.getElementById("useranswer").value = document.getElementById("useranswer").value + document.getElementById("ae").value;
}

function oe() {
    document.getElementById("useranswer").value = document.getElementById("useranswer").value + document.getElementById("oe").value;
}

function ue() {
    document.getElementById("useranswer").value = document.getElementById("useranswer").value + document.getElementById("ue").value;
}

function ss() {
    document.getElementById("useranswer").value = document.getElementById("useranswer").value + document.getElementById("ss").value;
}

$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        if ($(answerpart).is(":visible") == true) {
            $('#confirmanswer').click();
        } else if ($(infoans).is(":visible") == true) {
            $('#continue').click();
        }

    }
});