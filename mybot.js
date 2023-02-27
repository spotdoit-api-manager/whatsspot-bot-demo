const axios = require('axios');

// Replace this with your device key from the whatsSpot dashboard
const MY_DEVICE_KEY = 'replace this with your device key';

const sendMessage = async (messageText,to) => {
    const messageFormatted = {
        message:{
            text:messageText
        },
        numbers:to //must be with country code like 91 1 etc
    }
    const url = `https://api.whatsspot.in/api/message/fast/text`;
    const headers = {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${MY_DEVICE_KEY}`,
    }
   const res = await axios.post(url, messageFormatted, { headers });
   if(res.status === 200){
       console.log("Message Sent Successfully");
   }else{
       console.log("Error Sending Message",res.data);
   }

};

const data = [
    {
        name: "John",
        email:"johntova@gmail.com"
    },
    {
        name: "Jane",
        email:"janetova788@gmail.com"
    },
    {
        name: "Jill",

        email:"jillgujjar43@gmail.com"
    }
]


exports.onNewMessage= function (remoteMessage) {
   const { message, from,name,timestamp,deviceId,urls } = remoteMessage;
    console.log("Message Received:",message);
    console.log("From:",from);
    // handle the messages
    let msg = message.toLowerCase();
    switch(msg){
        case "hi":
            sendMessage("Hello",from);
            break;
        case "hello":
            sendMessage("Hi",from);    
        case "bye":
            sendMessage("Bye",from);
            break;
        case "how are you":
            sendMessage("I am fine",from);
            break;
        case "what is your name":
            sendMessage("My name is WhatsSpot Bot",from);
            break;
        case "joke":
            sendMessage("I am not programmed to tell jokes",from);
            break;
        case "sing":
            sendMessage("I am not programmed to sing",from);
        case "users":
            // send the list of users with their email as list
            let message = "Here is the list of users:\n";
            data.forEach((user,index) => {
                message += `${index+1}. ${user.name} - ${user.email}\n`;
            })
            sendMessage(message,from);


            break;
        case "help":
            sendMessage("Hi, I am WhatsSpot Bot. I can help you with the following:\n1. Hi\n2. Bye\n3. How are you\n4. What is your name\n5. Joke\n6. Sing\n7. Users",from);
            break;
        default:
            sendMessage("I didn't understood you can send *help* to know more",from);


    }
}