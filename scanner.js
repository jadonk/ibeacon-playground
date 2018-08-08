var Bleacon = require('bleacon');

var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535

var ibeacons = {};

Bleacon.startScanning();

Bleacon.on('discover', function(bleacon) {
    ibeacons[bleacon.uuid] = bleacon;
    updateDisplay();
    //console.log(bleacon);
});


function updateDisplay() {
    process.stdout.write('\033c');
    for(var i in ibeacons) {
        process.stdout.write(ibeacons[i].uuid + ": " + ibeacons[i].rssi + "," + 
            ibeacons[i].major +  "," + ibeacons[i].minor + "\n");
    }
}
