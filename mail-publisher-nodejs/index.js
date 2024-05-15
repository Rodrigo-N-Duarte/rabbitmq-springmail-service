var amqp = require('amqplib');

const sendMessage = async () => {
    const connection = await amqp.connect('*** cloudamqpaddress ***')
    const channel = await connection.createChannel()
    await channel.sendToQueue("ms.email", new Buffer.from(JSON.stringify({
        ownerRef: "***",
        emailFrom: "cirv.dad@gmail.com",
        emailTo: "***",
        subject: "***",
        text: "***"
    })))

    await channel.close();
    await connection.close();
}

sendMessage()
