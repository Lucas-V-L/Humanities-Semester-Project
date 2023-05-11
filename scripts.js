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
const initialWidth = frame.clientWidth;
currentHeight = initialHeight;

function zoomScreen(factor) {
	factor = 1/factor;
	currentHeight = initialHeight * factor;
	frame.style.height = currentHeight + "px";
	frame.style.width = initialWidth * factor + "px";
	if (factor === 1) {
		frame.style.height = initialHeight;
		frame.style.width = initialWidth;
	}
}

function scaleScreen() {
	var height = container.clientHeight;
	var scale = height / currentHeight;
	frame.style.transform = "scale("+scale+", "+scale+")";
}

scaleScreen()

const phoneFrame = document.getElementById("phoneframe");
const phoneContainer = document.getElementById("phone_screen");
try {
	phoneInitialHeight = phoneFrame.clientHeight;
	phoneInitialWidth = phoneFrame.clientWidth;
	phoneCurrentWidth = phoneInitialWidth;
	phoneCurrentHeight = phoneInitialHeight;
	currentPhoneHeight = phoneInitialHeight;
}
catch (error) {console.log("No Phone!")}

function scalePhoneScreen() {
	try {
		let height = phoneContainer.clientHeight;
		let scale = height / phoneCurrentHeight;
		phoneFrame.style.transform = "scale("+scale+", "+scale+")";
	}
	catch (error) {console.log("No Phone!")}
}

function zoomPhoneScreen(factor) {
        factor = 1/factor;
        phoneCurrentHeight = phoneInitialHeight * factor;
        phoneFrame.style.height = phoneCurrentHeight + "px";
        phoneFrame.style.width = phoneInitialWidth * factor + "px";
        if (factor === 1) {
                phoneFrame.style.height = phoneInitialHeight;
                phoneFrame.style.width = phoneInitialWidth;
        }
}

window.onresize = (event) => {
	scalePhoneScreen();
	scaleScreen();
};

currentZoom = 1;

function zoomin() {
	currentZoom += 0.2;
	if (currentZoom >= 3) { currentZoom = 3; }
	zoomScreen(currentZoom);
	scaleScreen();
}
function zoomout() {
	currentZoom -= 0.2;
        if (currentZoom <= 0.4) { currentZoom = 0.4; }
        zoomScreen(currentZoom);
	scaleScreen();
}

currentPhoneZoom = 1;

function zoomin_phone() {
        currentPhoneZoom += 0.2;
        if (currentPhoneZoom >= 3) { currentPhoneZoom = 3; }
        zoomPhoneScreen(currentPhoneZoom);
        scalePhoneScreen();
}
function zoomout_phone() {
        currentPhoneZoom -= 0.2;
        if (currentPhoneZoom <= 0.4) { currentPhoneZoom = 0.4; }
        zoomPhoneScreen(currentPhoneZoom);
        scalePhoneScreen();
}

scalePhoneScreen();

