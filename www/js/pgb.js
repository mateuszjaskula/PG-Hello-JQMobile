function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	businessInfo();
}

function businessInfo() {
  info = 'Mateusz Jaskula <br>'
       + 'Nokia R&D Engineer'
}

function deviceInfo() {

	info =  'Device Model   : '    + device.model + '<br>' + 
			'Device Name    : '     + device.name + '<br>' + 
			'Device Cordova : '  + device.cordova + '<br>' + 
			'Device Platform: ' + device.platform + '<br>' + 
			'Device UUID    : '     + device.uuid + '<br>' + 
			'Device Version : '  + device.version + '<br>';

	document.getElementById("deviceDetails").innerHTML = info;	
}