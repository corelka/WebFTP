# WebFTP
Simple application for browsing files and directories of server

Globally there are 2 different solutions:

1) First one is simple static page with AngularJS application which will call WebAPI of server.
Entering address in browser will generate get-request and server will send a simple static page.
Then Angular application needs to send a request for collecting initial data about current folder of application.
As far as angular application does not know about initial folder, API needs extra method with empty parameters.
So we got redundant get-request. But the page totally independent from server and may be situated on arbitrary environment.

2) Second one is for processing of page by server. In this case page will be initially processed by server.
In this case initial controller for processing first get-request should be implemented. In this controller all the data
can be gethered and redirected to the page. And after page will be processed server will send it to Client.
Such approach allows to exclude unnecessary get-request. 
But the page will be binded to server while it should be processed by server.

In this task I decided to use second approach. As far as page is always on the same server, binding is not a problem.
And extra request is avoided.

Angular application divided on different files. In first one main module is declared. 
In second one controller and all its functionality is implemented.
For gethering all the angular code in one file gulp task is used.
