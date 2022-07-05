function time_cal(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var Now_time = 60*h+m;
    return Now_time;
}


function Do_it(time){
    function every_time(){
        var time_now = time_cal();
        var diff = time_now-time;
        if(diff==1){
            var audio = new Audio('time-alarm.mp3');
            audio.play();
           chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            var CurrTab = tabs[0];
            chrome.tabs.executeScript({
              file: "insert.js"
  });
        });
        }
        console.log(diff);
        if(diff==1){
            clearInterval(myvar);
        }
    }
    var myvar = setInterval(every_time,60000);

}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var time = request.time;
        Do_it(time);
    }
);
