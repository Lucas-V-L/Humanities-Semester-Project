function toggleCitationDrawer(sourceID) {
	drawer = document.getElementById("drawer");
	arrow = document.getElementById("arrow");
	cits = document.querySelectorAll(".citation");
	if (drawer.style.top === "40px") {
		drawer.style.top = "calc(100% - 10px)";
		arrow.style.transform = "rotate(360deg)";
		cits.forEach(cit => {
			cit.style.backgroundColor = "";
		})
	} else { 
		drawer.style.top = "40px";
		arrow.style.transform = "rotate(180deg)";
	}
	if (sourceID) {document.getElementById(sourceID).style.backgroundColor = "yellow"};
}      


const frame = document.getElementById("frame");
const container = document.getElementById("computer_screen");
const initialHeight = frame.clientHeight;

function scaleScreen() {
	var height = container.clientHeight;
	var scale = height / initialHeight;
	frame.style.transform = "scale("+scale+", "+scale+")";
}

scaleScreen()

const phoneFrame = document.getElementById("phoneframe");
const phoneContainer = document.getElementById("phone_screen");
try {
	var phoneInitialHeight = phoneFrame.clientHeight;
}
catch (error) {console.log("No Phone!")}

function scalePhoneScreen() {
	try {
		var height = phoneContainer.clientHeight;
		var scale = height / phoneInitialHeight;
		phoneFrame.style.transform = "scale("+scale+", "+scale+")";
	}
	catch (error) {console.log("No Phone!")}
}

scalePhoneScreen();
window.onresize = (event) => {
	scalePhoneScreen();
	scaleScreen();
};
