
 
document.getElementById('clickit').addEventListener('click', function(){
    document.getElementById('clickit').style.display="none";
    document.getElementById('stopit').style.display="block";
    var d1 = new Date();
    var hour = d1.getHours();
    var min = d1.getMinutes();
    var starting_time = 60*hour+min;
    chrome.runtime.sendMessage({time: starting_time});
},false);

document.getElementById('stopit').addEventListener('click', function(){
    document.getElementById('clickit').style.display="block";
    document.getElementById('stopit').style.display="none";
},false);