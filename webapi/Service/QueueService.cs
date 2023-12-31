﻿using Newtonsoft.Json;
using RabbitMQ.Client;
using System.Text;
using Firebase.Database;
using Firebase.Database.Query;
using RabbitMQ.Client.Events;
using MassTransit;
using webapi.Model;

namespace webapi.Service
{
    public class QueueService
    {
        private readonly FirebaseClient firebaseClient;
        private readonly IConfiguration Configuration;
        private readonly string UserName;
        private readonly string Password;
        private readonly string HostName;
        private readonly string QueueName;

        public IPublishEndpoint PublishEndpoint { get; }

        public QueueService(IConfiguration configuration, IPublishEndpoint publishEndpoint)
        {
            Configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            firebaseClient = new FirebaseClient(Configuration["FirebaseDatabase:UrlScanner"]);
            var envQueueHost = Environment.GetEnvironmentVariable("QUEUE_HOST");
            HostName = envQueueHost ?? Configuration["RabbitMq:Host"] ?? "103.15.222.118";
            QueueName = Configuration["RabbitMq:QueueName"]?? "urlscanner";
            UserName = Configuration["RabbitMq:User"]?? "user";
            Password = Configuration["RabbitMq:Pass"]?? "bitnami";
            PublishEndpoint = publishEndpoint;
        }

        public async Task<T> SendMessage<T>(T message, string queueName) where T : IKey
        {
            var result = await firebaseClient.Child(queueName).PostAsync(message);
            message.Key =result.Key;
            await PublishEndpoint.Publish(message);
            return message;
        }

        public async Task<T> SendMessageLegacy<T>(T message, string queueName) where T : IKey
        {
            Console.WriteLine($" [x] Sent {JsonConvert.SerializeObject(message)}, host: {HostName}");
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
            var result = await firebaseClient.Child(queueName).PostAsync(message);
            message.Key = result.Key;


            var body = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(message));
            channel.BasicPublish(exchange: string.Empty,
                                 routingKey: QueueName,
                                 basicProperties: null,
                                 body: body);
            Console.WriteLine($" [x] Sent {JsonConvert.SerializeObject(message)}, host: {HostName}");
            return message;
        }

        public void InitConSummer<T>(string queueName, Func<T, T> handler) where T : IKey
        {
            var connectionFactory = new ConnectionFactory()
            {
                UserName = UserName,
                Password = Password,
                HostName = HostName
            };

            using var connection = connectionFactory.CreateConnection();
            using var channel = connection.CreateModel();
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

                Console.WriteLine($"Finished processing message: {message}");
                // Acknowledge the message to remove it from the queue
                channel.BasicAck(deliveryTag: ea.DeliveryTag, multiple: false);
            };

            // Start consuming messages from the queue
            channel.BasicConsume(queue: queueName, autoAck: false, consumer: consumer);
        }
    }
}
