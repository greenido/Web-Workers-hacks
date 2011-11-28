<script>
     function status(msg) {
       $("#status").append(msg);
     }
     
     // Creating the BlobBuilder and adding our web worker code to it.
     var bb = new (window.BlobBuilder || window.WebKitBlobBuilder)();
	 bb.append(document.querySelector('#worker1').textContent);

     // Creates a simple URL string which can be used to reference data stored 
	 // in a DOM File / Blob object.
     // Psss... In Chrome, there's a nice page to view all of the created 
	 // blob URLs: chrome://blob-internals/
     var worker = new Worker(window.webkitURL.createObjectURL(bb.getBlob()));
     worker.onmessage = function(e) {
       // Let's pass the information we got from the worker and print it on the page
       status(e.data);
     }
     worker.postMessage(); // Start the worker.
</script>

