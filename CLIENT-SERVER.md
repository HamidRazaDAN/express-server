# <p align="center">SERVER / CLIENT ARCHITECTURE</p>

## INTRODUCTION
Client-Server Architecture is a shared architecture system where loads of client-server are divided. The client-server architecture is a centralized resource system where server holds all the resources. The server receives numerous performances at its edge for sharing resources to its clients when requested. Client and server may be on the same or in a network. The server is profoundly stable and scalable to return answers to clients. This Architecture is Service Oriented which means client service will not be interrupted. Client-Server Architecture subdues network traffic by responding to the inquiries of the clients rather than a complete file transfer. It restores the file server with the database server.

Client computers implement a bond to allow a computer user to request services of the server and to represent the results the server returns. Servers wait for requests to appear from clients and then return them. A server usually gives a standardized simple interface to clients to avoid a hardware/software confusion. Clients are located at workplaces or on personal machines, at the same time servers will be located somewhere powerful in the network. This architecture is useful mostly when clients and the server each have separate tasks that they routinely perform. Many clients can obtain the server’s information concurrently, and also a client computer can execute other tasks, for instance, sending e-mails.

## TYPES
* **1-TIER ARCHITECTURE**
In this category of client-server setting, the user interface, marketing logic and data logic are present in the same system. This kind of service is reasonable but it is hard to manage due to data variance that allots replication of work. One-tier architecture consists of layers.
For example, Presentation, Business, Data Access layers within a single software package. The data is usually stored in the local system or a shared drive. Applications which handle all the three tiers such as MP3 player, MS Office come under one-tier application.

* **2-TIER ARCHITECTURE**
In this type of client-server environment, the user interface is stored at client machine and the database is stored on the server. Database logic and business logic are filed at either client or server but it needs to be maintained. If Business Logic and Data Logic are collected at a client side, it is named as fat client thin server architecture. If Business Logic and Data Logic are handled on the server, it is called thin client fat server architecture. This is considered as affordable.
In two-tier architecture, client and server have to come in direct incorporation. If a client is giving an input to the server there shouldn’t be any intermediate. This is done for rapid results and to avoid confusion between different clients. For instance, online ticket reservations software use this two-tier architecture.

* **3-TIER ARCHITECTURE**
In this variety of client-server context, an extra middleware is used that means client request goes to the server through that middle layer and the response of server is received by middleware first and then to the client. This architecture protects 2-tier architecture and gives the best performance. This system comes expensive but it is simple to use. The middleware stores all the business logic and data passage logic. The idea of middleware is to database staging, queuing, application execution, scheduling etc. A Middleware improves flexibility and gives the best performance.
The Three-tier architecture is split into 3 parts, namely, The presentation layer (Client Tier), Application layer (Business Tier) and Database layer (Data Tier). The Client system manages Presentation layer; the Application server takes care of the Application layer, and the Server system supervises Database layer.
In the present scenario of online business, there has been growing demands for the quick responses and quality services. Therefore, the complex client architecture is crucial for the business activities. Companies usually explore possibilities to keep service and quality meet to maintain its marketplace with the help of client-server architecture. The architecture increases productivity through the practice of cost-efficient user interfaces, improved data storage, expanded connectivity and secure services.

## REQUEST HANDLING PROCESS

* ##### You enter a URL into the browser

* ##### The browser looks up the IP address for the domain name

  * **Browser cache –** The browser caches DNS records for some time. Interestingly, the OS does not tell the browser the time-to-live for each DNS record, and so the browser caches them for a fixed duration (varies between browsers, 2 – 30 minutes).

  * **OS cache –** If the browser cache does not contain the desired record, the browser makes a system call (gethostbyname in Windows). The OS has its own cache.

  * **Router cache –** The request continues on to your router, which typically has its own DNS cache.

  * **ISP DNS cache –** The next place checked is the cache ISP’s DNS server. With a cache, naturally.

  * **Recursive search –** Your ISP’s DNS server begins a recursive search, from the root nameserver, through the .com top-level nameserver, to server's nameserver. Normally, the DNS server will have names of the .com nameservers in cache, and so a hit to the root nameserver will not be necessary.

* ##### The browser sends a HTTP request to the web server
  The GET request names the URL to fetch: “http://url.com/”. The browser identifies itself (User-Agent header), and states what types of responses it will accept (Accept and Accept-Encoding headers). The Connection header asks the server to keep the TCP connection open for further requests.
  The request also contains the cookies that the browser has for this domain. As you probably already know, cookies are key-value pairs that track the state of a web site in between different page requests. And so the cookies store the name of the logged-in user, a secret number that was assigned to the user by the server, some of user’s settings, etc. The cookies will be stored in a text file on the client, and sent to the server with every request.

* ##### The server responds with a permanent redirect
  The server responded with a 301 Moved Permanently response to tell the browser to go to “http://www.url.com/” instead of “http://url.com/”.

* ##### The browser follows the redirect
  The browser now knows that “http://www.url.com/” is the correct URL to go to, and so it sends out another GET request:

  > GET http://www.url.com/ HTTP/1.1
  Accept: application/x-ms-application, image/jpeg, application/xaml+xml, [...]
  Accept-Language: en-US
  User-Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; [...]
  Accept-Encoding: gzip, deflate
  Connection: Keep-Alive
  Cookie: lsd=XW[...]; c_user=21[...]; x-referer=[...]
  Host: www.url.com

  The meaning of the headers is the same as for the first request.

* ##### The server ‘handles’ the request
  The server will receive the GET request, process it, and send back a response.

  This may seem like a straightforward task, but in fact there is a lot of interesting stuff that happens here – even on a simple site like my blog, let alone on a massively scalable site like facebook.
  * ###### Web server software
    The web server software (e.g., IIS or Apache) receives the HTTP request and decides which request handler should be executed to handle this request. A request handler is a program (in ASP.NET, PHP, Ruby, …) that reads the request and generates the HTML for the response.
    In the simplest case, the request handlers can be stored in a file hierarchy whose structure mirrors the URL structure, and so for example http://example.com/folder1/page1.aspx URL will map to file /httpdocs/folder1/page1.aspx. The web server software can also be configured so that URLs are manually mapped to request handlers, and so the public URL of page1.aspx could be http://example.com/folder1/page1.

  * ###### Request handler
    The request handler reads the request, its parameters, and cookies. It will read and possibly update some data stored on the server. Then, the request handler will generate a HTML response.

* ##### The server sends back a HTML response
  Here is the response that the server generated and sent back:

  > HTTP/1.1 200 OK
  Cache-Control: private, no-store, no-cache, must-revalidate, post-check=0,
    pre-check=0
  Expires: Sat, 01 Jan 2000 00:00:00 GMT
  P3P: CP="DSP LAW"
  Pragma: no-cache
  Content-Encoding: gzip
  Content-Type: text/html; charset=utf-8
  X-Cnection: close
  Transfer-Encoding: chunked
  Date: Fri, 12 Feb 2010 09:05:55 GMT

  The entire response is 36 kB, the bulk of them in the byte blob at the end that I trimmed.

  The Content-Encoding header tells the browser that the response body is compressed using the gzip algorithm.

  In addition to compression, headers specify whether and how to cache the page, any cookies to set (none in this response), privacy information, etc.

* ##### The browser begins rendering the HTML
  Even before the browser has received the entire HTML document, it begins rendering the website:

* ##### The browser sends requests for objects embedded in HTML

  As the browser renders the HTML, it will notice tags that require fetching of other URLs. The browser will send a GET request to retrieve each of these files.

  Each of these URLs will go through process a similar to what the HTML page went through. So, the browser will look up the domain name in DNS, send a request to the URL, follow redirects, etc.

  However, static files – unlike dynamic pages – allow the browser to cache them. Some of the files may be served up from cache, without contacting the server at all. The browser knows how long to cache a particular file because the response that returned the file contained an Expires header. Additionally, each response may also contain an ETag header that works like a version number – if the browser sees an ETag for a version of the file it already has, it can stop the transfer immediately.

* ##### The browser sends further asynchronous (AJAX) requests
  In the spirit of Web 2.0, the client continues to communicate with the server even after the page is rendered.

  For example, server chat will continue to update the list of your logged in friends as they come and go. To update the list of your logged-in friends, the JavaScript executing in your browser has to send an asynchronous request to the server. The asynchronous request is a programmatically constructed GET or POST request that goes to a special URL. In the server example, the client sends a POST request to http://www.url.com/ajax/chat/buddy_list.php to fetch the list of your friends who are online.

  This pattern is sometimes referred to as “AJAX”, which stands for “Asynchronous JavaScript And XML”, even though there is no particular reason why the server has to format the response as XML. For example, server returns snippets of JavaScript code in response to asynchronous requests.
