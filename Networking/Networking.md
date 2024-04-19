### Networking

---

1. How the Web works

Client -> Router -> ISP -> DNS Server (DNS server responds with the IP address for the URL you are asking for)

DNS Server -> ISP -> Router -> Client (Client receives the IP address and sends it to the server in order to receive the files)

Client -> Server (Client sending the IP adress and asks for the files)

Server -> Client (Client receives the files it's asking for and renders them into the browser)

2. Communication Protocols

Protocol | How does it work? | Use Cases

HTTP | TCP Connection (HTTP Req <-> HTTP Res) | Web browsing

HTTP/3 | UDP Connection | IoT & Virtual Reality

HTTPS | TCP Connection ( public key <---, ---> session key, <---> encrypted data) | Web browsing

WebSocket | HTTP Upgrade <---> | Live chat && Real time data transmission

TCP | ---> SYN, <--- SYN + ACK, ---> ACK | Web browsing & email protocols

UDP | <--- Request, ---> Response | Video Conferencing

SMTP | sender ----> SMTP Server ---> receiver | Sending/Receiving Emails

FTP | <---> Control Channel, <---> Data Channel | Upload / Download Files

3. REST APIs

---

    3.1. Benefits of REST

- Ease of use
- Stateless
- Scalability
- Flexibility (JSON or XML format)
- Uniform Interface
- Caching
- Separation of concerns
- Interoperability
- Ease of Testing
- Security

  3.2. Methods

POST -> To create some data

GET -> To get data

PUT / PATCH -> To update data

DELETE -> To delete data

PUT vs PATCH (PUT modifies a record's information and creates a new record if one is not available and PATCH updates a resource without sending the entire body in the request)

    3.3. Headers -> Request Headers

|     Header      |                      Usecase                      |                  Example                   |
| :-------------: | :-----------------------------------------------: | :----------------------------------------: |
|      Host       |                    Target Host                    |        host: www.1.cdn.example.com         |
|     Origin      |                    Origin Host                    |           host: www.example.com            |
|     Referer     | Indicate the previous webpage making this request |     https://example.com/previous-page      |
|   User Agent    |               Response content type               | User agent string (info about OS, browser) |
|     Accept      |                    Origin Host                    |              application/json              |
| Accept-language |        Preferred response content language        |                   en-US                    |
| Accept-encoding |                Encoding algorithm                 |             gzip, deflate, br              |
|   Connection    |             Keep TCP Connection Open              |             keep-alive, close              |
|  Authorization  |                 Send credentials                  |          Authorization: Bearer -           |
|     Cookie      |            Server Token can be resend             |                 key=value                  |

    3.4. Headers -> Response Headers

|      Header      |                         Usecase                         |            Example            |
| :--------------: | :-----------------------------------------------------: | :---------------------------: |
|       Date       |               When the response was send                | Thu, 30 Nov 2023 03:36:04 GMT |
|      Server      |                  Provides server info                   | Server: Apache/2.4.41 (Unix)  |
|   Content-Type   |                Type of response content                 |  text/html, application/json  |
|  Content-Length  |              Original body response length              |              256              |
|    Set-cookie    | Informs about cookie need to store for future responses |    Set-cookie: user_id=123    |
| Content-encoding |                Response content encoding                |              br               |

    3.5. Status Code

| Status Range |          Usecase           |          Status Code          | Use Case                      |
| :----------: | :------------------------: | :---------------------------: | ----------------------------- |
|     Date     | When the response was send | Thu, 30 Nov 2023 03:36:04 GMT | Thu, 30 Nov 2023 03:36:04 GMT |
