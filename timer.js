var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;
var percentWaited = 0;

function writeWaitingPercentage(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting....... ${p}%`);
}

var interval = setInterval(function() {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime)*100);
    writeWaitingPercentage(percentWaited);
}, waitInterval);

setTimeout(function(){
    clearTimeout(interval);
    writeWaitingPercentage(100);
    process.stdout.write("\n\n\n\n done.....\n\n\n");
}, waitTime);

process.stdout.write("\n\n\n");
writeWaitingPercentage(percentWaited);