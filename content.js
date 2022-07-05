chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request === "Yes"){
            alert("Look far at sky");
        }
    }
);