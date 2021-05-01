# Client Server Architecture

![](http://weblogs.foxite.com/photos/1000.257.6938.cs003.jpg)

## Client ## 

Client is the one who request the server. We can call the client as a **Consumer** who consumes the resorces which have been sent by the server.s


## Server ## 

Servers are the one who respond the client request and provide the desired outcomes. Servers are basically **producers** which produced the data and the resources to the client.
 Servers are powerful computers or processes dedicated to managing disk drives (file servers), printers (print servers), or network traffic (network servers). 

## Working ##

### On client side ###
 
 In our training we are going to use react for the client side . The HTML file and JS file in the react are sent into the browser , the browser reterived the html layouts from it and displayed the output to the screen.

After that the Browser sent the http request to the server to fill the enteries which were made by the .js file
On client side we also received the request from the server in the json form and displayed the information according to the javascript file.

### On server side ###

 In our training we are going to use Node.js for the server side processes. We are going to use the framework of node.js like express. ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends.

And we are also going to use Mongo db as a data base.
  So the request has been sent by the client on the server side, where the node respond the request and sent the information back to the url.Now again the react converted the respond into their formatted text.

## Client-host and server-host ##

![](https://www.oreilly.com/library/view/using-sqlite/9781449394592/httpatomoreillycomsourceoreillyimages661540.png)

Client-host and server-host have subtly different meanings than client and server. A host is any computer connected to a network. Whereas the words server and client may refer either to a computer or to a computer program, server-host and user-host always refer to computers. 

The host is a versatile, multifunction computer; clients and servers are just programs that run on a host. In the client–server model, a server is more likely to be devoted to the task of serving.

## For Example ##

 When a bank customer accesses online banking services with a web browser (the client), the client initiates a request to the bank's web server. The customer's login credentials may be stored in a database, and the web server accesses the database server as a client. An application server interprets the returned data by applying the bank's business logic, and provides the output to the web server. Finally, the web server returns the result to the client web browser for display.