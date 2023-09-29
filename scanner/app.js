const amqp = require('amqplib');
const scanner = require('express');

async function connectAndListen() {
  try {
    // Connect to RabbitMQ server
    const connection = await amqp.connect('amqp://user:bitnami@103.15.222.118'); // Replace with your RabbitMQ server URL

    // Create a channel
    const channel = await connection.createChannel();

    // Declare a queue to listen to
    const queueName = 'urlscanner'; // Replace with your queue name
    await channel.assertQueue(queueName);

    console.log(`Listening for messages on ${queueName}`);

    // Consume messages from the queue
    channel.consume(queueName, (msg) => {
      if (msg !== null) {
        console.log(`Received message: ${msg.content.toString()}`);
        // You can process the message here
        channel.ack(msg); // Acknowledge the message to remove it from the queue
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

connectAndListen();

