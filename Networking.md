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
