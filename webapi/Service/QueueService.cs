using AngleSharp.Dom;
using core.Service;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium;
using System.Text.RegularExpressions;
using System.Net.Http;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using RabbitMQ.Client;
using System.Text;
using System;
using Firebase.Database;
using Firebase.Database.Query;
using RabbitMQ.Client.Events;

namespace webapi.Service
{
    public class QueueService
    {
        string UserName = "user";
        string Password = "bitnami";
        string HostName = "103.15.222.118";
        string QueueName = "urlscanner";
        private const string FirebaseDatabaseUrl = "https://rs-agent-map-urls.asia-southeast1.firebasedatabase.app/";
        private readonly FirebaseClient firebaseClient;

        public QueueService()
        {
            firebaseClient = new FirebaseClient(FirebaseDatabaseUrl);
        }

        public async Task<T> SendMessage<T>(T message, string queueName) where T : IKey
        {
            var result = await firebaseClient.Child(queueName).PostAsync(message);
            message.Key = result.Key;
            var connectionFactory = new ConnectionFactory()
            {
                UserName = UserName,
                Password = Password,
                HostName = HostName
            };
            using var connection = connectionFactory.CreateConnection();
            using var channel = connection.CreateModel();
            channel.QueueDeclare(queue: QueueName,
                     durable: true,
                     exclusive: false,
                     autoDelete: false,
                     arguments: null);
            var body = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(message));

            channel.BasicPublish(exchange: string.Empty,
                                 routingKey: QueueName,
                                 basicProperties: null,
                                 body: body);
            Console.WriteLine($" [x] Sent {body}");
            return message;
        }

        public void InitConSummer<T>(IModel channel, string queueName, Func<T, T> handler) where T : IKey
        {
            // Declare the queue
            channel.QueueDeclare(queue: queueName, durable: true, exclusive: false, autoDelete: false, arguments: null);

            // Create a consumer
            var consumer = new EventingBasicConsumer(channel);

            // Event handler for received messages
            consumer.Received += (model, ea) =>
            {
                var body = ea.Body.ToArray();
                var message = Encoding.UTF8.GetString(body);

                Console.WriteLine($"Received message: {message}");


                // Add your message processing logic here
                var result = JsonConvert.DeserializeObject<T>(message);
                if (result == null)
                {
                    return;
                }
                result = handler(result);
                firebaseClient.Child($"{queueName}/{result.Key}").PutAsync(result);

                Console.WriteLine($"Finished processing message: {message}");
                // Acknowledge the message to remove it from the queue
                channel.BasicAck(deliveryTag: ea.DeliveryTag, multiple: false);
            };

            // Start consuming messages from the queue
            channel.BasicConsume(queue: queueName, autoAck: false, consumer: consumer);
        }
    }
}
