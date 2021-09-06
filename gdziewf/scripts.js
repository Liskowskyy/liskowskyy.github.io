function checkwf() {
	var d = new Date();
	if (d.getDay() == 0) {
		if (d.getDate()%2 == 0) {
			document.getElementById("answer").innerHTML = "Dzisiaj WF jest na małej sali lub boisku, gdyż pierwszy dzień tygodnia jest parzysty – " +d.getDate();
		}
		else {
			document.getElementById("answer").innerHTML = "Dzisiaj WF jest na dużej sali, gdyż pierwszy dzień tygodnia jest nieparzysty – " +d.getDate();
		}
	}
	else {
		if ((d.getDate()-d.getDay()+1)%2 == 0) {
			document.getElementById("answer").innerHTML = "Dzisiaj WF jest na małej sali lub boisku, gdyż pierwszy dzień tygodnia jest parzysty – " +d.getDate();
		}
		else {
			document.getElementById("answer").innerHTML = "Dzisiaj WF jest na dużej sali, gdyż pierwszy dzień tygodnia jest nieparzysty – " +d.getDate();
		}
	}
		
	}
