//
// Shared workers that handle the connections and Welcome each new script
// 
var connections = 0; // count active connections  
self.addEventListener("connect", function (e) {  
    var port = e.ports[0];  
    connections++;  
    port.addEventListener("message", function (e) {  
        port.postMessage("Welcome to " + e.data +
 		" (On port #"+ JSON.stringify(e) + " we have " + connections + " connections)");  
    }, false);  
    port.start();  
}, false);