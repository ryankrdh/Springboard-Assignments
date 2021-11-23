How Web Works Exercise
Part One: Solidify Terminology
In your own terms, define the following terms:

What is HTTP?
HTTP stands for Hyper Text Transfer Protocol. It determines how the user gets and send the data.

What is a URL?
URL stands for Uniform Resource Locator. It is an address for a website.

What is DNS?
DNS stands for Domain Name System. A system that translates URL into IP addresses so computers can use the information.

What is a query string?
The query string consists of key value pairs.

What are two HTTP verbs and how are they different?
Two HTTP verbs are GET and POST.
Using GET will let the client get some type of data from a server
Using POST will let the client send some data to the server.

What is an HTTP request?
A HTTP request is when a client requests something from a server.

What is an HTTP response?
An HTTP response is when a server responds to the client sending the HTTP request.

What is an HTTP header? Give a couple examples of request and response headers you have seen.
Headers provide additional information about the request or the response.
Examples:
Request headers: Host, User-Agent, Accept, Cookie, Cache-Control
Response headers: content-type, last-modified, set-cookie, cache-control

What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?

1. The browser translates the URL into an IP address using DNS
2. The browser makes a request to the IP address translated by DNS.
3. The server sends a response to the request made by the client
4. The browser uses the DOM in the HTML to get all the necessary tools needed for the website like css, images, js, etc
5. The browser makes a separate HTTP requests for the resources and receives response from the server for each.

Part Two: Practice Tools
Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
Use dig to find what the IP address is for icanhazdadjoke.com
Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser
