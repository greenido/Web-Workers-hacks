/
// In the Main thread
//
var worker = new Worker('PiWorker.js')
worker.onmessage = function (e) {
  var result = JSON.parse(e.data);
  if(result.type == 'debug') {
    console.log(result.msg); // show us what is going on...
  } else if(result.type == 'response') {
    // use result.answer and do what you like with it.
    console.log("Got:"+result.answer);
  }
}

//
// In the WebWorker
//
function debug(msg) {                                                           
  postMessage(JSON.stringify({type:'debug',msg:msg}));                          
}

onmessage = function (e) {
  var inputData = e.data;
  // work on input data
  debug('Working...');
  // work some more
  // ...
  postMessage(JSON.stringify({type:'response', answer: '3.141'}));
};