var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error0, connection) {
    connection.createChannel(function (error1, channel) {
        channel.sendToQueue('hello', Buffer.from(JSON.stringify({ message: 'hello' })));
    });
});
