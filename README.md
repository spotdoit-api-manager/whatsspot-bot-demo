# WhatsSpot Bot Demo

## Installation

This requires [Node.js](https://nodejs.org/)  to run.
Clone the repo
```sh
git clone https://github.com/spotdoit-api-manager/whatsspot-webhook-demo.git
```

Get device api key from WhatsSpot dashboard for sending whatsapp messages

Install the dependencies.

```sh
npm install
```

Start the server
```sh
npm start
```

Install ngrok: https://ngrok.com/download

Expose the local server to internet:
```sh
ngrok http 3000
```

You will get a forwarding url copy that and add this url  on WhatsSpot webhook to start receiving incoming messages.
